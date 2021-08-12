<template>
  <md-card>
    <md-ripple>
      <md-card-header class="m0">

<!--        <md-card-media style="margin-right: 10px; margin-left: 0;">-->
<!--          <img :src="imageSrc">-->
<!--        </md-card-media>-->

        <md-card-header-text>
          <div class="md-title cardTitle">{{ cryptoAbbr }}: <span :class="{up: up, down: !up}">{{
              formattedCurrentPrice
            }}</span></div>
          <div class="md-subhead cardSubhead">
            <span style="padding-right: 7px">O: {{ this.responseData.tick.open }} </span>
            <span>H: {{ this.responseData.tick.high }} </span>
          </div>
          <div class="md-subhead cardSubhead">
            <span style="padding-right: 7px">C: {{ this.responseData.tick.close }} </span>
            <span>L: {{ this.responseData.tick.low }} </span>
          </div>
        </md-card-header-text>

        <up-down-indicator
            :up="up"
            :percentage="percentage"
        />


      </md-card-header>

    </md-ripple>
  </md-card>
</template>

<script>
import axios from 'axios'
import UpDownIndicator from "./UpDownIndicator";

export default {
  name: "CryptoCard",
  components: {
    UpDownIndicator
  },
  props: {
    cryptoAbbr: {
      require: true,
      default: 'BTC',
      type: String
    }
  },
  data() {
    return {
      responseData: null,
      up: true,
      currentPrice: 0,
      ts: null,
      percentage: 0
    }
  },
  methods: {
    getCurrentPrice() {
      let cryptoAbbrLowerCase = this.cryptoAbbr.toLowerCase() + 'usdt';
      let apiLink = 'https://api.huobi.pro/market/detail/merged?symbol=';
      axios.get(
          apiLink + cryptoAbbrLowerCase
      )
          .then((response) => {
            this.responseData = response.data;
            this.ts = response.data.ts;
          })
          .catch((error) => {
            console.error(error);
          })
    }
  },
  computed: {
    imageSrc() {
      return require('../../assets/' + this.cryptoAbbr + '.png');
    },
    formattedCurrentPrice() {
      if (this.responseData !== null) {
        return '$' + ((this.responseData.tick.ask[0] + this.responseData.tick.bid[0]) / 2).toFixed(2)
      } else {
        return 'loading'
      }
    },
    updateTime() {
      if (this.responseData !== null) {
        let updateTime = new Date(this.responseData.ts);
        return updateTime.toDateString() + " " + updateTime.toLocaleTimeString();
      } else {
        return 'loading'
      }
    }
  },
  mounted() {
    setInterval(
        this.getCurrentPrice,
        1000
    )
  },
  watch: {
    ts: function () {
      if (this.responseData !== null) {
        let tempCurrentPrice = parseFloat(((this.responseData.tick.ask[0] + this.responseData.tick.bid[0]) / 2).toFixed(2));
        this.up = tempCurrentPrice > this.currentPrice;
        this.currentPrice = tempCurrentPrice
        this.percentage = ((this.currentPrice - this.responseData.tick.open) / this.responseData.tick.open) * 100
      }
    }
  }
}
</script>

<style scoped>
.m0 {
  margin: 0
}
.cardTitle {
  font-size: 2em;
  padding: 0;
  margin: 0;
}

.cardSubhead {
  font-size: 0.9em;
  padding: 0vh;
}

.up {
  color: lightgreen;
}

.down {
  color: lightcoral;
}
</style>