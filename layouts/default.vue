<template>
  <div>
    <Header @clickSpNav="clickSpNav" :spNavFlag="spNavFlag" />
      <template v-if="spNavFlag">
          <Spnav @clickSpNav="clickSpNav" v-if="spNavFlag"/>
      </template>
    <div>
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"
import Spnav from "~/components/Spnav.vue"
export default {
  components: {
    Header,
    Footer,
    Spnav
  },
  data() {
    return {
      spNavFlag: false
    }
  },
  methods: {
    clickSpNav() {
      this.spNavFlag = !this.spNavFlag;
    }
  },
  watch: {
    $route() {
      if (this.spNavFlag) {
        this.spNavFlag = false;
      }
    }
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
/* アニメーション付与 */
/* .fade-enter {
opacity: 0;
}
.fade-enter-active {
transition: opacity 0.5s;
}
.fade-enter-to {
opacity: 1;
}
.fade-leave {
opacity: 1;
}
.fade-leave-active {
transition: opacity 0.5s;
}
.fade-leave-to {
opacity: 0;
} */
</style>
