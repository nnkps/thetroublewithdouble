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
            <h2>VR Exhibition</h2>
            <div>
                <p v-for="(paragraph, index) in currentExhibition.paragraphs" :key="index" v-html="paragraph">
                </p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import exhibitions from './json/exhibitions.json'

export default {
    name: 'exhibition',
    data () {
        return {
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
</style>
