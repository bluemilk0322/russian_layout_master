import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Carousel'
import Card from '@/components/Card'
import Slider from '@/components/Slider'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        up:HelloWorld,
        down:Card
    }},
    {
      path: '/test',
      components: {
        right:Slider,
        left:Test
      }}
  ]
})