<template>
    <div class="overflow-hidden relative py-24 sm:py-32">
      <!-- Gradient added to the bottom left -->
      <div
        class="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-40rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-br from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </div>
      <div class="mx-auto max-w-[52rem]">
        <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-xl">
              <h2 class="text-base font-semibold leading-7 text-indigo-600">Discover Fitness Influencers</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Achieve Your Fitness Goals</p>
              <p class="mt-6 text-lg leading-8 text-gray-600">Find your favorite fitness influencers and access their workout and diet plans. Subscribe, track your progress, and transform your fitness journey.</p>
              <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                  <dt class="inline font-semibold text-gray-900">
                    <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                    {{ feature.name }}
                  </dt>
                  {{ ' ' }}
                  <dd class="inline">{{ feature.description }}</dd>
                </div>
              </dl>
            </div>
          </div>
          <img src="https://plus.unsplash.com/premium_photo-1665673312775-57b7b42b5f2c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D" alt="Fitness Influencer Screenshot" class="w-[30rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { HeartIcon, FireIcon, ChartBarIcon } from '@heroicons/vue/20/solid'
  
  const features = [
    {
      name: 'Personalized Plans',
      description:
        'Get personalized workout and diet plans from fitness influencers tailored to your goals.',
      icon: HeartIcon,
    },
    {
      name: 'Track Progress',
      description: 'Track your fitness journey and mark your progress day by day.',
      icon: ChartBarIcon,
    },
    {
      name: 'Varied Workouts',
      description: 'Access a variety of workout routines and never get bored with your fitness regimen.',
      icon: FireIcon,
    }
  ]
  </script>
  