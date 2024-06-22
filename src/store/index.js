import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    kegiatanList: [
      { id: 1, nama: 'besok sekolah', isDone: false },
      { id: 2, nama: 'besok kerja', isDone: false }
    ],
    newKegiatan: { nama: '' },
    users: [],
    selectedUserId: null,
    posts: [],
    albums: [],
    photos: []
  }),
  actions: {
    addKegiatan() {
      if (this.newKegiatan.nama.trim()) {
        this.kegiatanList.push({ id: this.kegiatanList.length + 1, nama: this.newKegiatan.nama, isDone: false });
        this.newKegiatan.nama = '';
      }
    },
    deleteKegiatan(kegiatan) {
      this.kegiatanList = this.kegiatanList.filter(k => k.id !== kegiatan.id);
    },
    showCompletedTasks() {
      this.kegiatanList = this.kegiatanList.filter(kegiatan => kegiatan.isDone);
    },
    async fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      this.users = await response.json();
      if (this.users.length) {
        this.selectedUserId = this.users[0].id;
        this.fetchPosts();
      }
    },
    async fetchPosts() {
      if (this.selectedUserId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUserId}`);
        this.posts = await response.json();
      }
    },
    async fetchAlbums() {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      this.albums = await response.json();
    },
    async fetchPhotos(albumId) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
      this.photos = await response.json();
    }
  }
});
