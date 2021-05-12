<template>
  <div>
    <Status v-if="game" :game="game" />
    <Board v-if="game" :table="this.game.table.table" :game="this.game" />
    
    <p>Your goal is clear the board containing hidden bombs</p>
    <p>Use alt + click to set flags</p>
    
  </div>
</template>

<script>
import Game from "@/game.js";
import Board from "@/components/Board";
import Status from "@/components/Status";

export default {
  name: "App",
  props: {
    rows: {
      type: Number,
      default: 10,
    },
    columns: {
      type: Number,
      default: 15,
    },
    bombsCount: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      game: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.game = new Game(this.rows, this.columns, this.bombsCount);
    },
  },
  components: {
    Board,
    Status,
  },
};
</script>
<style scoped>
button {
  font-size: 14pt;
  width: 100%;
}
</style>