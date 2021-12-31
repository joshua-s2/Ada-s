<template>
  <div class="primary pb-15">
    <v-container class="pb-10">
      <img src="/images/project2.svg" width="100%" />

      <div class="text-h6 my-5">Methodology:</div>
      <div class="text-body-1 mb-5">
        This project was done using HTML, CSS and Javascript with addition of
        J-Query for some functionality and animate on scroll for animations.
      </div>

      <img class="my-15" src="/images/project2.svg" width="100%" />

      <div class="text-h6 mb-5">Conclusion:</div>
      <div class="text-body-1">
        This project was done during my internship at HNG.
      </div>
      <v-btn
        class="my-4 contact-btn"
        target="_blank"
        :class="darkcolor"
        rel="noopener noreferrer"
        href="https://restauranteur.netlify.app/"
        >View Project</v-btn
      >
    </v-container>
  </div>
</template>
<script>
export default {
  name: "InfoSix",
  computed: {
    darkcolor() {
      return this.$vuetify.theme.dark
        ? "white black--text"
        : "black white--text";
    }
  }
};
</script>
