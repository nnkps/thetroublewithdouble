<template>
    <div>
        <video width="100%" autoplay loop v-show="currentExhibition.slug == 'thetroublewithdouble'">
            <source src="../assets/TTWD_anim.mp4"
                    type="video/mp4">
            Sorry, your browser doesn't support embedded videos.
        </video>
        <video width="100%" autoplay loop v-show="currentExhibition.slug == 'terror'">
            <source src="../assets/terror_02.mp4"
                    type="video/mp4">
            Sorry, your browser doesn't support embedded videos.
        </video>
        <div class="section-main-inside">
            <div class="section">
                <h2>VR Exhibition <span v-if="currentExhibition.event"><span class="slash">/</span> Site specific</span></h2>
                <div>
                    <p v-for="(paragraph, index) in currentExhibition.paragraphs" :key="index" v-html="paragraph">
                    </p>
                </div>
            </div>
        </div>
        <div class="section-main-inside section-main-bottom">
            <div class="section" v-if="currentExhibition.artists">
                <h2>Artystki<span class="slash">/</span>Artyści</h2>
                <div class="left artists">
                <ul>
                    <li v-for="artist in currentExhibition.artists" :key="artist.slug">
                    <router-link :to="{ name: 'artist', params: { slug: artist.slug }}">{{artist.name}}</router-link>
                    </li>
                </ul>
                </div>
                <div class="right artists">
                    <h4>Kuratorka</h4>
                    <ul>
                        <li v-for="artist in currentExhibition.curators" :key="artist.slug">
                        <router-link :to="{ name: 'artist', params: { slug: artist.slug }}">{{artist.name}}</router-link>
                        </li>
                    </ul>
                    <h4>VR ARTIST <span class="slash">/</span> WSPÓŁPRACA KURATORSKA</h4>
                    <ul>
                        <li>
                            <router-link :to="{ name: 'artist', params: { slug: 'karina-gorzkowska' }}">Karina Gorzkowska</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'artist', params: { slug: 'maja-szerel' }}">Maja Szerel</router-link>
                        </li>
                    </ul>
                    <h4>Animation</h4>
                    <ul>
                        <li>
                            <router-link :to="{ name: 'artist', params: { slug: 'karina-gorzkowska' }}">Karina Gorzkowska</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="section" v-if="currentExhibition.fb && !currentExhibition.event">
                <div class="hub-link facebook-link">
                    <img class="facebook" src="../assets/facebook.png"><br>
                    <a :href="currentExhibition.fb.link">{{ currentExhibition.fb.display }}</a>
                </div>
            </div>
            <div class="section" v-if="currentExhibition.hublink">
                <div class="hub-link">
                    <img class="mozilla" src="../assets/mozilla-hubs.png"><br>
                    <a :href="'http://' + currentExhibition.hublink.link">{{ currentExhibition.hublink.link }}</a>
                </div>
            </div>
        </div>
        <div class="section-main-inside section-main-bottom hub" v-if="currentExhibition.hublink">
            <div class="section">
            </div>
        </div>
        <div class="section-main-inside section-main-bottom">
            <div class="section" v-if="currentExhibition.event">
                <h2>Secret party</h2>
                <div class="left artists">
                    <h4>Lineup</h4>
                    <ul>
                        <li v-for="artist in currentExhibition.event.lineup" :key="artist.slug">
                        <router-link :to="{ name: 'artist', params: { slug: artist.slug }}">{{artist.name}}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="right artists">
                    <h4>Site Specific</h4>
                    <ul>
                        <li v-for="artist in currentExhibition.event.site" :key="artist.slug">
                        <router-link :to="{ name: 'artist', params: { slug: artist.slug }}">{{artist.name}}</router-link> <span class="room">({{ artist.room }})</span>
                        </li>
                    </ul>
                </div>
                <div class="hub-link facebook-link">
                    <img class="facebook" src="../assets/facebook.png"><br>
                    <a :href="currentExhibition.fb.link">{{ currentExhibition.fb.display }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import artists from './json/artists.json'
import exhibitions from './json/exhibitions.json'


export default {
    name: 'exhibition',
    data () {
        return {
            artists,
            exhibitions
        }
    },
    computed: {
        currentExhibition: function() {
            for(var index in this.exhibitions) {
                if (this.exhibitions[index].slug == this.$route.params.slug) {
                    return this.exhibitions[index];
                }
            }
            return this.exhibitions[0];
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.section-main-bottom {
    background-color: #ff00ff;
}

h2, h4 {
    text-align: left;
}

.section-main-bottom h2, .section-main-bottom h4 {
    background-color: #00ff01;
    color: black;
}

.slash {
    color: white;
}


.artists ul {
  list-style-type: none;
  padding: 0;
  padding-bottom: 10px;
}
.artists li {
  margin: 0px;
  padding: 1px 0;
}

.artists li:before {
  content: "/";
  padding-right: 5px;
}

.artists a {
  color: black;
  text-decoration: none;
}

.artists a:hover {
  cursor: cell;
}

.hub {
    background-color: #00ff01;
}

.hub .section {
    text-align: center;
    color: black;
    font-size: 2em;
    font-weight: bold;
    height: 100px;
    line-height: 100px;
    margin-bottom: 0px;
}

.room {
    color: white;
}
</style>
