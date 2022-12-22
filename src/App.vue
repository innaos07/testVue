<script>
import SidebarComponent from './components/SidebarComponent.vue';
import InventoryComponent from './components/InventoryComponent.vue';
import SearchComponent from './components/SearchComponent.vue';

export default {
components: { SidebarComponent, InventoryComponent, SearchComponent },
}
</script>

<template>
  <div class="wrapper">
    <main>
      <div class="container main">
        <div class="main__top">
          <sidebar-component></sidebar-component>
          <inventory-component></inventory-component>
        </div>
        <div class="main__bottom">
          <search-component></search-component>
        </div>
      </div>
    </main>
  </div>

 
</template>

<style lang="scss">
@import '@/assets/styles/index.scss';

.main {
  display: flex;
  flex-direction: column;
  
  .main__top {
    display: flex;
    column-gap: 24px;
    margin-bottom: 24px;
  }
}
</style>
