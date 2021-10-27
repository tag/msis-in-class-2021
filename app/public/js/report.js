
const SomeApp = {
  data() {
    return {
      offers: []
    }
  },
  computed: {},
  methods: {
      fetchOfferData() {
          fetch('/api/report/')
          .then( response => response.json() )
          .then( (responseJson) => {
              console.log(responseJson);
              this.offers = responseJson;
          })
          .catch( (error) => {
              console.error(error);
          });
      }
  },
  created() {
      this.fetchOfferData();
  }
}

Vue.createApp(SomeApp).mount('#reportApp');
