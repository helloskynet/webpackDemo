<template>
  <!--  -->
  <div class="container">
    {{temp}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      temp: 'hello'
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  height: 100px;
  border: 1px solid blue;
  background: url('./background.jpg');
}
</style>
