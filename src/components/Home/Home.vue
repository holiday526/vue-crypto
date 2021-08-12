<template>
  <div>
    <Clock/>
    <crypto-card crypto-abbr="BTC" />
    <crypto-card crypto-abbr="ETH" />
    <crypto-card crypto-abbr="FLOW" />
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