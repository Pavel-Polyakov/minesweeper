<template>
  <v-app>
    <div>
      <Status v-if="game" :game="game" />
      <!-- <Status v-if="game" :game="game" /> -->

      <Board v-if="game" :table="this.game.table.table" :game="this.game" />
      <!-- <p>Your goal is clear the board containing hidden bombs</p> -->
      <!-- <p>Use alt + click to set flags</p> -->
    </div>
  </v-app>
</template>

<script>
import Game from "@/game.js";
import Board from "@/components/Board";
import Status from "@/components/Status";

export default {
  name: "App",
  props: {},
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
      this.game = new Game();
    },
  },
  components: {
    Board,
    Status,
    // Settings,
  },
};
</script>
<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: scroll;
  /* margin-top: 60px; */

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
/* 
button {
  font-size: 14pt;
  width: 100%;
} */
</style>
