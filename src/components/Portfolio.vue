<template>
  <div class="portfolio">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 to-white section-padding">
      <div class="container-max">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {{ data.portfolio.hero.title }}
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            {{ data.portfolio.hero.subtitle }}
          </p>
        </div>
      </div>
    </section>

    <!-- Case Studies Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="space-y-16">
          <div v-for="caseStudy in data.portfolio.caseStudies" :key="caseStudy.id" class="case-study">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div :class="caseStudy.id === 'instacart' ? 'order-2 lg:order-1' : 'order-1'">
                <div class="flex items-center mb-6">
                  <div :class="getClientLogoClass(caseStudy.color)" class="w-16 h-16 rounded-lg shadow-md flex items-center justify-center mr-4">
                    <span :class="getClientTextClass(caseStudy.color)" class="text-2xl font-bold">{{ caseStudy.client.charAt(0) }}</span>
                  </div>
                  <div>
                    <h2 class="text-2xl font-bold text-gray-900">{{ caseStudy.client }}</h2>
                    <p class="text-gray-600">{{ caseStudy.project }}</p>
                    <div class="flex items-center mt-2">
                      <span :class="getCategoryClass(caseStudy.color)" class="px-3 py-1 rounded-full text-sm font-medium">
                        {{ caseStudy.type }} {{ caseStudy.category }}
                      </span>
                    </div>
                  </div>
                </div>

                <div class="space-y-6">
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-3">The Challenge</h3>
                    <p class="text-gray-600">{{ caseStudy.problem }}</p>
                  </div>

                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-3">The Solution</h3>
                    <p class="text-gray-600">{{ caseStudy.solution }}</p>
                  </div>

                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-3">Key Results</h3>
                    <div class="grid grid-cols-2 gap-4">
                      <div v-for="result in caseStudy.results" :key="result.label" class="text-center p-4 bg-gray-50 rounded-lg">
                        <div :class="getResultMetricClass(result.color)" class="text-2xl font-bold mb-1">{{ result.metric }}</div>
                        <div class="text-gray-600 text-sm">{{ result.label }}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                    <div class="flex flex-wrap gap-2">
                      <span v-for="tech in caseStudy.technologies" :key="tech" :class="getTechClass(caseStudy.color)" class="px-3 py-1 rounded-full text-sm">
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div :class="caseStudy.id === 'instacart' ? 'order-1 lg:order-2' : 'order-2'">
                <div :class="getCaseStudyCardClass(caseStudy.color)" class="rounded-xl p-8">
                  <div class="text-center mb-6">
                    <div :class="getClientLogoClass(caseStudy.color)" class="w-20 h-20 rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                      <span :class="getClientTextClass(caseStudy.color)" class="text-3xl font-bold">{{ caseStudy.client.charAt(0) }}</span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ caseStudy.client }}</h3>
                    <p class="text-gray-600">{{ caseStudy.project }}</p>
                  </div>

                  <p class="text-gray-700 mb-6">{{ caseStudy.description }}</p>

                  <div class="space-y-4">
                    <div v-for="result in caseStudy.results" :key="result.label" class="flex items-center justify-between">
                      <span class="text-gray-600">{{ result.label }}</span>
                      <span :class="getResultMetricClass(result.color)" class="font-bold">{{ result.metric }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Impact Across Industries
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering measurable results for clients across different sectors
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-600 mb-2">15+</div>
            <div class="text-gray-600">Major Projects</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-600 mb-2">99.9%</div>
            <div class="text-gray-600">Average Uptime</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-600 mb-2">60%</div>
            <div class="text-gray-600">Issue Reduction</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-600 mb-2">30%</div>
            <div class="text-gray-600">Performance Improvement</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-600">
      <div class="container-max text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          {{ data.portfolio.cta.title }}
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          Ready to achieve similar results for your project? Let's discuss how I can help.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            {{ data.portfolio.cta.buttonText }}
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
import { usePortfolioData } from '../composables/useData'

export default {
  name: 'Portfolio',
  setup() {
    const data = usePortfolioData()

    const getClientLogoClass = (color) => {
      const classes = {
        green: 'bg-green-100',
        blue: 'bg-blue-100',
        purple: 'bg-purple-100',
        orange: 'bg-orange-100'
      }
      return classes[color] || 'bg-gray-100'
    }

    const getClientTextClass = (color) => {
      const classes = {
        green: 'text-green-600',
        blue: 'text-blue-600',
        purple: 'text-purple-600',
        orange: 'text-orange-600'
      }
      return classes[color] || 'text-gray-600'
    }

    const getCategoryClass = (color) => {
      const classes = {
        green: 'bg-green-100 text-green-700',
        blue: 'bg-blue-100 text-blue-700',
        purple: 'bg-purple-100 text-purple-700',
        orange: 'bg-orange-100 text-orange-700'
      }
      return classes[color] || 'bg-gray-100 text-gray-700'
    }

    const getResultMetricClass = (color) => {
      const classes = {
        green: 'text-green-600',
        blue: 'text-blue-600',
        purple: 'text-purple-600',
        orange: 'text-orange-600'
      }
      return classes[color] || 'text-gray-600'
    }

    const getTechClass = (color) => {
      const classes = {
        green: 'bg-green-100 text-green-700',
        blue: 'bg-blue-100 text-blue-700',
        purple: 'bg-purple-100 text-purple-700',
        orange: 'bg-orange-100 text-orange-700'
      }
      return classes[color] || 'bg-gray-100 text-gray-700'
    }

    const getCaseStudyCardClass = (color) => {
      const classes = {
        green: 'bg-gradient-to-br from-green-50 to-white border border-green-100',
        blue: 'bg-gradient-to-br from-blue-50 to-white border border-blue-100',
        purple: 'bg-gradient-to-br from-purple-50 to-white border border-purple-100',
        orange: 'bg-gradient-to-br from-orange-50 to-white border border-orange-100'
      }
      return classes[color] || 'bg-gradient-to-br from-gray-50 to-white border border-gray-100'
    }

    return {
      data,
      getClientLogoClass,
      getClientTextClass,
      getCategoryClass,
      getResultMetricClass,
      getTechClass,
      getCaseStudyCardClass
    }
  }
}
</script>
