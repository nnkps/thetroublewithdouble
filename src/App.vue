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
    <div class="section">
        <h2>Artystki Artyści</h2>
        <div class="left artists">
          <ul>
            <li v-for="artist in artists" :key="artist.slug">
              <router-link :to="{ name: 'artist', params: { slug: artist.slug }}">{{artist.name}}</router-link>
            </li>
          </ul>
        </div>
        <div class="right artists">
            <h4>Kuratorka</h4>
            <router-link :to="{ name: 'artist', params: { slug: 'katarzyna-oczkowska' }}">Katarzyna Oczkowska</router-link><br><br>
            <h4>VR ARTIST/WSPÓŁPRACA KURATORSKA</h4>
            <router-link :to="{ name: 'artist', params: { slug: 'karina-gorzkowska' }}">Karina K Gorzkowska</router-link><br>
            <router-link :to="{ name: 'artist', params: { slug: 'maja-szerel' }}">Maja Szerel</router-link>
        </div>
    </div>
    <div class="section">
      <div class="hub-link facebook-link">
        <img class="facebook" src="./assets/facebook.png"><br>
        <a href="https://www.facebook.com/events/335462634505379/">fb.com/events/335462634505379</a>
      </div>
    </div>
    <div class="section">
      <div class="hub-link">
        <img class="mozilla" src="./assets/mozilla-hubs.png"><br>
        <a href="http://hub.link/t7ZhGX6">hub.link/t7ZhGX6</a>
      </div>
    </div>
    <div class="footer">
      <p class="smaller">Dofinansowano ze środków Narodowego Centrum Kultury w ramach Programu Kultura w sieci.</p>
    </div>
  </div>
</template>


<script>
import artists from './components/json/artists.json'
import exhibitions from './components/json/exhibitions.json'

export default {
  name: 'App',
  data () {
    return {
			artists,
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

.info {
  text-align: left;
}

.smaller {
  font-size: 0.8em;
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
  margin-top: 100px;
  background-color: black;
  color: white;
  padding: 70px 5% 10px;
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

.section-main h2 {
  color: black;
  background-color: #ff00ff;
}

.artists ul {
  list-style-type: none;
  padding: 0;
}
.artists li {
  //display: inline-block;
  margin: 0 10px;
}
.artists a {
  color: black;
  text-decoration: none;
}

.artists a:hover {
  cursor: cell;
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

}
</style>
