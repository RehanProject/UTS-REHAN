<template>
    <q-header>
      <q-toolbar>
        <q-btn flat label="Todos" @click="navigateTo('/todos')" />
        <q-btn flat label="Posts" @click="navigateTo('/posts')" />
        <q-btn flat label="Albums" @click="navigateTo('/albums')" />
      </q-toolbar>
    </q-header>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Header',
    setup() {
      const router = useRouter();
  
      const navigateTo = (path) => {
        router.push(path);
      };
  
      return {
        navigateTo,
      };
    },
  };
  </script>