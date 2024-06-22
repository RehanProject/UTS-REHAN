import Home from 'pages/Home.vue';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: Home },
      // Lainnya
    ],
  },
  // Lainnya
];

export default routes;