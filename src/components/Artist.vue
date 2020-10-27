<template>
    <div class="section-main-inside">
        <div class="section">
            <h2>{{ currentArtist.name }}</h2>
            <div v-html="currentArtist.description">
            </div>
        </div>
    </div>
</template>

<script>
import artists from './json/artists.json'

export default {
    name: 'artist',
    data () {
        return {
            artists
        }
    },
    computed: {
        currentArtist: function() {
            for(var index in this.artists) {
                if (this.artists[index].slug == this.$route.params.slug) {
                    return this.artists[index];
                }
            }
            return this.artists[0];
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
