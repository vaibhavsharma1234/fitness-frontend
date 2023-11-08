<template>
    <div class="bg-gray-50 flex justify-center items-center h-screen">
      <!-- Left: Image -->
      
      <div class="w-1/2 h-screen hidden lg:block">
        <img
        :src="require('@/assets/fitImage4.png')"
          alt="Placeholder Image"
          class="object-contain w-full h-full"
        />
      </div>
      <!-- Right: Login Form -->
      <div class="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
        <h1 class="text-4xl font-semibold mb-4 text-blue-600">Welcome to the Fitness Website</h1>
      <p class="text-lg text-gray-600 mb-6">Your one-stop solution to fitness</p>
        <h1 class="text-2xl font-semibold mb-4">Login</h1>
        <form @submit.prevent="submitForm">
          <!-- Username Input -->
          <div class="mb-4">
            <label for="emailId" class="block text-gray-600">email ID</label>
            <input
              v-model="formData.emailId"
              type="text"
              id="emailId"
              name="emailId"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>
          <!-- Password Input -->
          <div class="mb-4">
            <label for="password" class="block text-gray-600">Password</label>
            <input
              v-model="formData.password"
              type="password"
              id="password"
              name="password"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>
          <!-- Remember Me Checkbox -->
          
          <!-- Forgot Password Link -->
          <div class="mb-6 text-blue-500">
            <a href="#" class="hover:underline">Forgot Password?</a>
          </div>
          <!-- Login Button -->
          <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
        </form>
        <!-- Sign up Link -->
        <div class="mt-6 text-blue-500 text-center">
          <router-link to="/signup" class="hover:underline">Sign up Here</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref} from 'vue';
 
  import { authService } from '../services/userService';
  import { useUserTokenStore } from '@/store/user'; 
  import { router } from '@/main';
  export default {
    setup() {
      const userStore = useUserTokenStore();
  
      const formData = ref({
       
        emailId: '',
        
        password: '',
      });
  
      const submitForm = async () => {
        try {
          // Simulate a successful signup response (replace with your actual API call)
      const response=  await authService.login(formData.value);

      userStore.setUserToken(response.token,response.bearerToken);
      router.push('/');
          // Redirect to another route or perform other actions
        } catch (error) {
          console.error('Error logging in:', error);
        }
      };
  
      return {
        formData,
        submitForm,
      };
    },
  };
  </script>
  