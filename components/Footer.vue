<template>
    <footer>
        <small class="footer-text">© 2020 YuTan Portfolio</small>
    </footer>
</template>

<style scoped lang="scss">
footer {
  height: 52px;
  width: 100%;
  background-color: rgb(21, 32, 43);
  display: flex;
  justify-content: center;
  align-items: center;
  small {
      color: #fff;
  }
}
@media screen and (max-width: 768px) {
    footer > small {
        font-size: 11px;
    }
}
</style>
