<template>
  <div class="nav">
  <el-menu theme="line" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">最新消息</el-menu-item>
  <el-menu-item index="2"><router-link to = "/test">本系介紹</router-link></el-menu-item>
  <el-submenu index="3">
    <template slot="title">本系成員</template>
    <el-menu-item index="3-1">師資</el-menu-item>
    <el-menu-item index="3-2">歷屆系主任</el-menu-item>
    <el-menu-item index="3-3">行政人員</el-menu-item>
  </el-submenu>
    <el-submenu index="4">
    <template slot="title">課程資訊</template>
    <el-menu-item index="4-1">學期課表</el-menu-item>
    <el-menu-item index="4-2">課程架構</el-menu-item>
    <el-menu-item index="4-3">必選修科目</el-menu-item>
    <el-menu-item index="4-4">代替科目</el-menu-item>
    <el-menu-item index="4-5">相關修業規定</el-menu-item>
    <el-menu-item index="4-6">學分學程</el-menu-item>
    <el-menu-item index="4-7">輔系雙學位</el-menu-item>
  </el-submenu>
  <el-submenu index="5">
    <template slot="title">招生資訊</template>
    <el-menu-item index="5-1">申請入學</el-menu-item>
    <el-menu-item index="5-2">相關問題和解答</el-menu-item>
  </el-submenu>
  <el-submenu index="6">
    <template slot="title">學術成果</template>
    <el-menu-item index="6-1">期刊討論</el-menu-item>
    <el-menu-item index="6-2">相關問題和解答</el-menu-item>
    <el-menu-item index="6-3">專書</el-menu-item>
    <el-menu-item index="6-4">專案計畫</el-menu-item>
    <el-menu-item index="6-5">最新研究</el-menu-item>
  </el-submenu>
  <el-menu-item index="7"><a href="https://www.ele.me" target="_blank">獲獎紀錄</a></el-menu-item>
  <el-submenu index="8">
    <template slot="title">實習計畫</template>
    <el-menu-item index="8-1">暑期海外實習</el-menu-item>
    <el-menu-item index="8-2">企業實習</el-menu-item>
  </el-submenu>
  <el-submenu index="9">
    <template slot="title">教卓計畫</template>
    <el-menu-item index="9-1">100學年度</el-menu-item>
    <el-menu-item index="9-2">101學年度</el-menu-item>
    <el-menu-item index="9-3">102學年度</el-menu-item>
  </el-submenu>
  <el-menu-item index="9"><a href="https://www.ele.me" target="_blank">中文</a></el-menu-item>
  <el-menu-item index="10"><a href="https://www.ele.me" target="_blank">English</a></el-menu-item>
  <el-menu-item index="11"><a href="https://www.ele.me" target="_blank">Русский</a></el-menu-item>
</el-menu>
</div>
</template>

<script>
    
</script>

<style>
    .nav{
        font-family:"Microsoft YaHei";
        position: relative;
        top:7vh;
        left: 0vh;
        width: 1460px;
    }

    .el-menu-item, .el-submenu__title{
        font-size: 18px;  
    }
</style>
