<template>
  <md-card-media>
    <div :class="{upBackgroundColor: up, downBackgroundColor: !up, backgroundStyle: true}">
      <div class="verticalCenter">
        {{ dataFormatter }}
      </div>
    </div>
  </md-card-media>
</template>

<script>
export default {
  name: "UpDownIndicator",
  data() {
    return {
      up: true,
    }
  },
  props: {
    percentage: {
      required: true,
      default: 0.0,
      type: Number
    }
  },
  computed: {
    dataFormatter() {
      return this.percentage.toFixed(2) + '%';
    }
  },
  watch: {
    percentage: function () {
      this.up = this.percentage > 0;
    }
  },
  mounted() {
    this.up = this.percentage > 0;
  }
}
</script>

<style scoped>
.backgroundStyle {
  height: 100%;
  width: 100%;
  color: #ffffff;
  text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
  font-size: 1.5em;
  border-radius: 1em;
}

.verticalCenter {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.upBackgroundColor {
  background-color: lightgreen;
}

.downBackgroundColor {
  background-color: lightcoral;
}

</style>