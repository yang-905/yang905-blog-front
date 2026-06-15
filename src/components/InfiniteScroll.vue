<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
      <!-- 遍历 posts 数组，动态渲染每篇帖子的标题、摘要、正文 -->
      <li v-for="post in posts" :key="post.id" class="list-item">
        <div class="aspect-4/1 bg-[#fff] mb-[10px] p-[10px]">
            <div>
              <h3>{{ post.title }}</h3>
                <p>{{ post.summary }}</p>
                <p>{{ post.content }}</p> 
                <p>{{ post.release_time }}</p>
                <p>{{ post.username }}</p>
                
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
    data() {
        return {
        posts: [],        // 存储从数据库加载的所有帖子（动态累积）
        currentPage: 1,  // 当前要请求的页码，每次加载成功后递增
        pageSize: 10,    // 每页加载的帖子数量，与后端分页参数对应
        loading: false,  // 是否正在请求中，用于防止重复加载和显示加载提示
        hasMore: true,   // 是否还有更多数据，当某次返回的数据少于 pageSize 时设为 false
        error: null,     // 记录错误信息，用于界面提示
        noMore: false,
        };
    },
    computed: {
        // 无限滚动指令的禁用条件：正在加载 或 没有更多数据
        disabled() {
        return this.loading || !this.hasMore;
        },
    },
    mounted() {
        // 组件挂载后立即加载第一页数据
        this.load();
    },
    methods: {
        // 加载帖子数据（分页获取，通过无限滚动触发）
        async load() {
            // 如果已在加载或没有更多数据，则直接返回，避免无效请求
            if (this.disabled) return;
            
            // 开始加载：设置 loading 状态，清除旧错误
            this.loading = true;
            this.error = null;
            
            try {
                // 请求后端接口，传递分页参数（当前页码 + 每页条数）
                // 后端需支持 _page 和 _limit 参数，例如 json-server
                const response = await axios.get('http://localhost:3000/data/posts', {
                params: { _page: this.currentPage, _limit: this.pageSize },
                });
                
                const newPosts = response.data;
                
                // 如果返回了帖子数据
                if (newPosts && newPosts.length) {
                // 将新数据追加到已有帖子列表（保留之前的全部帖子）
                this.posts = [...this.posts, ...newPosts];
                
                // 如果返回数量小于请求数量，说明已无更多数据
                if (newPosts.length < this.pageSize) this.hasMore = false;
                
                // 页码 +1，为下次加载下一页做准备
                this.currentPage++;
                } else {
                // 没有返回数据，同样标记无更多
                this.hasMore = false;
                }
            } catch (err) {
                // 请求失败时记录错误，并停止后续加载
                this.error = '加载失败';
                this.hasMore = false;
            } finally {
                // 无论成功或失败，结束 loading 状态
                this.loading = false;
            }
        },
    },
};
</script>

<style>

</style>