<template>
  <div
    v-for="item in getCellList(cell)"
    :key="item.id"
    draggable="true"
    class="inventory__item item-inventory"
    @dragstart="store.startDrag($event, item)"
    :class="item.color"
    @click="store.getItemId(item.id)"
  >
    <span
      class="item-inventory__count"
      :class="activeItem === item.id ? 'item-inventory__count--active' : '' "
    >
      {{ item.quantity }}
    </span>
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
    const getItemModal = computed(() => store.getItemModal);

    return {
      store,
      getCellList,
      activeItem,
      getItemModal,
    };
  },
};
</script>

<style lang="scss">
.item-inventory {
  position: relative;
  cursor: pointer;
  width: 100px;
  height: 100px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
  }

  &::before {
    top: 28px;
    left: 22px;
  }

  &::after {
    top: 22px;
    left: 28px;
    z-index: 50px;
  }

  &--green {
    &::before {
      background-color: #7faa65;
    }

    &::after {
      background: rgba(184, 217, 152, 0.35);
      backdrop-filter: blur(6px);
    }
  }

  &--yellow {
    &::before {
      background-color: #aa9765;
    }

    &::after {
      background: rgba(217, 187, 152, 0.35);
      backdrop-filter: blur(6px);
    }
  }

  &--purpure {
    &::before {
      background-color: #656caa;
    }

    &::after {
      background: rgba(116, 129, 237, 0.35);
      backdrop-filter: blur(6px);
    }
  }
}

.item-inventory__count {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  right: 0;
  width: 16px;
  height: 16px;
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 6px 0px 0px 0px;

  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  color: #ffffff;
  opacity: 0.4;

  &--active {
    display: none;
  }
}
</style>
