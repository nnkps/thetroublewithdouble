<template>
    <div>
    <div class="section-main-inside odd" v-bind:class="{'even': index % 2 === 0 }" v-for="(artist, index) in artists" :key="index">
        <div class="section">
            <h2>{{ artist.name }}</h2>
            <p>
                {{ artist.description }}
            </p>
        </div>
    </div>
    </div>
</template>

<script>
import artists from './json/artists.json'

export default {
    name: 'bio',
    data () {
        return {
            artists
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.odd h2 {
    color: white;
}
.even {
    background-color: #ff00ff;
}

.even h2 {
    background-color: black;
    color: white;
}
</style>
