<template>
    <div class="navigation__container shop">
        <div class="shop__text"><p>Список товаров:</p></div>
        <div class="shop__block">
            <ul class="shop__list">
                <li v-for="item in getCategoriesList" :key="item.id" class="shop__item">
                    <button class="shop__link btn" @click="sendCategory(item.title)">{{ item.title }}</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ShopPage',
    computed: {
        ...mapGetters(['getCategoriesList']),
    },
    methods: {
        sendCategory(title) {
            this.$router.push({
                name: 'product',
                params: {
                    title,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
