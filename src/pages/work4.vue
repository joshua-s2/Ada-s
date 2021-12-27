<template>
  <div>
    <PortfolioSinglework4 />
    <InfoFour />
    <Contact />
    <Connect />
  </div>
</template>
<script>
import InfoFour from "~/components/Portfolio/InfoFour.vue";
import PortfolioSinglework4 from "~/components/Portfolio/Singlework4.vue";
import Contact from "~/components/Contact.vue";
import Connect from "~/components/Connect.vue";

export default {
  components: {
    InfoFour,
    PortfolioSinglework4,
    Contact,
    Connect
  }
};
</script>
