<template>
  <button
    :class="cellClass"
    v-on:click.alt.exact="clickFlag"
    v-on:click.right="clickFlag"
    v-on:click.exact="click"
  >
    <b>
      {{ content }}
    </b>
  </button>
</template>

<script>
import Game from "@/game.js";
export default {
  props: {
    row: Number,
    column: Number,
    hasBomb: Boolean,
    isOpen: Boolean,
    flag: Boolean,
    nearBombCount: Number,
    game: Game,
  },
  methods: {
    click() {
      this.game.table.press(this.row, this.column);
    },
    clickFlag() {
      this.game.table.flag(this.row, this.column);
    },
  },
  computed: {
    cellClass() {
      let classes = ["cell"];

      if (this.isOpen) {
        classes.push("open");
        classes.push("disabled");

        if (this.hasBomb) {
          classes.push("bomb");
        } else {
          if (this.nearBombCount == 0) {
            classes.push("near_0");
          } else if (this.nearBombCount == 1) {
            classes.push("near_1");
          } else if (this.nearBombCount == 2) {
            classes.push("near_2");
          } else if (this.nearBombCount >= 3) {
            classes.push("near_3_or_more");
          }
        }
      } else {
        classes.push("closed");
      }

      return classes;
    },
    content() {
      if (this.flag) {
        return "+";
      }

      if (this.isOpen && !this.hasBomb && this.nearBombCount != 0) {
        return this.nearBombCount;
      }

      if (this.hasBomb && this.isOpen) {
        return "!";
      }

      if (this.game.isWin && !this.game.isFailed && this.hasBomb) {
        return "+";
      }

      return " ";
    },
  },
};
</script>
<style scoped>
.cell {
  width: 50px;
  height: 50px;
  margin: 1px;
  font-size: 28pt;
  border: 2px ridge rgba(25, 25, 25, 0.1);
  border-radius: 5px;
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
  color: #616161;
}

.closed {
  background-color: rgba(50, 50, 50, 0.1);
}
.closed:hover {
  background: rgba(50, 50, 50, 0.15);
}
.closed:active {
  background: rgba(50, 50, 50, 0.2);
}

.disabled {
  pointer-events: none;
}

.open {
  background-color: white;
}
.near_0 {
  color: lightgrey;
}
.near_1 {
  color: #42a5f5;
}
.near_2 {
  color: #66bb6a;
}
.near_3_or_more {
  color: #f44336;
}
.bomb {
  color: white;
  background-color: #f44336;
}
</style>