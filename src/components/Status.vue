<template>
  <v-app-bar dense color="white">
    <v-btn small @click="game.init()" color="red" dark
      >Restart <v-icon dark right> mdi-restart </v-icon></v-btn
    >
    <v-spacer></v-spacer>
    <h1>{{ count }}</h1>
    <h1>{{ status }}</h1>
    <v-spacer></v-spacer>
    <v-dialog v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn small color="primary" dark v-bind="attrs" v-on="on">
          Settings <v-icon dark right> mdi-wrench </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="init()"> Save & restart </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list>
                    <v-list-item>
            <v-list-item-content>
              <v-btn @click="defaultValues">Default values</v-btn>
            </v-list-item-content>
          </v-list-item>
          
          
          <v-list-item>
            <v-list-item-content>
              <!-- <v-list-item-title>Rows</v-list-item-title> -->
              <v-list-item-action>
                <v-slider
                  v-model="game.rows"
                  :max="100"
                  label="Rows"
                  class="align-center"
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="game.rows"
                      class="mt-0 pt-0"
                      type="number"
                    ></v-text-field>
                  </template>
                </v-slider>
              </v-list-item-action>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <!-- <v-list-item-title>Columns</v-list-item-title> -->
              <v-list-item-action>
                <v-slider
                  v-model="game.columns"
                  :max="100"
                  label="Columns"
                  class="align-center"
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="game.columns"
                      class="mt-0 pt-0"
                      type="number"
                    ></v-text-field>
                  </template>
                </v-slider>
              </v-list-item-action>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <!-- <v-list-item-title>Bombs</v-list-item-title> -->
              <v-list-item-action>
                <v-slider
                  v-model="game.bombsCount"
                  :max="100"
                  label="Bombs"
                  class="align-center"
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="game.bombsCount"
                      class="mt-0 pt-0"
                      type="number"
                    ></v-text-field>
                  </template>
                </v-slider>
              </v-list-item-action>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-btn color="primary" @click="init()"> Save & restart </v-btn>
            </v-list-item-content>
          </v-list-item>

        </v-list>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>
<script>
export default {
  props: {
    game: {
      default: null,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    init() {
      this.dialog = false;
      this.game.init();
    },
    defaultValues() {
      this.game.rows = 10;
      this.game.columns = 15;
      this.game.bombsCount = 10;
    },
  },
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