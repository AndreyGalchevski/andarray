<template>
	<div class="experience section" id="experience-section">
		<h1>Experience</h1>
		<div class="row container">
			<div class="col s12 m4" v-for="position in positions" :key="position.name">
				<div class="card">
					<div class="card-image waves-effect waves-block waves-light">
						<img 
							class="activator position-img" 
							:src="position.imgSrc"
							:alt="position.imgAlt">
					</div>
					<div class="card-content">
						<span class="card-title activator grey-text text-darken-4">{{position.name}}
							<i class="material-icons right">more_vert</i>
						</span>
					</div>
					<div class="card-reveal">
						<span class="card-title grey-text text-darken-4">{{position.name}}
							<i class="material-icons right">close</i>
						</span>
					<p>{{position.description}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Experience',
	data () {
		return {
			positions: [
				{
					name: 'Data Analyst',
					description: 'bla bla bla data analysis bla bla bla numbers bla bla bla distribution',
					imgSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1526234576/andarray/experience/data.png',
					imgAlt: 'Data analysis image'
				},
				{
					name: 'Team Lead',
					description: 'bla bla bla data agile bla bla bla HR bla bla bla dead lines',
					imgSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1526234576/andarray/experience/team_lead.jpg',
					imgAlt: 'Busy man doing a bunch of stuff'
				},
				{
					name: 'Full-Stack Dev',
					description: 'bla bla bla data algorithms bla bla bla frameworks bla bla bla semicolons',
					imgSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1526234576/andarray/experience/developer.jpg',
					imgAlt: 'Work table with a laptop, coffee, pencils etc'
				}
			]
		}
	}
}
</script>

<style scoped>
.experience {
	display: block;
	position: relative;
	background-color: white;
	z-index: 1;
}
.position-img {
	width: 160px;
	height: 200px;
}
</style>
