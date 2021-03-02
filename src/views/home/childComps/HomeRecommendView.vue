<template>
  <div class="recommend">
    <div class="r-items" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
	export default {
		name: "HomeRecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
	}
</script>

<style>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0px 20px;
    border-bottom: 10px solid #eee;
  }
  .r-items{
    flex: 1;
  }
  .r-items img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }

</style>
