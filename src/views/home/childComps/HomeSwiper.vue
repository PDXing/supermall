<template>
  <div class="home-swiper">
    <swiper class="slide">
      <swiper-item v-for="(item, id) in banners" :key="id">
        <a :href="item.link">
          <img
            class="banner-img"
            :src="item.image923"
            alt=""
            @load="imageLoad"
          />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'

export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      dafault() {
        return []
      },
    },
  },
  data() {
    return {
      isLoad: false,
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        // console.log('--------')
        this.$emit('imageLoad')
        this.isLoad = true
      }
    },
  },
}
</script>

<style>
.slide img {
  width: 100%;
}
</style>
