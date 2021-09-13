
const SomeApp = {
    data() {
      return {
        foo: 0,
        bar: "msg",
        list: [5,6,7,8]
      }
    }
  }
  
  Vue.createApp(SomeApp).mount('#someApp');
