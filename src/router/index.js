import { createRouter, createWebHistory } from 'vue-router';
import Todos from '../pages/Todos.vue';
import Posts from '../pages/Posts.vue';
import Albums from '../pages/Albums.vue';
import AlbumPhotos from '../pages/AlbumPhotos.vue';

const routes = [
  { path: '/', redirect: '/todos' },
  { path: '/todos', component: Todos },
  { path: '/posts', component: Posts },
  { path: '/albums', component: Albums },
  { 
    path: '/albums/:id', 
    component: AlbumPhotos, 
    name: 'AlbumPhotos',
    props: true 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;