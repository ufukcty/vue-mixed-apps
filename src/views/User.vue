<template>
  <div class="container">
    <div v-if="loading" class="spinner-border">
      <span class="sr-only">Loading...</span>
    </div>
    <div v-else class="card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: {{ user.name }} ({{ user.username }})</li>
        <li class="list-group-item">Email: {{ user.email }}</li>
        <li class="list-group-item">Phone: {{ user.phone }}</li>
        <li class="list-group-item">Website: <a :href="user.website">{{ user.website }}</a></li>
      </ul>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Company name: {{ user.company.name }}</li>
        <li class="list-group-item">Address: {{ user.address.street }} {{ user.address.suite }} {{ user.address.city }} {{ user.address.zipcode }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      loading: true
    }
  },
  methods: {
    getUser() {
      this.loading = true;
      this.$axios.get(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`).then((response) => {
        this.user = response.data;
      }).catch(() => {
        this.$notify({
          type: 'error',
          title: 'Hata'
        });
      }).finally(() => {
        this.loading = false;
      });
    }
  },
  mounted() {
    this.getUser();
  }
}
</script>
