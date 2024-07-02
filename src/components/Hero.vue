<script setup>
import Bio from "./Bio.vue";
import Accordion from "./Accordion.vue";
</script>

<template>
  <div class="w-full h-full">
    <div
      class="flex flex-col w-full h-full mt-12 md:mt-16 lg:mt-40 mb-16 md:mb-24 lg:mb-44"
    >
      <div class="">
        <div>
          <h1 class="text-6xl w-full lg:w-6/12">
            Hello, <br /> I’m Emre Yarasir ✌️ Front End Developer.
          </h1>
        </div>
        <div class="flex flex-col lg:flex-row mt-12 gap-4 lg:gap-8">
          <div class="w-full lg:w-6/12 relative">
            <Bio />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
