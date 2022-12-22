import { defineStore } from "pinia";

export const useInventoryStore = defineStore("inventory", {
  state: () => {
    return {
      activeItem: -1,
      activeItemModal: -1,
      inputDeleted: "",
      countDelete: 0,
      isError: false,
      isShowModal: false,
      isActiveModalForm: false,
      itemList: [
        {
          id: 1,
          quantity: 4,
          icon: "item-01",
          cell: 1,
          color: "item-inventory--green",
          title: "Lorem ipsum dolor sit amet.",
          text: "Nulla porttitor sem ipsum, ac viverra tortor vulputate nec. Vivamus efficitur eros ut nunc.",
        },
        {
          id: 2,
          quantity: 2,
          icon: "item-02",
          cell: 2,
          color: "item-inventory--yellow",
          title: "Aliquam vel erat nec",
          text: "Nulla porttitor sem ipsum, ac viverra tortor vulputate nec. Vivamus efficitur eros ut nunc.",
        },
        {
          id: 3,
          quantity: 5,
          icon: "item-03",
          cell: 23,
          color: "item-inventory--purpure",
          title: "Maecenas quis neque ut",
          text: "Nulla porttitor sem ipsum, ac viverra tortor vulputate nec. Vivamus efficitur eros ut nunc.",
        },
      ],
    };
  },
  getters: {
    getCellList(state) {
      return (cellID) =>
        state.itemList.filter((item) => item.cell === cellID);
    },
    getItemModal(state) {
      return state.itemList.filter((item) => item.id === this.activeItemModal);
    },
    closeModalForm(state) {
      if (!state.isShowModal) {
        return (state.isActiveModalForm = false);
      }
    },
  },
  actions: {
    addItemList() {
      if(localStorage.getItem('itemList')) {
        try {
          this.itemList = JSON.parse(localStorage.getItem('itemList'));
        } catch(e) {
          localStorage.removeItem('itemList');
        }
      }
    },
    startDrag(e, item) {
      this.activeItem = item.id;

      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("itemID", item.id);
    },
    onDrop(e, cellID) {
      this.activeItem = -1;
      const itemID = e.dataTransfer.getData("itemID");

      let cellList = this.itemList.filter((item) => {
        return item.cell === cellID;
      });

      if (cellList.length) {
        return false;
      }

      const item = this.itemList.find((item) => item.id == itemID);
      item.cell = cellID;
      this.saveLocalStorage();
    },
    saveLocalStorage() {
      localStorage.setItem("itemList", JSON.stringify(this.itemList));
    },
    showItemModal() {
      this.isShowModal = !this.isShowModal;
    },
    getItemId(itemID) {
      this.isShowModal = !this.isShowModal;
      this.activeItemModal = itemID;
    },
    changeActiveModalForm() {
      this.isActiveModalForm = !this.isActiveModalForm;
    },
    updateInputDelete(e) {
      this.inputDeleted = e.target.value.trim();
    },
    validateCountDelete() {
      let validatedCountDelete = Number(this.inputDeleted);

      if (isFinite(validatedCountDelete) && validatedCountDelete > 0) {
        this.isError = false;
        this.countDelete = validatedCountDelete;
        this.inputDeleted = "";
      } else {
        this.isError = true;
        this.countDelete = 0;
      }
    },
    deletedItem(itemID) {
      this.validateCountDelete();   

      if(this.countDelete) {
        this.itemList.map((item) => {
          if (item.id === itemID) {
            item.quantity < this.countDelete ? (this.isError = true) : null;
            item.quantity >= this.countDelete ? (item.quantity -= this.countDelete): null;
            this.saveLocalStorage();

            if(item.quantity == 0) {
              this.activeItemModal = -1;
              this.isShowModal = false;
              this.deletedFromLocalStorage(itemID)
            }
          }
        });
      }
    },
    deletedFromLocalStorage(itemID) {
      this.itemList = this.itemList.filter((item) => item.id != itemID)
      this.saveLocalStorage();
    }
  },
});
