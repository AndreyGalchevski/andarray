<template>

  <div id="app">

		<Flash class="flash" v-if="show"/>

		<div v-else>

			<Navbar/>
			
			<Home/>

			<div class="parallax-container">
				<div class="parallax" ref="parallax1">
					<img src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1524547972/andarray/parallax/code.jpg">
				</div>
			</div>

			<Experience/>

			<div class="parallax-container">
				<div class="parallax" ref="parallax2">
					<img src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1524547053/andarray/parallax/nature.jpg">
				</div>
			</div>

			<Portfolio/>

			<div class="parallax-container">
				<div class="parallax" ref="parallax3">
					<img src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1524547053/andarray/parallax/space.jpg">
				</div>
			</div>

			<Contact/>

		</div>

  </div>

</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'

import Flash from './components/Flash.vue'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Experience from './components/Experience.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'app',
	data() {
		return {
			show: true,
			parallaxInstance1: null,
			parallaxInstance2: null,
			parallaxInstance3: null
		}
	},
	mounted() {
		setTimeout(() => {
			this.show = false
		}, 4600)
		setTimeout(() => {
			this.parallaxInstance1 = M.Parallax.init(this.$refs.parallax1, {})
			this.parallaxInstance2 = M.Parallax.init(this.$refs.parallax2, {})
			this.parallaxInstance3 = M.Parallax.init(this.$refs.parallax3, {})
		}, 4700)
	},
  components: {
		Flash,
		Navbar,
		Home,
		Experience, 
		Portfolio,
		Contact
  }
}
</script>

<style>
#app {
	font-family: 'PT Serif', serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}
</style>
