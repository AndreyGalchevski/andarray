<template>
	<div class="portfolio">
		<h1>Portfolio</h1>
        <div class="row">
            <div class="col s12 m4">
                <div class="card">
                    <div class="card-image">
						<img 
							src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1524496784/andarray/portfolio/veganfuel-website.png" 
							alt="VeganFuel app website screenshot" />
						<a 
							class="btn-floating halfway-fab waves-effect waves-light red" 
							href="https://play.google.com/store/apps/details?id=andreygalchevski.veganfuel&amp;hl=en_GB"
                            target="_blank">
							<i class="material-icons">link</i>
						</a>
					</div>
                    <div class="card-content">
                        <p class="flow-text">VeganFuel</p>
                    </div>
                </div>
            </div>
            <div class="col s12 m4">
                <div class="card">
                    <div class="card-image">
						<img 
							src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1524496785/andarray/portfolio/totalliberation-website.png" 
							alt="Total Liberation Israel website screenshot" />
						<a 
							class="btn-floating halfway-fab waves-effect waves-light red"
                            href="https://www.totalliberationisrael.com" 
							target="_blank">
							<i class="material-icons">link</i>
						</a>
					</div>
                    <div class="card-content">
                        <p class="flow-text">Total Liberation</p>
                    </div>
                </div>
            </div>
            <div class="col s12 m4">
                <div class="card">
                    <div class="card-image">
						<img 
							src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1524496783/andarray/portfolio/insapient-website.png" 
							alt="VeganFuel app website screenshot" />
						<a 
							class="btn-floating halfway-fab waves-effect waves-light red" 
							href="#" 
							target="_blank">
							<i class="material-icons">link</i>
						</a>
					</div>
                    <div class="card-content">
						<p class="flow-text">Insapient</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Portfolio',
	props: {
		msg: String
	}
}
</script>

<style scoped>
</style>
