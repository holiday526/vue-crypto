<template>
  <div>
    <md-list class="md-triple-line">
      <Clock/>
      <crypto-card crypto-abbr="BTC" />
      <crypto-card crypto-abbr="ETH" />
      <crypto-card crypto-abbr="FTT" />
      <crypto-card crypto-abbr="CRV" />
    </md-list>
  </div>
</template>

<script>
  import Clock from "./Clock";
  import CryptoCard from "../Crypto/CryptoCard";

  export default {
    name: "Home",
    components: {
      Clock,
      CryptoCard
    }
  }
</script>

<style scoped>

</style>