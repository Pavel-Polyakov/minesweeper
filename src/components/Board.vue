<template>
  <div>
    <tr v-for="(row, i) of game.table.table" v-bind:key="i" v-bind:index="i">
      <td v-for="(cell, j) of row" v-bind:key="j" v-bind:index="j">
        <Cell
          :row="cell.row"
          :column="cell.column"
          :hasBomb="cell.hasBomb"
          :isOpen="cell.isOpen"
          :nearBombCount="cell.nearBombCount"
          :flag="cell.flag"
          :game="game"
        />
      </td>
    </tr>
  </div>
</template>
<script>
import Cell from "@/components/Cell";
export default {
  props: ["game"],
  components: {
    Cell,
  },
  methods: {
    click(v) {
      console.log(v);
    },
  },
};
</script>
<style scoped>
div {
  display: table;
  border-collapse: separate;
  border-spacing: 0.1vw;
  margin: 0 auto;

  margin-top: 60px;
}

</style>