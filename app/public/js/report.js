
const SomeApp = {
    data() {
      return {
        offers: []
      }
    },
    methods: {
        fetchOfferData() {
            fetch('/api/report/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.offers = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        }
    },
    created() {
        this.fetchOfferData();
    }
  }
  
  Vue.createApp(SomeApp).mount('#reportApp');
  