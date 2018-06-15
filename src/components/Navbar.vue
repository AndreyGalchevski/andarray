<template>

	<div class="myNavbar">

		<div class="navbar-fixed">

			<nav>
				<div class="nav-wrapper indigo">
					<a class="sidenav-trigger" ref="#" data-target="slide-out">
						<i class="material-icons indigo">menu</i>
					</a>
					<a  
						href="#"
						class="brand-logo center">
						<img src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1525671114/andarray/logo/logo.png" style="vertical-align: middle"/>
					</a>
					<ul class="hide-on-med-and-down">
						<li><a href="#home-section">Home</a></li>
						<li><a href="#experience-section">Experience</a></li>
						<li><a href="#portfolio-section">Portfolio</a></li>
						<li><a href="#contact-section">Contact</a></li>
					</ul>
				</div>
			</nav>
			
		</div>

		<ul class="sidenav indigo" id="slide-out" ref="mySideNav">
			<li><a href="#home-section" v-on:click="closeSideNav()">Home</a></li>
			<li><a href="#experience-section" v-on:click="closeSideNav()">Experience</a></li>
			<li><a href="#portfolio-section" v-on:click="closeSideNav()">Portfolio</a></li>
			<li><a href="#contact-section" v-on:click="closeSideNav()">Contact</a></li>
		</ul>

	</div>

</template>

<script>
import M from 'materialize-css/dist/js/materialize.js'

export default {
	name: 'Navbar',
	data () {
		return {
			sideNavInstance: null
		}
	},
	mounted () {
		this.sideNavInstance = M.Sidenav.init(this.$refs.mySideNav, {})
	},
	methods: {
		closeSideNav() {
			if (this.sideNavInstance.isOpen) {
				this.sideNavInstance.close()
			}
		}
	}
}
</script>

<style scoped>
nav ul li a, .sidenav li a {
    color: #fafafa;
}
.brand-logo img{
	height: 5vh;
	width: 11vh;
	margin-bottom: 1vh;
}
ul li a {
	font-size: 3vh;
}
</style>
