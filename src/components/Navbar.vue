<template>

	<div class="myNavbar">

		<div class="navbar-fixed">

			<nav>

				<div class="nav-wrapper indigo">

					<a class="sidenav-trigger" ref="#" data-target="slide-out">
						<i class="material-icons indigo">menu</i>
					</a>

					<div class="brand-logo center">
						<div class="left-bracket fadeInLefty">[</div>
						<div class="first-amp fadeInDowny">&</div>
						<div class="second-amp fadeInUpy">&</div>
						<div class="right-bracket fadeInRighty">]</div>
					</div>
					
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
			<li><a class="sidenav-close" href="#home-section">Home</a></li>
			<li><a class="sidenav-close" href="#experience-section">Experience</a></li>
			<li><a class="sidenav-close" href="#portfolio-section">Portfolio</a></li>
			<li><a class="sidenav-close" href="#contact-section">Contact</a></li>
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
ul li a {
	font-size: 2.5vh;
}
.brand-logo {
	font-family: 'Merriweather', serif;
	font-size: 50px;
}
.brand-logo div {
	display: inline-block;
}
.left-bracket {
	color: #03a9f4;
}
.first-amp {
	color: white;
}
.second-amp {
	color: white;
}
.right-bracket {
	color: #03a9f4;
}
</style>
