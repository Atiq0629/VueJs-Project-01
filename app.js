function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      palyerHealth: 100,
      monsterHealth: 100,
      currentound: 0,
      winner: null,
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.palyerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.palyerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentound % 3 !== 0;
    },
  },
  watch: {
    palyerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // a draw
        this.winner = "draw";
      } else if (value <= 0) {
        // player lost
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.palyerHealth <= 0) {
        // a draw
        this.winner = "draw";
      } else if (value <= 0) {
        // monster lost
        this.winner = "player";
      }
    },
  },
  methods: {
    startGame() {
      this.palyerHealth = 100;
      this.monsterHealth = 100;
      this.currentound = 0;
      this.winner = null;
    },
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
    healPlayer() {
      this.currentound++;
      const healValue = getRandomValue(8, 20);
      if (this.palyerHealth + healValue > 100) {
        this.palyerHealth = 100;
      } else {
        this.palyerHealth += healValue;
      }
      this.attackPlayer();
    },
    surrender(){
      this.winner = 'monster';
    }
  },
});

app.mount("#game");
