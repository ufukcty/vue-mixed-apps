<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Market</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">Cart ({{ totalProduct }})</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/exchange">Exchange</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/posts">Posts</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
    <notifications />
  </div>
</template>

<script>
import store from './store';

export default {
  computed: {
    totalProduct() {
      return store.getters.getTotalProduct;
    }
  }
}
</script>
