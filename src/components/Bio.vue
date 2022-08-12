<script setup>
import { onMounted, reactive } from "vue";

const data = reactive({
  isSwitch: false,
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
      I aim to you have interface designs that meet
      <u>your needs and dreams</u> by using <b>next-generation technologies.</b
      ><br /><br />
      I design interface designs <b>responsive</b> and make it work best on all
      devices. By adopting the principle of <b>Cross-Browser,</b> I make your
      site suitable for every browser and optimize the <u>page speed</u> of your
      website to speed up entries to your site as much as possible. I take into
      account not only the design, but also the <b>user experience.</b>
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
      I aim to you have interface designs that meet
      <u>your needs and dreams</u> by using <b>next-generation technologies.</b
      ><br /><br />
      I design interface designs <b>responsive</b> and make it work best on all
      devices. By adopting the principle of <b>Cross-Browser,</b> I make your
      site suitable for every browser and optimize the <u>page speed</u> of your
      website to speed up entries to your site as much as possible. I take into
      account not only the design, but also the <b>user experience.</b> I like
      to approach projects <u>professionally.</u> Because things are moving on
      track and it's <u>working faster.</u> If you have an interesting project,
      this will be a job that I will enjoy for me.<br /><br />
      <b>I can't wait to work together...</b>
    </p>
  </div>
</template>
