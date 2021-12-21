export function scrollToLinks(){

    const sectionLinks = [...document.querySelectorAll('[data-link]')];

    sectionLinks.forEach(link =>{
  link.addEventListener( 'click', function(e){
    e.preventDefault()
    const sectionId = e.currentTarget.getAttribute('href').slice(1)
    const sectionTarget = document.getElementById(`${sectionId}`)
    const navHeight = document.querySelector('nav').getBoundingClientRect().height;
    
    const sectionPositionY = (sectionTarget.getBoundingClientRect().top +  window.scrollY) - navHeight

    window.scrollTo(0, sectionPositionY)
    
   })
});
}