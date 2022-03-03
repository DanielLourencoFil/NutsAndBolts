class ToggleModal{
    constructor(modal, openBtn, closeBtn){
        this.modal = document.querySelector(`.${modal}`);
        this.modalOpenBtn = document.querySelector(`.${openBtn}`);
        this.modalCloseBtn = document.querySelector(`.${closeBtn}`);
        
        //default values
        this.start = "left"; // possible values : top || down || right || left
        this.displayOn = "block"; 
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

const modalUp = new ToggleModal('modal-up', 'open-arrow-down', 'close-arrow-up')
modalUp.start = 'top';

const modalDown = new ToggleModal('modal-down', 'open-arrow-up', 'close-arrow-down')
modalDown.start = 'bottom';

const modalRight = new ToggleModal('modal-right', 'open-arrow-left', 'close-arrow-right')
modalRight.start = 'right';

const modalLeft = new ToggleModal('modal-left', 'open-arrow-right', 'close-arrow-left')
modalLeft.start = 'left';

