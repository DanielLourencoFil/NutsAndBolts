import { renderCurrentYear } from './currentYear.js';
import { navLinkTracker } from './navLinkTracker.js';
import {scrollToLinks} from   './scrollToLinks.js';
import {backToTopBtn} from './back-to-top-btn.js'


//update year
renderCurrentYear()

// NAV links banckground-color follow background-color os correpondent section 
// start tracker for first section (as default)
navLinkTracker()

window.addEventListener('scroll', function (e) {
  navLinkTracker()
  backToTopBtn()
});

//SCROLL to links
scrollToLinks()





