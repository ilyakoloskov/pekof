<template>
  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <nav class="footer__nav nav">
          <ul class="nav__ul">
            <li class="nav__li">
              <router-link to="/favorites" class="nav__link footer-link">Избранное</router-link>
            </li>
          </ul>
        </nav>
        <a class="footer__phone footer-link" href="tel:+78008880088">8 800 888 00 88</a>
      </div>
    </div>
  </footer>
</template>
<style></style>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      footerInfo: 'Hello Footer',
    }
  },
}
</script>
