export function navLinkTracker(){
  const sectionMain = [...document.querySelectorAll('[data-section]')];
  const sectionLinks = [...document.querySelectorAll(`a[href]`)];
  
  // set height to change
  const heightToDisplayLinkColor = window.innerHeight / 2;

  sectionMain.forEach(section => {
    if (section.getBoundingClientRect().top < heightToDisplayLinkColor) {
      
      const backgroundSectionColor = window.getComputedStyle(section).backgroundColor;

      const linkIndex = parseInt(section.getAttribute('id').split('-')[1]);
      sectionLinks.forEach(link =>{
        if(sectionLinks.indexOf(link) == linkIndex ){
          link.style.backgroundColor = backgroundSectionColor; 
        }
        else{
           link.style.backgroundColor = 'transparent'; 
        }
      })
    }
  });
 
}