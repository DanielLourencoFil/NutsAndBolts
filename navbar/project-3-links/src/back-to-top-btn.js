export function backToTopBtn(){
    const backToTopBtn = document.querySelector('.btn-top')
    if(window.scrollY > window.innerHeight/2){
        backToTopBtn.classList.add('show-btn')
    }
    else{
        backToTopBtn.classList.remove('show-btn')
    }
}