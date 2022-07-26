<script setup>
const emits = defineEmits(["update:modelValue"])
const isDark = useDark()
emits("update:modelValue", isDark.value)
const toggleDark = () => {
  isDark.value = !isDark.value
  localStorage.setItem("isDark", isDark.value)
  emits("update:modelValue", isDark.value)
}
</script>

<template>
  <VTSwitch class="vt-switch-appearance" @click="toggleDark()">
    <VTIconSun class="vt-switch-appearance-sun" />
    <VTIconMoon class="vt-switch-appearance-moon" />
  </VTSwitch>
</template>

<style>
.vt-switch-appearance-sun {
  opacity: 1;
}
.vt-switch-appearance-moon {
  opacity: 0;
}

.dark .vt-switch-appearance-sun {
  opacity: 0;
}

.dark .vt-switch-appearance-moon {
  opacity: 1;
}

.dark .vt-switch-appearance .vt-switch-check {
  transform: translateX(18px);
}
</style>
