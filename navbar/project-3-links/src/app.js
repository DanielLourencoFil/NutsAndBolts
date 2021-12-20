import { renderCurrentYear } from './currentYear.js';
import { navLinkTracker } from './navLinkTracker.js';
import {ScrollToLinks} from   './scrollToLinks.js'


//update year
renderCurrentYear()

// NAV links banckground-color follow background-color os correpondent section 
// start tracker for first section (as default)
navLinkTracker()

window.addEventListener('scroll', function (e) {
  navLinkTracker()
});

//SCROLL to links
ScrollToLinks()




