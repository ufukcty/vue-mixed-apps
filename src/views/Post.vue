<template>
  <div class="container">
    <div v-if="loading" class="spinner-border">
      <span class="sr-only">Loading...</span>
    </div>
    <div v-else class="card">
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.body }}</p>
        <button @click="editPost" class="btn btn-primary">Edit</button>
        <button @click="deletePost" class="btn btn-danger">Delete</button>
      </div>
    </div>
    <div v-if="edit" class="card mt-4">
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="title">Title</label>
            <input v-model="post.title" type="text" class="form-control" id="title">
          </div>
          <div class="form-group">
            <label for="body">Body</label>
            <textarea v-model="post.body" class="form-control" id="body" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="userId">User id</label>
            <input v-model="post.userId" type="number" class="form-control" id="userId">
          </div>
          <button @click="cretePost" :disabled="saving" type="button" class="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: [],
      loading: true,
      saving: false,
      edit: false
    }
  },
  methods: {
    getPost() {
      this.loading = true;
      this.$axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`).then((response) => {
        this.post = response.data;
      }).catch(() => {
        this.$notify({
          type: 'error',
          title: 'Hata'
        });
      }).finally(() => {
        this.loading = false;
      });
    },
    deletePost() {
      this.$axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`).then(() => {
        this.$router.push({ name: 'Posts' });
        this.$notify({
          type: 'success',
          title: 'Post silindi'
        });
      }).catch(() => {
        this.$notify({
          type: 'error',
          title: 'Hata'
        });
      });
    },
    editPost() {
      this.edit = true;
    },
    cretePost() {
      this.saving = true;
      this.$axios.put(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`, {
        title: this.post.title,
        body: this.post.body,
        userId: this.post.userId
      }).then(() => {
        this.edit = false;
        this.$notify({
          type: 'success',
          title: 'Post kaydedildi'
        });
      }).catch(() => {
        this.$notify({
          type: 'error',
          title: 'Hata'
        });
      }).finally(() => {
        this.saving = false;
      });
    }
  },
  mounted() {
    this.getPost();
  }
}
</script>
