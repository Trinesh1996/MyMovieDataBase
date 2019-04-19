import Vue from 'vue'
import Router from 'vue-router'
import LatestMovie from '@/components/latestMovie'
import Movie from '@/components/Movie'
import Search from './components/searchMovie'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: LatestMovie,
      component: LatestMovie
    },

    {
      path: '/movie/:id/',
      name: Movie,
      props: true,
      component: Movie,
  
    },

    {
      path: '/search/:name',
      name: Search,
      component: Search,
      props: true
    }
  ],
  mode: 'history'
 
})
