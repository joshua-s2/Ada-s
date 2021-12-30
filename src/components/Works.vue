<template>
  <div class="primary">
    <v-container>
      <v-row no-gutters>
        <v-col md="4" height="100" absolute>
          <v-card class="mt-6 mt-sm-12 mb-0" max-width="585">
            <v-card-title class="subtitle-1">Machine learning</v-card-title>
            <v-card-text :class="darkcolor" height="365">
              <div class="text-h4 text-sm-h3">
                Detection of Buried explosive objects using ML
              </div>
              <div class="body-1">
                This is a research project that involved creating a hybrid model
                of convolutional neural network and long short-term memory
                networks to detect and segment buried explosive objects such as
                landmines and IDEs.
              </div>
            </v-card-text>
            <v-img src="/images/card1.png" height="100%" class="mb-0" />
          </v-card>
        </v-col>
        <v-col md="4" height="100" absolute>
          <v-card class="mt-6 mt-sm-12 mb-0 " max-width="585">
            <v-card-title class="subtitle-1">Web 3</v-card-title>
            <v-card-text :class="darkcolor">
              <div class="text-h4 text-sm-h3 py-sm-5">
                Smart contracts with Polygon
              </div>
              <div class="body-1 py-5">
                This project deals with step-by-step implementation of smart
                contract for a generative art NFT collection which is deployed
                to the polygon network.
              </div>
            </v-card-text>

            <v-img
              width="100%"
              class="pt-sm-4"
              height="100%"
              src="/images/card2.png"
            /> </v-card
        ></v-col>
        <v-col md="4" height="100" absolute>
          <v-card class="my-12" max-width="585">
            <v-card-title class="subtitle-1">Data Analytics</v-card-title>
            <v-card-text :class="darkcolor">
              <div class="text-h4 text-sm-h3">
                Analyzing and managing data for decisions
              </div>
              <div class="body-1">
                This project analyzed the rate of vaccine progression in Africa
                using Nigeria as a case study in comparison to the world data.
                The case study in this project couldn’t be compared due to lack
                of public data.
              </div>
            </v-card-text>

            <v-img height="100%" src="/images/card3.png" /> </v-card
        ></v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Works",
  computed: {
    darkcolor() {
      return this.$vuetify.theme.dark ? "white--text" : "black--text";
    }
  }
};
</script>
