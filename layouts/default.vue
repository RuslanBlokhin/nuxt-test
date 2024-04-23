<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__label">
        <div class="header__label-image">
          <NuxtImg src="/union.svg" width="34.35" height="34.35" format="svg" alt="union" />
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
  &__wrapper {
    width: 1160px;
    margin: 0 auto;
  }
  &__label {
    display: flex;
    align-items: flex-end;
    gap: 9px;
    margin-top: 32px;
  }
  &__label-image {
    min-width: 34.35px;
    width: 34.35px;
    height: 34.35px;
  }
  &__label-text {
    font-family: 'QuinqueFive', sans-serif;
    width: 136.52px;
    color: #baff24;
    font-size: 15px;
    line-height: 18.78px;
  }
}
</style>
