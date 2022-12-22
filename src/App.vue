<script>
import SidebarComponent from './components/SidebarComponent.vue';
import InventoryComponent from './components/InventoryComponent.vue';

export default {
components: { SidebarComponent, InventoryComponent },
}

</script>

<template>
  <div class="wrapper">
    <main>
      <div class="container">
        <div class="content__top">
          <sidebar-component></sidebar-component>
          <inventory-component></inventory-component>
        </div>
        <div class="content__bottom"></div>
      </div>
    </main>
  </div>

 
</template>

<style lang="scss">
@import '@/assets/styles/index.scss';


.content__top {
  display: flex;
  column-gap: 24px;
}
</style>
