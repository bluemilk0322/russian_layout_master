<template>
  <div class="Second">
  <el-menu theme="line" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">中文版</el-menu-item>
  <el-menu-item index="2">英文版</el-menu-item>
  <el-menu-item index="3">俄文版</el-menu-item>
</el-menu>
</div>
</template>

<script>
    
</script>

<style>
    .Second{
        font-family:"Microsoft YaHei";
        position: fixed;
        top:57.1vh;
        left: 67vh;
        
    }

    .el-menu-item, .el-submenu__title{
        font-size: 18px;  
    }
</style>
