<template>
	<div class="home" id="home-section">
		<div class="zoomIny">
			<h1>Andrey Galchevski</h1>
			<img 
				class="circle responsive-img z-depth-5 zoomIny" 
				height="80vh" 
				width="100vh" 
				src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1524504338/andarray/avatar/ava.png" />
		</div>
        <p class="flow-text bouncy">Passionate about technology</p>
        <p class="flow-text shaky">Never stop learning</p>
        <p class="flow-text swingy">Building a better world</p>
        <p class="flow-text bandy">Through web</p>
	</div>
</template>

<script>
export default {
	name: 'Home',
	props: {
		msg: String
	}
}
</script>

<style scoped>
.home {
	display: block;
	position: relative;
	background-color: white;
	z-index: 1;
}
.zoomIny {
	-webkit-animation: zoomIn 2s;
	animation: zoomIn 2s;
	-webkit-animation-duration: 2s;
	animation-duration: 2s;
	-webkit-animation-delay: 0s;		
	animation-delay: 0s;
}
.bouncy {
	-webkit-animation: bounce 1.5s;
	animation: bounce 1.5s;
	-webkit-animation-duration: 1.5s;
	animation-duration: 1.5s;
	-webkit-animation-delay: 2s;		
	animation-delay: 2s;
}
.shaky {
	-webkit-animation: shake 1.5s;
	animation: shake 1.5s;
	-webkit-animation-duration: 1.5s;
	animation-duration: 1.5s;
	-webkit-animation-delay: 3s;		
	animation-delay: 3s;
}
.swingy {
	-webkit-animation: swing 1.5s;
	animation: swing 1.5s;
	-webkit-animation-duration: 1.5s;
	animation-duration: 1.5s;
	-webkit-animation-delay: 4.5s;		
	animation-delay: 4.5s;
}
.bandy {
	-webkit-animation: rubberBand 1.5s;
	animation: rubberBand 1.5s;
	-webkit-animation-duration: 1.5s;
	animation-duration: 1.5s;
	-webkit-animation-delay: 6s;		
	animation-delay: 6s;
}
</style>
