<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input v-model="title" type="text" class="form-control" id="title">
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <textarea v-model="body" class="form-control" id="body" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="userId">User id</label>
        <input v-model="userId" type="number" class="form-control" id="userId">
      </div>
      <button @click="cretePost" :disabled="loading" type="button" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      body: '',
      userId: '',
      loading: false
    }
  },
  methods: {
    cretePost() {
      this.loading = true;
      this.$axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.title,
        body: this.body,
        userId: this.userId
      }).then(() => {
        this.title = '';
        this.body = '';
        this.userId = '';
        this.loading = false;
        this.$notify({
          type: 'success',
          title: 'Başarıyla eklendi'
        });
      }).catch(() => {
        this.$notify({
          type: 'error',
          title: 'Eklenemedi'
        });
      });
    }
  }
}
</script>
