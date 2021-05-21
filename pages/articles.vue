<template>
  <div class="content-inner">
    <div class="form">
      <h2>検索フォーム</h2>
      <div class="form-flex">
        <input type="text" v-model="keyword" />
        <button @click="showResults">Search</button>
      </div>
    </div>
    <h2 class="content-title">
      <strong>{{ result }}</strong
      >の記事一覧
    </h2>
    <strong v-if="loading">Loading...</strong>
    <ul v-else>
      <li class="posts-item" v-for="(post, index) in posts" :key="index">
        <a :href="post.url" target="_blank" rel="noopener noreferrer">{{
          post.title
        }}</a>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const url = `https://qiita.com/api/v2/items?query=tag:Nuxt.js`;
    // リクエスト（Get）
    const resInit = await $axios.$get(url);
    // 配列で返ってくるのでJSONにして返却
    return {
      posts: resInit
    };
  },
  data() {
    return {
      keyword: "",
      result: "Nuxt.js",
      loading: false
    };
  },
  methods: {
    async showResults() {
      this.loading = true;
      this.result = this.keyword;
      const res = await this.$axios.$get(
        `https://qiita.com/api/v2/items?query=tag:${this.result}`
      );
      this.posts = res;
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  display: block;
  font-size: 16px;
  padding: 4px;
  margin-right: 6%;
  border: 1px solid #cccccc;
  border-radius: 8px;
}
button {
  border: none;
  background-color: #1da1f2;
  border-radius: 8px;
  color: #fff;
  padding: 8px 12px;
  cursor: pointer;
}
.content {
  &-inner {
    max-width: 990px;
    padding: 0 60px;
    margin: 48px auto 64px;
  }
  &-title {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
  }
}
ul {
  padding: 0;
}
li {
  & > a {
    text-decoration: none;
  }
}
.posts-item {
  margin-bottom: 18px;
  list-style: none;
}
.form {
  margin-bottom: 32px;
  &-flex {
    display: flex;
  }
}
@media screen and (max-width: 768px) {
  .content-inner {
    padding: 0 30px;
  }
}
</style>
