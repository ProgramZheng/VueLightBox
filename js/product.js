const app = new Vue({
    el: '#app',
    data(){
        return{
            show:false
        }
    },
    mounted() {
       console.log("Qqq"); 
    },
    methods:{
        showDialog(){
            let self = this;
            self.show = !self.show;
            console.log(self.show);
        }
    }
})