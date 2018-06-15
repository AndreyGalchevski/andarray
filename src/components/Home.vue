<template>

	<div class="home section" id="home-section" ref="homeRef">

		<div class="zoomIny">
			<h1>Andrey Galchevski</h1>
			<img 
				class="circle responsive-img z-depth-5 zoomIny" 
				height="80vh" 
				width="100vh"
				src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1524504338/andarray/avatar/ava.png"
			/>
		</div>

		<div>
			<p class="flow-text bouncy">Passionate about technology</p>
			<p class="flow-text shaky">Never stop learning</p>
			<p class="flow-text swingy">Building a better world</p>
			<p class="flow-text bandy">Through web</p>
		</div>

	</div>

</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'

export default {
	name: 'Home',
	data() {
		return {
			scrollSpyInstance: null
		}
	},
	mounted() {
		this.scrollSpyInstance = M.ScrollSpy.init(this.$refs.homeRef, {})
	}
}
</script>

<style scoped>
.home {
	background-color: white;
}
/* .zoomIny {
	-webkit-animation: zoomIn 1s;
	animation: zoomIn 1s;
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-delay: 0s;		
	animation-delay: 0s;
}
.bouncy {
	-webkit-animation: bounce 1s;
	animation: bounce 1s;
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-delay: 1s;		
	animation-delay: 1s;
}
.shaky {
	-webkit-animation: shake 1s;
	animation: shake 1s;
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-delay: 2s;		
	animation-delay: 2s;
}
.swingy {
	-webkit-animation: swing 1s;
	animation: swing 1s;
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-delay: 3s;		
	animation-delay: 3s;
}
.bandy {
	-webkit-animation: rubberBand 1s;
	animation: rubberBand 1s;
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-delay: 4s;		
	animation-delay: 4s;
} */
</style>
