<template>
  <div>
    <header>
      <nav>
        <ul>
          <li :class="{ active: currentView === 'todos' }" @click="currentView = 'todos'">
            <i class="fas fa-tasks"></i> Todos
          </li>
          <li :class="{ active: currentView === 'posts' }" @click="currentView = 'posts'">
            <i class="fas fa-newspaper"></i> Posts
          </li>
        </ul>
      </nav>
    </header>

    <div v-if="currentView === 'todos'">
      <h2>Kegiatan yang Sudah Ditambahkan</h2>
      <ul>
        <li v-for="kegiatan in kegiatanList" :key="kegiatan.id">
          <input type="checkbox" v-model="kegiatan.isDone" />
          <del v-if="kegiatan.isDone">{{ kegiatan.nama }}</del>
          <span v-else>{{ kegiatan.nama }}</span>
          <button @click="deleteKegiatan(kegiatan)">
            <i class="fas fa-trash-alt"></i>
          </button>
        </li>
      </ul>
      <form @submit.prevent="addKegiatan">
        <input type="text" v-model="newKegiatan.nama" placeholder="Tambah Kegiatan Baru" />
        <button type="submit">
          <i class="fas fa-plus"></i> Tambah
        </button>
      </form>
      <button @click="showCompletedTasks">
        <i class="fas fa-check"></i> Tampilkan Kegiatan yang Sudah Selesai
      </button>
    </div>

    <div v-else>
      <h2>Posts</h2>
      <div>
        <label for="userSelect">Select User:</label>
        <select v-model="selectedUserId" @change="fetchPosts">
          <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
        </select>
      </div>
      <ul v-if="posts.length">
        <li v-for="post in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </li>
      </ul>
      <p v-else>No posts available.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentView: 'todos',
      kegiatanList: [
        { id: 1, nama: 'besok sekolah', isDone: false },
        { id: 2, nama: 'besok kerja', isDone: false }
      ],
      newKegiatan: { nama: '' },
      users: [],
      selectedUserId: null,
      posts: []
    };
  },
  methods: {
    addKegiatan() {
      if (this.newKegiatan.nama.trim()) {
        this.kegiatanList.push({ id: this.kegiatanList.length + 1, nama: this.newKegiatan.nama, isDone: false });
        this.newKegiatan.nama = '';
      }
    },
    deleteKegiatan(kegiatan) {
      this.kegiatanList = this.kegiatanList.filter(k => k.id !== kegiatan.id);
    },
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
    },
    showCompletedTasks() {
      this.kegiatanList = this.kegiatanList.filter(kegiatan => kegiatan.isDone);
    }
  },
  mounted() {
    this.fetchUsers();
  }
};
</script>

<style>
/* Navigation Styles */
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

nav li {
  cursor: pointer;
  padding: 10px 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  margin: 10px;
}

nav li.active {
  background-color: #0cff14;
  color: white;
}

/* Todo and Post Styles */
li {
  list-style: none;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}

li:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

button[type="submit"] {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}

button[type="submit"]:hover {
  background-color: #3e8e41;
}

/* Post Section Styles */
select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

/* Add Icons */
.fas {
  font-size: 18px;
  margin-right: 5px;
}

.fas.fa-tasks {
  color: #8bc34a;
}

.fas.fa-newspaper {
  color: #9c27b0;
}

.fas.fa-trash-alt {
  color: #e74c3c;
}

.fas.fa-plus {
  color: #2ecc71;
}

.fas.fa-check {
  color: #4CAF50;
}
</style>