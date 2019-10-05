<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <h2>
              <router-link class="nav-link" :to="{name: 'Home'}" exact>Dashboard</router-link>
            </h2>
          </li>
          <li class="nav-item">
            <h2>
              <router-link class="nav-link" :to="{name: 'Ticket'}" exact>Tickets</router-link>
            </h2>
          </li>
          <li class="nav-item">
            <h2>
              <router-link class="nav-link" :to="{name: 'User'}" exact>Users</router-link>
            </h2>
          </li>
          <li class="nav-item">
            <h2>
              <router-link class="nav-link" :to="{name: 'Location'}" exact>Locations</router-link>
            </h2>
          </li>
          <li class="nav-item">
            <h2>
              <router-link class="nav-link" :to="{name: 'Region'}" exact>Regions</router-link>
            </h2>
          </li>
          <li class="nav-item">
            <h2>
              <router-link class="nav-link" :to="{name: 'Priority'}" exact>Priorities</router-link>
            </h2>
          </li>
          <li class="nav-item">
            <h2>
              <router-link class="nav-link" :to="{name: 'Category'}" exact>Categories</router-link>
            </h2>
          </li>
          <li class="nav-item">
            <h2>
              <router-link class="nav-link" :to="{name: 'Role'}" exact>Roles</router-link>
            </h2>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
h2 {
  color: black;
}
.nav-link {
  color: black;
  text-decoration: none;
  text-underline-position: auto;
}
header {
  background-color: azure;
  width: 1084px;
  margin: 0 auto;
}
.router-link-active {
  color: crimson;
}
main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  border-right: 1px solid #999;
}
</style>
