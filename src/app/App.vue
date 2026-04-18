<template>
  <Drawer :onClose="closeDrawer" v-if="drawerOpen"/>
  <main class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-20">
    <Header @open-drawer="openDrawer"/>
      <div class="p-10">
        <router-view></router-view>
      </div>
    </main>
</template>

<script setup>
import Header from "../widgets/header/Header.vue";
import { ref } from "vue";
import Drawer from "../widgets/drawer/Drawer.vue";

const drawerOpen = ref(false);

const closeDrawer = () => {
  drawerOpen.value = false;
}

const openDrawer = () => {
  drawerOpen.value = true;
}
</script>
