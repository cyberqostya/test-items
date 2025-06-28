import { createCookie } from "@/utils/cookie";
import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
  state: () => ({
    groups: {
      userItems: [
        {
          id: 1,
          name: "Shoes 1",
        },
        {
          id: 2,
          name: "Shoes 2",
        },
        {
          id: 3,
          name: "Shoes 3",
        },
        {
          id: 4,
          name: "Shoes 4",
        },
        {
          id: 5,
          name: "T-shirt 1",
        },
        {
          id: 6,
          name: "T-shirt 2",
        },
        {
          id: 7,
          name: "T-shirt 3",
        },
        {
          id: 8,
          name: "T-shirt 4",
        },
      ],
      userItemsSelected: [],
      MAX_USER_ITEMS_SELECTED: 6,

      choosingItems: [
        {
          id: 11,
          name: "Jacket 1",
        },
        {
          id: 12,
          name: "Jacket 2",
        },
        {
          id: 13,
          name: "Jacket 3",
        },
        {
          id: 14,
          name: "Jacket 4",
        },
        {
          id: 15,
          name: "Hoodie 1",
        },
        {
          id: 16,
          name: "Hoodie 2",
        },
        {
          id: 17,
          name: "Hoodie 3",
        },
        {
          id: 18,
          name: "Hoodie 4",
        },
      ],
      choosingItemsSelected: [],
      MAX_CHOOSING_ITEMS_SELECTED: 1,
    },
  }),

  actions: {
    moveItemBetweenContainers({ item, fromKey, toKey, max = Infinity }) {
      const to = this.groups[toKey];

      if (to.length >= max) return;

      this.groups[fromKey] = this.groups[fromKey].filter((i) => i.id !== item.id);
      to.push(item);

      createCookie("groups", JSON.stringify(this.groups));
    },

    setInitialStore(groups) {
      this.groups = groups;
    },
  },
});
