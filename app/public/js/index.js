const Offer = {
    data() {
      return {
        foo: 0,
        msg: "D&S is my favorite",
        list: ["red", "green", "blue"]
      }
    }
  }
  
  Vue.createApp(Offer).mount('#offerApp')