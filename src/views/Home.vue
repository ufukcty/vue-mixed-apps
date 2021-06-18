<template>
  <div class="container">
    <h1>Ürünler</h1>
    <div class="row">
      <div v-for="product in products" class="col-md-3" :key="product.id">
        <div class="card">
          <img :src="product.image" :alt="product.name" class="card-img-top" />
          <div class="card-body text-center">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Fiyat: ₺{{ product.price }}</p>
            <button class="btn btn-primary btn-sm btn-block" @click="addToCart(product.id)">Sepete ekle</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Çikolata',
          image: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/07040651/07040651-00aadd.jpg',
          price: 3
        },
        {
          id: 2,
          name: 'Cips',
          image: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05082030/05082030-5d3c88.jpg',
          price: 7
        },
        {
          id: 3,
          name: 'Dondurma',
          image: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/11578748/11578748-576e01.jpg',
          price: 5
        },
        {
          id: 4,
          name: 'Su',
          image: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08062201/08062201-3aa86b.jpg',
          price: 1
        }
      ]
    }
  },
  methods: {
    addToCart(id) {
      store.commit('addToCart', this.products.find((product) => product.id === id));
      this.$notify({
        type: 'success',
        title: 'Sepete eklendi'
      });
    }
  }
}
</script>
