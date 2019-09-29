<template>
  <div class="home">
    <div>
      <h1>Welcome to Tickets</h1>
    </div>
    <div>
      <router-link to="/ticket">
        <h2>Get Started</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  align-content: center;
  color: black;
}
a {
  color: black;
  text-emphasis: none;
  text-underline-position: auto;
}
.home {
  text-align: center;
}
</style>
