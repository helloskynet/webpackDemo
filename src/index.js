import Vue from "vue";
import App from "./App";

new Vue({
  el: "#app",
  render: h => h(App)
});

function test() {
  new Promise(resolve => {
    setTimeout(() => {
      console.log("hello world");
      resolve();
    }, 1000);
  });

  const arrayLike = {
    0: "tom",
    1: "65",
    2: "男",
    3: ["jane", "john", "Mary"],
    length: 4
  };
  var a = 12;
  console.log(a);
  const arr = Array.from(arrayLike);
  var reg = /a {4}b/;

  console.log(arr[0]);
  console.log(a);
  console.log(a);
  console.log(a);
  console.log(a);
  console.log(a);

  console.log(arr.includes("tom"));
}

test();
