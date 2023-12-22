function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      palyerHealth: 100,
      monsterHealth: 100,
      currentound: 0,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.palyerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentound++;
      const attachValue = getRandomValue(5, 12);
      this.monsterHealth -= attachValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attachValue = getRandomValue(8, 15);
      this.palyerHealth -= attachValue;
    },
    specialAttackMonster() {
      this.currentound++;
      const attachValue = getRandomValue(10, 25);
      this.monsterHealth -= attachValue;
      this.attackPlayer();
    },
  },
});

app.mount("#game");
