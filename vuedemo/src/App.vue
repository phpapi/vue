<template>
  <div>
    <router-view class="view" keep-alive transition transition-model="out-in">
    </router-view>
  </div>
</template>

<script>
export default {
  comments: {}
}
</script>

<style lang="scss">
@import "./style/style";
</style>
