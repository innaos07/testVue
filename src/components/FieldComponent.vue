<template>
  <section class="inventory">
    <div class="inventory__table">
      <div 
        v-for="(cell, index) in 25" 
        :key="index" class="inventory__cell" 
        @drop="store.onDrop($event, cell)"
        @dragover.prevent
        @dragenter.prevent
      >
        <inventory-items  :cell="cell"></inventory-items>
    </div>
    </div>

    </section>

</template>

<script>
import { computed } from "vue";
import { useInventoryStore } from '@/store/inventory';
import InventoryItems from './InventoryItems.vue';

export default {
  components: { InventoryItems },

  setup () {
    const store = useInventoryStore();
     
    return {
     store,
    }
  },
}
</script>

<style lang="scss">

  .inventory {
    position: relative; 
    flex: 0 1 500px;

    .inventory__table {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 100px 100px 100px 100px;    
      grid-template-rows: 100px 100px 100px 100px 100px; 
      border: 0.5px solid #4D4D4D;
      border-radius: 12px;
    }
  
    .inventory__cell { 
        display: flex;
        justify-content: center;
        align-items: center;
        background: #262626;
        border: 0.5px solid #4D4D4D;


      &:first-child {
          border-radius: 12px 0 0 0;
      }

      &:last-child {
        border-radius: 0 0 12px 0;
      }

      &:nth-of-type(5) {
        border-radius: 0 12px 0 0;
      }

      &:nth-last-of-type(5) {
        border-radius: 0 0 0 12px;
      }
    }
  }
</style>