<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="container-max">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="text-2xl font-bold gradient-text">
            {{ company.name }}
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <router-link
            to="/"
            class="nav-link"
            :class="{ 'text-primary-600': $route.path === '/' }"
          >
            Home
          </router-link>
          <router-link
            to="/about"
            class="nav-link"
            :class="{ 'text-primary-600': $route.path === '/about' }"
          >
            About
          </router-link>
          <router-link
            to="/services"
            class="nav-link"
            :class="{ 'text-primary-600': $route.path === '/services' }"
          >
            Services
          </router-link>
          <router-link
            to="/portfolio"
            class="nav-link"
            :class="{ 'text-primary-600': $route.path === '/portfolio' }"
          >
            Portfolio
          </router-link>
          <router-link
            to="/blog"
            class="nav-link"
            :class="{ 'text-primary-600': $route.path === '/blog' }"
          >
            Blog
          </router-link>
          <router-link
            to="/contact"
            class="nav-link"
            :class="{ 'text-primary-600': $route.path === '/contact' }"
          >
            Contact
          </router-link>
          <router-link
            to="/careers"
            class="nav-link"
            :class="{ 'text-primary-600': $route.path === '/careers' }"
          >
            Careers
          </router-link>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <router-link to="/contact" class="btn-primary">
            Book Strategy Call
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
          <router-link
            to="/"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            @click="closeMobileMenu"
          >
            Home
          </router-link>
          <router-link
            to="/about"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            @click="closeMobileMenu"
          >
            About
          </router-link>
          <router-link
            to="/services"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            @click="closeMobileMenu"
          >
            Services
          </router-link>
          <router-link
            to="/portfolio"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            @click="closeMobileMenu"
          >
            Portfolio
          </router-link>
          <router-link
            to="/blog"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            @click="closeMobileMenu"
          >
            Blog
          </router-link>
          <router-link
            to="/contact"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            @click="closeMobileMenu"
          >
            Contact
          </router-link>
          <router-link
            to="/careers"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            @click="closeMobileMenu"
          >
            Careers
          </router-link>
          <div class="px-3 py-2">
            <router-link to="/contact" class="btn-primary w-full text-center block" @click="closeMobileMenu">
              Book Strategy Call
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { useHomeData } from '../../composables/useData'

export default {
  name: 'Navigation',
  setup() {
    const data = useHomeData()
    const mobileMenuOpen = ref(false)

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
    }

    return {
      company: data.company,
      mobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu
    }
  }
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200;
}
</style>
