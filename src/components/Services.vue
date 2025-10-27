<template>
  <div class="services">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 to-white section-padding">
      <div class="container-max">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {{ data.services.hero.title }}
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            {{ data.services.hero.subtitle }}
          </p>
        </div>
      </div>
    </section>

    <!-- Engagement Models Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How We Work Together
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the engagement model that best fits your project needs and timeline
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div v-for="model in data.services.engagementModels" :key="model.id" class="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg v-if="model.id === 'project-based'" class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <svg v-else-if="model.id === 'monthly-retainer'" class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
                <svg v-else-if="model.id === 'strategic-audit'" class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ model.title }}</h3>
              <p class="text-primary-600 font-medium mb-4">{{ model.bestFor }}</p>
            </div>
            <p class="text-gray-600 mb-6">{{ model.description }}</p>
            <div class="space-y-3">
              <h4 class="font-semibold text-gray-900">What you get:</h4>
              <ul class="space-y-2">
                <li v-for="benefit in model.benefits" :key="benefit" class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-600">{{ benefit }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Services Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {{ data.services.coreServices.title }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in data.services.coreServices.services" :key="service.title" class="bg-white rounded-xl p-8 shadow-lg">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {{ data.services.process.title }}
          </h2>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div v-for="(step, index) in data.services.process.steps" :key="step.title" class="text-center">
              <div class="relative">
                <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-white font-bold text-xl">{{ index + 1 }}</span>
                </div>
                <div v-if="index < data.services.process.steps.length - 1" class="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gray-300"></div>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ step.title }}</h3>
              <p class="text-gray-600 text-sm">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-600">
      <div class="container-max text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          {{ data.services.cta.title }}
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          Let's discuss your project and find the best engagement model for your needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            {{ data.services.cta.buttonText }}
          </router-link>
          <router-link to="/portfolio" class="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            View My Work
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useServicesData } from '../composables/useData'

export default {
  name: 'Services',
  setup() {
    const data = useServicesData()
    return {
      data
    }
  }
}
</script>
