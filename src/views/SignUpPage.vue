<template>
    <div class=" bg-gray-50 flex justify-center items-center h-screen">
      <!-- Left: Image -->
      <div class="w-1/2 h-screen hidden lg:block">
        <img
        :src="require('@/assets/fitImage6.png')"
          alt="Fitness Image"
          class="object-contain w-full h-full"
        />
      </div>
      <!-- Right: Sign Up Form -->
      <div class="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
        <h1 class="text-4xl font-semibold mb-4 text-blue-600">Welcome to the Fitness Website</h1>
        <p class="text-lg text-gray-600 mb-6">Your one-stop solution to fitness</p>
        <form @submit.prevent="submitSignUpForm">
          <!-- Name Input -->
          <div class="mb-4">
            <label for="signup-name" class="block text-gray-600">Name</label>
            <input
              v-model="formData.name"
              type="text"
              id="signup-name"
              name="signup-name"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>
          <!-- Email Input -->
          <div class="mb-4">
            <label for="signup-email" class="block text-gray-600">Email</label>
            <input
              v-model="formData.emailId"
              type="email"
              id="signup-email"
              name="signup-email"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>
          <!-- Username Input -->
          <div class="mb-4">
            <label for ="signup-username" class="block text-gray-600">Username</label>
            <input
              v-model="formData.username"
              type="text"
              id="signup-username"
              name="signup-username"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>
          <!-- Phone Number Input -->
          <div class="mb-4">
            <label for="signup-phone" class="block text-gray-600">Phone Number</label>
            <input
              v-model="formData.phoneNumber"
              type="tel"
              id="signup-phone"
              name="signup-phone"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>
          <!-- Role Input -->
          <div class="mb-4">
            <label for="signup-role" class="block text-gray-600">Role</label>
            <input
              v-model="formData.role"
              type="text"
              id="signup-role"
              name="signup-role"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>
          <!-- Password Input -->
          <div class="mb-4">
            <label for="signup-password" class="block text-gray-600">Password</label>
            <input
              v-model="formData.password"
              type="password"
              id="signup-password"
              name="signup-password"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>
          <!-- Sign Up Button -->
          <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Sign Up</button>
          <div class="mt-6 text-blue-500 text-center">
          <router-link to="/login" class="hover:underline">Login  Here</router-link>
        </div>
        </form>
      </div>
      
    </div>
  </template>
  
  <script>
  import { ref} from 'vue';
  
  import { authService } from '../services/userService';
  
  export default {
    setup() {
      
      const formData = ref({
        name: '',
        emailId: '',
        username: '',
        phoneNumber: '',
        role: '',
        password: '',
      });
  
      const submitSignUpForm = async () => {
        try {
          // Simulate a successful signup response (replace with your actual API call)
          const response = await authService.signup(formData.value);
          console.log("response from signup",response)
  

        } catch (error) {
          console.error('Error signing up:', error);
        }
      };
  
      return {
        formData,
        submitSignUpForm,
      };
    },
  };
  </script>
  