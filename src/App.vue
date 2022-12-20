<script>
import SidebarComponent from './components/SidebarComponent.vue';
import FieldComponent from './components/FieldComponent.vue';

export default {
components: { SidebarComponent, FieldComponent },
}

</script>

<template>
  <div class="wrapper">
    <main>
      <div class="container">
        <div class="content__top">
          <sidebar-component></sidebar-component>
          <field-component></field-component>
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
