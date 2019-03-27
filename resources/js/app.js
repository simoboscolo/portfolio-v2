import Vue from 'vue';
import MainContainer from './components/MainContainer.vue';

Vue.component('main-container', MainContainer);

const app = new Vue({
    el: '#app'
});