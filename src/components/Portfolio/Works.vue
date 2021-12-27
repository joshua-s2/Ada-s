<template>
  <div class="primary">
    <v-container>
      <v-tabs :color="lightcolor">
        <v-tab @click="filter('all')">All</v-tab>
        <v-tab @click="filter('dataAnalytics')">Data Science</v-tab>
        <v-tab @click="filter('computerVision')">Machine Learning</v-tab>
        <v-tab @click="filter('programming')">Web 3</v-tab>
        <v-tab @click="filter('frontEnd')">Front-end Development</v-tab>
      </v-tabs>
      <v-row class="py-16" justify="center">
        <v-col
          v-for="item in filteredItems"
          v-bind:key="item.id"
          :class="item.class"
          :cols="item.column"
          :md="item.md"
          :lg="item.lg"
          :xl="item.xl"
        >
          <img
            :src="item.img"
            class="img-fluid grid-image"
            :class="item.class2"
          />
          <v-btn class="view-work" :to="item.projectLink">
            <v-icon>mdi-eye</v-icon></v-btn
          >

          <div class="grid-text">
            <div class="text-h6 white--text">{{ item.imageTitle }}</div>
            <div class="text-body-2 white--text">{{ item.imageSubText }}</div>
          </div>
        </v-col>
      </v-row>
      <!-- </div> -->
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Works",
  data() {
    return {
      items: [
        {
          id: 1,
          img: "/images/project1.svg",
          column: 12,
          md: 12,
          lg: 4,
          xl: 4,
          class2: "grid-image",
          tags: ["all", "dataAnalytics"],
          imageTitle: "Data Science",
          imageSubText: "Vaccine progression in the world, Africa and Nigeria",
          projectLink: "/SingleWorkView"
        },
        {
          id: 2,
          img: "/images/project2.svg",
          column: 12,
          md: 12,
          lg: 8,
          xl: 8,
          class2: "grid-image",
          tags: ["all", "frontEnd"],
          imageTitle: "Front-end Development",
          imageSubText: "Restaurant portfolio of Chef Jayden Tega",
          projectLink: "/work6"
        },
        {
          id: 3,
          img: "/images/project3.svg",
          column: 12,
          md: 12,
          lg: 4,
          class2: "grid-image",
          tags: ["all", "computerVision"],
          imageTitle: "Machine Learning",
          imageSubText: "Image classification using transfer learning",
          projectLink: "/work3"
        },
        {
          id: 4,
          img: "/images/project4.svg",
          column: 12,
          md: 12,
          lg: 4,
          class2: "grid-image",
          tags: ["all", "dataAnalytics"],
          imageTitle: "Data Science",
          imageSubText: "Football Transfer analysis",
          projectLink: "/work4"
        },
        {
          id: 5,
          img: "/images/project5.svg",
          column: 12,
          md: 12,
          lg: 4,
          class2: "grid-image",
          tags: ["all", "computerVision"],
          imageTitle: "Machine Learning",
          imageSubText: "AI and 2D medical imaging",
          projectLink: "/work2"
        },

        {
          id: 6,
          img: "/images/project6.svg",
          column: 12,
          md: 12,
          lg: 8,
          class2: "grid-image",
          tags: ["all", "programming"],
          imageTitle: "Web 3",
          imageSubText: "Simple game implementation using solidity and react.",
          projectLink: "/work7"
        },
        {
          id: 7,
          img: "/images/project7.svg",
          column: 12,
          md: 12,
          lg: 3,
          class: "mx-sm-4 ",
          class2: "grid-height",
          tags: ["all", "dataAnalytics"],
          imageTitle: "Data Science",
          imageSubText: "Marketing Analysis",
          projectLink: "/work5"
        }
      ],
      currentTag: "all"
    };
  },
  computed: {
    darkcolor() {
      return this.$vuetify.theme.dark
        ? "white black--text"
        : "black white--text";
    },
    lightcolor() {
      return this.$vuetify.theme.dark ? "white--text" : "black--text";
    },
    filteredItems: function() {
      var filter = this.currentTag;
      return this.items.filter(function(item) {
        return item.tags.indexOf(filter) !== -1;
      });
    }
  },
  methods: {
    shuffle: function() {
      this.items = _.shuffle(this.items);
    },
    filter: function(tag) {
      this.currentTag = tag;
    }
  }
};
</script>
