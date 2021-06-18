<template>
  <div class="container">
    <h1>Sepet</h1>
    <div v-if="totalProduct > 0">
      <div class="row">
        <div v-for="product in cart" class="col-md-3" :key="product.id">
          <div class="card">
            <img :src="product.image" :alt="product.name" class="card-img-top" />
            <div class="card-body text-center">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">Miktar: {{ product.quantity }}</p>
              <button class="btn btn-danger btn-sm btn-block" @click="removeToCart(product.id)">Sepetten çıkart</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h2>Toplam ürün: {{ totalProduct }}</h2>
      <h2>Toplam fiyat: ₺{{ totalPrice }}</h2>
      <router-link to="/payment" class="btn btn-success">Ödeme yap</router-link>
    </div>
    <div v-else class="alert alert-warning">
      Sepetinizde ürün yok.
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  computed: {
    cart() {
      return store.getters.getCart;
    },
    totalProduct() {
      return store.getters.getTotalProduct;
    },
    totalPrice() {
      return store.getters.getTotalPrice;
    }
  },
  methods: {
    removeToCart(id) {
      store.commit('removeToCart', id);
      this.$notify({
        type: 'success',
        title: 'Sepetten çıkarıldı'
      });
    }
  }
}
</script>
