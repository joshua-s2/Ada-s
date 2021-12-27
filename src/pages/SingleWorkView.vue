<template>
  <div>
    <PortfolioSinglework />
    <PortfolioWorkinfo />
    <Contact />
    <Connect />
  </div>
</template>
<script>
import PortfolioSinglework from "~/components/Portfolio/Singlework.vue";
import PortfolioWorkinfo from "~/components/Portfolio/Workinfo.vue";
import Contact from "~/components/Contact.vue";
import Connect from "~/components/Connect.vue";
export default {
  components: {
    PortfolioSinglework,
    PortfolioWorkinfo,
    Contact,
    Connect
  }
};
</script>
