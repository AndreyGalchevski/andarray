<template>
	<div class="contact section" id="contact-section">
		<Snowf
			:amount="50"
			:size="5"
			:speed="1.5"
			:wind="0"
			:opacity="0.8"
			:swing="1"
			:image="null"
			:zIndex="null"
			:resize="true"
			color="#3f51b5"
		/>
		<h1>Contact</h1>
		<div class="container">
			<div class="row">
				<div class="col s2 offset-s3">
					<a class="btn-floating indigo pulse" href="https://www.facebook.com/galchevski" target="_blank">
						<i class="fab fa-facebook-f media-icon" style="vertical-align: middle;"></i>
					</a>
				</div>
				<div class="col s2">
					<a class="btn-floating indigo pulse" href="https://www.linkedin.com/in/andrey-galchevski-b40999a3" target="_blank">
						<i class="fab fa-linkedin media-icon" style="vertical-align: middle;"></i>
					</a>
				</div>
				<div class="col s2">
					<a class="btn-floating indigo pulse" href="https://github.com/AndreyGalchevski" target="_blank">
						<i class="fab fa-github media-icon" style="vertical-align: middle;"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Snowf from 'vue-snowf'

export default {
	name: 'Contact',
		components: {
			Snowf
	}
}
</script>

<style scoped>
.contact {
	display: block;
	position: relative;
	background-color: white;
	z-index: 1;
}
.media-icon {
    font-size: 3vh;
    color: #eeeeee;
}
</style>
