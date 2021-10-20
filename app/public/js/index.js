
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
          if (this.selectedOffer === null) {
              this.postNewOffer(evt);
          } else {
              this.postEditOffer(evt);
          }
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
              
              this.resetOfferForm();
            });
        },
        postEditOffer(evt) {
          this.offerForm.studentId = this.selectedStudent.id;
          this.offerForm.id = this.selectedOffer.id;       
          
          console.log("Updating!", this.offerForm);
  
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
              
              this.resetOfferForm();
            });
        },
        postDeleteOffer(o) {
          if (!confirm("Are you sure you want to delete the offer from "+o.companyName+"?")) {
              return;
          }
          
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
              
              this.resetOfferForm();
            });
        },
        selectOffer(o) {
          this.selectedOffer = o;
          this.offerForm = Object.assign({}, this.selectedOffer);
        },
        resetOfferForm() {
          this.selectedOffer = null;
          this.offerForm = {};
        }
    },
    created() {
        this.fetchStudentData();
    }
  
  }
  
  Vue.createApp(SomeApp).mount('#offerApp');