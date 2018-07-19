const app = new Vue({
    el: '#app',
    data(){
        return{
            lightboxShow:false,
            controlShow:false,
            controlTimer:null,
            images:[],
            lightboxImageKey:0,
            lastImageKey:0,
            lightboxImage:'',
            canvasStatus:false

        }
    },
    mounted() {
        //TODO:編寫AJAX取得圖片
        let self = this;
        self.images.push('images/david-sola-530108-unsplash.jpg',
        'images/alex-kalligas-460302-unsplash.jpg','images/richard-loader-31656-unsplash.jpg');
        self.lastImageKey = self.images.length-1;
    },
    methods:{
        showHideControl(){
            let self = this;
            if(!self.canvasStatus){
                clearTimeout(self.controlTimer);
                self.controlShow = true;
                self.controlTimer = setTimeout(function(){
                    self.controlShow = false;
                },3000);
            }
        },
        showLightbox(imagesKey){
            let self = this;
            //取得body
            let body = document.body;
            body.classList.add('lock');

            self.lightboxShow = !self.lightboxShow;
            self.lightboxImageKey = imagesKey;
            self.lightboxImage = self.images[imagesKey];

            self.showHideControl();
            // console.log(lightboxContent);
            // console.log(self.show);
        },
        rotateImage(){
            let self = this;
            
        },
        prevImage(){
            let self = this;
            self.lightboxImageKey = self.lightboxImageKey-1;
            if(self.lightboxImageKey>=0){
                self.lightboxImage = self.images[self.lightboxImageKey];
            }
        },
        nextImage(){
            let self = this;
            self.lightboxImageKey = self.lightboxImageKey+1;
            if(self.lightboxImageKey<=self.lastImageKey){
                self.lightboxImage = self.images[self.lightboxImageKey];
            }
        },
        closeLightbox(){
            let self = this;
            self.lightboxShow = !self.lightboxShow;
            clearTimeout(self.controlTimer);
            //取得body
            let body = document.body;
            body.classList.remove('lock');
        }
    }
})