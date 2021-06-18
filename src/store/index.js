import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cart: []
  },
  getters: {
    getCart(state) {
      return state.cart;
    },
    getTotalProduct(state) {
      return state.cart.map((product) => product.quantity).reduce((a, b) => a + b, 0);
    },
    getTotalPrice(state) {
      return state.cart.map((product) => product.price * product.quantity).reduce((a, b) => a + b, 0);
    }
  },
  mutations: {
    addToCart(state, product) {
      if (state.cart.filter((cart) => cart.id === product.id).length === 0) {
        state.cart.push({
          ...product,
          quantity: 1
        });
      } else {
        state.cart[state.cart.findIndex((cart) => cart.id === product.id)].quantity += 1;
      }
    },
    removeToCart(state, id) {
      state.cart.splice(state.cart.findIndex((cart) => cart.id === id), 1);
    }
  }
});

export default store;
