<script setup>
import { computed } from "vue";
import ContainerUI from "@/components/UI/ContainerUI.vue";
import Item from "@/components/Item.vue";

import { useMainStore } from "@/stores/mainStore";
const mainStore = useMainStore();

const items = computed(() => mainStore.groups.choosingItemsSelected);

const handlerCLick = (item) => {
  mainStore.moveItemBetweenContainers({ item, fromKey: "choosingItemsSelected", toKey: "choosingItems" });
};
</script>

<template>
  <ContainerUI
    name="Choosing Items Selected"
    :max="mainStore.groups.MAX_CHOOSING_ITEMS_SELECTED"
    :current="mainStore.groups.choosingItemsSelected.length"
  >
    <Item :key="item.id" v-for="item in items" @click="handlerCLick(item)">{{ item.name }}</Item>
  </ContainerUI>
</template>

<style scoped></style>
