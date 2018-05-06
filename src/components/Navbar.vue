<template>
	<div class="navbar">
		<div class="navbar-fixed">
            <nav>
                <div class="nav-wrapper grey lighten-5"><a class="sidenav-trigger" ref="#" data-target="slide-out"><i class="material-icons grey darken-4">menu</i></a>
                    <a  
						href="#"
						class="brand-logo center">
						<img src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1525625855/andarray/logo/logo.png"/>
					</a>
					<ul class="class hide-on-med-and-down">
                        <li><a href="#home-section">Home</a></li>
                        <li><a href="#experience-section">Experience</a></li>
                        <li><a href="#portfolio-section">Portfolio</a></li>
                        <li><a href="#contact-section">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <ul class="sidenav" id="slide-out">
            <li><a href="#home-section" onclick="closeSideNav()">Home</a></li>
            <li><a href="#experience-section" onclick="closeSideNav()">Experience</a></li>
            <li><a href="#portfolio-section" onclick="closeSideNav()">Portfolio</a></li>
            <li><a href="#contact-section" onclick="closeSideNav()">Contact</a></li>
        </ul>
	</div>
</template>

<script>
export default {
	name: 'Navbar',
	props: {
		msg: String
	}
}
</script>

<style scoped>
nav ul li a {
    color: #212121;
}
.brand-logo img{
	height: 10vh;
	width: 15vh;
}
</style>
