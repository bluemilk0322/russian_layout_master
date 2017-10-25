<template>
  <div id="app">
    <Logo />
    <Goindex />
    <Nav />
    <router-view></router-view>
    <router-view name = "up"></router-view>
    <router-view name = "down"></router-view>
    <router-view name = "left" ></router-view>
    <router-view name = "right"></router-view>
    <Footer />
  </div>
</template>

<script>
import Nav from "../src/components/Nav"
import Logo from "../src/components/Logo"
import Carousel from "../src/components/Carousel"
import Second from "../src/components/Second"
import Card from "../src/components/Card"
import Footer from "../src/components/Footer"
import Goindex from "../src/components/Goindex"

export default {
  components:{
    Nav,
    Logo,
    Carousel,
    Second,
    Card,
    Footer,
    Goindex
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
