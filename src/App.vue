<script setup>
import UserItemsSelected from "@/components/UserItemsSelected.vue";
import ChoosingItemsSelected from "@/components/ChoosingItemsSelected.vue";

import UserItems from "@/components/UserItems.vue";
import ChoosingItems from "@/components/ChoosingItems.vue";

import { findCookie } from "@/utils/cookie";

import { useMainStore } from "@/stores/mainStore";
const mainStore = useMainStore();

const savedStoreCookie = findCookie("groups");
if (savedStoreCookie) {
  mainStore.setInitialStore(JSON.parse(savedStoreCookie.split("=")[1]));
}
</script>

<template>
  <main class="main">
    <UserItemsSelected />
    <ChoosingItemsSelected />

    <UserItems />
    <ChoosingItems />
  </main>
</template>

<style scoped>
.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 45px;
  max-width: 1200px;
  margin: auto;
}

@media (width < 768px) {
  .main {
    gap: 15px 10px;
  }
}
</style>
