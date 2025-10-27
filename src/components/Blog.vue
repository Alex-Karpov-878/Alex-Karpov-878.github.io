<template>
  <div class="blog">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 to-white section-padding">
      <div class="container-max">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {{ data.blog.hero.title }}
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            {{ data.blog.hero.subtitle }}
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Post -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Featured Article
          </h2>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-12 border border-primary-100">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <span class="text-primary-600 font-bold">{{ data.blog.featuredPost.author.initials }}</span>
              </div>
              <div>
                <p class="font-semibold text-gray-900">{{ data.blog.featuredPost.author.name }}</p>
                <p class="text-gray-600 text-sm">{{ data.blog.featuredPost.date }}</p>
              </div>
              <div class="ml-auto">
                <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  {{ data.blog.featuredPost.category }}
                </span>
              </div>
            </div>

            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {{ data.blog.featuredPost.title }}
            </h3>

            <p class="text-lg text-gray-600 mb-6">
              {{ data.blog.featuredPost.description }}
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <button class="btn-primary">
                Read Full Article
              </button>
              <button class="btn-secondary">
                Share Article
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Latest Insights
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Technical articles, case studies, and industry insights from my experience
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article v-for="post in data.blog.posts" :key="post.id" class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div :class="getPostHeaderClass(post.color)" class="p-6">
              <div class="flex items-center justify-between mb-4">
                <span :class="getPostCategoryClass(post.color)" class="px-3 py-1 rounded-full text-sm font-medium">
                  {{ post.category }}
                </span>
                <span class="text-gray-500 text-sm">{{ post.date }}</span>
              </div>

              <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {{ post.title }}
              </h3>

              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ post.description }}
              </p>

              <div class="flex items-center">
                <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-gray-600 font-semibold text-sm">{{ post.author.initials }}</span>
                </div>
                <span class="text-gray-600 text-sm">{{ post.author.name }}</span>
              </div>
            </div>

            <div class="p-6">
              <button class="w-full btn-secondary">
                Read More
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="max-w-4xl mx-auto text-center">
          <div class="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-12 border border-primary-100">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {{ data.blog.newsletter.title }}
            </h2>
            <p class="text-xl text-gray-600 mb-8">
              {{ data.blog.newsletter.subtitle }}
            </p>

            <div class="max-w-md mx-auto">
              <div class="flex gap-4">
                <input
                  type="email"
                  :placeholder="data.blog.newsletter.formPlaceholder"
                  class="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                <button class="btn-primary">
                  {{ data.blog.newsletter.buttonText }}
                </button>
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
          <router-link to="/portfolio" class="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            View My Work
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useBlogData } from '../composables/useData'

export default {
  name: 'Blog',
  setup() {
    const data = useBlogData()

    const getPostHeaderClass = (color) => {
      const classes = {
        green: 'bg-gradient-to-br from-green-50 to-white',
        purple: 'bg-gradient-to-br from-purple-50 to-white',
        blue: 'bg-gradient-to-br from-blue-50 to-white',
        orange: 'bg-gradient-to-br from-orange-50 to-white'
      }
      return classes[color] || 'bg-gradient-to-br from-gray-50 to-white'
    }

    const getPostCategoryClass = (color) => {
      const classes = {
        green: 'bg-green-100 text-green-700',
        purple: 'bg-purple-100 text-purple-700',
        blue: 'bg-blue-100 text-blue-700',
        orange: 'bg-orange-100 text-orange-700'
      }
      return classes[color] || 'bg-gray-100 text-gray-700'
    }

    return {
      data,
      getPostHeaderClass,
      getPostCategoryClass
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
