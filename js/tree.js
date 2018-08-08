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
            lightboxDeg:0,
            lightboxGetStatus: false,
            lightboxHeight:'100%',
            lightboxWidth:'100%',
            imageBoard:null,
            canvasStatus:false

        }
    },
    mounted() {
        //TODO:編寫AJAX取得圖片
        let self = this;
        self.images.push('images/jeremy-bishop-556948-unsplash.jpg');
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

            //取得初始lightboxContent長寬
            // let lightboxContent = document.getElementById('lightboxContent');
            // console.log(lightboxContent);
            // let lightboxContentStyle = getComputedStyle(document.getElementById("lightboxContent"));
            // self.lightboxHeight = lightboxContentStyle.getPropertyValue('height');
            // self.lightboxWidth = lightboxContentStyle.getPropertyValue('width');

            self.showHideControl();

        },
        rotateImage(){
            let self = this;
            if(!self.lightboxGetStatus){
                let lightboxContent = self.$refs.inlightboxContent;
                let lightboxContentStyle = getComputedStyle(lightboxContent);
                self.lightboxHeight = lightboxContentStyle.getPropertyValue('height');
                self.lightboxWidth = lightboxContentStyle.getPropertyValue('width');
                self.lightboxGetStatus = true;
            }
            self.lightboxDeg = self.lightboxDeg+90;
            self.checkRotateImage();
        },
        checkRotateImage(){
            let self = this;
            if(self.lightboxDeg===360){
                self.lightboxDeg = 0;
            }
            switch(self.lightboxDeg){
                case 90:
                    lightboxContent.style.setProperty('height',self.lightboxWidth);
                    break;
                case 270:
                    lightboxContent.style.setProperty('height',self.lightboxWidth);
                    break;
                case 0:
                    lightboxContent.style.setProperty('height',self.lightboxHeight);
                    break;
                case 180:
                    lightboxContent.style.setProperty('height',self.lightboxHeight);
                    break;
            }

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
        enableCanvas(){
            let self = this;
            self.controlShow = false;
            self.canvasStatus = !self.canvasStatus;
            let nowImage = document.getElementById('nowImage');
            if(self.canvasStatus){
                self.imageBoard = new DrawingBoard.Board('lightboxContent',{
                    controls: false,
                    size: 10,
                    background: self.lightboxImage,
                    webStorage: false,
                    droppable: true,
                    stretchImg: true
                });
            }
            else{
                let drawingBoardControls = document.getElementsByClassName("drawing-board-controls");
                let drawingBoardCanvasWrapper = document.getElementsByClassName("drawing-board-canvas-wrapper");

                for(let i=0; i<drawingBoardControls.length; i++){
                    drawingBoardControls[i].parentNode.removeChild(drawingBoardControls[i]);
                }

                for(let i=0; i<drawingBoardCanvasWrapper.length; i++){
                    drawingBoardCanvasWrapper[i].parentNode.removeChild(drawingBoardCanvasWrapper[i]);
                }
                self.imageBoard = null;
            }
        },
        closeLightbox(){
            let self = this;
            self.lightboxShow = !self.lightboxShow;
            clearTimeout(self.controlTimer);
            self.canvasStatus = false;
            //取得body
            let body = document.body;
            body.classList.remove('lock');
        }
    }
})