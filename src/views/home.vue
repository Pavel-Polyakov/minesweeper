<template>
  <div>
    <h2>Minesweeper</h2>
    <p>
      Here is simple minesweeper game written just for fun on long flight from
      Moscow to Miami
    </p>

    <router-link to="/minesweeper">Play</router-link>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      rows: 10,
      columns: 15,
      bombsCount: 10,
    };
  },
};
</script>

<style scoped>
.tr {
  text-align: center;
}
</style>