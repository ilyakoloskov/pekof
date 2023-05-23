<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <!-- <router-link href="logo">logo</router-link>
        <router-link href="#">cart</router-link> -->
        <router-link to="/">logo</router-link>
        <router-link to="/single">card</router-link>
      </div>
    </div>
  </header>

  <router-view></router-view>

  <main class="main">
    
      <section class="main-screen"></section>
      <section class="catalog">
        <div class="container">
          <div class="catalog__wrapper">
            <article class="cart"></article>
            <router-view></router-view>
          </div>
        </div>
    </section>
  </main>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <nav class="footer__nav nav">
          <ul class="nav__ul">
            <li class="nav__li">
              <router-link to="/single">cart</router-link>
              <!-- <a href="#">Избранное</a> -->
            </li>
          </ul>
        </nav>
        <a href="tel:+78008880088">8 800 888 00 88</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      message: 'Hello Vue',
    }
  },
}
</script>

<style>

</style>
