<template>
  <aside class="sidebar">
    <div class="sidebar__image">
       <img src="@/assets/img/photo.jpg" alt="image"/>
    </div>
    <div class="sidebar__info">
      <h2 class="sidebar__title"></h2>
      <p class="sidebar__text sidebar__text--big"></p>
      <p class="sidebar__text sidebar__text--small"></p>
      <p class="sidebar__text sidebar__text--big"></p>
      <p class="sidebar__text sidebar__text--big"></p>
      <p class="sidebar__text sidebar__text--small"></p>
      <p class="sidebar__text sidebar__text--small"></p>
    </div>
  </aside>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 236px;
  padding: 18px 14px;
  background: #262626;
  border: 1px solid #4D4D4D;
  border-radius: 12px;

  .sidebar__image {
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;

    img {
      width: 100%;
      height: 240px;
    }
  }

  .sidebar__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    width: 190; 

    .sidebar__title {
      width: 190px; 
      height: 26px;  
      margin-bottom: 24px;
      border-radius: 8px;
      background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
    }

    .sidebar__text {
      height: 10px;  
      margin-bottom: 16px;
      border-radius: 4px;
      background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);

      &--big {
        width: 200px;
      }

      &--small {
        width: 170px;
      }
    }
  }

}
</style>