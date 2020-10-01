<template>
  <div>
        <ul class="sp-nav">
            <li>
                <nuxt-link active-class="link-active" to="/" exact>Home</nuxt-link>
            </li>
            <li>
                <nuxt-link active-class="link-active" to="/about" exact>About</nuxt-link>
            </li>
            <li>
                <nuxt-link active-class="link-active" to="/works">Works</nuxt-link>
            </li>
            <li>
                <nuxt-link active-class="link-active" to="/contact">Contact</nuxt-link>
            </li>
        </ul>  
  </div>
</template>

<style lang="scss" scoped>
.sp-nav {
  position: fixed;
  left: 0;
  top: 52px;
  width: 100%;
  padding: 0;
  z-index: 9999;
  text-align: center;
  background: rgba(21, 32, 43, 0.9);
  & li {
    height: 50px;
    line-height: 50px;
    list-style: none;
    & a {
      display: block;
      color: #fff;
    }
  }
  & li:not(:last-of-type) {
    border-bottom: 1px dotted #fff;
  }
}
</style>