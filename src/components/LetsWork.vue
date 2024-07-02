<script setup>
import Icon from "./Icon.vue";
</script>

<template>
  <div
    class="w-full md:max-w-3xl md:mx-auto rounded-lg flex items-center justify-center py-12 my-24 bg-zinc-800"
  >
    <div class="text-center">
      <h1 class="text-3xl mb-8">
        Do you want to contact me?<br />
      </h1>
      <a
        class="text-base flex items-center justify-center gap-4 opacity-50 hover:opacity-100 transition-all"
        href="mailto:emreyarasir00@gmail.com"
        ><span
          ><Icon
            iconName="rightArrow"
            width="24px"
            height="24px"
            color="white" /></span
        >emreyarasir00@gmail.com</a
      >
    </div>
  </div>
</template>
