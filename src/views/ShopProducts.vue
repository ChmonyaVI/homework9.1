<template>
    <div class="shop__laptop-item item-laptop">
        <div class="item-laptop__test">
            <div v-for="product in productList" :key="product.id" class="item-laptop__item-card">
                <div class="item-laptop__image">
                    <img :src="product.imgSrc" alt="" />
                </div>
                <div class="item-laptop__info">
                    <div class="item-laptop__title">{{ product.title }}</div>
                    <div v-if="product.currentPrice" class="item-laptop__current-price">
                        {{ product.currentPrice }} ₴
                    </div>
                    <div v-if="product.oldPrice" class="item-laptop__old">{{ product.oldPrice }} ₴</div>
                    <div v-if="product.price" class="item-laptop__price">{{ product.price }} ₴</div>
                </div>
            </div>
        </div>
        <button class="item-laptop__button btn" @click="goInMain()">На главную</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ShopProducts',
    components: {},
    data() {
        return {
            productList: [],
        }
    },
    computed: {
        ...mapGetters(['getProductList']),

        getProductTitle() {
            return this.$route.params.title
        },
    },
    created() {
        this.productList = this.getProductList(this.getProductTitle)
        console.log(this.productList)
    },
    methods: {
        goInMain() {
            this.$router.push({
                name: 'home',
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
