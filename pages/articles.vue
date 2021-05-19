<template>
	<div class="content-inner">
        <h2 class="content-title">
            <strong>Nuxt.js</strong>の記事一覧
        </h2>
		<ul>
		 	<li class="posts-item" v-for="(post, index) in posts" :key="index">
		 		<a :href="post.url" target="_blank" rel="noopener noreferrer">{{ post.title }}</a>
                 <hr>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		async asyncData({ $axios }) {
			// 取得先のURL
			const url = `https://qiita.com/api/v2/items?query=tag:Nuxt.js`;
			// リクエスト（Get）
			const response = await $axios.$get(url)
			// 配列で返ってくるのでJSONにして返却
			return {
				posts: response
			}
		},


	}
</script>

<style scoped>
input {
	display: block;
	font-size: 16px;
	padding: 4px;
	margin-left: 10%;
}
.content-inner {
  max-width: 990px;
  padding: 0 60px;
  margin: 48px auto 64px;
}
.content-title {
    margin-bottom: 24px;
		display: flex;
		align-items: center;
}
ul {
	padding: 0;
}
.posts-item {
    margin-bottom: 16px;
    list-style: none;
}
@media screen and (max-width: 768px) {
    .content-inner {
        padding: 0 30px;
    }
}
</style>