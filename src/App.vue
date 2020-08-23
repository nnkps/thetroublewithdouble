<template>
  <div id="app">
    <div class="header">
      <nav class="navigation">
        <router-link class="home" to="/"></router-link>
        <router-link v-for="exhibition in exhibitions" :key="exhibition.slug" :to="{name: 'exhibition', params: { slug: exhibition.slug }}">{{ exhibition.name }}</router-link>
        <router-link to="/bio">Bio</router-link>
      </nav>
    </div>
    <div class="wrapper">
      <transition name="fade" mode="out-in" @beforeLeave="beforeLeave" @enter="enter" @afterEnter="afterEnter">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
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
        <div class="facebook-link">
          <a href="https://www.facebook.com/events/335462634505379/"><img class="facebook" src="./assets/facebook.png"></a>
        </div>
        <div class="hub-link">
          <a href="http://hub.link/t7ZhGX6">hub.link/t7ZhGX6</a><br>
          <img class="mozilla" src="./assets/mozilla-hubs.png">
        </div>
      </div>
    </div>
    <div class="footer">
      <p>Dofinansowano ze środków Narodowego Centrum Kultury w ramach Programu Kultura w sieci.</p>
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
      prevHeight: 0
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
  }
}
</script>

<style>
@font-face {
  font-family: "Lato";
  src: url("assets/fonts/Lato-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Lato";
  src: url("assets/fonts/Lato-Bold.ttf") format("truetype");
  font-weight: bold;
}


#app {
  background-color: #ff00ff;
  font-family: "Lato";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  display: block;
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

.navigation a.router-link-active, .artists a.router-link-active {
  color: #00ff01;
}

.navigation a.home {
  width: 1.2em;
  background-color: #00ff01;
}

.navigation a:hover {
  background-color: #00ff01;
  color: black;
}

.wrapper {
  text-align: justify;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 70px;
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
  margin-bottom: 60px;
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

.facebook-link {
  display: inline-block;
}

.hub-link {
  vertical-align: top;
  font-weight: bold;
  color: black;
  display: inline-block;
  font-size: 70px;
  float: right;
  text-align: right;
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

</style>
