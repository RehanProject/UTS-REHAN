<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Vue App Rehan Tifanno</q-toolbar-title>
        <q-btn flat @click="goTo('/todos')" label="Todos" />
        <q-btn flat @click="goTo('/posts')" label="Posts" />
        <q-btn flat @click="goTo('/albums')" label="Albums" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const goTo = (path) => {
      router.push(path);
    };

    return { goTo };
  }
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #949191;
}


.q-layout {
  height: 100vh; 
}


.q-header {
  background-color: #f50c00; 
  color: white; 
}

.q-toolbar-title {
  font-size: 24px; 
}

.q-btn {
  color: white; 
}

.q-btn.flat:hover {
  background-color: rgba(255, 255, 255, 0.1); 
}


.q-page-container {
  padding: 20px; 
}


.router-view {
  background-color: white; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  border-radius: 5px; 
}


.q-btn {
  text-transform: uppercase; 
  font-weight: 500; 
  margin-left: 10px; 
}

.q-btn.flat {
  background-color: transparent; 
  border: 1px solid white; 
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease; 
}

.q-btn.flat:hover {
  background-color: rgba(255, 255, 255, 0.1); 
  color: #ffffff; 
  border-color: rgba(255, 255, 255, 0.5); 
}


@media (max-width: 600px) {
  .q-toolbar-title {
    font-size: 20px; 
  }
}
</style>


