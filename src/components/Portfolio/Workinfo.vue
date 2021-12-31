<template>
  <div class="primary pb-15">
    <v-container class="pb-10">
      <img src="/images/work.svg" width="100%" />

      <div class="text-h6 mb-5">Overview:</div>
      <div class="text-body-1 mb-5">
        The novel Coronavirus disease also known as COVID-19, is a new strain of
        SARS-Cov-2 that has ravaged the world as a global pandemic with its
        rapid spread and high mortality. This has brought together the different
        stakeholders in the world from the government to academia to researchers
        and scientists to curb this virus through vaccine development and
        testing. Currently, there are varieties of vaccines all around the world
        in different countries and this analysis seeks to monitor its
        progression
      </div>
      <div class="text-subtitle-1 my-5">Methodology:</div>
      <div class="text-body-1">
        Data collection, cleaning, preprocessing and visualizations showing data
        from around the world . Narrowing the analysis to Africa and picking the
        case study, Nigeria for the analysis based on the types of vaccines
        available and the rate of vaccinations.
      </div>

      <img class="my-15" src="/images/work2.svg" width="100%" />

      <div class="text-h6 mb-5">Conclusion:</div>
      The aim of this analysis is to answer the following questions.
      <ol class="mt-4">
        <li value="1">
          Vaccines used around the world
        </li>
        <li>
          Situation in Africa
        </li>
        <li>Situation in Nigeria.</li>
      </ol>
      <v-btn
        class="my-4"
        target="_blank"
        :class="darkcolor"
        rel="noopener noreferrer"
        href="https://medium.com/analytics-vidhya/data-analysis-with-visualization-covid-19-vaccine-progression-84ea786d5ab4"
        >View Project</v-btn
      >
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Workinfo",
  computed: {
    darkcolor() {
      return this.$vuetify.theme.dark
        ? "white black--text"
        : "black white--text";
    }
  }
};
</script>
