<template>
  <div class="container-fluid">
    <Carousel />
    <Resume />
    <Info />
    <Capabilities />
    <!-- <Works /> -->
    <Contact />
    <Connect />
    <!-- <v-row light justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <SocialCard light class="my-5" />
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
import SocialCard from "~/components/Cards/SocialCard.vue";
// import Carousel from "~/components/Carousel/index.vue";
export default {
  components: {
    SocialCard
    // Carousel
  },
  data() {
    return {
      dark: false
    };
  }
};
</script>
