<template>
  <div class="primary">
    <v-container>
      <v-btn icon class="my-5" @click="$router.go(-1)">
        <v-img :src="icon"
      /></v-btn>
      <v-row align="center">
        <v-col cols="12" md="6" class="mt-5 mt-sm-5">
          <div class="text-subtitle-2">
            Identity Mockup <b class="text-warning"> . </b> June 3, 2019
          </div>
        </v-col>
        <v-col cols="12" md="5" offset-md="1">
          <b class="text-h6">Task</b>
          <div class="text-body-1">
            Most people tend to have issues classifying bags and carry-ons. In
            this project, I chose to work with 5 classes namely; Backpack,
            Briefcase, Duffle, Handbag and purse.
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <div class="text-h5 text-sm-h3">
            Image classification using<br />
            transfer learning
          </div>
          <div class="text-body-1 mt-2">
            Transfer learning is repurposing a pre-trained model for another but
            similar usage. This method is seen in various machine learning
            applications especially in situations where the dataset is
            relatively small.
          </div>
        </v-col>
        <v-col
          cols="12"
          md="5"
          offset-md="1"
          class=" d-sm-flex justify-space-between"
        >
          <div class="line" v-for="(item, i) in items" :key="i">
            <hr class="mb-5 mt-10" />
            <div class="text-subtitle-2 font-weight-bold">{{ item.title }}</div>
            <div class="text-subtitle-2 font-weight-thin">
              {{ item.subText }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "SingleWork3",
  data() {
    return {
      items: [
        {
          title: "Strategy",
          subText: "Brand, UX strategy"
        },
        {
          title: "Design",
          subText: "Brand, UX strategy"
        },
        {
          title: "Client",
          subText: "Brand, UX strategy"
        }
      ]
    };
  },
  computed: {
    icon() {
      return this.$vuetify.theme.dark
        ? "/images/light-back-icon.svg"
        : "/images/back-icon.svg";
    }
  }
};
</script>
