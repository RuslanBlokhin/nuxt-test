<template>
  <li :id="product.id" class="product-card">
    <div class="product-card__selling-text">{{ product.sellingText }}</div>
    <div class="product-card__wrapper">
      <div class="product-card__title-block">
        <div class="product-card__image">
          <NuxtImg :src="product.image" width="80" height="80" format="svg" alt="product" preload />
        </div>
        <div class="product-card__name-block">
          <h2 class="product-card__name">{{ product.sellingText }}</h2>
          <p class="product-card__documents">{{ product.documents }}</p>
        </div>
      </div>
      <ul class="product-card__conditions">
        <li class="product-card__condition-item">
          <div class="product-card__condition-value">{{ product.sum }}</div>
          <div class="product-card__condition-name">сумма</div>
        </li>
        <li class="product-card__condition-item">
          <div class="product-card__condition-value">{{ product.percent }}</div>
          <div class="product-card__condition-name">ставка</div>
        </li>
        <li class="product-card__condition-item">
          <div class="product-card__condition-value">от 21 года</div>
          <div class="product-card__condition-name">возраст</div>
        </li>
      </ul>
      <button
        type="button"
        target="_blank"
        class="product-card__request-btn"
        @click="clickRequestBtnHandler"
      >
        Заполнить заявку
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
import type IProduct from '~/models/product.model';
import type IYm from '~/models/ym.model';
const { product } = defineProps<{
  product: IProduct;
}>();

declare global {
  interface Window {
    ym: IYm;
  }
}

function clickRequestBtnHandler() {
  window.ym(97100842, 'reachGoal', '1');
  navigateTo(product.link, {
    external: true,
    open: {
      target: '_blank',
    },
  });
}
</script>

<style lang="scss">
.product-card {
  height: 372px;
  padding-top: 8px;
  border-radius: 30px;
  background-color: #343839;

  &__selling-text {
    margin-bottom: 8px;
    font-size: 14px;
    text-align: center;
    line-height: 1;
  }
  &__wrapper {
    width: 100%;
    height: 342px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
    border-radius: 30px;
    background-color: #232627;
  }
  &__title-block {
    margin-bottom: 32px;
    display: flex;
    align-items: flex-end;
    column-gap: 16px;
  }
  &__image {
    min-width: 80px;
    width: 80px;
    height: 80px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 30px;
  }

  &__name {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 130%;
  }

  &__documents {
    text-transform: lowercase;
    color: #8e8e8e;
  }

  &__conditions {
    margin-bottom: 32px;
    padding: 0 8px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }

  &__condition-item {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  &__condition-value {
    font-size: 20px;
    line-height: 140%;
  }

  &__condition-name {
    color: #575757;
  }

  &__request-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    border-radius: 30px;
    color: #141718;
    background-color: #baff24;
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
