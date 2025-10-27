<template>
  <div class="careers">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 to-white section-padding">
      <div class="container-max">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our <span class="gradient-text">Team</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            Be part of a dynamic team that's building innovative software solutions with Ruby on Rails and React.
            We're looking for talented developers who share our passion for excellence.
          </p>
        </div>
      </div>
    </section>

    <!-- Why Work With Us -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Work With Us?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer more than just a job - we provide an environment where you can grow, learn, and make a real impact.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-xl p-8 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Learning & Growth</h3>
            <p class="text-gray-600">
              Continuous learning opportunities with access to conferences, courses, and the latest technologies.
            </p>
          </div>

          <div class="bg-gray-50 rounded-xl p-8 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Collaborative Culture</h3>
            <p class="text-gray-600">
              Work in a supportive, collaborative environment where your ideas are valued and encouraged.
            </p>
          </div>

          <div class="bg-gray-50 rounded-xl p-8 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Flexible Work</h3>
            <p class="text-gray-600">
              Flexible working hours and remote work options to maintain a healthy work-life balance.
            </p>
          </div>

          <div class="bg-gray-50 rounded-xl p-8 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Competitive Benefits</h3>
            <p class="text-gray-600">
              Comprehensive health insurance, retirement plans, and competitive salary packages.
            </p>
          </div>

          <div class="bg-gray-50 rounded-xl p-8 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Cutting-Edge Projects</h3>
            <p class="text-gray-600">
              Work on exciting projects with industry leaders like Samsung and Instacart.
            </p>
          </div>

          <div class="bg-gray-50 rounded-xl p-8 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Fast-Paced Environment</h3>
            <p class="text-gray-600">
              Be part of a dynamic, fast-paced environment where innovation and creativity thrive.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Open Positions
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our current openings and find the perfect role to advance your career
          </p>
        </div>

        <div class="space-y-6">
          <!-- Senior Ruby on Rails Developer -->
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Senior Ruby on Rails Developer</h3>
                <div class="flex items-center space-x-4 text-gray-600">
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    San Francisco, CA (Remote OK)
                  </span>
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Full-time
                  </span>
                </div>
              </div>
              <div class="mt-4 md:mt-0">
                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Open</span>
              </div>
            </div>
            <p class="text-gray-600 mb-6">
              We're looking for an experienced Ruby on Rails developer to join our team and work on exciting projects
              with industry leaders. You'll be responsible for building scalable backend solutions and mentoring junior developers.
            </p>
            <div class="mb-6">
              <h4 class="font-semibold text-gray-900 mb-3">Requirements:</h4>
              <ul class="list-disc list-inside text-gray-600 space-y-1">
                <li>5+ years of Ruby on Rails development experience</li>
                <li>Strong knowledge of PostgreSQL and database optimization</li>
                <li>Experience with API development and integration</li>
                <li>Familiarity with AWS and cloud deployment</li>
                <li>Excellent communication and collaboration skills</li>
              </ul>
            </div>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Ruby on Rails</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">PostgreSQL</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">AWS</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">API Development</span>
            </div>
            <button class="btn-primary">
              Apply Now
            </button>
          </div>

          <!-- React Frontend Developer -->
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">React Frontend Developer</h3>
                <div class="flex items-center space-x-4 text-gray-600">
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    San Francisco, CA (Remote OK)
                  </span>
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Full-time
                  </span>
                </div>
              </div>
              <div class="mt-4 md:mt-0">
                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Open</span>
              </div>
            </div>
            <p class="text-gray-600 mb-6">
              Join our frontend team to build beautiful, responsive user interfaces using React. You'll work closely
              with our design team to create exceptional user experiences for our clients.
            </p>
            <div class="mb-6">
              <h4 class="font-semibold text-gray-900 mb-3">Requirements:</h4>
              <ul class="list-disc list-inside text-gray-600 space-y-1">
                <li>3+ years of React development experience</li>
                <li>Proficiency in modern JavaScript (ES6+)</li>
                <li>Experience with state management (Redux, Context API)</li>
                <li>Knowledge of CSS frameworks (Tailwind, Bootstrap)</li>
                <li>Understanding of responsive design principles</li>
              </ul>
            </div>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">React</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">JavaScript</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">CSS</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">UI/UX</span>
            </div>
            <button class="btn-primary">
              Apply Now
            </button>
          </div>

          <!-- Full-Stack Developer -->
          <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Full-Stack Developer</h3>
                <div class="flex items-center space-x-4 text-gray-600">
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    San Francisco, CA (Remote OK)
                  </span>
                  <span class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Full-time
                  </span>
                </div>
              </div>
              <div class="mt-4 md:mt-0">
                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Open</span>
              </div>
            </div>
            <p class="text-gray-600 mb-6">
              Perfect opportunity for developers who enjoy working across the entire stack. You'll build complete
              applications using Ruby on Rails and React, from database design to user interface implementation.
            </p>
            <div class="mb-6">
              <h4 class="font-semibold text-gray-900 mb-3">Requirements:</h4>
              <ul class="list-disc list-inside text-gray-600 space-y-1">
                <li>4+ years of full-stack development experience</li>
                <li>Strong knowledge of Ruby on Rails and React</li>
                <li>Experience with database design and optimization</li>
                <li>Understanding of RESTful API principles</li>
                <li>Ability to work independently and in teams</li>
              </ul>
            </div>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Ruby on Rails</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">React</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">PostgreSQL</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Full-Stack</span>
            </div>
            <button class="btn-primary">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Process -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Application Process
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined hiring process ensures we find the right fit for both you and our team
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-primary-600">1</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Apply Online</h3>
            <p class="text-gray-600">
              Submit your application with your resume and portfolio through our online form.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-primary-600">2</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Initial Review</h3>
            <p class="text-gray-600">
              Our team reviews your application and portfolio to assess your fit for the role.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-primary-600">3</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Technical Interview</h3>
            <p class="text-gray-600">
              Participate in a technical interview to discuss your experience and problem-solving approach.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-primary-600">4</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Team Interview</h3>
            <p class="text-gray-600">
              Meet with the team to discuss culture fit and answer any questions you may have.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-600">
      <div class="container-max text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Join Our Team?
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          Don't see a position that matches your skills? We're always looking for talented developers.
          Send us your resume and let's start a conversation.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Send Your Resume
          </router-link>
          <router-link to="/about" class="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Learn About Us
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Careers'
}
</script>
