<template>
  <div class="dashboard-container">
     <p>{{ $t("message.hello") }}</p>
     <button @click="changelang">切换语言</button>
      <div class="dashboard-text">username:{{username}}</div>
      <div class="dashboard-text">roles:{{phone}}</div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'username',
      'phone'
    ])
  },
  methods: {
    changelang() {
      const lang = Cookies.get('lang') || 'cn'
      Cookies.set('lang', lang === 'cn' ? 'en' : 'cn')
      this.$i18n.locale = lang
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
