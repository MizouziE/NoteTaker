<script setup>
  import Tiptap from './components/Tiptap.vue'
</script>

<template>
  <div class="flex w-screen h-screen text-gray-700">
    <div class="flex flex-col flex-shrink-0 w-64 border-r border-gray-300 bg-gray-100">
      <!-- Sidebar -->
    </div>
    <div class="flex flex-col flex-grow">
      <!-- Main Content -->
      <div class="flex flex-col flex-grow overflow-auto">
        <tiptap />
      </div>
    </div>
  </div>
</template>
