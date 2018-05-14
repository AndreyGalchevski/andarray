<template>
	<div class="experience section" id="experience-section">
		<h1>Experience</h1>
		<div class="row">
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
					<p class="position-description">{{position.description}}</p>
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
					description: `
class DataAnalyst extends Human {

  constructor(name) {
    super(name)
  }

  writeQueries() {
    console.log('DROP TABLE USERS')
  }

  beautifyData() {
    console.log('ohhh! that's a pretty graph)
  }

  getFrustratedAtSas() {
    console.log('i guess it's coffee time)
  }
}
					`,
					imgSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1526311994/andarray/experience/data.png',
					imgAlt: 'Data analysis image'
				},
				{
					name: 'Team Lead',
					description: `
class TeamLead extends Human {

  constructor(name) {
    super(name)
  }

  performCodeReview() {
    console.log('get gid of the semicolons!')
  }

  setDeadline() {
    console.log('i don't see why it's impossible')
  }

  motivateTheTeam() {
    console.log('you can do it!')		
  }
}
					`,
					imgSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1526311994/andarray/experience/team_lead.jpg',
					imgAlt: 'Busy man doing a bunch of stuff'
				},
				{
					name: 'Full-Stack Dev',
					description: `
class FullStackDev extends Human{
  constructor(name) {
    super(name)
  }
  writeCode() {
    console.log('beep boop beep beep boop')
  }
  drinkCoffee() {
    console.log('mmm... coffee')
  }
  writeMoreCode() {
    console.log('beep boop beep beep boop')
  }
}
					`,
					imgSrc: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1526311993/andarray/experience/dev.jpg',
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
	height: 261px;
}
.position-description {
	font-family: 'Source Code Pro', monospace;
	text-align: left;
	font-size: 2vh;
	white-space: pre;
}
@media only screen and (max-width: 600px) {
	.position-description {
		font-size: 1.6vh;
	}
}
</style>
