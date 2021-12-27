<template>
  <div class="primary pb-15">
    <v-container class="pb-10">
      <img src="/images/work.svg" width="100%" />

      <div class="text-h6 mb-5">Methodology:</div>
      <div class="text-body-1 mb-5">
        After cleaning and preprocessing, k-means clustering was used to
        visualize clusters and principle component analysis was used to reduce
        dimensionality.
      </div>

      <v-img class="my-15" src="/images/work2.svg" width="100%"></v-img>

      <div class="text-h6 mb-5">Conclusion:</div>
      <div class="text-body-1">
        This project is one of the projects from my certification courses on
        Udemy.
      </div>
      <v-btn
        class="my-4"
        text
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/analytics-vidhya/marketing-analysis-df9a019d2ec2"
        >View Project</v-btn
      >
    </v-container>
  </div>
</template>
<script>
export default {
  name: "InfoFive"
};
</script>
