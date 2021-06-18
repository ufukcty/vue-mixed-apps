import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import Payment from '../views/Payment.vue';
import Exchange from '../views/Exchange.vue';
import Posts from '../views/Posts.vue';
import Post from '../views/Post.vue';
import User from '../views/User.vue';
import CreatePost from '../views/CreatePost.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/exchange',
    name: 'Exchange',
    component: Exchange
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User
  },
  {
    path: '/create-post',
    name: 'CreatePost',
    component: CreatePost
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
