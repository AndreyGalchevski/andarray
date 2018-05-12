<template>
	<div class="experience section" id="experience-section">
		<h1>Experience</h1>
        <div class="section">
			<i class="flow-text fas fa-database"></i>
            <p class="flow-text">Data Analyst/Statistician</p>
        </div>
        <div class="section">
			<i class="flow-text fas fa-male"></i>
            <p class="flow-text">Team Lead</p>
        </div>
        <div class="section">
			<i class="flow-text fas fa-code"></i>
            <p class="flow-text">Full-Stack Dev</p>
        </div>
	</div>
</template>

<script>
export default {
	name: 'Experience',
	props: {
		msg: String
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
</style>
