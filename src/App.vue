<template>
  <div id="app">
    <crypto-card />
    <home />
  </div>
</template>

<script>
import Home from "./components/Home/Home";
import CryptoCard from "./components/Crypto/CryptoCard";

export default {
  name: 'App',
  components: {
    CryptoCard,
    Home
  }
}
</script>

<style>

</style>
