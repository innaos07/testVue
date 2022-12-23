<template>
  <form class="form-modal">
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
        @click="store.deletedItem(itemID)"
      >
        Подтвердить
      </button>
    </div>
  </form>
</template>

<script>
import { computed } from "vue";
import { useInventoryStore } from "@/store/inventory";

export default {
  props: {
    itemID: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const store = useInventoryStore();
    const inputDeleted = computed(() => store.inputDeleted);
    const isError = computed(() => store.isError);

    return {
      store,
      inputDeleted,
      isError,
    };
  },
};
</script>

<style lang="scss">
.form-modal {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

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
</style>
