const app=Vue.createApp({
    data() {
        return{
            "person":{},
            "info":[
                {
                    "name": "Hope",
                    "country":"USA",
                    "birthday":"26 May",
                    "age":"28",
                    "email":"hope@example.com",
                    "phone":"8976578779",
                    "image": 'img/pic.jpeg'
                    
                },
                {
                    "name": "Annn",
                    "country":"UK",
                    "birthday":"09 March",
                    "age":"26",
                    "email":"ann@example.com",
                    "phone":"2342342343",
                    "image": 'img/pic.jpeg'
        
                }
            ]
        }
    },
    computed:{
        prettyBirthday(){
            return dayjs(this.person.dob.date).format('D MMM YYYY')
        }  
    },
    methods:{
        fetchUserData(){
            console.log("A")
            fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson);   //for debugging
                console.log("C")
        
                this.person =responseJson.results[0];
            })
        
            .catch((err) => {
                console.error(err);
            })
            console.log("B")
        }
    },
    
created(){
   this.fetchUserData();
    }
})