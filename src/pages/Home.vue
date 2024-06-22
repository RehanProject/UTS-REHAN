<template>
    <q-page>
      <h1>Home Page</h1>
      <AlbumPhotos />
    </q-page>
  </template>
  
  <script>
  import AlbumPhotos from './AlbumPhotos.vue';
  
  export default {
    name: 'HomePage',
    components: {
      AlbumPhotos,
    },
  };
  </script>