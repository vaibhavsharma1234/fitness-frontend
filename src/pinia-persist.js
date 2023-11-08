import createPersistedState from 'vuex-persistedstate';

export default function setupPiniaPersist(pinia) {
  createPersistedState({
    key: 'your-app-key', // Unique key for your app
    paths: ['user'], // Specify the state(s) you want to persist (in this case, 'user' store)
  })(pinia.store);

  // Add other configurations or customizations here
}
