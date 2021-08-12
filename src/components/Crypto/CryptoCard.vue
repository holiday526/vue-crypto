<template>
  <div>
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Media card</div>
          <div class="md-subhead">Medium size</div>
        </md-card-header-text>

        <md-card-media>
          <img alt="People" src="https://via.placeholder.com/150">
        </md-card-media>
      </md-card-header>
    </md-card>
    <md-card>
      <md-ripple>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title cardTitle">{{ cryptoAbbr }}: </div>
            <div class="md-subhead cardSubhead">Last update: </div>
          </md-card-header-text>

          <md-card-media>
            <img :src="imageSrc">
          </md-card-media>
        </md-card-header>

      </md-ripple>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: "CryptoCard",
    props: {
      cryptoAbbr : {
        require: true,
        default: 'BTC',
        type: String
      }
    },
    computed: {
      imageSrc() {
        return "../../../assets/" + this.cryptoAbbr + ".png";
      }
    }
  }
</script>

<style scoped>
  .cardTitle {
    font-size: 5vh;
    padding: 1vh;
  }
  .cardSubhead {
    font-size: 2vh;
    padding: 1vh;
  }
</style>