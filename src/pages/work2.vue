<template>
  <div>
    <PortfolioSinglework2 />
    <InfoTwo />
    <Contact />
    <Connect />
  </div>
</template>
<script>
import InfoTwo from "~/components/Portfolio/InfoTwo.vue";
import PortfolioSinglework2 from "~/components/Portfolio/Singlework2.vue";
import Contact from "~/components/Contact.vue";
import Connect from "~/components/Connect.vue";
export default {
  components: {
    InfoTwo,
    PortfolioSinglework2,
    Contact,
    Connect
  }
};
</script>
