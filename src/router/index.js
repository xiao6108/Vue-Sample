import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Skill from '@/components/Skill'
import Works from '@/components/Works'
import Social from '@/components/Social'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/Works',
      name: 'Works',
      component: Works
    },
    {
      path: '/Social',
      name: 'Social',
      component: Social
    }

  ]
})
