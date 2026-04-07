<template>
<!--  <Drawer/>-->
  <main class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-20">
    <Header/>
      <div class="p-10">
        <div class="flex justify-between items-center mb-10">
          <h2 class="text-3xl font-bold">All sneakers</h2>

          <div class="flex justify-between items-center gap-3">
            <select @change="onChangeSelect" name="" id="" class="py-2 px-3 border border-gray-200 rounded-md outline-none">
              <option value="name">By name</option>
              <option value="price">By price - low price</option>
              <option value="-price">By price - high price</option>
            </select>
            <div class="relative">
              <img src="/search.svg" alt="Search" class="absolute left-3 top-3">
              <input
                  @input="onChangeSearchInput"
                  class="border border-gray-200 rounded-md py-2 pl-9 pr-4 outline-none focus:border-gray-400"
                  placeholder="Search">
            </div>
          </div>

        </div>
        <CardList :items="items"/>
      </div>

    </main>
</template>

<script setup>

import {onMounted, reactive, ref, watch} from "vue";

const items = ref([]);
const filters = reactive({
  sortBy: '',
  searchQuery: ''
});

const onChangeSelect = e => {
  filters.sortBy = e.target.value;
};

const onChangeSearchInput = e => {
  filters.searchQuery = e.target.value;
};

const fetchItems = async () => {
  const params = new URLSearchParams();

  params.append('sortBy', filters.sortBy);

  if (filters.searchQuery) {
    params.append('title', `*${filters.searchQuery}*`);
  }

  try {
    const res = await fetch(`https://4c91f87c72e0e424.mokky.dev/items?${params.toString()}`);
    const data = await res.json();
    items.value = data;
  } catch (e) {
    console.log(e);
  }
}

onMounted(fetchItems);

watch(filters, fetchItems);

import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import CardList from "./components/CardList.vue";
import Drawer from "./components/Drawer.vue";
</script>
