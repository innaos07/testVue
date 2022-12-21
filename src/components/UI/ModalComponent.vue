<template>
  <div
    class="modal-component__wrapper">
    <div class="modal-component">
        <span class="modal-component__close-icon"></span>
        <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
    name: 'modal-component',
    props: {
        isShowModal: {
            type: Boolean,
            default: false,
        }
    }

}
</script>

<style lang="scss">
// .modal-component__wrapper {
//     position: fixed;
//     display: flex;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     z-index: 10000;
//     overflow-y: auto;

//     .modal-component {
//         position: relative;
       
//         top: 32px;
//         padding: 18px 15px;
//         background: rgba(38, 38, 38, 0.5);
//     }
// }

</style>