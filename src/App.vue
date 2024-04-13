<template>
 
  <router-view />
  </template>
  
  <script>
  
  export default {
    name: 'App',

    
   
  }
  </script>
  
  <style>
  /* Reset default margin and padding */
  body, html {
    margin: 0;
    padding: 0;
  }
  
  /* Set the background image */
  body {
    
    
    background-size: contain;
    background-position: center ;
   
     background-attachment: fixed;
  
  background-repeat: no-repeat;
   
    
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    
    max-width: 100vw; /* Limit width for better readability */
    padding: 20px;
   /*background-color: rgba(255, 255, 255, 0.8); /* Add a semi-transparent white background */
    border-radius: 8px; /* Add some border radius for a softer look */
  
  
     
  }
  
  
  </style>
  