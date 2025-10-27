<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 to-white section-padding">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {{ data.hero.title }}
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              {{ data.hero.subtitle }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link to="/contact" class="btn-primary text-lg px-8 py-4">
                {{ data.hero.primaryCTA }}
              </router-link>
              <router-link to="/portfolio" class="btn-secondary text-lg px-8 py-4">
                {{ data.hero.secondaryCTA }}
              </router-link>
            </div>
          </div>
          <div class="relative">
            <div class="bg-white rounded-2xl shadow-2xl p-8">
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div class="bg-gray-50 rounded-lg p-4">
                  <div class="text-sm text-gray-600 mb-2">// Enterprise Application</div>
                  <div class="text-sm text-gray-600 mb-2">class ApplicationController</div>
                  <div class="text-sm text-gray-600 mb-2 ml-4">include Rails::Application</div>
                  <div class="text-sm text-gray-600 mb-2 ml-4">before_action :authenticate_user!</div>
                  <div class="text-sm text-gray-600">end</div>
                </div>
                <div class="bg-gray-50 rounded-lg p-4">
                  <div class="text-sm text-gray-600 mb-2">// React Component</div>
                  <div class="text-sm text-gray-600 mb-2">const Dashboard = () => {</div>
                  <div class="text-sm text-gray-600 mb-2 ml-4">return (</div>
                  <div class="text-sm text-gray-600 mb-2 ml-8">&lt;div className="dashboard"&gt;</div>
                  <div class="text-sm text-gray-600 mb-2 ml-8">&lt;h1&gt;Welcome&lt;/h1&gt;</div>
                  <div class="text-sm text-gray-600 mb-2 ml-4">);</div>
                  <div class="text-sm text-gray-600">};</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Logos Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-semibold text-gray-600 mb-4">Trusted by Industry Leaders & Innovators</h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
          <div v-for="client in data.clients" :key="client.id" class="text-center">
            <div class="bg-gray-100 rounded-lg p-8 h-24 flex items-center justify-center">
              <span class="text-xl font-bold text-gray-700">{{ client.logo }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Proven Outcomes, Not Just Code
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="proposition in data.valuePropositions" :key="proposition.title" class="bg-white rounded-xl p-8 shadow-lg">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <svg v-if="proposition.icon === 'ai'" class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
              <svg v-else-if="proposition.icon === 'integration'" class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2m-2-4h.01M17 16h.01"></path>
              </svg>
              <svg v-else-if="proposition.icon === 'performance'" class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ proposition.title }}</h3>
            <p class="text-gray-600">
              {{ proposition.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Lead Magnet Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-12 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {{ data.leadMagnet.title }}
          </h2>
          <h3 class="text-xl text-gray-600 mb-6">
            {{ data.leadMagnet.subtitle }}
          </h3>
          <p class="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            {{ data.leadMagnet.description }}
          </p>
          <div class="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              :placeholder="data.leadMagnet.formPlaceholder"
              class="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
            <button class="btn-primary">
              {{ data.leadMagnet.buttonText }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Case Studies -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Featured Case Studies
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how I've helped industry leaders achieve their goals
            with innovative Ruby on Rails and React solutions.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div v-for="caseStudy in data.caseStudies" :key="caseStudy.id"
               :class="caseStudy.id === 'samsung' ? 'bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 border border-primary-100' : 'bg-gradient-to-br from-secondary-50 to-white rounded-xl p-8 border border-secondary-100'">
            <div class="flex items-center mb-6">
              <div :class="caseStudy.id === 'samsung' ? 'w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mr-4' : 'w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mr-4'">
                <span :class="caseStudy.id === 'samsung' ? 'text-2xl font-bold text-primary-600' : 'text-2xl font-bold text-secondary-600'">{{ caseStudy.client.charAt(0) }}</span>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900">{{ caseStudy.client }} {{ caseStudy.project }}</h3>
                <p class="text-gray-600">{{ caseStudy.type }} {{ caseStudy.category }} Solution</p>
              </div>
            </div>
            <p class="text-gray-700 mb-6">
              {{ caseStudy.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tech in caseStudy.technologies.slice(0, 4)" :key="tech"
                    :class="caseStudy.id === 'samsung' ? 'px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm' : 'px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm'">
                {{ tech }}
              </span>
            </div>
            <router-link to="/portfolio"
                         :class="caseStudy.id === 'samsung' ? 'text-primary-600 font-semibold hover:text-primary-700' : 'text-secondary-600 font-semibold hover:text-secondary-700'">
              View Case Study →
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What My Colleagues Say
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="testimonial in data.testimonials" :key="testimonial.id" class="bg-white rounded-xl p-8 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <svg v-for="i in testimonial.rating" :key="i" class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>
            <p class="text-gray-700 mb-6 italic">
              "{{ testimonial.quote }}"
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                <span class="text-primary-600 font-semibold">{{ testimonial.initials }}</span>
              </div>
              <div>
                <p class="font-semibold text-gray-900">{{ testimonial.name }}</p>
                <p class="text-gray-600 text-sm">{{ testimonial.position }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-600">
      <div class="container-max text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          {{ data.finalCTA.title }}
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          {{ data.finalCTA.subtitle }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            {{ data.finalCTA.buttonText }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useHomeData } from '../composables/useData'

export default {
  name: 'Home',
  setup() {
    const data = useHomeData()
    return {
      data
    }
  }
}
</script>
