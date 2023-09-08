<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { ref, onMounted } from "vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

//scroll to section

const About = ref(null)
const home = ref(null)
const skills = ref(null)
const services = ref(null)

function scrollToAbout() {
    About.value.scrollIntoView({ behavior: 'smooth' })
}
function scrollToHome() {
    home.value.scrollIntoView({ behavior: 'smooth' })
}
function scrollToSkills() {
    skills.value.scrollIntoView({ behavior: 'smooth' })
}
function scrollToServices() {
    services.value.scrollIntoView({ behavior: 'smooth' })
}
function scrollToTop() {
    window.scrollTo(0, 0);
    // alert(window.innerHeight)
}

onMounted(() => {
    var prev = window.pageYOffset;

    const home_link = ref(null);


    // home_link.classList.add("router-link-active");
    // document.home_link.classList.add("router-link-active");
    // hhh.classList.remove("button-active");


})
</script>
<!-- ********************************************************************************************************************* -->
<script>
var date = new Date();
date = date.getUTCFullYear();


const t = localStorage.getItem('user-locale');
if (t == 'ar') {
    import("bootstrap/dist/css/bootstrap.rtl.css")
} else {
    import("bootstrap/dist/css/bootstrap.css")
}
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import { ref, onMounted } from "vue";
//    alert(window.innerHeight)
export default {



    data() {
        return {
        }
    },

    components: { LanguageSwitcher },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        handleScroll(event) {//this method on scroll
            var prev = window.pageYOffset;
            console.log(prev)
            const home_link = this.$refs.home_link;
            const about_link = this.$refs.about_link;
            const skills_link = this.$refs.skills_link;
            const services_link = this.$refs.services_link;

            if (prev >= 0 && prev < 700) {
                home_link.classList.add("router-link-active");
                about_link.classList.remove("router-link-active");
                skills_link.classList.remove("router-link-active");
                services_link.classList.remove("router-link-active");

            } else if (prev >= 700 && prev < 1400) {
                home_link.classList.remove("router-link-active");
                about_link.classList.add("router-link-active");
                skills_link.classList.remove("router-link-active");
                services_link.classList.remove("router-link-active");

            } else if (prev >= 1400 && prev < 2160) {
                home_link.classList.remove("router-link-active");
                about_link.classList.remove("router-link-active");
                skills_link.classList.add("router-link-active");
                services_link.classList.remove("router-link-active");

            } else if (prev >= 2160 && prev < 2500) {
                home_link.classList.remove("router-link-active");
                about_link.classList.remove("router-link-active");
                skills_link.classList.remove("router-link-active");
                services_link.classList.add("router-link-active");
            }



            const topButton = this.$refs.topButton; // assign the reference in variable


            if (prev > 700) {
                topButton.classList.remove("hide_top_button");
                topButton.classList.add("show_top_button");
                // alert(topButton)
            } else {
                topButton.classList.remove("show_top_button");
                topButton.classList.add("hide_top_button");
            }

        },
    }
}

</script>
<style ></style>
<template>
    <head>
        <title>{{ $t('site.name') }}</title>
    </head>


    <!-- *******************************************************start_nav******************************************************************************* -->
    <!-- *******************************************************start_nav******************************************************************************* -->
    <nav v-motion-roll-top :dir="$t('site.dir')" class="navbar navbar-expand-lg fixed-top area"
        :class="isDark ? 'area_dark' : 'area_light'">

        <div class="container position-relative py-lg-4">

            <!-- Mobile Logo -->
            <a editable="inline" class="navbar-brand d-lg-none" href="#">
                <img src="./assets/img/logo.png" width="48" height="48" class="align-middle me-1" alt="My Website">
            </a>
            <!-- end -->

            <!-- Desktop Logo -->
            <div class="lc-block position-absolute start-50 translate-middle top-50 d-none d-lg-block">
                <a editable="inline" class="navbar-brand mx-auto" href="#">
                    <img src="./assets/img/logo.png" width="100" height="100" class="d-block mx-auto" alt="My Website"
                        :style="isDark ? '' : 'filter: invert(1)'">
                </a>
            </div>
            <!-- end -->

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar5"
                aria-controls="myNavbar5" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="lc-block collapse navbar-collapse" id="myNavbar5">
                <div lc-helper="shortcode" class="live-shortcode me-auto"> <!--  lc_nav_menu -->
                    <ul id="menu-menu-1" class="navbar-nav me-auto mb-2 mb-md-0 navbar-nav">

                        <li>
                            <button ref="home_link" @click="scrollToHome" class="nav-link"
                                :class="isDark ? 'btn_dark' : 'btn_light'">
                                &nbsp; <font-awesome-icon icon="fa-solid fa-home" />&nbsp; {{ $t('nav.home') }}
                            </button>
                        </li>
                        <li>
                            <button ref="about_link" @click="scrollToAbout" class="nav-link"
                                :class="isDark ? 'btn_dark' : 'btn_light'">
                                &nbsp; <font-awesome-icon icon="fa-solid fa-book-open" />&nbsp; {{ $t('nav.about') }}
                            </button>
                        </li>
                        <li>
                            <button ref="skills_link" @click="scrollToSkills" class="nav-link"
                                :class="isDark ? 'btn_dark' : 'btn_light'">
                                &nbsp; <font-awesome-icon icon="fa-solid fa-bomb" />&nbsp; {{ $t('nav.skills') }}
                            </button>
                        </li>
                        <li>
                            <button ref="services_link" @click="scrollToServices" class="nav-link"
                                :class="isDark ? 'btn_dark' : 'btn_light'">
                                &nbsp; <font-awesome-icon icon="fa-solid fa-server" />&nbsp; {{ $t('nav.services') }}
                            </button>
                        </li>
                    </ul> <!-- /lc_nav_menu -->
                </div>

                <div lc-helper="shortcode" class="live-shortcode ms-auto"> <!--  lc_nav_menu -->
                    <ul id="menu-secondary" class="navbar-nav me-auto mb-2 mb-md-0 navbar-nav">
                        <li>
                            <button :class="isDark ? 'btn_dark' : 'btn_light'" @click="toggleDark()"
                                class="py-2 px-4 bg-black text-white rounded-md dark:bg-white dark:text-black">
                                <font-awesome-icon :class="isDark ? 'btn_dark' : 'btn_light'"
                                    :icon="isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun'" />
                            </button>

                        </li>
                        <li class="menu-item menu-item-type-taxonomy menu-item-object-post_tag nav-item nav-item-33142">
                            <LanguageSwitcher></LanguageSwitcher>
                        </li>
                    </ul> <!-- /lc_nav_menu -->
                </div>

            </div>


        </div>
    </nav>
    <!-- *******************************************************end_nav******************************************************************************* -->
    <!-- *******************************************************start_home******************************************************************************* -->
    <!-- <div  :class="isDark ? 'area_dark' : 'area_light'">
    <ul class="circles">
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
        </ul>
    </div> -->


    <!--==================== HOME ====================-->
    <some-component ref="home"></some-component>
    <section :dir="$t('site.dir')"
        :class="($t('home.section_style')) + ' ' + (isDark ? 'color_dark area_dark' : 'color_light area_light')"
        class="home section area" id="home">

        <!-- <ul class="circles">
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
        </ul> -->
        <div class="container" style="padding-top: 10vh;padding-bottom:10vh">
            <div class="row align-items-center px-2">
                <div class="col-12 col-md-7 col-lg-6">
                    <div class="lc-block mb-4">
                        <div editable="rich">
                            <section>
                                <div :class="isDark ? 'content_dark' : 'content_light'">
                                    <h2 :class="$t('home.welcome_class')">{{
                                        $t('home.welcame') }}</h2>
                                    <h2 :class="$t('home.welcome_class')">{{
                                        $t('home.welcame') }}</h2>
                                </div>
                            </section><br />


                            <h3 v-motion-pop class="home_subtitle">
                                <div class="waviy" :class="isDark ? 'color_dark ' : 'color_light '">
                                    <span style="--i:1">{{ $t('home.l_01') }}</span>
                                    <span style="--i:2">{{ $t('home.l_02') }}</span>
                                    <span style="--i:3">{{ $t('home.l_03') }}</span>
                                    <span style="--i:4">{{ $t('home.l_04') }}</span>
                                    <span style="--i:5">{{ $t('home.l_05') }}</span>
                                    <span style="--i:6">{{ $t('home.l_06') }}</span>
                                    <span style="--i:7">{{ $t('home.l_07') }}</span>
                                    <span style="--i:8">{{ $t('home.l_08') }}</span>
                                    <span style="--i:9">{{ $t('home.l_09') }}</span>
                                    <span style="--i:10">{{ $t('home.l_10') }}</span>
                                    <span style="--i:11">{{ $t('home.l_11') }}</span>
                                    <span style="--i:12">{{ $t('home.l_12') }}</span>
                                    <span style="--i:13">{{ $t('home.l_13') }}</span>
                                    <span style="--i:14">{{ $t('home.l_14') }}</span>
                                    <span style="--i:15">{{ $t('home.l_15') }}</span>
                                    <span style="--i:16">{{ $t('home.l_16') }}</span>
                                    <span style="--i:17">{{ $t('home.l_17') }}</span>
                                    <span style="--i:18">{{ $t('home.l_18') }}</span>
                                    <span style="--i:19">{{ $t('home.l_19') }}</span>
                                    <span style="--i:20">{{ $t('home.l_20') }}</span>
                                    <span style="--i:21">{{ $t('home.l_21') }}</span>
                                    <span style="--i:22">{{ $t('home.l_22') }}</span>
                                    <span style="--i:23">{{ $t('home.l_23') }}</span>
                                </div>

                            </h3>

                            <p v-motion-pop :class="isDark ? 'home_description_dark ' : 'home_description_light '"
                                class="home_description animate-charcter">
                                {{ $t('home.description') }}
                            </p>
                            <a v-motion-roll-bottom href="#" :class="isDark ? 'btn btn-info' : 'btn btn-dark'">
                                Contact Me <i class="uil uil-message button__icon"></i>
                            </a>
                        </div>
                    </div><!-- /lc-block -->
                    <div v-motion-roll-bottom class="lc-block d-flex mb-5">
                        <div class="pe-3">
                            <h3 class="h2 mb-0 text-secondary" editable="inline"><font-awesome-icon
                                    style="margin-left:20px;font-size: 18px;" icon="fa-brands fa-github" /></h3>
                        </div>
                        <!-- <div class="border-start"></div> -->
                        <div v-motion-roll-bottom class="px-3">
                            <h3 class="h2 mb-0 text-secondary" editable="inline">
                                <font-awesome-icon style="margin-left:20px;font-size: 18px;" icon="fa-brands fa-linkedin" />
                            </h3>
                        </div>
                        <!-- <div class="border-start"></div> -->
                        <div v-motion-roll-bottom class="ps-3">
                            <h3 class="h2 mb-0 text-secondary" editable="inline">
                                <font-awesome-icon style="margin-left:20px;font-size: 18px;" icon="fa-brands fa-whatsapp" />
                            </h3>
                        </div>
                        <div v-motion-roll-bottom class="ps-3">
                            <h3 class="h2 mb-0 text-secondary" editable="inline">
                                <font-awesome-icon style="margin-left:20px;font-size: 18px;" icon="fa- fa-envelope" />
                            </h3>
                        </div>
                    </div><!-- /lc-block -->
                </div><!-- /col -->
                <div v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }"
                    :variants="{ custom: { scale: 2 } }" :hovered="{ scale: 1.2 }" :delay="200"
                    class="col-12 col-md-5 col-lg-6 img_home_dev">
                    <div class="lc-block"><img alt="" :class="$t('home.home_image_transform_scaleX')"
                            class="img-fluid mx-auto d-block" src="./assets/img/home.png">
                    </div><!-- /lc-block -->

                </div><!-- /col -->
            </div>

        </div>


    </section>

    <!-- *******************************************************end_home******************************************************************************* -->
    <!-- *******************************************************start_about******************************************************************************* -->
    <!--==================== ABOUT ====================-->
    <some-component ref="About"></some-component>
    <section :dir="$t('site.dir')" :class="isDark ? 'color_dark area_dark' : 'color_light area_light'"
        class="home section area" id="home" style="height: 100vh;    padding-top: 10rem;">
        <!-- <ul class="circles">
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
            <li :class="isDark ? 'circles_li_dark' : 'circles_li_light'"></li>
        </ul> -->
        <h2 v-motion-pop class="section__title" :class="isDark ? 'color_dark' : 'color_night'">About Me</h2>
        <span v-motion-pop class="section__subtitle">My introduction</span>

        <div class="about_container container grid">
            <img src="./assets/img/home.png" alt="" class="about_img">

            <div class="about_data">
                <p class="about_description">
                    FullStack Web developer, with extencive knowledge and years of experience,
                    working in web technologies and UI/UX design, delivering quality work
                </p>
                <div class="about_info">
                    <div>
                        <span class="about_info-title">{{ date - 1990 }}</span>
                        <span class="about_info-name">Years <br>old</span>
                    </div>
                    <div>
                        <span class="about_info-title">{{ date - 2016 }}+</span>
                        <span class="about_info-name">Years <br>experience</span>
                    </div>
                    <div>
                        <span class="about_info-title">25+</span>
                        <span class="about_info-name">Completed <br>project</span>
                    </div>
                    <div>
                        <span class="about_info-title">04+</span>
                        <span class="about_info-name">Companies <br>worked</span>
                    </div>
                </div>
                <div class="about_buttons">
                    <a href="assets/pdf/johndoe-Cv.pdf" :class="isDark ? 'btn btn-info' : 'btn btn-dark'"
                        style="font-weight: bold;">
                        Download CV &nbsp; <font-awesome-icon icon="fa-solid fa-download" />&nbsp;
                    </a>
                </div>
                <br />
            </div>
        </div>
    </section>

    <!-- *******************************************************end_about******************************************************************************* -->
    <!-- *******************************************************start_skills******************************************************************************* -->
    <!--==================== ABOUT ====================-->
    <!--==================== SKILLS ====================-->

    <some-component ref="skills"></some-component>

    <section class="skills section" :class="isDark ? 'color_dark area_dark' : 'color_night area_light'"
        style="   padding-top: 8rem;">

        <h2 v-motion-pop class="section__title" :class="isDark ? 'color_dark' : 'color_night'">Skills</h2>
        <span class="section__subtitle">My technical lever</span>

        <div class="skills_container container grid">
            <div>
                <!--=========== SKILL 1 ============-->
                <div class="skills_content skills_open">
                    <div class="skills_header">
                        <i class="uil uil-brackets-curly skills_icon"></i>

                        <div>
                            <h1 class="skills_title">Frontend developer</h1>
                            <span class="skills_subtitle">More than {{ date - 2016 }} years</span>
                        </div>

                        <i class="uil uil-angle-down skills_arrow"></i>
                    </div>
                    <div class="skills_list grid">
                        <div class="skills_data">
                            <div class="skills_titles">
                                <h3 class="skills_name"><font-awesome-icon icon="fa-brands fa-html5" /> HTML - & -
                                    <font-awesome-icon icon="fa-brands fa-css3-alt" />&nbsp;CSS
                                </h3>
                                <span class="skills_number">90%</span>
                            </div>
                            <div class="skills_bar">
                                <span :class="isDark ? 'skills_percentage_dark' : 'skills_percentage_light'"
                                    class=" skills_html"></span>
                            </div>
                        </div>
                        <div class="skills_data">
                            <div class="skills_titles">
                                <h3 class="skills_name"><font-awesome-icon icon="fa-brands fa-js-square" />&nbsp;
                                    JavaScript - & - <font-awesome-icon icon="fa-solid fa-rss" />&nbsp; jQuery</h3>
                                <span class="skills_number">80%</span>
                            </div>
                            <div class="skills_bar">
                                <span :class="isDark ? 'skills_percentage_dark' : 'skills_percentage_light'"
                                    class=" skills_css"></span>
                            </div>
                        </div>
                        <div class="skills_data">
                            <div class="skills_titles">
                                <h3 class="skills_name"><font-awesome-icon icon="fa-brands fa-bootstrap" />&nbsp;bootstrap
                                </h3>
                                <span class="skills_number">80%</span>
                            </div>
                            <div class="skills_bar">
                                <span :class="isDark ? 'skills_percentage_dark' : 'skills_percentage_light'"
                                    class=" skills_javascript"></span>
                            </div>
                        </div>
                        <div class="skills_data">
                            <div class="skills_titles">
                                <h3 class="skills_name"><font-awesome-icon icon="fa-brands fa-vuejs" /> Vue.js</h3>
                                <span class="skills_number">60%</span>
                            </div>
                            <div class="skills_bar">
                                <span :class="isDark ? 'skills_percentage_dark' : 'skills_percentage_light'"
                                    class=" skills_vue"></span>
                            </div>
                        </div>
                        <div class="skills_data">
                            <div class="skills_titles">
                                <h3 class="skills_name"><font-awesome-icon
                                        icon="fa-solid fa-wand-magic-sparkles" />&nbsp;Designer</h3>
                                <span class="skills_number">60%</span>
                            </div>
                            <div class="skills_bar">
                                <span :class="isDark ? 'skills_percentage_dark' : 'skills_percentage_light'"
                                    class=" skills_vue"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <!--=========== SKILL 3 ============-->
                <div class="skills_content skills_open">
                    <div class="skills_header">
                        <i class="uil uil-server-network skills_icon"></i>

                        <div>
                            <h1 class="skills_title">back-end developer</h1>
                            <span class="skills_subtitle">More than {{ date - 2016 }} years</span>
                        </div>

                        <i class="uil uil-angle-down skills_arrow"></i>
                    </div>
                    <div class="skills_list grid">
                        <div class="skills_data">
                            <div class="skills_titles">
                                <h3 class="skills_name"><font-awesome-icon icon="fa-brands fa-php" /> &nbsp; php</h3>
                                <span class="skills_number">80%</span>
                            </div>
                            <div class="skills_bar">
                                <span :class="isDark ? 'skills_percentage_dark' : 'skills_percentage_light'"
                                    class=" skills_php"></span>
                            </div>
                        </div>
                        <div class="skills_data">
                            <div class="skills_titles">
                                <h3 class="skills_name"><font-awesome-icon icon="fa-solid fa-database" />
                                    &nbsp; SQL</h3>
                                <span class="skills_number">75%</span>
                            </div>
                            <div class="skills_bar">
                                <span :class="isDark ? 'skills_percentage_dark' : 'skills_percentage_light'"
                                    class=" skills_sql"></span>
                            </div>
                        </div>
                        <div class="skills_data">
                            <div class="skills_titles">
                                <h3 class="skills_name"><font-awesome-icon icon="fa-brands fa-laravel" /> &nbsp; Laravel
                                </h3>
                                <span class="skills_number">70%</span>
                            </div>
                            <div class="skills_bar">
                                <span :class="isDark ? 'skills_percentage_dark' : 'skills_percentage_light'"
                                    class=" skills_laravel"></span>
                            </div>
                        </div>
                        <div class="skills_data">
                            <div class="skills_titles">
                                <h3 class="skills_name"><font-awesome-icon icon="fa-brands fa-laravel" /> &nbsp; Laravel
                                    &nbsp; - With -
                                    &nbsp; <font-awesome-icon icon="fa-brands fa-vuejs" /> &nbsp; Vue.js </h3>
                                <span class="skills_number">60%</span>
                            </div>
                            <div class="skills_bar">
                                <span :class="isDark ? 'skills_percentage_dark' : 'skills_percentage_light'"
                                    class=" skills_laravel_with_vue"></span>
                            </div>
                        </div>
                        <div class="skills_data">
                            <div class="skills_titles">
                                <h3 class="skills_name"><font-awesome-icon icon="fa-solid fa-pen-nib" />&nbsp;
                                    Learn new techniques</h3>
                                <span class="skills_number">85%</span>
                            </div>
                            <div class="skills_bar">
                                <span :class="isDark ? 'skills_percentage_dark' : 'skills_percentage_light'"
                                    class=" skills_learn"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- *******************************************************end_skills******************************************************************************* -->
    <!-- *******************************************************start_Services******************************************************************************* -->
    <!--==================== Services ====================-->

    <some-component ref="services"></some-component>

    <section :dir="$t('site.dir')" class="services section"
        :class="isDark ? 'color_dark area_dark' : 'color_night area_light'" style="   padding-top: 8rem;">

        <h2 v-motion-pop class="section__title" :class="isDark ? 'color_dark' : 'color_night'">services</h2>
        <span class="section__subtitle" style="    margin-bottom: 2.1rem !important;">What is offer</span>


        <div class="container">

            <div class="row mt-4">
                <div class="col-md-4">
                    <div class="p-lg-5 p-4 shadow">
                        <div class="lc-block mb-4 "><img alt="" class="img-fluid services_img"
                                src="./assets/img/services1.png">


                            <h4 class="my-3" editable="inline"></h4>
                            <h2>Front-end Developer</h2>
                            <hr />

                            <p editable="inline"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;
                                single-page personal website
                            </p>
                            <p editable="inline"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;
                                Multi-section website
                            </p>
                            <p editable="inline"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;
                                Responsive Website with all screen size
                            </p>
                            <p editable="inline"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;
                                Multiple languages and Dark Mood
                            </p>
                            <p editable="inline"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;
                                Designing icons, images and other files
                            </p>
                            <p editable="inline"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;
                                Movement, making the site come alive
                            </p>


                            <!-- <a class="btn btn-outline-primary" href="#" role="button">Read more</a> -->
                        </div><!-- /lc-block -->
                    </div>
                </div><!-- /col -->
                <div class="col-md-4">
                    <div class="p-lg-5 p-4 shadow">
                        <div class="lc-block mb-4 "><img alt="" class="img-fluid services_img"
                                src="./assets/img/services1.png">


                            <h4 class="my-3" editable="inline"></h4>
                            <h2>back-end Developer</h2>
                            <hr />

                            <p editable="inline"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;
                                Create, integrate and manage databases
                            </p>
                            <p editable="inline"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;
                                Connection with servers and databases </p>
                            <p editable="inline"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;
                                All types of system reports
                            </p>
                            <p editable="inline"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;
                                High quality to speed up the system
                            </p>
                            <p editable="inline"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;
                                Updates and backups constantly
                            </p>
                            <p editable="inline"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;
                                Hosting the system on Internet servers
                            </p>


                            <!-- <a class="btn btn-outline-primary" href="#" role="button">Read more</a> -->
                        </div><!-- /lc-block -->
                    </div>
                </div><!-- /col -->
                <div class="col-md-4">
                    <div class="p-lg-5 p-4 shadow">
                        <div class="lc-block mb-4 "><img alt="" class="img-fluid services_img"
                                src="./assets/img/services1.png">


                            <h4 class="my-3" editable="inline"></h4>
                            <h2>Other Services</h2>
                            <hr />

                            <p editable="inline"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;
                                Participation in projects development
                            </p>
                            <p editable="inline"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;
                                Data analysis and processing
                                                        </p>
                            <p editable="inline"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;
                                Mobile app to view the website
                                                         </p>
                            <p editable="inline"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;
                                Teaching programming
                                                        </p>
                            <p editable="inline"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;
                                Design and edit photos and videos
                                                        </p>
                     
                            <!-- <p editable="inline"><font-awesome-icon icon="fa-solid fa-check" />&nbsp;
                                Hosting the system on Internet servers
                            </p> -->


                            <!-- <a class="btn btn-outline-primary" href="#" role="button">Read more</a> -->
                        </div><!-- /lc-block -->
                    </div>
                </div><!-- /col -->


            </div>

        </div>
    </section>


    <button @click="scrollToTop" ref="topButton" class="hide_top_button" style="color: white;"> &nbsp; <font-awesome-icon
            icon="fa-solid fa-arrow-alt-circle-up" />&nbsp;
    </button>
</template>
