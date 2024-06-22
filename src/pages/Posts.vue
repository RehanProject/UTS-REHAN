<template>
    <div class="container">
      <h2>Posts</h2>
      <div class="user-select">
        <label for="userSelect">Pilih User:</label>
        <select id="userSelect" v-model="selectedUserId" @change="fetchPosts">
          <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
        </select>
      </div>
      <ul v-if="posts.length">
        <li v-for="post in posts" :key="post.id" class="post-item">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </li>
      </ul>
      <p v-else class="no-posts">Tidak ada post yang tersedia.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [],
        selectedUserId: null,
        posts: []
      };
    },
    methods: {
      fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => {
            this.users = data;
            if (this.users.length) {
              this.selectedUserId = this.users[0].id;
              this.fetchPosts();
            }
          });
      },
      fetchPosts() {
        if (this.selectedUserId) {
          fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUserId}`)
            .then(response => response.json())
            .then(data => {
              this.posts = data;
            });
        }
      }
    },
    mounted() {
      this.fetchUsers();
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333333;
  }
  
  .user-select {
    margin-bottom: 20px;
  }
  
  label {
    font-size: 16px;
    font-weight: bold;
    color: #555555;
  }
  
  select {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    background-color: #f9f9f9;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  .post-item {
    margin-bottom: 20px;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 4px;
  }
  
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333333;
  }
  
  p {
    font-size: 16px;
    color: #666666;
  }
  
  .no-posts {
    font-size: 18px;
    color: #999999;
  }
  </style>
  