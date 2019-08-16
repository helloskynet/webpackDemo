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

  let arrayLike = {
    0: "tom",
    1: "65",
    2: "男",
    3: ["jane", "john", "Mary"],
    length: 4
  };
  let arr = Array.from(arrayLike);

  console.log(arr[0]);

  console.log(arr.includes("tom"));
}

test();
