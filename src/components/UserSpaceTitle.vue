<template>
    <div class="h-[300px] flex flex-col justify-end bg-cover bg-center"
     :style="{ backgroundImage: 'url(' + titleimageUrl + ')' }">
        <div class="h-[100px] w-[1000px] mx-auto mb-[10px]
        grid grid-cols-[auto_1fr_auto] gap-[10px]">
            
            <div class="h-[100px] w-[100px] bg-zinc-400 rounded-[50%] overflow-hidden">
                <!-- <i class="el-icon-user-solid text-[100px] text-zinc-300"></i> -->
                <div class="h-full w-full bg-cover bg-center"
                :style="{ backgroundImage: 'url(' + headimageUrl + ')' }"> </div>
            </div>
            <div class="my-auto text-white">
                <i class="text-6xl">admin</i>
                <br>
                <i>个人签名</i>
            </div>
            <div class="mt-auto">
                <i class="text-6xl mr-3">573</i>
                <i class="el-icon-star-on text-[7vh] text-yellow-300"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
      titleimageUrl: 'http://localhost:3000/imagems/take?filename=1781189398383-blog.jpg',
      headimageUrl: 'http://localhost:3000/imagems/take?filename=1781190003212-blog.png'
    }
  }
}
</script>

<style>

</style>