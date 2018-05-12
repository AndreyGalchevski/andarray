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
					link: 'https://www.totalliberationisrael.com'
				},
				{
					name: 'VeganFuel',
					imgSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1524496784/andarray/portfolio/veganfuel-website.png',
					imgAlt: 'VeganFuel app screenshot from Google Play website',
					link: 'https://play.google.com/store/apps/details?id=andreygalchevski.veganfuel&amp;hl=en_GB'
				},
				{
					name: 'Insapient',
					imgSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1524496783/andarray/portfolio/insapient-website.png',
					imgAlt: 'Insapient band website screenshot',
					link: 'https://www.google.com'
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
</style>
