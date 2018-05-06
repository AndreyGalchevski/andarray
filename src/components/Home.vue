<template>
	<div class="home" id="home-section">
		<h1>Andrey Galchevski</h1>
		<img 
			class="circle responsive-img z-depth-5" 
			height="80vh" 
			width="100vh" 
			src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1524504338/andarray/avatar/ava.png" />
        <p class="flow-text bounce-on-hover">Passionate about technology</p>
        <p class="flow-text shake-on-hover">Never stop learning</p>
        <p class="flow-text swing-on-hover">Building a better world</p>
        <p class="flow-text rubberBand-on-hover">Through web</p>
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
.bounce-on-hover:hover {
	-webkit-animation: bounce 1s;
	animation: bounce 1s;
}
.shake-on-hover:hover {
	-webkit-animation: shake 1s;
	animation: shake 1s;
}
.swing-on-hover:hover {
	-webkit-animation: swing 1s;
	animation: swing 1s;
}
.rubberBand-on-hover:hover {
	-webkit-animation: rubberBand 1s;
	animation: rubberBand 1s;
}
</style>
