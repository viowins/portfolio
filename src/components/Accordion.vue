<template>
  <div>
    <div class="border-b border-b-white/50 p-4">
      <div
        v-on:click="data.isOpen = !data.isOpen"
        class="flex items-center justify-between text-2xl cursor-pointer"
      >
        <div class="inline-flex items-center gap-4">
          <span>{{ emoji }}</span>
          <div>{{ title }}</div>
        </div>
        <svg
          class="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
        >
          <line
            class="origin-bottom-left transition-all duration-100"
            :class="
              data.isOpen
                ? 'h-0 scale-y-0 opacity-0'
                : 'h-auto scale-x-100 scale-y-100 opacity-100'
            "
            x1="12"
            y1="5"
            x2="12"
            y2="19"
          />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>
      <div
        class="relative overflow-hidden transition-all"
        id="accordionText"
        :style="data.isOpen ? `max-height: 300px` : 'max-height:0px'"
      >
        <p
          class="transition-all duration-300"
          :class="data.isOpen ? 'mt-4 opacity-50' : 'mt-0 opacity-0'"
        >
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";

const props = defineProps({
  emoji: String,
  title: String,
});

const data = reactive({
  isOpen: false,
});
</script>
