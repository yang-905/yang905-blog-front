<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <li v-for="(itme, idx) in count" :key="itme" class="list-item">
        <div class="aspect-4/1 bg-[#fff] mb-[10px]">
            {{ itme }}
            <div>
                <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                @click="fetchData(idx)"
                >
                请求数据
                </button>
                <p :id="`title-${idx}`"></p>
                <p :id="`summary-${idx}`"></p>
                <p :id="`content-${idx}`"></p>
            </div>
        </div>
      </li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data () {
      return {
        count: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      async fetchData(index) {
        try {
        const response = await axios.get('http://localhost:3000/posts')
        console.log(response.data[0])
        document.getElementById(`title-${index}`).innerHTML = response.data[0].title;
        document.getElementById(`summary-${index}`).innerHTML = response.data[0].summary;
        document.getElementById(`content-${index}`).innerHTML = response.data[0].content;
    
        } catch (error) {
        console.error(error)
        }
      },

      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      }
    }
  }
</script>

<style>

</style>