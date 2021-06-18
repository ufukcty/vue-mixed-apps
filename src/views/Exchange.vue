<template>
  <div class="container">
    <div v-if="loading" class="spinner-border">
      <span class="sr-only">Loading...</span>
    </div>
    <table v-else class="table">
      <thead>
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Volume</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coin in coins" :key="coin.id">
          <th>{{ coin.rank }}</th>
          <td>
            <img :src="coin.icon" :alt="coin.name" width="24" />
            ({{ coin.symbol }}) {{ coin.name }}
          </td>
          <td>₺ {{ coin.price.toFixed(2) }}</td>
          <td>₺ {{ coin.volume.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coins: [],
      loading: true
    }
  },
  methods: {
    getCurrencies() {
      this.loading = true;
      this.$axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10&currencyTRY').then((response) => {
        this.coins = response.data.coins;
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
    this.getCurrencies();
  }
}
</script>
