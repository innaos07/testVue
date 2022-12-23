<template>
  <section class="inventory">
    <div class="inventory__table">
      <div
        v-for="(cell, index) in 25"
        :key="index"
        class="inventory__cell"
        @drop="store.onDrop($event, cell)"
        @dragover.prevent
      >
        <inventory-items :cell="cell"></inventory-items>
      </div>
    </div>
    <ItemModal class="inventory__modal" />
  </section>
</template>

<script>
import ItemModal from "./ItemModal.vue";

import { computed, onMounted } from "vue";
import { useInventoryStore } from "@/store/inventory";
import InventoryItems from "./InventoryItems.vue";

export default {
  components: { InventoryItems, ItemModal },

  setup() {
    const store = useInventoryStore();

    onMounted(() => {
      store.addItemList();
    });

    return {
      store,
    };
  },
};
</script>

<style lang="scss">
.inventory {
  position: relative;
  width: 512px;
  overflow: hidden;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  overflow: hidden;

  .inventory__table {
    height: 100%;
    display: grid;
    grid-template-columns: 102px 102px 102px 102px 102px;
    grid-template-rows: 102px 102px 102px 102px 102px;
  }

  .inventory__cell {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #262626;
    border-right: 1px solid #4d4d4d;
    border-bottom: 1px solid #4d4d4d;

    &:nth-child(5n) {
      border-right: none;
    }

    &:nth-last-child(-n + 5) {
      border-bottom: none;
    }

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
