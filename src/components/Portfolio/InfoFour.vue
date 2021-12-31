<template>
  <div class="primary pb-15">
    <v-container class="pb-10">
      <img src="/images/work.svg" width="100%" />

      <div class="text-h6 mb-5">Overview:</div>
      <div class="text-body-1 mb-5">
        In football, once the transfer window opens, clubs starts bidding,
        buying, loaning, borrowing or selling their players. This transfers are
        done to get the ‘best’ players or sell the ‘worst’ players. Transfers
        are pretty expensive, so clubs and leagues go for the best they can get
        or players to build their teams.
      </div>
      <div class="text-subtitle-1 my-5">Methodology:</div>
      <div class="text-body-1">
        Data is collected, cleaned and analyzed to answer the following
        questions:
        <ol class="mt-8">
          <li value="1">Which clubs are the top 10 selling clubs?</li>
          <li>
            Which clubs are the top 10 buying clubs?
          </li>
          <li>Which leagues are the top selling leagues?</li>
          <li>Which leagues are the top buying leagues?</li>
          <li>Does age determine the value of a player?</li>
          <li>Which position is most sought for?</li>
        </ol>
        <div class="text-body-1 my-4">
          With inferences in the above questions.
        </div>
      </div>

      <img class="my-15" src="/images/work2.svg" width="100%" />
      <div class="text-h6 mb-5">Conclusion:</div>
      <div class="text-body-1">
        When clubs and leagues are making transfer decisions, many factors are
        put into consideration whether to build their team from ground up or get
        the best players for their team.
      </div>
      <v-btn
        class="my-4"
        :class="darkcolor"
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/analytics-vidhya/eda-on-football-transfers-between-200-2018-a004e06ef087"
        >View Project</v-btn
      >
    </v-container>
  </div>
</template>
<script>
export default {
  name: "InfoFour",
  computed: {
    darkcolor() {
      return this.$vuetify.theme.dark
        ? "white black--text"
        : "black white--text";
    }
  }
};
</script>
