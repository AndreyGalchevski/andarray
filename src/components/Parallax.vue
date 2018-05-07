<template>
	<div class="ParallaxContainer">
		<img :src="imgSrc">
	</div>
</template>

<script>
export default {
	name: 'Parallax',
	props: {
		imgSrc: String
	}
}
</script>

<style>
.ParallaxContainer {
	display: flex;
	flex: 1 0 auto;
	position: relative;
	height: 90vh;
	transform: translateZ(-1px) scale(2);
	z-index: -1;
}
</style>
