import Vue from 'vue';
import App from './App.vue';


import Project from '#/Project.vue'
import ProjectItem from '#/ProjectItem.vue'
Vue.component('project', Project)
Vue.component('project-item', ProjectItem)


new Vue({ render: createElement => createElement(App) }).$mount('#app')