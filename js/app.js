const nav = new Vue({
    el:'#nav',
    data(){
        return{
            hamburger:{},
            navShow:false
        }
    },
    created() {
        let self = this;
        if(document.body.offsetWidth>768){
            self.navShow=true;
        }
    },
    methods:{
        showNav(){
            let self = this;
            self.navShow = !self.navShow;
            if(self.navShow){
                self.hamburger = {
                    transition: 'transform .8s',
                    transform: 'rotate(90deg)'
                }
            }
            else{
                self.hamburger = {
                    transition: 'transform .8s',
                    transform: 'rotate(0deg)'
                }
            }
        }
    }
});