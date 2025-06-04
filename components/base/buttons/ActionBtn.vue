<script setup lang="ts">
const { label, disabled = false } = defineProps<{
  label: string;
  disabled?: boolean;
}>();
</script>

<template>
  <button
      :disabled="disabled"
      :class="['action-btn', { 'action-btn--disabled': disabled }]"
  >
    {{ label }}
  </button>
</template>

<style lang="scss">
@use "assets/styles/variables" as *;

.action-btn {
  height: 40px;
  border-radius: 8px;
  padding: 8px 16px;
  background-color: $color-bg-dark;
  color: $color-text-dark-bg;

  &:hover:not(:disabled) {
    opacity: 0.8;
    cursor: pointer;
  }

  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>
