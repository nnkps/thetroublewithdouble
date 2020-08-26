<template>
  <div id="app">
    <div class="header">
      <div v-if="!isMobile" class="navigation">
        <router-link class="home" to="/"></router-link>
        <router-link to="/info">Info</router-link>
        <router-link v-for="exhibition in exhibitions" :key="exhibition.slug" :to="{name: 'exhibition', params: { slug: exhibition.slug }}">{{ exhibition.name }}</router-link>
        <router-link to="/bio">Bio</router-link>
      </div>
      <div v-else class="navigation" v-bind:class="{'responsive': responsive }">
        <a href="javascript:void(0);" class="hamburger" v-on:click="responsive = !responsive">&#9776;</a>
        <div class="hamburger-menu">
          <transition name="fade" mode="out-in" @beforeLeave="beforeLeave" @enter="enter" @afterEnter="afterEnter">
            <div v-show="responsive">
              <router-link to="/">Home</router-link>
              <router-link to="/info">Info</router-link>
              <router-link v-for="exhibition in exhibitions" :key="exhibition.slug" :to="{name: 'exhibition', params: { slug: exhibition.slug }}">{{ exhibition.name }}</router-link>
              <router-link to="/bio">Bio</router-link>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="section-main">
      <transition name="fade" mode="out-in" @beforeLeave="beforeLeave" @enter="enter" @afterEnter="afterEnter">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </div>
    <div class="footer">
      <div class="footer-inside">
        <div class="footer-text">
          <p class="smaller">Wykonanie strony: <a href="https://nnkps.github.io/">Anna Kupś (@nnkps)</a>, projekt UI: <a href="https://instagram.com/karinae_k_g">Karina Gorzkowska</a></p>
          <p class="smaller">Dofinansowano ze środków Narodowego Centrum Kultury w ramach Programu Kultura w sieci.</p>
          <p class="smaller">We współpracy z Fundacja Grey House Galeria Szara Kamienica.</p>
        </div>
        <div class="footer-logos">
          <img class="logo1" src="./assets/greyhouse_logo.jpg">
          <img class="logo1" src="./assets/kulturawsieci-neg.jpg">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import exhibitions from './components/json/exhibitions.json'

export default {
  name: 'App',
  data () {
    return {
      exhibitions,
      prevHeight: 0,
      responsive: false,
      isMobile: window.innerWidth < 800
    }
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 800;
  })
}
}
</script>

<style>
@font-face {
  font-family: "Lato";
  src: url("assets/fonts/Lato-Bold.ttf");
  font-weight: bold;
}

@font-face {
  font-family: "Lato";
  src: url("assets/fonts/Lato-LightItalic.ttf");
  font-style: italic, oblique;
}

@font-face {
  font-family: "Lato";
  src: url("assets/fonts/Lato-Regular.ttf");
}

#app {
  background-color: #ff00ff;
  font-family: "Lato";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  display: block;
}

sup {
    vertical-align: top; font-size: 0.6em;
}

.info {
  text-align: justify;
}

.smaller {
  font-size: 0.8em;
}

.annotation {
  font-size: 0.8em;
  text-align: left;
}

.annotation a {
  color: #ff00ff;
}

.info .smaller {
  text-align: right;
}

.navigation {
  display: table;
  width: 100%;
  table-layout: fixed;    /* For cells of equal size */
}

.header {
  padding: 15px;
}

.navigation a {
  display: table-cell;
  text-align: center;
  background-color: black;
  color: white;
  font-size: 0.8em;
  border: 0.6em solid #ff00ff;
  padding: 1em;
  text-decoration: none;
  text-transform: uppercase;
}

.navigation a.router-link-exact-active, .artists a.router-link-exact-active {
  color: #00ff01;
}

.navigation a.home {
  width: 1.5em;
  background-color: #00ff01;
}

.navigation a:hover {
  background-color: #00ff01;
  color: black;
}


.footer {
  background-color: black;
  color: white;
  width: 100%;
  overflow: hidden;
}

.footer-text {
  float: left;
  width: 50%;
}

.footer-logos {
  text-align: right;
  overflow: hidden;
}

.logo1 {
  height: 60px;
  padding: 1px;
}

.footer-inside {
  padding: 70px 5% 10px;
}

.creators {
  text-align: right;
}

.footer a {
  color: #00ff01;
  background-color: black;
}

.footer a:hover {
  background-color: #00ff01;
  color: black;
}

h1, h2, h3, h4, h5, h6 {
  display: table;
  text-transform: uppercase;
  background-color: #00ff01;
}

.section {
  text-align: justify;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 70px;
}

.section-main {
  background-color: black;
  color: white;
}

.section-main-inside {
  padding: 0.5em;
}

.info-section {
    margin-bottom: 30px;
}

.section-main h2 {
  color: black;
  background-color: #ff00ff;
}


.left {
  display: inline-block;
  width: 50%;
}
.right {
  display: inline-block;
  vertical-align: top;
}

.facebook {
  width: 80px;
}

.hub-link {
  font-weight: bold;
  color: black;
  font-size: 3em;
  text-align: right;
}

.facebook-link {
  font-size: 2em;
}

.hub-link a {
  background-color: #00ff01;
  color: black;
}

.mozilla {
  background-color: transparent;
  width: 200px;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.navigation a.hamburger {
  display: none;
}

@media screen and (max-width: 800px) {
  .section {
    text-align: justify;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 70px;
  }

  .navigation {
    display: block;
    overflow: hidden;
    position: relative;
  }

  .navigation a {
    border: 2px solid #ff00ff;
    padding: 0.4em;
    height: 1.3em;
    vertical-align: middle;
    display: block;
    text-align: left;
  }

  .navigation a.hamburger {
    float: right;
    display: block;
    width: 1.5em;
    border-left: 4px solid #ff00ff;
    text-align: center;
  }

  .navigation a.hamburger-menu {
    float: left;
  }

  .navigation.responsive a.hamburger {
    border-left: 4px solid #ff00ff;
  }

  .hub-link {
    font-size: 1.5em;
  }

  .facebook-link {
    font-size: 1.1em;
  }

  .info {
    text-align: left;
  }

  .left {
    width: 100%
  }

  .footer-text {
    width: 100%;
    float: none;
  }

  .footer-logos {
    text-align: center;
  }

}
</style>
