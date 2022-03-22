<template>
  <md-card>
    <md-card-content style="margin: 0;">
      <div class="clock">
        <p class="date">{{ date }}</p>
        <p class="time">{{ time }}</p>
      </div>
    </md-card-content>
  </md-card>
</template>

<script>
  import 'vue-material/dist/vue-material.min.css'
  import 'vue-material/dist/theme/default.css'

  export default {
    components: {},
    name: "Clock",
    data() {
      return {
        time: '',
        date: '',
        week: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      }
    },
    methods: {
      updateTime() {
        let currentDate = new Date();
        this.time = this.zeroPadding(currentDate.getHours(), 2) + ':' + this.zeroPadding(currentDate.getMinutes(), 2)
          + ':' + this.zeroPadding(currentDate.getSeconds(), 2);
        this.date = this.zeroPadding(currentDate.getFullYear(), 4) + '-' + this.zeroPadding(currentDate.getMonth() + 1, 2)
          + '-' + this.zeroPadding(currentDate.getDate(), 2) + ' ' + this.week[currentDate.getDay()];
      },
      zeroPadding(num, digit) {
        let zero = '';
        for (let i = 0; i < digit; i++) {
          zero += 0;
        }
        return (zero + num).slice(-digit);
      }
    },
    mounted() {
      setInterval(this.updateTime, 1000);
    }
  }
</script>

<style scoped>
  p {
    margin: 0;
    padding: 0;
  }

  .clock {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .time {
    letter-spacing: 0.05em;
    padding-top: 8px;
    font-size: 2.5rem;
  }

  .date {
    letter-spacing: 0.1em;
    font-size: 20px;
    font-weight: bold;
    color: rgb(228, 222, 221);
  }

</style>