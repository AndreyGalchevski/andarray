<template>

	<div class="flash-logo bounceOutUpy">

		<div class="pulsy">

			<div class="left-bracket fadeInLefty">[</div>
			<div class="first-amp fadeInDowny">&</div>
			<div class="second-amp fadeInUpy">&</div>
			<div class="right-bracket fadeInRighty">]</div>

		</div>

	</div>
	
</template>

<style scoped>
.flash-logo {
	font-family: 'Merriweather', serif;
	font-size: 100px;
	margin-top: 30vh;
}
.flash-logo div {
	display: inline-block;
}
.left-bracket {
	color: #03a9f4;
}
.first-amp {
	color: #3f51b5;
	-webkit-text-stroke: 0.8px #03a9f4;
	margin-top: 50px;
}
.second-amp {
	color: #3f51b5;
	-webkit-text-stroke: 0.8px #03a9f4;
	margin-top: 50px;
}
.right-bracket {
	color: #03a9f4;
}
.fadeInLefty {
	-webkit-animation: fadeInLeftBig 2s;
	animation: fadeInLeftBig 2s;
	-webkit-animation-duration: 2s;
	animation-duration: 2s;
	-webkit-animation-delay: 0s;		
	animation-delay: 0s;
}
.fadeInDowny {
	-webkit-animation: fadeInDownBig 2s;
	animation: fadeInDownBig 2s;
	-webkit-animation-duration: 2s;
	animation-duration: 2s;
	-webkit-animation-delay: 0s;		
	animation-delay: 0s;
}
.fadeInUpy {
	-webkit-animation: fadeInUpBig 2s;
	animation: fadeInUpBig 2s;
	-webkit-animation-duration: 2s;
	animation-duration: 2s;
	-webkit-animation-delay: 0s;		
	animation-delay: 0s;
}
.fadeInRighty {
	-webkit-animation: fadeInRightBig 2s;
	animation: fadeInRightBig 2s;
	-webkit-animation-duration: 2s;
	animation-duration: 2s;
	-webkit-animation-delay: 0s;		
	animation-delay: 0s;
}
.pulsy {
	-webkit-animation: pulse 1s;
	animation: pulse 1s;
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-delay: 1s;
	animation-delay: 1s;
	-webkit-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
}
.bounceOutUpy {
	-webkit-animation: bounceOutUp 1s;
	animation: bounceOutUp 1s;
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-delay: 4s;		
	animation-delay: 4s;
}
</style>