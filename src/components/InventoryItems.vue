<template>
  <div
    v-for="item in getCellList(cell)"
    :key="item.id"
    draggable="true"
    class="inventory__item item-inventory"
    @dragstart="store.startDrag($event, item)"
    :class="activeItem === item.id ? 'item-inventory--active' : '' "
  >
     <span 
        class="item-inventory__count"
        :class="activeItem === item.id ?  'item-inventory__count--active' : '' "  
    >
         {{ item.quantity }} </span>
  </div>
</template>

<script>
import { useInventoryStore } from "@/store/inventory";
import { computed } from "vue";

export default {
  props: {
    cell: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const store = useInventoryStore();
    const getCellList = computed(() => store.getCellList);
    const activeItem = computed(() => store.activeItem);

    console.log(props.cell);

    return {
      store,
      getCellList,
      activeItem
    };
  },
};
</script>

<style lang="scss">

.item-inventory {
    position: relative;
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-color: gold;

    &--active {
    }
}

.item-inventory__count {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: -25px;
    right: -25px;
    width: 16px;
    height: 16px;
    background: #262626;
    border: 1px solid #4D4D4D;
    border-radius: 6px 0px 0px 0px;

    font-weight: 500;
    font-size: 10px;
    line-height: 10px;
    color: #FFFFFF;
    opacity: 0.4;

    &--active {
        display: none;
    }
}


</style>
