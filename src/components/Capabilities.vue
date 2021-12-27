<template>
  <div class="secondary py-5 py-sm-15">
    <v-container>
      <h6
        class="text-subtitle-1 text-sm-h6"
        :class="
          $vuetify.breakpoint.smAndDown
            ? `font-weight-bold`
            : `font-weight-medium`
        "
      >
        CAPABILITIES
      </h6>
      <h2 class="text-h4 text-sm-h3">
        A design created to <br />
        excite people
      </h2>
    </v-container>
    <v-row no-gutters>
      <v-col cols="12" md="7" class="d-flex align-center">
        <img src="/images/rec1.png" width="100%" class="cap-image" />
      </v-col>
      <v-col cols="12" md="5">
        <v-sheet
          :color="turnDark"
          class="d-flex align-center cap-sheet"
          elevation="1"
        >
          <div class="darkGrey" :class="turnDark">
            <span class="avatar-span">
              <img
                src="/images/avatar.png"
                width="100"
                class="img-fluid mx-2"
              />
              <p class="subtitle-1">My Specialties</p>
            </span>
            <p class="text-h4 text-sm-h3 mx-5 mx-sm-3 my-2">
              I work in the fields<br />
              of computer programming<br />
            </p>

            <template>
              <v-expansion-panels accordion>
                <v-expansion-panel v-for="(item, i) in capabilities" :key="i">
                  <v-expansion-panel-header
                    @click="test = !test"
                    class="text-subtitle-1"
                    :class="turnDark"
                    :expand-icon="test ? 'mdi-plus' : 'mdi-minus'"
                  >
                    {{ item.title }}
                  </v-expansion-panel-header>

                  <v-expansion-panel-content :class="turnDark">
                    {{ item.text }}
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </template>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Capabilities",
  data() {
    return {
      icon: "mdi-plus",
      test: true,
      capabilities: [
        {
          title: "Data science",
          text:
            "Application of data science in finding solutions to business problems by studying the past trends and predicting future trends using company data and writing recommendations based on the predictive trends."
        },
        {
          title: "Machine learning",
          text:
            "Using machine learning to improve analytical model building through automation which enables the system learn from given data by understanding patterns and making decisions with minimal human intervention. "
        },
        {
          title: "Web 3",
          text:
            "Decentralization of applications by building on public blockchains which is trustless."
        }
      ]
    };
  },
  computed: {
    turnDark() {
      return this.$vuetify.theme.dark ? "lightGrey" : "primaryColor";
    },
    lightToDark() {
      return this.$vuetify.theme.dark ? "black" : "white";
    }
  },
  methods: {
    changeIcon() {
      this.icon = "mdi-minus";
    }
  }
};
</script>
<style lang="scss">
.avatar-span {
  display: flex;
  align-items: center;
}
</style>
