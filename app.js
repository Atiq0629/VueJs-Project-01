function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      palyerHealth: 100,
      monsterHealth: 100,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.palyerHealth + "%" };
    },
  },
  methods: {
    attackMonster() {
      const attachValue = getRandomValue(5, 12);
      this.monsterHealth -= attachValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attachValue = getRandomValue(8, 15);
      this.palyerHealth -= attachValue;
    },
  },
});

app.mount("#game");
