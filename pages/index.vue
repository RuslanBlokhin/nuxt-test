<template>
  <div class="main">
    <div class="main__hero">
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
      <NuxtImg format="png" src="/coins.png" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.main {
  display: flex;
  align-items: center;
  column-gap: 90px;

  &__hero {
    width: 660px;
  }
  &__title {
    margin: 70px 0 10px;
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 64px;
    line-height: 76.8px;
  }
  &__description {
    font-size: 24px;
    line-height: 31.2px;

    &--gray {
      color: rgba(255, 255, 255, 0.5);
      font-weight: 300;
    }
    &--white {
      font-weight: 400;
    }
  }
  &__hero-image {
    min-width: 384px;
    width: 384px;
  }
}
</style>
