<template>
    <div class = "goindex">
        <ul>
            <li span class= "test"><router-link to = "/">回首頁 | </router-link></li>
            <li><a href="">淡江大學 | </a></li>
            <li><a href="">網站地圖 | </a></li>
        </ul>
    </div>

</template>
<script>
export default {
  
}
</script>
<style>

    ul li{
        display:inline;
    }
    
    .goindex{
        position:absolute;
        right:22vh;
        top:-1vh;
    }
    .goindex ul li a{
        font-size: 15px;
        font-family:"Microsoft YaHei";
        color: #000000;
    }
</style>
