<template>
  <div class="main">
    <div class="main__hero">
      <div class="main__title-block">
        <h1 class="main__title">Займы на карту онлайн от ведущих МФО</h1>
        <div class="main__description">
          <p class="main__description--gray">
            Для получения большей суммы, обращайтесь в разные мфо.
          </p>
          <p class="main__description--white">
            Заполнение двух и более заявок гарантирует получение требуемой суммы!
          </p>
        </div>
      </div>
      <div class="main__hero-image">
        <NuxtImg
          src="/coins.png"
          format="webp"
          width="384"
          height="378"
          alt="coins"
          loading="lazy"
          preload
        />
      </div>
    </div>
    <ul v-if="products" class="main__products-list">
      <ProductCard v-for="p in products" :key="p.id" :product="p" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import type IProduct from '~/models/product.model';

interface IResponce {
  ok: boolean;
  data: {
    domain: string;
    comment: string;
    autoSortOffers: boolean;
    offers: Array<IProduct>;
    created: number;
    id: string;
    updated: number;
    legalAddress: string;
    name: string;
    ogrnip: number;
    tin: number;
  };
}

const { data: products } = await useFetch('https://config-tool.ru/front.json', {
  transform(data: IResponce) {
    return data.data.offers;
  },
});
</script>

<style lang="scss">
.main {
  &__hero {
    margin-bottom: 30px;
  }

  &__title {
    margin: 20px 0 10px;
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 24px;
    line-height: 1;
  }
  &__description {
    font-size: 16px;

    &--gray {
      color: rgba(255, 255, 255, 0.5);
      font-weight: 300;
    }
    &--white {
      font-weight: 400;
    }
  }
  &__hero-image {
    display: none;
  }
  &__products-list {
    display: grid;
    grid-template-columns: repeat(1, 100%);
    justify-content: center;
    column-gap: 20px;
    row-gap: 20px;
  }

  @media screen and (min-width: 768px) {
    .main {
      &__title {
        font-size: 32px;
      }
      &__products-list {
        grid-template-columns: repeat(2, 49%);
      }
    }
  }

  @media screen and (min-width: 960px) {
    .main {
      &__products-list {
        grid-template-columns: repeat(3, 32%);
      }
    }
  }

  @media screen and (min-width: 1440px) {
    .main {
      &__hero {
        height: 378px;
        margin-bottom: 68px;
        display: flex;
        align-items: center;
        column-gap: 90px;
      }
      &__title-block {
        width: 660px;
      }
      &__title {
        margin: 70px 0 10px;
        font-size: 64px;
        line-height: 76.8px;
      }
      &__description {
        font-size: 24px;
        line-height: 31.2px;
      }
      &__hero-image {
        display: block;
        min-width: 384px;
        width: 384px;
        height: 378px;
      }
      &__products-list {
        max-width: none;
        grid-template-columns: repeat(4, 278px);
        column-gap: 16px;
        row-gap: 32px;
      }
    }
  }
}
</style>
