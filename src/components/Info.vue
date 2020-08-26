<template>
    <div class="section-main-inside info-section">
        <div class="section">
            <h2>Info</h2>
            <div class="info">
                <p v-for="(paragraph, index) in info.paragraphs" :key="index" v-html="paragraph">
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import info from './json/info.json'


export default {
    name: 'info',
    data () {
        return {
            info
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
    line-height: 130%;
}
</style>
