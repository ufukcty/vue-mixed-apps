<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h2>Sözleşme</h2>
        <p>Aşağıdaki ürünleri satın alacaksınız</p>
        <hr />
        <p v-for="product in products" :key="product.id">
          {{ product.quantity }} adet {{ product.name }} - (birim fiyatı: ₺{{ product.price }} - toplam fiyatı: ₺{{ product.quantity * product.price }})
        </p>
        <p>Toplam fiyat: ₺{{ totalPrice }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  computed: {
    products() {
      return store.getters.getCart;
    },
    totalProduct() {
      return store.getters.getTotalProduct;
    },
    totalPrice() {
      return store.getters.getTotalPrice;
    }
  },
}
</script>
