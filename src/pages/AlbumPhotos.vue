<template>
    <q-page>
      <h1>Album Photo</h1>
      <q-list>
        <q-item v-for="photo in photos" :key="photo.id" clickable @click="viewPhoto(photo.url)">
          <q-item-section>
            <img :src="photo.thumbnailUrl" class="thumbnail" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ photo.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-dialog v-model="isPhotoDialogOpen">
        <img :src="currentPhotoUrl" class="dialog-img" />
      </q-dialog>
    </q-page>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
    name: 'AlbumPhotos',
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    setup(props) {
      const photos = ref([]);
      const isPhotoDialogOpen = ref(false);
      const currentPhotoUrl = ref('');
  
      const fetchPhotos = async () => {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${props.id}`);
          photos.value = response.data;
        } catch (error) {
          console.error('Error fetching photos:', error);
        }
      };
  
      onMounted(fetchPhotos);
  
      const viewPhoto = (url) => {
        currentPhotoUrl.value = url;
        isPhotoDialogOpen.value = true;
      };
  
      return {
        photos,
        isPhotoDialogOpen,
        currentPhotoUrl,
        viewPhoto
      };
    }
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
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .q-item {
    width: 250px;
    margin: 10px;
    padding: 10px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .q-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .thumbnail {
    max-width: 100px;
    max-height: 100px;
    border-radius: 8px;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .thumbnail:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .q-item-section {
    display: flex;
    align-items: center;
  }
  
  .q-item-label {
    font-weight: bold;
    font-family: 'Arial', sans-serif;
    color: #34495e;
    margin-left: 15px;
  }
  
  .dialog-img {
    max-width: 100%;
    border-radius: 10px;
    transition: transform 0.3s;
  }
  
  .dialog-img:hover {
    transform: scale(1.05);
  }
  </style>
  