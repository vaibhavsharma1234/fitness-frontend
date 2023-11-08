<template>
  <section class="py-6 bg-blueGray-50">
    <div class="w-full lg:w-8/12 px-4 mx-auto">
      <div class="shadow-lg rounded-lg bg-white">
        <div class="px-6 py-6">
          <h2 class="text-2xl font-bold text-blueGray-700 text-center mb-4">
            My Account
          </h2>
        </div>
        <div class="px-4 lg:px-10 py-6">
          <form v-if="user">
            <section>
              <h3 class="text-sm font-bold text-blueGray-400 uppercase mb-4">
                User Information
              </h3>
              <div class="flex flex-wrap -mx-4">
                <div class="w-full lg:w-6/12 px-4 mb-4">
                  <div class="relative">
                    <label class="text-xs font-bold text-blueGray-600" for="username">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      v-model="user.username"
                      class="input"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4 mb-4">
                  <div class="relative">
                    <label class="text-xs font-bold text-blueGray-600" for ="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      v-model="user.emailId"
                      class="input"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative">
                    <label class="text-xs font-bold text-blueGray-600" for="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      v-model="user.name"
                      class="input"
                    />
                  </div>
                </div>
              </div>
            </section>
            <hr class="mt-6 border-b border-blueGray-300" />
            <section>
              <h3 class="text-sm font-bold text-blueGray-400 uppercase mb-4">
                Contact Information
              </h3>
              <div class="w-full lg:w-12/12 px-4 mb-4">
                <div class="relative">
                  <label class="text-xs font-bold text-blueGray-600" for="phone">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    v-model="user.phoneNumber"
                    class="input"
                  />
                </div>
              </div>
            </section>
            <button @click="updateUserDetails" class="btn">Update Details</button>
          </form>
          <div v-else>
            <h2>Loading data</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useUserTokenStore } from '@/store/user';
import authAxios from '../utils/axiosInstance';

export default {
  setup() {
    const userStore = useUserTokenStore();
    const user = userStore.user;
    
    const fetchApiDetails = async () => {
      try {
        const response = await authAxios.get('/v1/user/profile');
        const apiDetails = response.data;
        
        userStore.setUser(apiDetails.data.user);
      } catch (error) {
        console.error('Error fetching API details:', error);
      }
    };

    const updateUserDetails = async() => {
      console.log(user); 
      try {
        const response = await authAxios.put('/v1/user/profile',user);
        const apiDetails = response.data;
        
        userStore.setUser(apiDetails.data.user);
      } catch (error) {
        console.error('Error fetching API details:', error);
      }
      
    };

    fetchApiDetails();
    
    return {
      user,
      updateUserDetails,
    };
  },
};
</script>

<style scoped>
.input {
  border: none;
  padding: 0.75rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 100%;
  margin-bottom: 1rem;
}

.input:focus {
  outline: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn {
  background-color: #3490dc;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2779b6;
}
</style>
