import { defineStore } from 'pinia';



export const useInventoryStore = defineStore('inventory', {
  state: ()=> {
    return {
      activeItem: -1,
      itemList: [
        { 
          id: 1,   
          quantity: 4, 
          icon: 'item-01',
          cell: 1,
          color: 'item-inventory__card--green' 
        },
        { 
          id: 2,   
          quantity: 2, 
          icon: 'item-02',
          cell: 2,
          color: 'item-inventory__card--yellow' 
        },
        { 
          id: 3,   
          quantity: 5, 
          icon: 'item-03',
          cell: 23,
          color: 'item-inventory__card--purpure'
        },
      ]
    }
        
    },
    getters: {
      getCellList(state) {
        return (cellID)=> state.itemList.filter(item=> item.cell === cellID);
      }
    },
    actions: {
      startDrag (e, item) {
        this.activeItem = item.id;
        
        e.currentTarget.style.backgroundColor = 'red'
        e.dataTransfer.dropEffect = 'move'
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('itemID', item.id)
      },
      onDrop (e, cellID) {
        this.activeItem = -1;
        const itemID = e.dataTransfer.getData('itemID');
        const item = this.itemList.find((item) => item.id == itemID)
        item.cell = cellID;
      },
    },
})