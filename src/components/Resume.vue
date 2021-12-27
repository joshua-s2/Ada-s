<template>
  <div class="secondary">
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" md="6">
          <img src="/images/cv.jpeg" class="img-fluid" width="100%" alt="" />
        </v-col>
        <v-col cols="12" md="6" align-self="center" class="d-flex justify-end">
          <div class="d-d-inline-flex justify-end">
            <h3 class="text-h4 text-sm-h3 mb-4 headings">My Resume</h3>
            <p class="text-body-2 headings">
              I’m a computer programmer with experience in python, Javascript,
              Solana, Solidity, familiar with Rust, tools in machine learning
              such as tensorflow and keras. Hardware experience includes
              familiarity with Arduino.
            </p>
            <!-- <p class="text-caption border-right">Download CV</p> -->
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Resume"
};
</script>
