<template>
    <div class="item-laptop__item">
        <div class="item-laptop__image">
            <img :src="product.imgSrc" alt="" />
        </div>
        <div class="item-laptop__info">
            <div class="item-laptop__title">{{ product.title }}</div>
            <div v-if="item.currentPrice" class="item-laptop__current-price">{{ product.currentPrice }} ₴</div>
            <div v-if="item.oldPrice" class="item-laptop__old">{{ product.oldPrice }} ₴</div>
            <div v-if="item.price" class="item-laptop__price">{{ product.price }} ₴</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductItem',
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped></style>
