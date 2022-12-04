<script setup lang="ts">
const colorMode = useColorMode();
const onClick = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))

</script>

<template>
  <main class="dark:bg-black bg-white grid place-items-center w-full min-h-screen">
    <button aria-label="Color Mode" class="flex items-center space-x-3 py-2 px-4 bg-gray-200 rounded-md"
      @click="onClick">
      <ColorScheme placeholder="...">
        <Icon v-if="colorMode.value === 'dark'" name="heroicons-outline:moon" class="text-xl" />
        <Icon v-else name="heroicons-outline:sun" class="text-xl" />
      </ColorScheme>
    </button>
  </main>
</template>