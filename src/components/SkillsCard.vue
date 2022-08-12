<script setup>
import Icon from "./Icon.vue";

const props = defineProps({
  title: { type: String, required: true },
  setIcon: { type: String, required: true },
  setLevel: { type: String, required: true },
});
</script>

<template>
  <div
    class="flex items-center gap-6 from-zinc-800 py-6 px-4 hover:bg-gradient-to-r"
  >
    <figure class="flex h-16 w-16 shrink-0 items-center justify-center">
      <span
        style="
          box-sizing: border-box;
          display: inline-block;
          overflow: hidden;
          width: initial;
          height: initial;
          background: none;
          opacity: 1;
          border: 0px;
          margin: 0px;
          padding: 0px;
          position: relative;
          max-width: 100%;
        "
      >
        <span
          style="
            box-sizing: border-box;
            display: block;
            overflow: hidden;
            width: initial;
            height: initial;
            background: none;
            opacity: 1;
            border: 0px;
            margin: 0px;
            padding: 0px;
            position: relative;
            max-width: 100%;
          "
        >
          <Icon :iconName="setIcon" width="100%" height="100%" />
        </span>
      </span>
    </figure>
    <div class="grow">
      <h4 class="flex items-center gap-2 font-semibold">
        <span>{{ title }}</span>
        <span
          class="rounded-full px-2 py-1 text-xs font-medium leading-none bg-opacity-20"
          :class="
            setLevel == 'Expert'
              ? 'bg-sky-900 text-sky-700'
              : '' || setLevel == 'Intermediate'
              ? 'bg-emerald-900 text-emerald-700'
              : '' || setLevel == 'Entry Level'
              ? 'bg-rose-900 text-rose-700'
              : ''
          "
          id="setLevel"
          >{{ setLevel }}</span
        >
      </h4>
      <p class="opacity-60 mt-1">
        <slot />
      </p>
    </div>
  </div>
</template>
