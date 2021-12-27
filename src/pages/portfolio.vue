<template>
  <div>
    <PortfolioHeader />
    <PortfolioWorks />

    <Contact />
    <Connect />
  </div>
</template>
<script>
import PortfolioHeader from "~/components/Portfolio/Header.vue";
import PortfolioWorks from "~/components/Portfolio/Works.vue";
import Contact from "~/components/Contact.vue";
import Connect from "~/components/Connect.vue";
export default {
  components: {
    PortfolioHeader,
    PortfolioWorks,
    Contact,
    Connect
  }
};
</script>
