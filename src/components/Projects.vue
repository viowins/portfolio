<script setup>
import ProjectCard from "./ProjectCard.vue";

const projects = [
  {
    thumbnail: "/projects/supportguru.png",
    title: "Support Guru",
    href: "https://supportguru.com/",
  },
  {
    thumbnail: "/projects/akdenizchemson.png",
    title: "Akdeniz Chemson",
    href: "https://akdenizchemson.com/",
  },
  {
    thumbnail: "/projects/boundreambigg.png",
    title: "Boun DreamBigg",
    href: "https://boundreambigg.com/",
  },
  {
    thumbnail: "/projects/filmly.png",
    title: "Filmly",
    href: "https://filmly.vercel.app/",
  },
  {
    thumbnail: "/projects/word-game.png",
    title: "Word Game",
    href: "https://word-game-beta-five.vercel.app/",
  },
  {
    thumbnail: "/projects/laliyayinlari.png",
    title: "Lali Yayınları",
    href: "https://laliyayinlari.com/",
  },
  {
    thumbnail: "/projects/event-up.png",
    title: "Event Up",
    href: "https://event-up.vercel.app/",
  },
]
</script>

<template>
  <div class="flex flex-col gap-6 mt-8">
    <h2 class="text-4xl">Projects</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
      <template v-for="(project, index) in projects" :key="index">
        <ProjectCard :thumbnail="project.thumbnail" :title="project.title" :href="project.href" :techs="project.techs" />
      </template>
    </div>
  </div>
</template>