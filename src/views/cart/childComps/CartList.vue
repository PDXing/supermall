<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :item-info="item"
        :key="index"
      />
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import CartListItem from './CartListItem'

import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'CartList',
  components: {
    CartListItem,
    Scroll,
  },
  computed: {
    ...mapGetters(['cartList']),
  },
  activated() {
    this.$refs.scroll.refresh()
  },
}
</script>

<style scoped>
.cart-list {
  /*height: calc(100vh - 44px - 49px);*/
  position: relative;
}
.content {
  height: calc(100vh - 44px - 49px - 40px);
  overflow-y: hidden;
}
</style>
