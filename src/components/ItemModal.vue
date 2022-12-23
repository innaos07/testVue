<template>
  <transition name="item-modal-transition">
    <div class="item-modal" v-if="isShowModal">
      <div class="item-modal__close-icon" @click="store.showItemModal">
        <img src="@/assets/img/close.svg" alt="close" />
      </div>

      <div
        v-for="item in getItemModal"
        :key="item.id"
        class="item-modal__content"
      >
        <div
          class="item-modal__inventory item-inventory"
          :class="item.color">
        </div>

        <div class="item-modal__info">
          <h2 class="item-modal__title">{{ item.title }}</h2>
          <p class="item-modal__text">{{ item.text }}</p>
        </div>

        <FormModalItem
          class="item-modal__form"
          v-if="isActiveModalForm"
          :itemID="item.id"
        />

        <button
          type="button"
          class="item-modal__btn"
          v-else
          @click="store.changeActiveModalForm"
        >
          Удалить предмет
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { computed } from "vue";
import { useInventoryStore } from "@/store/inventory";
import FormModalItem from "./FormModalItem.vue";

export default {
  components: { FormModalItem },
  props: {
    isShowModal: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const store = useInventoryStore();
    const isShowModal = computed(() => store.isShowModal);
    const getItemModal = computed(() => store.getItemModal);
    const isActiveModalForm = computed(() => store.isActiveModalForm);

    return {
      store,
      isShowModal,
      getItemModal,
      isActiveModalForm,
    };
  },
};
</script>

<style lang="scss">

.item-modal {
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  padding: 18px 15px;
  padding-top: 55px;
  background: rgba(38, 38, 38, 0.9);
  border: 0.5px solid #4d4d4d;
  border-left: 1px solid #4d4d4d;
  border-radius: 0 12px 12px 0;
  z-index: 2000;
  opacity: 1;

  .item-modal__close-icon {
    position: absolute;
    top: 14px;
    right: 14px;
  }

  .item-modal__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .item-modal__inventory {
    margin-bottom: 30px;
  }

  .item-inventory {
    position: relative;
    cursor: pointer;
    width: 130px;
    height: 130px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 115px;
      height: 115px;
    }

    &::before {
      top: 14px;
      left: -7px;
    }

    &::after {
      top: 0;
      left: 7px;
      z-index: 50px;
    }

    &--green {
      &::before {
        background-color: #7faa65;
      }

      &::after {
        background: rgba(184, 217, 152, 0.35);
      }
    }

    &--yellow {
      &::before {
        background-color: #aa9765;
      }

      &::after {
        background: rgba(217, 187, 152, 0.35);
      }
    }

    &--purpure {
      &::before {
        background-color: #656caa;
      }

      &::after {
        background: rgba(116, 129, 237, 0.35);
      }
    }
  }

  .item-modal__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 24px;
    margin-bottom: 18px;
    border-top: 1px solid #4d4d4d;
    border-bottom: 1px solid #4d4d4d;

    .item-modal__title {
      margin-bottom: 24px;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #f4efef;
    }

    .item-modal__text {
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: #f4efef;
    }
  }

  .item-modal__form {
    margin: 0 -15px;
    margin-bottom: -18px;
  }

  .item-modal__btn {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 39px;
    padding: 11px 20px;
    background: #fa7272;
    border-radius: 8px;

    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #fff;
    transition: all 0.5s;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.5;
    }
  }
}


.item-modal-transition-enter-active,
.item-modal-transition-leave-active {
  transition: all 0.5s;
}

.item-modal-transition-enter-from,
.item-modal-transition-leave-to {
  transform: translateX(250px);
}
</style>
