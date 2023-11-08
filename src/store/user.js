import { defineStore } from 'pinia';

export const useUserTokenStore = defineStore({
  id: 'userToken',
  state: () => ({
  user:null,
    token:null,
    bearerToken:null,
  }),
  getters: {
    getUserData() {
      return this.user;
    },
  },
  actions: {
    setUserToken(token,bearerToken) {
    
      this.token= token;
      this.bearerToken=bearerToken;
    },
    setUser(user) {
      this.user = user;
    },
  },
  persist: true,
});
