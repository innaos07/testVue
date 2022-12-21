import { defineStore } from 'pinia';



export const useInventoryStore = defineStore('inventory', {
  state: ()=> {
    return {
      activeItem: -1,
      activeItemModal: -1,
      inputDeleted: '',
      isError: false,
      isShowModal: false,
      isActiveModalForm: false,
      itemList: [
        { 
          id: 1,   
          quantity: 4, 
          icon: 'item-01',
          cell: 1,
          color: 'item-inventory--green',
          title: 'Lorem ipsum dolor sit amet.',
          text: 'Nulla porttitor sem ipsum, ac viverra tortor vulputate nec. Vivamus efficitur eros ut nunc.'
        },
        { 
          id: 2,   
          quantity: 2, 
          icon: 'item-02',
          cell: 2,
          color: 'item-inventory--yellow',
          title: 'Aliquam vel erat nec',
          text: 'Nulla porttitor sem ipsum, ac viverra tortor vulputate nec. Vivamus efficitur eros ut nunc.',
        },
        { 
          id: 3,   
          quantity: 5, 
          icon: 'item-03',
          cell: 23,
          color: 'item-inventory--purpure',
          title: 'Maecenas quis neque ut',
          text: 'Nulla porttitor sem ipsum, ac viverra tortor vulputate nec. Vivamus efficitur eros ut nunc.',
        },
      ]
    }
        
    },
    getters: {
      getCellList(state) {
        return (cellID)=> state.itemList.filter(item => {
          if( item.quantity > 0 ) {
            return  item.cell === cellID
          }
        });
      },
      getItemModal(state) {
        return  state.itemList.filter(item =>  {
          return item.id === this.activeItemModal;
        });
      },
      closeModalForm(state) { 
        if(!state.isShowModal) {
          return state.isActiveModalForm = false
        }
      },
    },
    actions: {
      startDrag (e, item) {
        this.activeItem = item.id;
        
        e.dataTransfer.dropEffect = 'move'
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('itemID', item.id)
      },
      onDrop (e, cellID) {
        this.activeItem = -1;
        const itemID = e.dataTransfer.getData('itemID');

        let cellList  = this.itemList.filter(item => {
          return item.cell === cellID;
        })

        if(cellList.length){
          return false;
        }
       
        const item = this.itemList.find((item) => item.id == itemID);
        item.cell = cellID;
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
      deletedItem(itemID) {
        let countDelete = Number(this.inputDeleted);

        if(isFinite(countDelete) && countDelete > 0) {
          this.isError = false;

          this.itemList.map(item => {
            if(item.id === itemID) {
              item.quantity < this.inputDeleted ? this.isError = true : null;
              item.quantity >= this.inputDeleted ? item.quantity -= this.inputDeleted : null; 
              item.quantity == 0 ? this.activeItemModal = -1 : null;
              item.quantity == 0 ? this.isShowModal = false : null;
          }})
          this.inputDeleted = '';
        }  else {
          this.isError = true;
       }
      }
    },
})