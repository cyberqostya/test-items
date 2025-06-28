<script setup>
const props = defineProps({
  name: {
    type: String,
  },
  current: {
    type: Number,
  },
  max: {
    type: Number,
  },
});

const showCounter = props.current != null && props.max != null;
</script>

<template>
  <div class="container">
    <p class="container__title">
      <span>{{ name }}</span>
      <span v-if="showCounter">{{ current }}/{{ max }}</span>
    </p>
    <div class="container__items">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  border: 4px solid #fff;
  padding: 15px;
  position: relative;
}

.container__title {
  font-size: 1.1em;
  color: #fff;
  margin: 0;
  text-align: center;
  padding: 5px 15px;
  background-color: #1f1f1f;

  white-space: nowrap;

  position: absolute;
  left: 50%;
  bottom: 100%;
  transform: translate(-50%, 0.4em);

  display: flex;
  align-items: center;
  gap: 0.5em;
}

.container__items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 15px;
}

@media (width < 768px) {
  .container {
    padding: 10px;
    border-width: 3px;
  }

  .container__title {
    padding: 3px 6px;

    font-size: 0.9em;
  }

  .container__items {
    gap: 10px;
  }
}
</style>
