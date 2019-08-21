const MAX_LINE = 31;

function getLength(node) {
  const { start, end } = node.loc;
  return end.line - start.line + 1;
}

module.exports = {
  meta: {
    docs: {
      description: `函数不能超过${MAX_LINE}行`,
      category: "Possible Errors",
      recommended: true
    }
  },
  create(context) {
    function checkLength(node) {
      const funLine = getLength(node);
      if (funLine > MAX_LINE) {
        context.report({
          node,
          message: `函数不能超过${MAX_LINE}行,当前函数${funLine}行,`
        });
      }
    }
    return {
      FunctionDeclaration: checkLength,
      FunctionExpression: checkLength,
      ArrowFunctionExpression: checkLength
    };
  }
};
