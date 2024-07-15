<script setup>
import Bio from "./Bio.vue";
</script>

<template>
  <div class="w-full min-h-96">
    <div
      class="flex flex-col w-full mt-12 md:mt-16 lg:mt-20 mb-16 md:mb-24 lg:mb-24"
    >
      <div>
        <img
          class="w-20 h-20 aspect-square rounded-full"
          src="/profile-photo.png"
          width="80"
          height="80"
          alt="Emre Yaraşır Profile Photo"
        />
        <h1 class="text-6xl">
          Hello, <br />
          I’m Emre Yarasir ✌️ Front End Developer.
        </h1>
      </div>
      <div class="flex flex-col lg:flex-row mt-12 gap-4 lg:gap-8">
        <div class="w-full relative mx-auto">
          <Bio />
        </div>
      </div>
    </div>
  </div>
</template>
