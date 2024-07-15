<script setup>
import Icon from "./Icon.vue";

const props = defineProps({
  thumbnail: { type: String, required: true },
  title: { type: String, required: true },
  href: { type: String },
});
</script>

<template>
  <a :href="href" target="_blank">
    <div class="group relative flex flex-col rounded-2xl overflow-hidden">
      <img
        class="w-full h-auto aspect-video"
        :src="thumbnail"
        :alt="title"
        v-if="thumbnail"
      />
      <div class="bg-zinc-800 px-4 py-3">
        <h3 class="text-2xl font-semibold text-center">
          {{ title }}
        </h3>
      </div>
    </div>
  </a>
</template>