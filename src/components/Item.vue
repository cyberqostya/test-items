<script setup></script>

<template>
  <button class="item"><slot /></button>
</template>

<style scoped>
.item {
  border: 2px solid #fff;
  padding: 15px;

  background: none;
  font-size: inherit;

  cursor: pointer;

  color: #fff;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  transition: color 0.3s, background-color 0.3s;
}
.item:hover {
  color: #1f1f1f;
  background-color: #fff;
}

@media (width < 768px) {
  .item {
    padding: 5px;
    border-width: 1px;
  }
}
</style>
