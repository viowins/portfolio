<script setup>
import { onMounted, reactive } from "vue";

const data = reactive({
  isSwitch: true,
});
</script>

<template>
  <div class="inline-flex items-center gap-2 mb-4">
    <button
      v-on:click="data.isSwitch = false"
      class="relative rounded-lg py-2 px-3 transition-all before:absolute before:h-px before:bg-white before:top-2/4 before:transition-all before:duration-200"
      :class="
        data.isSwitch
          ? `opacity-50 before:w-[0px]`
          : `bg-zinc-800 border-zinc-700 opacity-100 before:w-[${data.shortButtonTextWidth}px]`
      "
    >
      <span id="shortButtonText">short bio</span>
    </button>
    <button
      v-on:click="data.isSwitch = true"
      class="relative rounded-lg py-2 px-3 transition-all before:absolute before:h-px before:bg-white before:top-2/4 before:transition-all before:duration-200"
      :class="
        data.isSwitch
          ? `bg-zinc-800 border-zinc-700 opacity-100 before:w-[${data.longButtonTextWidth}px]`
          : `opacity-50 before:w-[0px]`
      "
    >
      <span id="longButtonText">long bio</span>
    </button>
  </div>
  <div class="relative">
    <p
      id="shortBio"
      class="opacity-50 transition-all"
      :class="
        data.isSwitch ? 'hidden animate-fadeOut_50' : 'block animate-fadeIn_50'
      "
    >
      I have 3 years of experience as a front-end web developer. I have worked
      with various projects and technologies. I think it's important to
      constantly learn new things in the industry because everything is
      constantly being renewed.
    </p>
    <p
      id="longBio"
      class="opacity-50 transition-all"
      :class="
        data.isSwitch
          ? 'block visible animate-fadeIn_50'
          : 'hidden invisible animate-fadeOut_50'
      "
      :style="data.isSwitch ? `max-height: 1000px` : 'max-height:0px'"
    >
    I have 3 years of experience as a front-end web developer. I have worked
      with various projects and technologies. I think it's important to
      constantly learn new things in the industry because everything is
      constantly being renewed.
      <br /><br />
      I am always open to innovation and like to work with teammates and share
      things. Since I have a perfectionist spirit, I want to do my best in the
      projects I work on. I have advanced knowledge of JavaScript, React and
      Next.JS, as well as knowledge of context, hook, Rest API and redux. I
      worked on projects that are the base of WordPress, Craft and Statamic CMS.
    </p>
  </div>
</template>
