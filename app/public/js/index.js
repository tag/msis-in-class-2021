const Offer = {
    data() {
      return {
            "students": [],
            "offers": [],
            "selectedStudent": null
        }
    },
    computed: {
        // prettyBirthday() {
        //     return dayjs(this.person.dob.date)
        //     .format('D MMM YYYY');
        // }
    },
    methods: {
        selectStudent(s) {
            console.log("Clicked", s);
            if (this.selectedStudent == s) {
                return;
            }

            this.selectedStudent = s;
            this.offers = [];
            this.fetchOfferData(s);
        },
        fetchStudentData() {
            fetch('/api/student/')
            .then(response => response.json())
            .then((parsedJson) => {
                console.log(parsedJson);
                this.students = parsedJson
            })
            .catch( err => {
                console.error(err)
            })
        },
        fetchOfferData(s) {
            console.log("Fetching offers for", s);
            fetch('/api/offer/?student=' + s.id)
            .then(response => response.json())
            .then((parsedJson) => {
                console.log(parsedJson);
                this.offers = parsedJson
            })
            .catch( err => {
                console.error(err)
            })
        }
    },
    created() {
        this.fetchStudentData();
    }
  }
  
Vue.createApp(Offer).mount('#offerApp');
