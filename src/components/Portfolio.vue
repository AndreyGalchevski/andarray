<template>
	<div class="portfolio section" id="portfolio-section">
		<h1>Portfolio</h1>
        <div class="row">
            <div class="col s12 m4" v-for="project in projects" :key="project.name">
                <div class="card">
                    <div class="card-image">
						<img 
							:src="project.imgSrc" 
							:alt="project.imgAlt" />
						<a 
							class="btn-floating halfway-fab waves-effect waves-light red" 
							:href="project.link"
                            target="_blank">
							<i class="material-icons">link</i>
						</a>
					</div>
                    <div class="card-content">
                        <p class="flow-text">{{project.name}}</p>
						<span v-for="tech in project.techs" :key="tech.name">
							<img 
								class="tech-logo" 
								:src="tech.logoSrc"
								:alt="tech.logoAlt" />
						</span>
                    </div>
                </div>
            </div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Portfolio',
	data () {
		return {
			projects: [
				{
					name: 'Total Liberation',
					imgSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1524496785/andarray/portfolio/totalliberation-website.png',
					imgAlt: 'Total Liberation Israel website screenshot',
					link: 'https://www.totalliberationisrael.com',
					techs: [
						{
							name: 'Bootstrap',
							logoSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1526221581/andarray/tech/bootstrap.png',
							logoAlt: 'Bootstrap CSS framework logo image'
						},
						{
							name: 'Vue',
							logoSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1526221582/andarray/tech/vue.png',
							logoAlt: 'VueJS logo image'
						},
						{
							name: 'Express',
							logoSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1526221581/andarray/tech/express.png',
							logoAlt: 'ExpressJS logo image'
						},
						{
							name: 'Node',
							logoSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1526221582/andarray/tech/node.png',
							logoAlt: 'NodeJS logo image'
						},
						{
							name: 'Mongo',
							logoSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1526221582/andarray/tech/mongo.png',
							logoAlt: 'MongoDB logo image'
						}
					]
				},
				{
					name: 'VeganFuel',
					imgSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1524496784/andarray/portfolio/veganfuel-website.png',
					imgAlt: 'VeganFuel app screenshot from Google Play website',
					link: 'https://play.google.com/store/apps/details?id=andreygalchevski.veganfuel&amp;hl=en_GB',
					techs: [
						{
							name: 'Ionic',
							logoSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1526221581/andarray/tech/ionic.png',
							logoAlt: 'Ionic 2 logo image'
						},
						{
							name: 'Angular',
							logoSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1526221581/andarray/tech/angular.png',
							logoAlt: 'Angular logo image'
						},
						{
							name: 'Cordova',
							logoSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1526221581/andarray/tech/cordova.png',
							logoAlt: 'Cordova logo image'
						}
					]
				},
				{
					name: 'Insapient',
					imgSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1524496783/andarray/portfolio/insapient-website.png',
					imgAlt: 'Insapient band website screenshot',
					link: 'https://www.google.com',
					techs: [
						{
							name: 'Materialize',
							logoSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1526221582/andarray/tech/materialize.png',
							logoAlt: 'Materialize CSS framework logo image'
						},
						{
							name: 'HTML',
							logoSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1526233059/andarray/tech/html.png',
							logoAlt: 'HTML logo image'
						},
						{
							name: 'CSS',
							logoSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1526233060/andarray/tech/css.png',
							logoAlt: 'CSS logo image'
						},
						{
							name: 'JS',
							logoSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1526233060/andarray/tech/js.png',
							logoAlt: 'JavaScript logo image'
						}
					]
				}
			]
		}
	}
}
</script>

<style scoped>
.portfolio {
	display: block;
	position: relative;
	background-color: white;
	z-index: 1;
}
.tech-logo {
	-webkit-align-content: center;
	align-content: center;
	width: 5vh;
	height: 5vh;
	margin: 1vh;
}
</style>
