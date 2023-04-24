<template>
  <n-config-provider :locale="locale" :date-locale="dateLocale" :theme="darkTheme">
    <n-message-provider>
      <n-dialog-provider>
        <n-back-top class="backTop" :right="20" :bottom="20" />
        <RouterView />
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped></style>

<script setup>
import { RouterView } from 'vue-router'
</script>
