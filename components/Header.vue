<template>
  <div>
    <header class="header" ref="header" :class="headerFixed">
      <h1 class="site-title">
        <nuxt-link class="gnav-link" to="/">Yutan Portfolio</nuxt-link>
      </h1>
      <nav v-if="windowWidth > 768">
        <ul class="gnav">
          <li class="gnav-items">
            <nuxt-link
              :class="gnavFixed"
              active-class="link-active"
              class="gnav-link"
              to="/"
              exact
              >Home</nuxt-link
            >
          </li>
          <li class="gnav-items">
            <nuxt-link
              :class="gnavFixed"
              active-class="link-active"
              class="gnav-link"
              to="/about"
              exact
              >About</nuxt-link
            >
          </li>
          <li class="gnav-items">
            <nuxt-link
              :class="gnavFixed"
              active-class="link-active"
              class="gnav-link"
              to="/works"
              >Works</nuxt-link
            >
          </li>
          <li class="gnav-items">
            <nuxt-link
              :class="gnavFixed"
              active-class="link-active"
              class="gnav-link"
              to="/contact"
              >Contact</nuxt-link
            >
          </li>
        </ul>
      </nav>
      <div v-else>
        <button class="sp-nav-btn" @click="spNavClick" :class="btnActive">
          <!-- v-bind:classクリックした時にクラス名を付与 -->
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
    <div class="header-margin"></div>
  </div>
</template>

<script>
export default {
  props: ["spNavFlag"],
  data() {
    return {
      headerHeight: "",
      windowHeight: "",
      windowWidth: "",
      btnActive: "",
      headerFixed: null,
      gnavFixed: null,
      nowFixed: false,
      spNavBtnState: true
    };
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.headerHeight = this.$refs.header.clientHeight;
    window.addEventListener("scroll", this.scrollWindow);
  },
  methods: {
    scrollWindow() {
      this.windowHeight = window.scrollY;
      if (this.headerHeight < this.windowHeight) {
        this.headerFixed = "header-fixed";
        this.gnavFixed = "gnav-fixed";
        this.nowFixed = false;
      } else {
        this.headerFixed = null;
        this.gnavFixed = null;
      }

      if (this.nowFixed) {
        this.headerFixed = "header-fixed";
        this.gnavFixed = "gnav-fixed";
      }
    },
    spNavClick() {
      this.$emit("clickSpNav");
      if (this.spNavFlag == false) {
        this.btnActive = "btn-active";
      } else {
        this.btnActive = "";
      }
    }
  },
  watch: {
    $route() {
      if (this.headerFixed) {
        this.nowFixed = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  background-color: rgb(21, 32, 43);
  width: 100%;
  color: #fff;
  height: 72px;
  padding: 15px;
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-fixed {
  transition: 0.3s;
  opacity: 0.9;
}
.link-active.gnav-fixed {
  border-bottom: 2px solid #fff;
}
.link-active {
  border-bottom: 2px solid #fff;
}
.site-title {
  font-size: 24px;
}
.gnav {
  display: flex;
}
.gnav-items {
  list-style: none;
  font-size: 20px;
}
.gnav-link {
  text-decoration: none;
  color: #ffffff;
  padding: 8px 0;
  margin-right: 24px;
  &:hover {
    border-bottom: 2px solid #fff;
  }
}
.sp-nav-btn {
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
  top: 8px;
  right: 12px;
  width: 40px;
  height: 40px;
  z-index: 110;
  border: none;
  background-color: rgb(21, 32, 43);
}
.sp-nav-btn span {
  position: absolute;
  display: block;
  width: 28px;
  height: 1px;
  background-color: #fff;
  transition: all 0.5s;
}
.sp-nav-btn span:first-of-type {
  top: 10px;
}
.sp-nav-btn span:nth-of-type(2) {
  top: 20px;
}
.sp-nav-btn span:last-of-type {
  bottom: 10px;
}
.btn-active span:first-of-type {
  transform: rotate(45deg);
  top: 20px;
}
.btn-active span:nth-of-type(2) {
  opacity: 0;
}
.btn-active span:last-of-type {
  transform: rotate(-45deg);
  bottom: 20px;
}
.header-margin {
  height: 72px;
}

@media screen and (max-width: 768px) {
  .header {
    height: 52px;
  }
  .header-margin {
    height: 52px;
  }
  .site-title {
    font-size: 14px;
  }
}
</style>
