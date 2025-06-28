<script setup>
import { computed } from "vue";
import ContainerUI from "@/components/UI/ContainerUI.vue";
import Item from "@/components/Item.vue";

import { useMainStore } from "@/stores/mainStore";
const mainStore = useMainStore();

const items = computed(() => mainStore.groups.userItems);

const handlerCLick = (item) => {
  mainStore.moveItemBetweenContainers({ item, fromKey: "userItems", toKey: "userItemsSelected", max: mainStore.groups.MAX_USER_ITEMS_SELECTED });
};
</script>

<template>
  <ContainerUI name="User Items">
    <Item :key="item.id" v-for="item in items" @click="handlerCLick(item)">
      {{ item.name }}
    </Item>
  </ContainerUI>
</template>

<style scoped></style>
