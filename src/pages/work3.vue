<template>
  <div>
    <PortfolioSinglework3 />
    <InfoThree />
    <Contact />
    <Connect />
  </div>
</template>
<script>
import InfoThree from "~/components/Portfolio/InfoThree.vue";
import PortfolioSinglework3 from "~/components/Portfolio/Singlework3.vue";
import Contact from "~/components/Contact.vue";
import Connect from "~/components/Connect.vue";
export default {
  components: {
    InfoThree,
    PortfolioSinglework3,
    Contact,
    Connect
  }
};
</script>
