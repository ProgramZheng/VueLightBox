const app = new Vue({
    el: '#app',
    data(){
        return{
            show:false,
            images:[],
            lightboxImage:''
        }
    },
    mounted() {
        //TODO:編寫AJAX取得圖片
        let self = this;
        self.images.push('images/david-sola-530108-unsplash.jpg',
        'images/alex-kalligas-460302-unsplash.jpg');
    },
    methods:{
        showLightbox(imagesKey){
            let self = this;
            self.show = !self.show;
            self.lightboxImage = self.images[imagesKey];

            //取得body
            let body = document.body;
            body.classList.add('lock');
            console.log(body);
            console.log(self.show);
        },
        closeLightbox(){
            let self = this;
            self.show = !self.show;

            //取得body
            let body = document.body;
            body.classList.remove('lock');
        }
    }
})