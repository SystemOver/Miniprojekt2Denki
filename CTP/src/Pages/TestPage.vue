<script setup>
const props = defineProps({
  message: {
    type: String,
    default: 'No message received',
  },
});

</script>

<template>
  <h1>TEST</h1>
  <p>{{ message }}</p>
  <div v-if="message === 'Email'">
    <p>This is the Email Course Test Page.</p>
  </div>
  <div v-else-if="message === 'Shopping'">
 <p>This is the Shopping Course Test Page.</p>
  </div>
   <div v-else-if="message === 'Carrier'">
 <p>This is the Carrier Course Test Page.</p>
  </div>
</template>

<style scoped>
body {
  font-family: monospace;
}
</style>
