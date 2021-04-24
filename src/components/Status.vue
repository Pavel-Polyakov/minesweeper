<template>
  <div>
    <tr>
      <td>
        <button @click="$router.push('/')">⬅️</button>
      </td>
      <td>
        <button @click="game.init()">🔁</button>
      </td>
    </tr>
  <tr>
      <td>
        <h1>{{ count }}</h1>
      </td>

      <td>
        <h1>{{ status }}</h1>
      </td></tr>
    <tr>
      <td></td>
    </tr>
  </div>
</template>
<script>
export default {
  props: ["game"],
  computed: {
    count() {
      if (this.game.isFinished && this.game.isWin) {
        return 0;
      }
      return this.game.table.bombsCount - this.game.table.flagsCount;
    },
    status() {
      if (!this.game.isFinished) {
        return "🤔";
      }
      if (this.game.isFailed) {
        return "☠️";
      }
      if (this.game.isWin) {
        return "😎";
      }
      return "";
    },
  },
};
</script>
