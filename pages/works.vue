<template>
  <div class="container">
    <div class="main-image">
      <h2 class="main-title">WORKS</h2>
      <img class="main-visual" src="~/assets/image/works-image.jpg">
    </div>
    <div class="content-inner">
      <div class="works-inner">
        <small class="works-item" to="/">
          <nuxt-link to="/">
            <img class="works-item__img" src="~/assets/image/home-image.jpg">
          </nuxt-link>
          <span class="works-item__text">ToDoリスト管理アプリ</span>
        </small>
        <small class="works-item" to="/">
          <nuxt-link to="/">
            <img class="works-item__img" src="~/assets/image/home-image.jpg">
          </nuxt-link>
          <span class="works-item__text">ToDoリスト管理アプリ</span>
        </small>
        <small class="works-item" to="/">
          <nuxt-link to="/">
            <img class="works-item__img" src="~/assets/image/home-image.jpg">
          </nuxt-link>
          <span class="works-item__text">ToDoリスト管理アプリ</span>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
.main-image {
  position: relative;
}
.main-title {
  font-size: 24px;
  position:absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.main-visual {
  background-repeat:  no-repeat;
  width: 100%;
  height: auto;
}
.content-inner {
  max-width: 990px;
  padding: 0 60px;
  margin: 0 auto;
}
.works-inner {
  width: 100%;
  margin: 60px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .works-item {
    width: 30%;
    height: auto;
    border: solid 1px #000;
    text-align: center;
    .works-item__img {
      width: 100%;
    }
    .works-item__text {
      text-align: center;
    }
  }
}
@media screen and (max-width: 768px) {
  .main-title {
    font-size: 14px;
  }
  .content-inner {
    padding: 0 30px;
  }

}
</style>
