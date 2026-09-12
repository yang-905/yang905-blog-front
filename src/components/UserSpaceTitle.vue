<template>
    <div class="h-[100px] w-full
    grid grid-cols-[auto_1fr_auto] gap-[10px]">
        
        <div class="h-[100px] w-[100px] bg-zinc-400 rounded-[50%] overflow-hidden">
            <!-- <i class="el-icon-user-solid text-[100px] text-zinc-300"></i> -->
            <div class="h-full w-full bg-cover bg-center"
            :style="{ backgroundImage: 'url(' + headimageUrl + ')' }"> </div>
        </div>
        <div class="my-auto text-black">
            <i class="text-6xl">{{userInfo.username}}</i>
            <br>
            <i>{{userInfo.signature}}</i>
        </div>
        <div class="mt-auto text-black">
            <i class="text-6xl mr-3">573</i>
            <i class="el-icon-star-on text-[7vh] text-yellow-300"></i>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        userInfo: {
        type: Object,
        default: () => ({
            username: '访客',
            signature: '暂无签名',
            headimageFilename: 'default_avatar.png',
            titleimageFilename: 'default_bg.jpg'
        })
        }
    },
    computed: {
        headimageUrl() {
            return `http://localhost:3000/imagems/take?filename=${this.userInfo.headimageFilename}`;
        }
    }
}
</script>

<style>

</style>