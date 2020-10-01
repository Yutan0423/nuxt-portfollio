<template>
  <div class="container">
    <div class="main-image">
      <h2 class="main-title">丹佑太のポートフォリオ</h2>
      <img class="main-visual" src="~/assets/image/home-image.jpg">
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
@media screen and (max-width: 768px) {
    .main-title {
        font-size: 14px;
    }
}
</style>

