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
            In this project, annotators would be helping us identify images with
            pneumonia symptoms from the x-ray images for easier identification
            aiding precision medicine for healthcare practitioners
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <div class="text-h5 text-sm-h3">
            AI and 2D Medical<br />
            Imaging
          </div>
          <!-- <div class="text-body-1 mt-2">
            Artificial Intelligence has been infused into this sector of
            healthcare and has increased <b>accuracy</b> and
            <b>precision</b> medicine. It is also cost effective, faster,
            efficiency and...
          </div> -->
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
  name: "SingleWork2",
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
