<template>
    <div class="navigation__container">
        <nav class="navigation__nav">
            <div class="navigation__list">
                <div class="navigation__item"><router-link to="/">Головна</router-link> |</div>
                <div class="navigation__item"><router-link to="/shop">Магазин</router-link> |</div>
                <div class="navigation__item"><router-link to="/rules">Правила оплаты</router-link> |</div>
                <div class="navigation__item"><router-link to="/contacts">Контакты</router-link></div>
            </div>
        </nav>
        <router-view />
    </div>
</template>

<style lang="scss">
@import '@/assets/style/index.scss';
</style>
