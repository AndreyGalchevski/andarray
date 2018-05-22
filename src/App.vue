<template>
  <div id="app">
  <Navbar/>
  <Home/>
	<Parallax img-src="http://res.cloudinary.com/dqvimfd8b/image/upload/v1524547972/andarray/parallax/code.jpg"/>
  <Experience/>
	<Parallax img-src="http://res.cloudinary.com/dqvimfd8b/image/upload/v1524547053/andarray/parallax/nature.jpg"/>	
  <Portfolio/>
	<Parallax img-src="http://res.cloudinary.com/dqvimfd8b/image/upload/v1524547053/andarray/parallax/space.jpg"/>	
  <Contact/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Experience from './components/Experience.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Parallax from './components/Parallax.vue'

export default {
  name: 'app',
  components: {
	Navbar,
	Home,
	Experience, 
	Portfolio,
	Contact,
	Parallax
  }
}
</script>

<style>
#app {
	font-family: 'PT Serif', serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	perspective: 1px;
	transform-style: preserve-3d;
	height: 100vh;
	overflow-x: hidden;
	overflow-y: scroll;
}
</style>
