<template>
  <section class="search">
    <input type="text" class="search__input" />
    <div class="search__close-icon">
      <img src="@/assets/img/close.svg" alt="close" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.search {
  position: relative;
  width: 769px; 
  padding: 18px;
  padding-right: 68px;
  background: #262626;

  border: 1px solid #4D4D4D;
  border-radius: 12px;

  .search__input {
    width: 100%;
    min-height: 36px;
    background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
    border-radius: 12px;
  }

  .search__close-icon {
    position: absolute;
    top: 14px;
    right: 14px;
  }
}
</style>
