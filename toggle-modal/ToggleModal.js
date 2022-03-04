class ToggleModal{
    constructor(modal, openBtn, closeBtn, action = "slide"){
        this.modal = document.querySelector(`${modal}`);
        this.modalOpenBtn = document.querySelector(`${openBtn}`);
        this.modalCloseBtn = document.querySelector(`${closeBtn}`);
        
        //action type
        this.action = action; //slide || scale
        
        //default values for slide action 
        this.start = "left"; // possible values : top || down || right || left
        this.displayOn = "block"; // possible values : block || flex || grid || etc
        this.displayOff = "none";
        this.showOn = '0';
        this.showOff = '-100';
        
        //default values for scale action 
        this.scaleDown = '0';
        this.scaleUp = '1';
        this.translateX; 
        this.translateY; 
        
        // call open and close functions
        this.open()
        this.close()
    }
    open = ()=>{
        this.modalOpenBtn.addEventListener('click', ()=>{
            this.modal.style.display = this.displayOn
            setTimeout(()=>{
                if(this.action === "slide"){
                    if(this.start === "left") this.modal.style.left = `${this.showOn}vw`;
                    if(this.start === "right") this.modal.style.right = `${this.showOn}vw`;
                    if(this.start === "top") this.modal.style.top = `${this.showOn}vh`;
                    if(this.start === "bottom") this.modal.style.bottom = `${this.showOn}vh`;
                }
                if(this.action === 'scale'){
                    this.modal.style.transform = `translate(${this.translateX}, ${this.translateY}) scale(${this.scaleUp})`
                }
            },50)
        })
    }
    close = ()=>{
        let modalTransition = window.getComputedStyle(this.modal).transition;
        modalTransition = parseInt(modalTransition.split(' ')[1].split('s')[0]);
        
        this.modalCloseBtn.addEventListener('click',()=>{
            if(this.action === "slide"){
                if(this.start === "left") this.modal.style.left = `${this.showOff}vw`;
                if(this.start === "right") this.modal.style.right = `${this.showOff}vw`;
                if(this.start === "top") this.modal.style.top = `${this.showOff}vh`;
                    if(this.start === "bottom") this.modal.style.bottom = `${this.showOff}vh`;
            }
            if(this.action === 'scale'){
                this.modal.style.transform = `translate(${this.translateX}, ${this.translateY}) scale(${this.scaleDown})`;
            }
            setTimeout(()=>{
             this.modal.style.display = this.displayOff
            },modalTransition*1000)
        })
    }
}



//************ MODALS FOR CURRENT DEMONSTRATION *************/


const modalUp = new ToggleModal('.modal-up', '.open-arrow-up', '.close-arrow-up')
modalUp.start = 'top';

const modalDown = new ToggleModal('.modal-down', '.open-arrow-up', '.close-arrow-down')
modalDown.start = 'bottom';
console.log(modalDown.action)

const modalRight = new ToggleModal('.modal-right', '.open-arrow-left', '.close-arrow-right')
modalRight.start = 'right';

const modalLeft = new ToggleModal('.modal-left', '.open-arrow-right', '.close-arrow-left')
modalLeft.start = 'left';

const modalScale = new ToggleModal('.modal-scale', '.open-scale-btn', '.close-scale-btn', 'scale')
modalScale.displayOn = 'flex';
modalScale.translateX = "-50%";
modalScale.translateY = "-50%";

/*
class ToggleModal{
    constructor(modal, openBtn, closeBtn){
        this.modal = document.querySelector(`${modal}`);
        this.modalOpenBtn = document.querySelector(`${openBtn}`);
        this.modalCloseBtn = document.querySelector(`${closeBtn}`);
        
        //default values
        this.start = "left"; // possible values : top || down || right || left
        this.displayOn = "block"; // possible values : block || flex || grid || etc
        this.displayOff = "none";
        this.showOn = '0';
        this.showOff = '-100';

        this.open()
        this.close()
    }
    open = ()=>{
        this.modalOpenBtn.addEventListener('click', ()=>{
            this.modal.style.display = this.displayOn
            setTimeout(()=>{
                if(this.start === "left") this.modal.style.left = `${this.showOn}vw`;
                if(this.start === "right") this.modal.style.right = `${this.showOn}vw`;
                if(this.start === "top") this.modal.style.top = `${this.showOn}vh`;
                if(this.start === "bottom") this.modal.style.bottom = `${this.showOn}vh`;
            },50)
        })
    }
    close = ()=>{
        let modalTransition = window.getComputedStyle(this.modal).transition;
        modalTransition = parseInt(modalTransition.split(' ')[1].split('s')[0]);
        
        this.modalCloseBtn.addEventListener('click',()=>{
            if(this.start === "left") this.modal.style.left = `${this.showOff}vw`;
            if(this.start === "right") this.modal.style.right = `${this.showOff}vw`;
            if(this.start === "top") this.modal.style.top = `${this.showOff}vh`;
                if(this.start === "bottom") this.modal.style.bottom = `${this.showOff}vh`;
            
            setTimeout(()=>{
             this.modal.style.display = this.displayOff
            },modalTransition*1000)
        })
    }
}

*/

//************ MODALS FOR CURRENT DEMONSTRATION *************/
/*
const modalUp = new ToggleModal('.modal-up', '.open-arrow-down', '.close-arrow-up')
modalUp.start = 'top';

const modalDown = new ToggleModal('.modal-down', '.open-arrow-up', '.close-arrow-down')
modalDown.start = 'bottom';

const modalRight = new ToggleModal('.modal-right', '.open-arrow-left', '.close-arrow-right')
modalRight.start = 'right';

const modalLeft = new ToggleModal('.modal-left', '.open-arrow-right', '.close-arrow-left')
modalLeft.start = 'left';

*/