<template>
    <div class="py-20 bg-gray-50">
      <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Top Fitness Influencers</h2>
          <p class="text-gray-600 lg:w-8/12 lg:mx-auto">Discover and connect with some of the most influential figures in the fitness industry.</p>
        </div>
        <div class="grid gap-12 items-center md:grid-cols-3">
          <div
            v-for="influencer in fitnessInfluencers"
            :key="influencer.id"
            class="space-y-4 text-center"
          >
            <img
              :src="influencer.imageUrl"
              :alt="influencer.name"
              class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
              :width="influencer.width"
              :height="influencer.height"
            />
            <div>
              <h4 class="text-2xl">{{ influencer.name }}</h4>
              <span class="block text-sm text-gray-500">{{ influencer.specialization }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fitnessInfluencers: [
          {
            id: 1,
            name: 'Fitness Guru 1',
            specialization: 'Strength Training',
            imageUrl: 'https://tailus.io/sources/blocks/classic/preview/images/woman.jpg',
            width: 640,
            height: 805,
          },
          {
            id: 2,
            name: 'Fitness Expert 2',
            specialization: 'Yoga and Meditation',
            imageUrl: 'https://tailus.io/sources/blocks/classic/preview/images/man.jpg',
            width: 1000,
            height: 667,
          },
          {
            id: 3,
            name: 'Nutritionist Pro',
            specialization: 'Diet and Nutrition',
            imageUrl: 'https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg',
            width: 1000,
            height: 667,
          },
          // Add more fitness influencers here as needed
        ],
      };
    },
  };
  </script>
  