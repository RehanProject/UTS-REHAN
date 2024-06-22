import { defineStore } from 'pinia';
import axios from 'axios';

export const useAlbumsStore = defineStore('albums', {
  state: () => ({
    albums: [],
    photos: [],
  }),
  actions: {
    async fetchAlbums() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
      this.albums = response.data;
    },
    async fetchPhotosByAlbum(albumId) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
      this.photos = response.data;
    },
  },
});