<template>
  <div class="min-w-[1000px] min-h-[100vh] max-w-[2100px] mx-auto grid grid-rows-[auto_auto_1fr] bg-zinc-100">
    <div class="bg-[#545c64]">
      <div class="w-[1000px] mx-auto grid grid-cols-[auto_1fr]">
        <div class="h-[100%] w-[60px] bg-[url('/public/905logo.png')] bg-contain bg-center bg-no-repeat">
        </div>
        <NavMenu />
      </div>
    </div>
    <div class="bg-white">

      <UserSpaceTitle :userInfo="userInfo"/>

    </div>

    <div class="grid grid-cols-[2fr_3fr] gap-[10px] w-[1000px] h-auto mx-auto mt-[20px]">
      
      <div class="" >
        <div class="w-[100%] h-[100%] ">

        </div>
      </div>

      <div class="">
        <InfiniteScroll />
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import UserSpaceTitle from './components/UserSpaceTitle.vue';
import NavMenu from './components/NavMenu.vue';
import InfiniteScroll from './components/InfiniteScroll.vue';

export default{
    components:{
        UserSpaceTitle,
        NavMenu,
        InfiniteScroll
    },
    data() {
        return {
            userInfo: {
            username: '',
            signature: '',
            headimageFilename: '',
            titleimageFilename: ''
      }
        }
    },
    computed: {
    },
    mounted(){
        this.fetchUserInfo();
    },
    beforeDestroy(){
        
    },
    methods: {
        async fetchUserInfo(index) {
            try {
                const response = await axios.get('http://localhost:3000/data/userdata')
                
                console.log(response.data[0])
                const user = response.data[0];
                this.userInfo = {
                username: user.username,
                signature: user.user_signature,
                headimageFilename: user.user_head_image_path,
                titleimageFilename: user.user_title_image_path
                };
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>

<style>
  
</style>