<template>
  <div class="primary pb-15">
    <v-container class="pb-10">
      <img src="/images/work.svg" width="100%" />
      <div class="text-body-1 mb-12">
        <span class="text-h3 ">I</span>In this project, I built an image
        classification model from scratch using transfer learning. When I said
        from scratch, the dataset was my custom dataset which I scrapped using
        the IDT tool with my own custom classes.
      </div>
      <div class="text-h6 mb-5">Methodology:</div>
      <div class="text-body-1 mb-5">
        Pneumonia is a respiratory disease that hospitalizes more than 500,000
        Scraped custom data, cleaned, and preprocessed it which includes putting
        them in corresponding folders. Built and trained the model using
        transfer learning with an accuracy 87% and deployed using streamlit.
      </div>

      <img class="my-15" src="/images/work2.svg" width="100%" />

      <div class="text-h6 mb-5">Conclusion:</div>
      <div class="text-body-1">
        In the project folder, there are two more models done without transfer
        learning and looking at their graphs, they were overfitting. This is
        because the number of data was really small and needed to be boosted.
      </div>
      <v-btn
        class="my-4"
        target="_blank"
        :class="darkcolor"
        rel="noopener noreferrer"
        href="https://share.streamlit.io/nwosu-ihueze/first_deploy/main/app.py"
        >View Project</v-btn
      >
    </v-container>
  </div>
</template>
<script>
export default {
  name: "InfoThree",
  computed: {
    darkcolor() {
      return this.$vuetify.theme.dark
        ? "white black--text"
        : "black white--text";
    }
  }
};
</script>
