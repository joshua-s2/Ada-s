<template>
  <div class="primary pb-15">
    <v-container class="pb-10">
      <img src="/images/work.svg" width="100%" />
      <div class="text-body-1 mb-12">
        <span class="text-h3 ">A</span>ccording to Appen, data annotation is the
        categorization and labeling of data for AI applications. This
        categorization and<br />
        labeling is done to achieve a specific use case in relation to the
        business problem you are trying to solve. There are people<br />
        whose job it is to annotate these data for machine learning application,
        and are called annotators. These annotators without<br />
        test validation can lead to bias in data as humans are unconsciously
        bias and could lead to inaccurate or improper labelling.<br />
        I will be demonstrating the use of annotating software provided by Appen
        to create annotation for detecting pneumonia in<br />
        an X-ray image.
      </div>
      <div class="text-h6 mb-5">Overview:</div>
      <div class="text-body-1 mb-5">
        Pneumonia is a respiratory disease that hospitalizes more than 500,000
        Americans with a high mortality rate. This disease cuts across all age
        demographics with infants and the elderly being high risks. Despite all,
        this disease can be treated and can be prevented using vaccines.
      </div>
      <div class="text-subtitle-1 my-5">Methodology:</div>
      <div class="text-body-1">
        To make this a success, three labels is provided; yes to indicate the
        presence of pneumonia, no to indicate the absence of pneumonia and
        unsure if the annotator isn’t sure in the situation that testers
        assigned do not have domain knowledge and to give room for mild cases
        and false positives. The following steps needs to be followed:
        <ol class="mt-8">
          <li value="1">Examine the image carefully.</li>
          <li>
            If Pneumonia is present, select yes. If it is absent, select no. If
            unsure, mild case or undecided, mark unsure.
          </li>

          <li>Only look for the indications of pneumonia.</li>
          <li>If there are no indications, mark unsure.</li>
        </ol>
        <div class="text-body-1 my-4">
          To make the above exercise less stressful, example images are attached
          to differentiate the indicators of a healthy <br />
          lung and a pneumonia diseased lung.
        </div>
      </div>

      <v-img class="my-15" src="/images/work2.svg" width="100%"></v-img>

      <div class="text-h6 mb-5">Conclusion:</div>
      <div class="text-body-1">
        Data annotation is an important process of any machine learning
        application as it is the foundation on which performing models are
        built.
      </div>
      <v-btn
        class="my-4"
        text
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/analytics-vidhya/ai-and-2d-medical-imaging-4adf502f5773"
        >View Project</v-btn
      >
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Info2"
};
</script>
