<template>
  <div id="app">
    <Navbar/>
    <Home/>
    <Experience/>
    <Portfolio/>
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
}
</style>
