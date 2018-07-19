const app = new Vue({
    el: '#app',
    data(){
        return{
            show:false,
            controlShow:false,
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
        showChangeImage(){
            let self = this;
            self.controlShow = !self.controlShow;
        },
        showLightbox(imagesKey){
            let self = this;
            //取得body
            let body = document.body;
            body.classList.add('lock');

            self.show = !self.show;
            self.lightboxImage = self.images[imagesKey];

            self.showChangeImage();
            // console.log(lightboxContent);
            // console.log(self.show);
        },
        rotateImage(){
            let self = this;
            
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