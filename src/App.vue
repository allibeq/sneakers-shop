<!--todo add POST fav-->
<!--change styles-->

<template>
  <Drawer :onClose="closeDrawer" v-if="drawerOpen"/>
  <main class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-20">
    <Header :total-price="totalPrice" @open-drawer="openDrawer"/>
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
        <CardList :items="items" @add-to-favorite="addToFavorite"
        @add-to-cart="addToCart"/>
      </div>

    </main>
</template>

<script setup>
import Header from "./components/Header.vue";
import CardList from "./components/CardList.vue";
import {computed, onMounted, provide, reactive, ref, watch} from "vue";
import Drawer from "./components/Drawer.vue";

const items = ref([]);
const filters = reactive({
  sortBy: '',
  searchQuery: ''
});
const cartItems = ref([]);

const totalPrice = computed(() => {
  return cartItems.value.reduce((acc, item) => acc + item.price, 0);
});

const addToCart = (item) => {
  if (!item.isAdded) {
    cartItems.value.push(item);
    item.isAdded = true;
  } else {
    deleteFromCart(item);
  }
}

const deleteFromCart = (item) => {
  cartItems.value.splice(
      cartItems.value.indexOf(item),
      1
  );
  item.isAdded = false;
}

const drawerOpen = ref(false);

const closeDrawer = () => {
  drawerOpen.value = false;
}

const openDrawer = () => {
  drawerOpen.value = true;
}

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

    items.value = data.map((item) => ({
      ...item,
      isFavourite: false,
      favouriteId: null,
      isAdded: false
    }));

  } catch (e) {
    console.log(e);
  }
}

const fetchFavourites = async () => {
  try {
    const res = await fetch(`https://4c91f87c72e0e424.mokky.dev/favorites`);
    const favourites = await res.json();
    items.value = items.value.map((item) => {
      const favourite = favourites.find(favourite => favourite.parentId === item.id);
      if (!favourite) {
        return item;
      }

      return {
        ...item,
        isFavourite: true,
        favouriteId: favourite.id
      }
    });
  } catch (e) {
    console.log(e);
  }
}

const addToFavorite = async (item) => {
  try {
    const obj = {
      parentId: item.id,
      isFavourite: true,

    }
    if (!item.isFavourite) {
      const res = await fetch(`https://4c91f87c72e0e424.mokky.dev/favorites`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      });
      const favourites = await res.json();
      item.isFavourite = true;
      item.favouriteId = favourites.id;
    } else {
      const res = await fetch(`https://4c91f87c72e0e424.mokky.dev/favorites/${item.favouriteId}`, {
        method: "DELETE",
      });
      item.isFavourite = false;
      item.favouriteId = null;
    }
  } catch (e) {
    console.log(e);
  }

}

onMounted(async () => {
  await fetchItems();
  await fetchFavourites();
});

watch(filters, fetchItems);

provide('cart', {
  cartItems,
  deleteFromCart
});
</script>
