<template>
  <div class="contact">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 to-white section-padding">
      <div class="container-max">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {{ data.contact.hero.title }}
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            {{ data.contact.hero.subtitle }}
          </p>
        </div>
      </div>
    </section>

    <!-- Booking Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {{ data.contact.booking.title }}
            </h2>
            <p class="text-xl text-gray-600">
              {{ data.contact.booking.description }}
            </p>
          </div>

          <!-- Calendly Embed Placeholder -->
          <div class="bg-gray-100 rounded-xl p-12 text-center mb-12">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Calendly Booking Widget</h3>
            <p class="text-gray-600 mb-6">
              Click the button below to open the booking calendar in a new window.
            </p>
            <a :href="data.contact.booking.calendlyUrl" target="_blank" class="btn-primary">
              Open Booking Calendar
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {{ data.contact.form.title }}
            </h2>

            <form @submit.prevent="submitForm" class="space-y-6">
              <div v-for="field in data.contact.form.fields" :key="field.name" class="form-group">
                <label :for="field.name" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ field.label }}
                  <span v-if="field.required" class="text-red-500">*</span>
                </label>

                <select
                  v-if="field.type === 'select'"
                  :id="field.name"
                  :name="field.name"
                  v-model="formData[field.name]"
                  :required="field.required"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option v-for="option in field.options" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>

                <textarea
                  v-else-if="field.type === 'textarea'"
                  :id="field.name"
                  :name="field.name"
                  v-model="formData[field.name]"
                  :placeholder="field.placeholder"
                  :required="field.required"
                  :rows="field.rows || 4"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-vertical"
                ></textarea>

                <input
                  v-else
                  :type="field.type"
                  :id="field.name"
                  :name="field.name"
                  v-model="formData[field.name]"
                  :placeholder="field.placeholder"
                  :required="field.required"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? data.contact.form.submittingText : data.contact.form.submitText }}
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {{ data.contact.info.title }}
            </h2>

            <div class="space-y-6">
              <div v-for="detail in data.contact.info.details" :key="detail.type" class="flex items-start">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg v-if="detail.type === 'email'" class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <svg v-else-if="detail.type === 'phone'" class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <svg v-else-if="detail.type === 'location'" class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <svg v-else-if="detail.type === 'linkedin'" class="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">{{ detail.label }}</h3>
                  <a v-if="detail.url" :href="detail.url" target="_blank" class="text-primary-600 hover:text-primary-700">
                    {{ detail.value }}
                  </a>
                  <span v-else class="text-gray-600">{{ detail.value }}</span>
                </div>
              </div>
            </div>

            <!-- Response Time -->
            <div class="mt-8 p-6 bg-primary-50 rounded-xl">
              <h3 class="font-semibold text-gray-900 mb-2">Response Time</h3>
              <p class="text-gray-600 mb-2">{{ data.contact.responseTime.description }}</p>
              <p class="text-primary-600 font-medium">{{ data.contact.responseTime.guarantee }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-600">
      <div class="container-max text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Let's Build Something Great Together
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          Ready to start your next project? I'm here to help you achieve your goals.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a :href="data.contact.booking.calendlyUrl" target="_blank" class="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Book Strategy Call
          </a>
          <router-link to="/portfolio" class="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            View My Work
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useContactData } from '../composables/useData'

export default {
  name: 'Contact',
  setup() {
    const data = useContactData()
    const isSubmitting = ref(false)
    const formData = ref({})

    const submitForm = async () => {
      isSubmitting.value = true

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Reset form
      formData.value = {}
      isSubmitting.value = false

      // Show success message (you can implement a toast notification here)
      alert('Thank you for your message! I\'ll get back to you within 24 hours.')
    }

    return {
      data,
      formData,
      isSubmitting,
      submitForm
    }
  }
}
</script>
