<template>
  <div class="primary pb-15">
    <v-container class="pb-10">
      <img src="/images/project6.svg" width="100%" />

      <div class="text-h6 mb-5">Methodology:</div>
      <div class="text-body-1 mb-5">
        The smart contract was written using solidity with user interface
        implemented using react and deployed to the Ethereum testnet.
      </div>
      <div class="text-subtitle-1 my-5">Overview:</div>

      <img class="my-15" src="/images/project6.svg" width="100%" />

      <div class="text-h6 mb-5">Conclusion:</div>
      <div class="text-body-1">
        This is a fun simple NFT game character minting, a way of inching my way
        into web 3 and gaming.
      </div>
      <v-btn
        class="my-4"
        :class="darkcolor"
        target="_blank"
        rel="noopener noreferrer"
        href="https://metaverse-slayer.netlify.app/"
        >View Project</v-btn
      >
    </v-container>
  </div>
</template>
<script>
export default {
  name: "InfoSeven",
  computed: {
    darkcolor() {
      return this.$vuetify.theme.dark
        ? "white black--text"
        : "black white--text";
    }
  }
};
</script>
