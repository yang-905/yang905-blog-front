<template>
    <div class="relative  w-100%  h-[100vh]">
      
    <!-- ========= 主背景区域：径向渐变 + 动态光晕 + 网格纹理 ========= -->
    <div class="relative w-full min-h-screen flex items-center justify-center p-5 overflow-hidden">
        
        <!-- 基础深色径向渐变背景 (从中心暖紫向外扩散到深邃暗蓝) -->
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_30%,_#1e1b4b,_#020617,_#000000)]"></div>
        
        <!-- 网格纹理层 (增加质感) -->
        <div class="absolute inset-0 bg-grid-pattern opacity-40"></div>
        
        <!-- 动态光晕球1: 大范围暖紫色 (左上方) -->
        <div class="absolute top-[-10%] left-[-15%] w-[500px] h-[500px] rounded-full bg-purple-700/30 blur-[100px] animate-float-glow"></div>
        
        <!-- 动态光晕球2: 洋红/粉色 (右侧偏下) -->
        <div class="absolute bottom-[-5%] right-[-10%] w-[600px] h-[600px] rounded-full bg-fuchsia-600/20 blur-[120px] animate-float-glow-delayed"></div>
        
        <!-- 动态光晕球3: 靛蓝色 中间区域浮动 -->
        <div class="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-indigo-500/20 blur-[90px] animate-float-glow" style="animation-duration: 25s;"></div>

        <!-- 装饰性星星点 -->
        <canvas ref="starCanvas" class="absolute inset-0 w-full h-full opacity-30 pointer-events-none"></canvas>

        
        <div class="absolute bg-[rgba(255,255,255,0.1)] w-[50rem] h-[70rem] inset-0 mx-auto top-1/2 -translate-y-1/2 p-10 rounded-3xl
        shadow-md backdrop-blur-xl border border-white/20" >
            <div class="h-[100px] w-full bg-[url('/public/905logo.png')] bg-contain bg-center bg-no-repeat my-[20px]"></div>
            <el-form ref="form" :label-position="labelPosition" :model="form" label-width="40px" method="post" action="http://localhost:3000/admin" class="glass-form">
                <el-form-item label="账号">
                    <el-input v-model="form.username" placeholder="请输入账号" name="userName"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input placeholder="请输入密码" v-model="form.password" show-password name="userPwd"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" native-type="submit" @click="handleLogin" class="gradient-button">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
        

        <!-- <p>登录</p>
        <form method="post" action="http://localhost:3000/admin">
            <input type="text" name="userName">
            <input type="password" name="userPwd">
            <input type="submit" value="登录">
        </form> -->
    </div>
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      labelPosition:'top',
      form: {
        username: '',
        password: ''
      }
    };
  },
  mounted() {
    this.drawStars();
  },
  methods: {
    handleLogin() {
      // 提交逻辑，例如调用接口
      console.log(this.form);
    },
    drawStars() {
      const canvas = this.$refs.starCanvas;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      
      // 设置 canvas 实际像素尺寸（适配高分屏）
      const resizeCanvas = () => {
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        // 重新绘制星星
        this.drawStarsOnCanvas(ctx, canvas.width, canvas.height);
      };
      
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
    },
    drawStarsOnCanvas(ctx, width, height) {
      ctx.clearRect(0, 0, width, height);
      const starCount = Math.floor((width * height) / 4000); // 密度可调，约每4000像素一颗星
      
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 1.8 + 0.5; // 半径 0.5~2.3px
        const alpha = Math.random() * 0.6 + 0.2;  // 透明度 0.2~0.8
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }
    }
  }
};
</script>

<style>
/* 覆盖 Element UI 表单标签颜色 */
.glass-form .el-form-item__label {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

/* 输入框样式：半透明玻璃态 */
.glass-form .el-input__inner {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  color: white;
  height: 44px;
  line-height: 44px;
  transition: all 0.3s;
}
.glass-form .el-input__inner::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.glass-form .el-input__inner:focus {
  border-color: #a855f7;
  box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.3);
  background-color: rgba(255, 255, 255, 0.15);
}

/* 密码框右侧图标颜色 */
.glass-form .el-input__suffix {
  color: rgba(255, 255, 255, 0.6);
}

/* 长条渐变登录按钮 */
.glass-form .gradient-button {
  width: 100%;
  background: linear-gradient(90deg, #8b5cf6, #ec4899);
  border: none;
  border-radius: 0.75rem;
  height: 44px;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.glass-form .gradient-button:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
  background: linear-gradient(90deg, #7c3aed, #db2777);
}
.glass-form .gradient-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.5);
}
</style>