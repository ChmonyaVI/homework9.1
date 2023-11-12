import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShopPage from '@/views/ShopPage.vue'
import RulesPage from '@/views/RulesPage.vue'
import ContactsPage from '@/views/ContactsPage.vue'
import ShopProducts from '@/views/ShopProducts.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/shop',
        name: 'shop',
        component: ShopPage,
    },
    {
        path: '/rules',
        name: 'rules',
        component: RulesPage,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsPage,
    },
    {
        path: '/product/:title',
        name: 'product',
        component: ShopProducts,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
