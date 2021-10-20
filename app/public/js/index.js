
const SomeApp = {
  data() {
    return {
      students: [],
      selectedStudent: null,
      offers: [],
      offerForm: {},
      selectedOffer: null
    }
  },
  computed: {},
  methods: {
      prettyData(d) {
          return dayjs(d)
          .format('D MMM YYYY')
      },
      prettyDollar(n) {
          const d = new Intl.NumberFormat("en-US").format(n);
          return "$ " + d;
      },
      selectStudent(s) {
          if (s == this.selectedStudent) {
              return;
          }
          this.selectedStudent = s;
          this.offers = [];
          this.fetchOfferData(this.selectedStudent);
      },
      fetchStudentData() {
          fetch('/api/student/')
          .then( response => response.json() )
          .then( (responseJson) => {
              console.log(responseJson);
              this.students = responseJson;
          })
          .catch( (err) => {
              console.error(err);
          })
      },
      fetchOfferData(s) {
          console.log("Fetching offer data for ", s);
          fetch('/api/offer/?student=' + s.id)
          .then( response => response.json() )
          .then( (responseJson) => {
              console.log(responseJson);
              this.offers = responseJson;
          })
          .catch( (err) => {
              console.error(err);
          })
          .catch( (error) => {
              console.error(error);
          });
      },
      postOffer(evt) {
          console.log ("Test:", this.selectedOffer);
        if (this.selectedOffer) {
            this.postEditOffer(evt);
        } else {
            this.postNewOffer(evt);
        }
      },
      postEditOffer(evt) {
        this.offerForm.id = this.selectedOffer.id;
        this.offerForm.studentId = this.selectedStudent.id;        
        
        console.log("Editing!", this.offerForm);

        fetch('api/offer/update.php', {
            method:'POST',
            body: JSON.stringify(this.offerForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.offers = json;
            
            // reset the form
            this.handleResetEdit();
          });
      },
      postNewOffer(evt) {
        this.offerForm.studentId = this.selectedStudent.id;        
        
        console.log("Creating!", this.offerForm);

        fetch('api/offer/create.php', {
            method:'POST',
            body: JSON.stringify(this.offerForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.offers = json;
            
            // reset the form
            this.handleResetEdit();
          });
      },
      postDeleteOffer(o) {  
        if ( !confirm("Are you sure you want to delete the offer from " + o.companyName + "?") ) {
            return;
        }  
        
        console.log("Delete!", o);

        fetch('api/offer/delete.php', {
            method:'POST',
            body: JSON.stringify(o),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.offers = json;
            
            // reset the form
            this.handleResetEdit();
          });
      },
      handleEditOffer(offer) {
          this.selectedOffer = offer;
          this.offerForm = Object.assign({}, this.selectedOffer);
      },
      handleResetEdit() {
          this.selectedOffer = null;
          this.offerForm = {};
      }
  },
  created() {
      this.fetchStudentData();
  }

}

Vue.createApp(SomeApp).mount('#offerApp');
