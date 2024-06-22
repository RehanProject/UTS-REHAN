<template>
    <div class="todo-container">
      <h2>Kegiatan yang Sudah Ditambahkan</h2>
      <ul>
        <li v-for="kegiatan in kegiatanList" :key="kegiatan.id" :class="{ done: kegiatan.isDone }">
          <input type="checkbox" v-model="kegiatan.isDone" />
          <span>{{ kegiatan.nama }}</span>
          <button @click="deleteKegiatan(kegiatan)" class="delete-button">
            <i class="fas fa-trash-alt"></i>
          </button>
        </li>
      </ul>
      <form @submit.prevent="addKegiatan" class="add-form">
        <input type="text" v-model="newKegiatan.nama" placeholder="Tambah Kegiatan Baru" />
        <button type="submit" class="add-button">
          <i class="fas fa-plus"></i> Tambah
        </button>
      </form>
      <button @click="showCompletedTasks" class="show-completed-button">
        <i class="fas fa-check"></i> Tampilkan Kegiatan yang Sudah Selesai
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        kegiatanList: [
          { id: 1, nama: 'besok sekolah', isDone: false },
          { id: 2, nama: 'besok kerja', isDone: false }
        ],
        newKegiatan: { nama: '' }
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
      showCompletedTasks() {
        this.kegiatanList = this.kegiatanList.filter(kegiatan => kegiatan.isDone);
      }
    }
  };
  </script>
  
  <style scoped>
  .todo-container {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    background-color: #f4f4f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
  }
  
  h2 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s;
  }
  
  li:hover {
    background-color: #f0f0f0;
  }
  
  li.done span {
    text-decoration: line-through;
    color: #7f8c8d;
  }
  
  input[type="checkbox"] {
    margin-right: 15px;
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 10px;
    transition: color 0.3s;
  }
  
  button:hover {
    color: #e74c3c;
  }
  
  .add-form {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  
  .add-form input {
    flex: 1;
    padding: 10px;
    border: 2px solid #bdc3c7;
    border-radius: 5px;
    margin-right: 10px;
  }
  
  .add-button {
    padding: 10px 15px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .add-button:hover {
    background-color: #2980b9;
  }
  
  .show-completed-button {
    margin-top: 20px;
    padding: 10px 15px;
    background-color: #2ecc71;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: block;
    width: 100%;
    text-align: center;
    transition: background-color 0.3s;
  }
  
  .show-completed-button:hover {
    background-color: #27ae60;
  }
  </style>
  