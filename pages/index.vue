<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-btn @click="click">click me</v-btn>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    click() {
      throw new Error('error!')
    }
  }
})
</script>
