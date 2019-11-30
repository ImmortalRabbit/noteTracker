/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueHead from 'vue-head';

Vue.use(VueHead);
Vue.use(VueRouter);

import NoteCreate from './components/notes/NotesCreate';
import NoteEdit from './components/notes/NotesEdit';
import NoteIndex from './components/notes/NotesIndex';
import Editor from '@tinymce/tinymce-vue';
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('tinymce-editor', require('@tinymce/tinymce-vue').default); //component name should be in camel-case

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
// });

const routes = [
    {
        path: '/edit/:id',
        component: NoteEdit,
        name: 'editNote'
    },
    {
        path: '/create',
        component: NoteCreate,
        name: 'createNote'
    },
    {
        path: '/',
        component: NoteIndex,
        name: 'indexNotes'
    },
];

const router = new VueRouter({ routes });

const app = new Vue({ router }).$mount('#app');

