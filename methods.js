let player = {
  health: 100,
  fun: 0,
  eatApple: function () {
    console.log("eat apple");

    // this.health = this.health + 30;
    this.health += 30;
    console.log(this.health);
  },
};

player.eatApple();
console.log(player);
