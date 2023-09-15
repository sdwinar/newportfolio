import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'
import i18n from "./i18n"

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import "./assets/css/animated_background.css"; 
import "./assets/css/nav.css";
import "./assets/css/home.css";
import "./assets/css/about.css";
import "./assets/css/skills.css";
import "./assets/css/services.css";
import "./assets/css/qualification.css";
import "./assets/css/share_project.css";
import "./assets/css/home_text_animation.css";
import "./assets/css/fotter.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/main.css";

// ...................................................<i class="fas fa-briefcase"></i>
import "./assets/js/jquery-3.7.1.slim.min.js";
// import "./assets/js/owl.carousel.min.js";
import "./assets/js/main.js";


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret,faHome,faPenNib,faBookOpen,faBomb,faServer 
, faBriefcase,faLanguage, faEnvelope, faListAlt, faMoon, faSun, faDownload, faArrowAltCircleUp, faDatabase, faRss, faWandMagicSparkles, faCheck, faCode, faShare
} from '@fortawesome/free-solid-svg-icons'
// import { faHouse } from '@fortawesome/free-thin-svg-icons'
import { faGithub, faHtml5, faLaravel, faLinkedin, faPhp, faVuejs, faWhatsapp,faSquareJs, faCss3Alt, faJsSquare, faBootstrap } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faHome,faBookOpen,faBomb,faServer,faBriefcase,faGithub,faLanguage, faLinkedin, faWhatsapp, faEnvelope
    ,faListAlt,faMoon,faSun,faDownload, faArrowAltCircleUp,faPhp,faLaravel,faVuejs,faDatabase,faHtml5,faSquareJs,faCss3Alt,
    faJsSquare,faRss,faBootstrap,faWandMagicSparkles,faPenNib,faCheck,faCode,faBriefcase,faShare )



    import { MotionPlugin } from "@vueuse/motion"



createApp(App).use(router).use(i18n).component('font-awesome-icon', FontAwesomeIcon).use(MotionPlugin).mount('#app')