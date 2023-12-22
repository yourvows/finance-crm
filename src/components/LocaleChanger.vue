<template>
  <div class="locale-changer" style="z-index: 99">
    <v-menu location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          color="primary" dark>
          Dropdown
        </v-btn>
      </template>
      
      <v-list>
        <v-list-item
          v-for="(locale, index) in locales"
          :key="index"
          @click="changeLocale(locale.lang)"
        >
          <v-list-item-title>{{ locale.lang }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'LocaleChanger',
  data() {
    return {
      locales: [
        {lang: 'uz'},
        {lang: 'ru'}
      ]
    }
  },
  methods: {
    changeLocale(lang) {
      this.$i18n.locale = lang;
    }
  }
}
</script>
