<script setup lang="ts">
import { onMounted } from "vue";
import { World } from "./World/index";

onMounted(() => {
  const container = document.querySelector("#scene-container");
  const world = new World(container);
  console.log(world)
  world.render();
});
</script>
<template>
  <div class="demo1" id="scene-container"></div>
</template>

<style>
#scene-container {
  width: 100%;
  height: 100%;
}
</style>
