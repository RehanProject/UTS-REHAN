<template>
    <q-page>
      <h1>Albums</h1>
      <q-list>
        <q-item v-for="album in albums" :key="album.id" clickable @click="goToAlbum(album.id)">
          <q-item-section>{{ album.title }}</q-item-section>
        </q-item>
      </q-list>
    </q-page>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Albums',
    setup() {
      const albums = ref([]);
      const router = useRouter();
  
      const fetchAlbums = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
          albums.value = response.data;
        } catch (error) {
          console.error('Error fetching albums:', error);
        }
      };
  
      const goToAlbum = (id) => {
        router.push({ name: 'AlbumPhotos', params: { id } });
      };
  
      onMounted(fetchAlbums);
  
      return {
        albums,
        goToAlbum,
      };
    },
  };
  </script>
  
  <style scoped>
  .q-page {
    padding: 20px;
    background-color: #f4f4f9;
  }
  
  h1 {
    text-align: center;
    color: #2c3e50;
    font-family: 'Arial', sans-serif;
    margin-bottom: 30px;
  }
  
  .q-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .q-item {
    width: 90%;
    max-width: 600px;
    margin: 10px 0;
    padding: 15px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, background-color 0.3s;
  }
  
  .q-item:hover {
    transform: translateY(-5px);
    background-color: #f9f9f9;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .q-item-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .q-item-section:first-child {
    font-weight: bold;
    color: #34495e;
    font-family: 'Arial', sans-serif;
    font-size: 16px;
  }
  
  .q-item-section:last-child {
    color: #7f8c8d;
    font-size: 14px;
    font-family: 'Arial', sans-serif;
  }
  </style>
  