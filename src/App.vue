<template lang="pug">
  #app
    nav.navbar.navbar-expand-lg.navbar-light.bg-light
      a.navbar-brand(href='#') Navbar
      button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarNav', aria-controls='navbarNav', aria-expanded='false', aria-label='Toggle navigation')
        span.navbar-toggler-icon
      #navbarNav.collapse.navbar-collapse
        ul.navbar-nav
          li.nav-item.active
            router-link.nav-link(:to="'ABOUT'") ABOUT
              span.sr-only (current)
          li.nav-item
            router-link.nav-link(:to="'SKILL'") SKILL
          li.nav-item
            router-link.nav-link(:to="'WORKS'") WORKS
          li.nav-item
            router-link.nav-link(:to="'SOCIAL'") SOCIAL
    router-view
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
