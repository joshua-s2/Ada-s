<template>
  <div class="container-fluid">
    <Carousel />
    <Resume />
    <About />
    <Capabilities />
    <Works />
    <Contact />
    <Connect />
  </div>
</template>

<script>
import Carousel from "~/components/Carousel/index.vue";

import Resume from "~/components/Resume.vue";
import About from "~/components/About.vue";
import Capabilities from "~/components/Capabilities.vue";
import Works from "~/components/Works.vue";
import Contact from "~/components/Contact.vue";
import Connect from "~/components/Connect.vue";
export default {
  // name: "index",
  data() {
    return {
      dark: false
    };
  },
  components: {
    Carousel,
    Resume,
    Capabilities,
    Works,
    Contact,
    Connect,
    About
  }
};
</script>
