<template>
  <div class="bg-gray">
    <div class="main-image">
      <h2 class="main-title">WORKS</h2>
      <img class="main-visual" src="~/assets/works-image.jpg" />
    </div>
    <div class="content-inner">
      <div class="works-inner">
        <div class="works-item">
          <nuxt-link to="/todos">
            <img class="works-item__img" src="~/assets/todos-image.png" />
          </nuxt-link>
          <span class="works-item__text"
            >Firebaseを用いた<br />ToDoリスト管理アプリ</span
          >
        </div>
        <div class="works-item">
          <nuxt-link to="/articles">
            <img class="works-item__img" src="~/assets/articles-image.png" />
          </nuxt-link>
          <span class="works-item__text"
            >Axiosを用いた<br />Qiita最新記事表示アプリ</span
          >
        </div>
        <div class="works-item">
          <nuxt-link to="/chat">
            <img class="works-item__img" src="~/assets/chat-image.png" />
          </nuxt-link>
          <span class="works-item__text"
            >Firebaseを用いた<br />掲示板アプリ</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
.bg-gray {
  background-color: #f7f7f7;
}
.main {
  &-image {
    position: relative;
  }
  &-title {
    font-size: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &-visual {
    background-repeat: no-repeat;
    width: 100%;
    height: auto;
  }
}
.content-inner {
  max-width: 990px;
  padding: 0 60px;
  margin: 0 auto;
}
.works {
  &-inner {
    width: 100%;
    padding: 60px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  &-item {
    width: 30%;
    height: auto;
    text-align: center;
    &__img {
      width: 100%;
    }
    &__text {
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
  .works {
    &-inner {
      flex-direction: column;
    }
    &-item {
      width: 60%;
      margin: 0 auto 48px;
      &:last-of-type {
        margin-bottom: 0;
      }
      &__text {
        font-size: 14px;
      }
    }
  }
}
</style>
