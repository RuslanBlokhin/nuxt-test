<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__label">
        <div class="header__label-image">
          <NuxtImg src="/union.svg" width="37.5" height="37.5" format="svg" alt="union" preload />
        </div>
        <div class="header__label-text">zaim nakarty</div>
      </div>
    </div>
  </header>
  <main class="container">
    <slot />
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.header {
  padding: 0 10px;
  height: 37.5px;
  max-width: 500px;
  margin: 0 auto;

  &__label {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: 20px;
  }

  &__label-image {
    min-width: 37.5px;
    width: 37.5px;
    height: 37.5px;
  }

  &__label-text {
    font-family: 'QuinqueFive', sans-serif;
    width: 136.52px;
    height: 37.5px;
    color: #baff24;
    font-size: 15px;
    line-height: 18.78px;
  }
}
@media screen and (min-width: 768px) {
  .header {
    padding: 0 20px;
    max-width: 960px;

    &__label {
      margin-top: 32px;
    }
  }
}
@media screen and (min-width: 1440px) {
  .header {
    padding: 0;
    max-width: none;
    width: 1160px;

    &__label {
      margin-top: 32px;
    }
  }
}
</style>
