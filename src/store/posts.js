import { defineStore } from 'pinia';
import axios from 'axios';

export const usePostsStore = defineStore('posts', {
  state: () => ({
    users: [],
    posts: [],
  }),
  actions: {
    async fetchUsers() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      this.users = response.data.map(user => ({ label: user.name, value: user.id }));
    },
    async fetchPostsByUser(userId) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      this.posts = response.data;
    },
  },
});