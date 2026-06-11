<template>
  <div class="min-w-[1000px] max-w-[2100px] mx-auto grid grid-rows-[auto_auto_1fr] bg-zinc-100">
    <div class="bg-[#545c64]">
      <div class="w-[1000px] mx-auto grid grid-cols-[auto_1fr]">
        <div class="h-[100%] w-[60px] bg-[url('/public/905logo.png')] bg-contain bg-center bg-no-repeat">
        </div>
        <NavMenu />
      </div>
    </div>
    <div class="bg-white">

      <UserSpaceTitle />

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

const fetchData = async()=>{
  try {
    const response = await axios.get('http://localhost:3000/posts')
    console.log(response.data[0])
    document.getElementById('title').innerHTML = response.data[0].title;
    document.getElementById('summary').innerHTML = response.data[0].summary;
    document.getElementById('content').innerHTML = response.data[0].content;

  } catch (error) {
    console.error(error)
  }
}

export default{
    components:{
        UserSpaceTitle,
        NavMenu,
        InfiniteScroll
    },
    data() {
        return {
        }
    },
    computed: {
    },
    mounted(){
        
    },
    beforeDestroy(){
        
    }
}
</script>

<style>
  
</style>