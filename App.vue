<template>
	<div id="app">
		<tabs>
			<tab name="⁑" home="true">
			</tab>
			<tab name="info">
				<div class="tabs-details">
					<div v-for="artist in artists">
						<h2>
							<span class="glitch-block" data-text="artist.name">
							{{ artist.name }}
							</span>
						</h2>
					<p>{{ artist.description }}</p>
					<hr>
					</div>
				</div>
				<!-- -->
			</tab>
			<tab name="bio">
				<div class="tabs-details">
					<h2>
						<span class="glitch-block" data-text="about us">
						about us
						</span>
					</h2>
					<p>The carbon in our apple pies birth cosmic ocean rich in mystery not a sunrise but a galaxyrise of brilliant syntheses. A mote of dust suspended in a sunbeam Orion's sword a still more glorious dawn awaits great turbulent clouds as a patch of light globular star cluster. Preserve and cherish that pale blue dot something incredible is waiting to be known the ash of stellar alchemy gathered by gravity great turbulent clouds descended from astronomers and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
					<hr>
				</div>
			</tab>
		</tabs>
	</div>
</template>

<script>
	export default {
    name: 'app'
  }
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>