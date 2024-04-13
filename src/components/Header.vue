

<template>
  <div class="nav">
    <router-link to="welcome" class="nav-link">Welcome</router-link>
    <router-link to="reg" class="nav-link">Register</router-link>
    <router-link to="/" class="nav-link">MyData</router-link>
   
    <!-- <a v-on:click="logout">Logout</a> -->
  </div>
</template>
  
  <script>
  export default {
    name: "Header",
    methods: {
      logout() {
        console.warn("Logout");
        // Implement logout logic here
      },
    },
  };
  </script>
  
 

<style>
.nav {
 
  display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.125);
    /* color: #343a40; */
    padding: 10px;
}

.nav-link {
  text-decoration: none;
  color:white;
  font-weight: bold;
  font-size: 120%;
  transition: transform 0.2s;
}

.nav-link:hover {
  transform: scale(1.5);
  color: rgb(25, 64, 74);
}
</style>
  