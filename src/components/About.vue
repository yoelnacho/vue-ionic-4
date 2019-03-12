<template>
<ion-app>
  <ion-header>
    <ion-toolbar color="primary">
      <ion-title>
        About
      </ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content padding>
    <ion-button @click="goBackHome" full>Go to Home</ion-button>
  </ion-content>
</ion-app>
</template>
<script>
export default {
  name: 'About',
  methods: {
    goBackHome () {
      this.$router.push('/')
    }
  }
}
</script>
