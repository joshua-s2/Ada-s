<template>
  <div>
    <PortfolioSinglework5 />
    <InfoFive />
    <Contact />
    <Connect />
  </div>
</template>
<script>
import InfoFive from "~/components/Portfolio/InfoFive.vue";
import PortfolioSinglework5 from "~/components/Portfolio/Singlework5.vue";
import Contact from "~/components/Contact.vue";
import Connect from "~/components/Connect.vue";

export default {
  components: {
    InfoFive,
    PortfolioSinglework5,
    Contact,
    Connect
  }
};
</script>
