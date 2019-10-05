<template>
  <div class="home">
    <div>
      <h1>Welcome to Tickets Dashboard!</h1>
    </div>
    <div>
      <router-link to="/ticket">
        <h2>Tickets</h2>
      </router-link>
      <router-link to="/user">
        <h2>Users</h2>
      </router-link>
      <router-link to="/location">
        <h2>Locations</h2>
      </router-link>
      <router-link to="/region">
        <h2>Regions</h2>
      </router-link>
      <router-link to="/priority">
        <h2>Priorities</h2>
      </router-link>
      <router-link to="/category">
        <h2>Categories</h2>
      </router-link>
      <router-link to="/role">
        <h2>Roles</h2>
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
