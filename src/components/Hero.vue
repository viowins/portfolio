<script setup>
import Bio from "./Bio.vue";
import Accordion from "./Accordion.vue";
</script>

<template>
  <div class="w-full h-full lg:h-screen">
    <div
      class="flex flex-col w-full h-full mt-12 md:mt-16 lg:mt-40 mb-16 md:mb-24 lg:mb-0"
    >
      <div class="">
        <div>
          <h1 class="text-6xl w-full lg:w-6/12">
            I’m Emre Yarasir ✌️ Freelance Front End Developer.
          </h1>
        </div>
        <div class="flex flex-col lg:flex-row mt-12 gap-4 lg:gap-8">
          <div class="w-full lg:w-6/12 relative">
            <Bio />
          </div>
          <div class="relative w-full lg:w-6/12">
            <div class="relative lg:absolute mt-10">
              <Accordion emoji="🦄" title="Design (UI/UX)"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, voluptatum reprehenderit facilis minima dicta
                deleniti veritatis natus reiciendis ullam sunt harum distinctio
                temporibus officiis! Nostrum natus reprehenderit voluptate
                veritatis quos!</Accordion
              >
              <Accordion emoji="🦄" title="Design (UI/UX)"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, voluptatum reprehenderit facilis minima dicta
                deleniti veritatis natus reiciendis ullam sunt harum distinctio
                temporibus officiis! Nostrum natus reprehenderit voluptate
                veritatis quos!</Accordion
              >
              <Accordion emoji="🦄" title="Design (UI/UX)"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, voluptatum reprehenderit facilis minima dicta
                deleniti veritatis natus reiciendis ullam sunt harum distinctio
                temporibus officiis! Nostrum natus reprehenderit voluptate
                veritatis quos!</Accordion
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
