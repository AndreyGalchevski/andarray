<template>
	<div class="contact">
		<h1>Contact</h1>
		<div class="container">
			<div class="row">
				<div class="col s2 offset-s3"><a class="btn-floating grey darken-4 pulse" href="https://www.facebook.com/galchevski" target="_blank"> <i class="fab fa-facebook-f media-icon" style="vertical-align: middle;"></i></a></div>
				<div class="col s2"><a class="btn-floating grey darken-4 pulse" href="https://www.linkedin.com/in/andrey-galchevski-b40999a3" target="_blank"> <i class="fab fa-linkedin media-icon" style="vertical-align: middle;"></i></a></div>
				<div class="col s2"><a class="btn-floating grey darken-4 pulse" href="https://plus.google.com/u/0/100544946651633067296" target="_blank"> <i class="fab fa-google media-icon" style="vertical-align: middle;"></i></a></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Contact',
	props: {
		msg: String
	}
}
</script>

<style scoped>
.media-icon {
    font-size: 3vh;
    color: #eeeeee;
}
</style>
