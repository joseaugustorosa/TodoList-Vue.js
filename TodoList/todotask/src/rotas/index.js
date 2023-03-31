import { createRouter, createWebHistory} from 'vue-router'


import container from '../components/ContainerComponent.vue'
import input from '../components/InputComponent.vue'
import input_edit from '../components/InputEditComponent.vue'

const routes = [ {
        path: '/',
        name:'todoList',
        component: container
},
{
    path:'/input',
    nome: 'input',
    component: input,
    props: {
      isFloatingPage: true
    }
},{
    path:'/inputEdit',
    nome: 'inputEdit',
    component: input_edit
}
];

const router = createRouter({
    history:createWebHistory(),
    routes
});


export default router;