<template>
  <div class="mt-4 max-w-full w-full md:max-w-3xl mx-auto mb-4">
    <h1 class="text-4xl text-center opacity-70 mb-6">My Skills</h1>
    <div class="flex justify-center">
      <div class="w-full rounded-full mt-4 bg-zinc-800 p-1">
        <div class="relative flex items-center">
          <button
            v-on:click="data.isSwitch = false"
            class="w-2/4 grow rounded-full py-1 px-4 z-10 transition-all"
            :class="data.isSwitch ? 'opacity-50' : 'opacity-100'"
          >
            Languages
          </button>
          <button
            v-on:click="data.isSwitch = true"
            class="w-2/4 grow rounded-full py-1 px-4 z-10 transition-all"
            :class="data.isSwitch ? 'opacity-100' : 'opacity-50'"
          >
            Frameworks
          </button>
          <div
            class="absolute bg-zinc-900 top-0 h-full w-2/4 rounded-full z-[0] transition-all duration-200"
            :class="data.isSwitch ? 'left-2/4' : 'left-0'"
          ></div>
        </div>
      </div>
    </div>
    <div class="relative overflow-x-hidden mt-10">
      <div
        class="w-[200%] flex transition-all duration-300 overflow-hidden"
        :class="data.isSwitch ? '-translate-x-2/4' : '-translate-x-0'"
        :style="
          data.isSwitch
            ? `max-height: ${data.getTrueHeight}px`
            : `max-height: calc(${data.getFalseHeight}px + 20px)`
        "
      >
        <div class="w-2/4">
          <div id="contentFalse" class="divide-y divide-zinc-800">
            <Card title="HTML 5" setIcon="html" setLevel="Expert"
              >HTML is the standard markup language for creating Web
              pages.</Card
            >
            <Card title="CSS 3" setIcon="css" setLevel="Expert"
              >CSS is the language we use to style a Web page.</Card
            >
            <Card title="Javascript" setIcon="js" setLevel="Expert"
              >JavaScript is a scripting or programming language that allows you
              to implement complex features on web pages.</Card
            >
            <Card title="PHP" setIcon="php" setLevel="Intermediate"
              >PHP code is executed on the server.</Card
            >
          </div>
        </div>
        <div class="w-2/4">
          <div id="contentTrue" class="divide-y divide-zinc-800">
            <Card title="Tailwind CSS" setIcon="tailwind" setLevel="Expert"
              >A utility-first CSS framework packed with classes like
              <b>flex, pt-4, text-center</b> and <b>rotate-90</b> that can be
              composed to build any design, directly in your markup.</Card
            >
            <Card title="Vue JS" setIcon="vue" setLevel="Intermediate"
              >An approachable, performant and versatile framework for building
              web user interfaces.</Card
            >
            <Card title="Bootstrap 5" setIcon="bootstrap" setLevel="Expert"
              >Powerful, extensible, and feature-packed frontend toolkit. Build
              and customize with Sass, utilize prebuilt grid system and
              components, and bring projects to life with powerful JavaScript
              plugins.</Card
            >
            <Card title="React JS" setIcon="react" setLevel="Intermediate"
              >A JavaScript library for building user interfaces</Card
            >
            <Card title="Chakra UI" setIcon="chakra" setLevel="Expert"
              >Chakra UI is a simple, modular and accessible component library
              that gives you the building blocks you need to build your React
              applications.</Card
            >
            <Card title="Wordpress" setIcon="wordpress" setLevel="Intermediate"
              >WordPress is open source software you can use to create a
              beautiful website, blog, or app.</Card
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import Card from "./SkillsCard.vue";

const data = reactive({
  isSwitch: true,
  getTrueHeight: 0,
  getFalseHeight: 0,
});
onMounted(() => {
  var contentFalse = document.getElementById("contentFalse").scrollHeight;
  var contentTrue = document.getElementById("contentTrue").scrollHeight;
  data.getTrueHeight = contentTrue;
  data.getFalseHeight = contentFalse;
});
</script>
