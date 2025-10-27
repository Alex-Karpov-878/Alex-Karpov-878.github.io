<template>
  <div class="about">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 to-white section-padding">
      <div class="container-max">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {{ data.about.hero.title }}
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            {{ data.about.hero.subtitle }}
          </p>
        </div>
      </div>
    </section>

    <!-- Bio Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {{ data.about.bio.title }}
            </h2>
            <div class="prose prose-lg text-gray-600 mb-8">
              <p v-for="paragraph in bioParagraphs" :key="paragraph" class="mb-4">
                {{ paragraph }}
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <a :href="data.about.cta.buttons[0].url" class="btn-primary">
                {{ data.about.cta.buttons[0].text }}
              </a>
              <a :href="data.about.cta.buttons[1].url" target="_blank" class="btn-secondary">
                {{ data.about.cta.buttons[1].text }}
              </a>
            </div>
          </div>
          <div class="bg-gray-50 rounded-2xl p-8">
            <div class="grid grid-cols-2 gap-6">
              <div v-for="stat in data.about.company.stats" :key="stat.label" class="text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">{{ stat.metric }}</div>
                <div class="text-gray-600">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {{ data.about.skills.title }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="category in data.about.skills.categories" :key="category.name" class="bg-white rounded-xl p-8 shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ category.name }}</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in category.technologies" :key="tech" class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {{ data.about.education.title }}
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            {{ data.about.education.content }}
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-600">
      <div class="container-max text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Work Together?
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          Let's discuss how I can help you achieve your goals with my expertise
          in Ruby on Rails and React development.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Book Strategy Call
          </router-link>
          <router-link to="/services" class="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            View My Services
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useAboutData } from '../composables/useData'

export default {
  name: 'About',
  setup() {
    const data = useAboutData()

    // Split bio content into paragraphs
    const bioParagraphs = data.about.bio.content.split('\n\n')

    return {
      data,
      bioParagraphs
    }
  }
}
</script>
