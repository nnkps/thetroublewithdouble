<template>
    <div class="section">
        <h2>VR Exhibition</h2>
        <div>
            <p v-for="(paragraph, index) in currentExhibition.paragraphs" :key="index" v-html="paragraph">
            </p>
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
