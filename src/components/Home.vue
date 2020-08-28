<template>
    <div>
        <div v-if="!this.$parent.isMobile">
            <video width="100%" autoplay loop muted playsinline poster="../assets/videos/home/poster.jpg">
                <source src="../assets/videos/home/desktop.webm"
                        type="video/webm">
                <source src="../assets/videos/home/desktop.mp4"
                        type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video>
        </div>
        <div v-else>
            <video width="100%" autoplay loop playsinline poster="../assets/videos/home/poster.jpg">
                <source src="../assets/videos/home/mobile.webm"
                        type="video/webm">
                <source src="../assets/videos/home/mobile.mp4"
                        type="video/mp4">
                Sorry, your browser doesn't support embedded videos.
            </video>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
