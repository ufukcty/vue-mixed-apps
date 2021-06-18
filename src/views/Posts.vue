<template>
  <div class="container">
    <router-link to="/create-post" class="btn btn-primary">Create Post</router-link>
    <div v-if="loading" class="spinner-border">
      <span class="sr-only">Loading...</span>
    </div>
    <table v-else class="table">
      <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">User Id</th>
        <th scope="col">Title</th>
        <th scope="col">Body</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="post in posts" :key="post.id">
        <th>
          <router-link :to="`/post/${post.id}`">{{ post.id }}</router-link>
        </th>
        <td>
          <router-link :to="`/user/${post.userId}`">{{ post.userId }}</router-link>
        </td>
        <td>{{ post.title }}</td>
        <td>{{ post.body }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      loading: true
    }
  },
  methods: {
    getPosts() {
      this.loading = true;
      this.$axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        this.posts = response.data;
        this.loading = false;
      }).catch(() => {
        this.$notify({
          type: 'error',
          title: 'Hata'
        });
      });
    }
  },
  mounted() {
    this.getPosts();
  }
}
</script>
