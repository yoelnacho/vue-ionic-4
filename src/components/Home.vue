<template>
<ion-app>
  <ion-header>
    <ion-toolbar color="primary">
      <ion-title>
        Vue Capacitor
      </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content padding>
    The world is your oyster.
    <p>Tutorial for "smashingmagazine.com"<a href="https://www.smashingmagazine.com/2018/07/mobile-apps-capacitor-vue-js/" target="_blank">Go to the tutorial</a>.</p>

    <ion-button @click="goToAbout" full>Go to About</ion-button>
  </ion-content>
</ion-app>
</template>
<script>
export default {
  name: 'Home',
  methods: {
    goToAbout () {
      this.$router.push('about')
    }
  }
}
</script>
