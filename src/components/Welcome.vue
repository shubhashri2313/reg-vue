<template>
<!-- <Header></Header> -->
<div class ="heading">
    <h1>"Join Us Today and Start Your Journey!"</h1>
    <br />
    <div class="custom-gif">
        <img src="../assets/wel6.gif" alt="gif">
    </div>
    <br />
    <a href="/reg">
        <button>Sign Up</button>
    </a>
</div>
</template>

<!-- <script>
import Header from "./Header.vue";
export default {

    components: {
        Header
    }
}
</script> -->

<style>

.custom-gif img {
    width: 500px;
    height: 400px;
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.heading{
  color:white;
}
button{
  background-color: rgb(0, 0, 0);
  color: rgb(219, 138, 7);
}
</style>
