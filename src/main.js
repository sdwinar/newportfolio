import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'
import i18n from "./i18n"

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import "./assets/css/animated_background.css";
import "./assets/css/nav.css";
import "./assets/css/main.css";
import "./assets/css/home.css";
import "./assets/css/about.css";
import "./assets/css/home_text_animation.css";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret,faHome,faPenNib,faBookOpen,faBomb,faServer 
, faBriefcase,faLanguage, faEnvelope, faListAlt, faMoon, faSun, faDownload, faArrowAltCircleUp
} from '@fortawesome/free-solid-svg-icons'
// import { faHouse } from '@fortawesome/free-thin-svg-icons'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faHome,faBookOpen,faBomb,faServer,faBriefcase,faGithub,faLanguage, faLinkedin, faWhatsapp, faEnvelope
    ,faListAlt,faMoon,faSun,faDownload, faArrowAltCircleUp )

    import { MotionPlugin } from "@vueuse/motion"



createApp(App).use(router).use(i18n).component('font-awesome-icon', FontAwesomeIcon).use(MotionPlugin).mount('#app')