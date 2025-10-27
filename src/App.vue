<template>
  <div id="app" class="min-h-screen bg-white">
    <Navigation />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/layout/Navigation.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>
