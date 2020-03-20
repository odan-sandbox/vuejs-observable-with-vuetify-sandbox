<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-btn @click="click">click me</v-btn>
    </v-flex>
    <v-snackbar :value="hasError" color="error">
      {{ message }}
    </v-snackbar>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    hasError() {
      return this.$error.hasError
    },
    message() {
      return this.$error.message
    }
  },
  methods: {
    click() {
      throw new Error('error!')
    }
  }
})
</script>
