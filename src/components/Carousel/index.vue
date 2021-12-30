<template>
  <div>
    <v-carousel
      v-if="this.$vuetify.theme.dark === true"
      cycle
      height="620"
      class="w-100 primary"
      hide-delimiter-background
      show-arrows-on-hovers
      delimiter-icon="mdi-minus"
      ><template v-slot:prev="{ on, attrs }">
        <v-btn
          :color="darkcolor"
          class="carousel-btn"
          text
          v-bind="attrs"
          v-on="on"
          >Prev</v-btn
        >
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn
          text
          :color="darkcolor"
          class="btn-controls carousel-btn"
          v-bind="attrs"
          v-on="on"
          >Next</v-btn
        >
      </template>

      <v-carousel-item
        v-for="(item, i) in slides"
        :key="i"
        :src="item.darkImage"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-container>
          <v-row class="fill-height" align="center" justify="center">
            <div :class="item.class" align="start">
              <div class="text-h6 font-weight-medium mb-5">
                {{ item.heading }}
              </div>
              <div class="text-h3 mb-5">{{ item.text }}</div>
              <v-btn
                :class="btnColor"
                class="contact-btn font-weight-light"
                large
                :to="item.to"
              >
                {{ item.btnText }}
              </v-btn>
            </div>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    <v-carousel
      v-else
      cycle
      height="620"
      class="w-100 primary"
      hide-delimiter-background
      show-arrows-on-hovers
      delimiter-icon="mdi-minus"
    >
      <template v-slot:prev="{ on, attrs }">
        <v-btn
          :color="darkcolor"
          class="carousel-btn"
          text
          v-bind="attrs"
          v-on="on"
          >Prev</v-btn
        >
      </template>

      <template v-slot:next="{ on, attrs }">
        <v-btn
          text
          :color="darkcolor"
          class="carousel-btn"
          v-bind="attrs"
          v-on="on"
        >
          Next
        </v-btn>
      </template>

      <v-carousel-item
        v-for="(item, i) in slides"
        :key="i"
        :src="item.lightImage"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-container>
          <v-row class="fill-height" align="center" justify="center">
            <div :class="item.class" align="start">
              <div class="text-sm-h6 font-weight-medium mb-5">
                {{ item.heading }}
              </div>
              <div class="text-h4 text-sm-h3 mb-5">{{ item.text }}</div>
              <v-btn
                :class="btnColor"
                class="contact-btn font-weight-light"
                sm-large
                :to="item.to"
              >
                {{ item.btnText }}
              </v-btn>
            </div>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  data() {
    return {
      slides: [
        {
          lightImage: "/images/light-slide-1.svg",
          darkImage: "/images/dark-slide-1.svg",
          text: `Gaming in the metaverse`,
          heading: "Design Inspiration",
          class: "left-bottom",
          btnText: "Project Details.",
          to: "/work7"
        },
        {
          lightImage: "/images/dark-slide-2.svg",
          darkImage: "/images/dark-slide-2.svg",
          text: "Enter the world of healthcare through machine learning ",
          heading: "Design Inspiration",
          class: "left-bottom",
          btnText: "Project Details.",
          to: "/work2"
        },
        {
          lightImage: "/images/light-slide-3.svg",
          darkImage: "/images/dark-slide-3.svg",
          text: "Build your data wherever you are",
          heading: "Design Inspiration",
          class: "center-slide",
          btnText: "Project Details.",
          to: "/work3"
        }
      ]
    };
  },
  computed: {
    darkcolor() {
      return this.$vuetify.theme.dark ? "white" : "black";
    },
    lightToDark() {
      return this.$vuetify.theme.dark ? "black" : "white";
    },
    btnColor() {
      return this.$vuetify.theme.dark
        ? "white black--text"
        : "black white--text";
    }
  }
};
</script>
<style lang="scss">
.btn-controls {
  background: none;
  border-radius: 0;
}
.v-window__prev,
.v-window__next {
  background: none;
  /* border-radius: 50%; */
  position: absolute;
  margin: 0 16px;
  top: calc(50% - 20px);
  z-index: 1;
}
.switch.theme-toggle {
  // position: absolute;
  top: 9%;
}
</style>
