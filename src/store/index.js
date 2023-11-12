import { createStore } from 'vuex'
import { productList } from '@/data/itemsList'

export default createStore({
    state: {
        categoriesList: [
            { id: 1, title: 'Batteries' },
            { id: 2, title: 'Laptop' },
            { id: 3, title: 'Massager' },
            { id: 4, title: 'SpecialEquip' },
        ],
        productList,
    },
    getters: {
        getCategoriesList: ({ categoriesList }) => categoriesList,
        getProductList: (state) => (categoryTitle) => {
            return state.productList.filter((item) => item.category === categoryTitle)
        },
    },
    mutations: {},
    actions: {},
    modules: {},
})
