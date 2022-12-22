<template>
  <div
    class="item-modal__wrapper"
    v-if="isShowModal"
    @click="store.showItemModal"
  >
    <div class="item-modal" @click.stop>
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
          :class="item.color"                         
        >
        </div>

        <div class="item-modal__info">
          <h2 class="item-modal__title">{{ item.title }}</h2>
          <p class="item-modal__text">{{ item.text }}</p>
        </div>

        <form class="item-modal__form form-modal" v-if="isActiveModalForm">
          <input
            type="text"
            class="form-modal__input"
            placeholder="Введите количество"
            :value="inputDeleted"
            @input="store.updateInputDelete"
            :class="{ 'form-modal__input--error': isError }"
          />
          <div class="form-modal__btns">
            <button
              type="button"
              class="form-modal__btn form-modal__btn--cancel"
              @click="store.changeActiveModalForm"
            >
              Отмена
            </button>
            <button
              type="button"
              class="form-modal__btn form-modal__btn--confirm"
              @click="store.deletedItem(item.id)"
            >
              Подтвердить
            </button>
          </div>
        </form>

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
  </div>
</template>

<script>
import { computed } from "vue";
import { useInventoryStore } from "@/store/inventory";

export default {
  components: {},
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
    const inputDeleted = computed(() => store.inputDeleted);
    const isError = computed(() => store.isError);

    return {
      store,
      isShowModal,
      getItemModal,
      isActiveModalForm,
      inputDeleted,
      isError,
    };
  },
};
</script>

<style lang="scss">
.item-modal__wrapper {
  position: absolute;
  display: flex;
  top: 0px;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10000;
  overflow-y: auto;

  .item-modal {
    position: relative;
    top: 0;
    right: -51%;
    bottom: 0;
    width: 250px;
    padding: 18px 15px;
    padding-top: 55px;
    background: rgba(38, 38, 38, 0.5);
    backdrop-filter: blur(8px);
    border: 1px solid #4d4d4d;
    border-radius: 0 12px 12px 0;

    z-index: 20000;
  }

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

    &--active {
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

  .form-modal {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 -15px;
    margin-bottom: -18px;
    padding: 20px;
    background: rgba(38, 38, 38, 1);
    border-top: 1px solid #4d4d4d;
    border-radius: 0 0 12px 0;
    backdrop-filter: blur(8px);

    .form-modal__input {
      width: 100%;
      min-height: 40px;
      padding: 11px 12px;
      margin-bottom: 20px;
      background: #262626;
      border: 1px solid #4d4d4d;
      border-radius: 4px;
      outline: none;
      color: #ffffff;

      &--error {
        border: 1px solid #af3030;
      }
    }

    .form-modal__btns {
      display: flex;
      column-gap: 10px;
    }

    .form-modal__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 33px;
      border-radius: 8px;

      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      transition: all 0.5s;

      &--cancel {
        padding: 8px 19px;
        background: #ffffff;
        color: #2d2d2d;

        &:hover {
          opacity: 0.8;
        }

        &:active {
          opacity: 0.5;
        }
      }

      &--confirm {
        padding: 8px 15px;
        background: #fa7272;
        color: #ffffff;

        &:hover {
          opacity: 0.8;
        }

        &:active {
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
