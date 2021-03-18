<template>
   <div class="content">
       <Menu></Menu>
       <el-container class="main">

           <el-main>
<!--               <keep-alive>-->
               <router-view></router-view>
<!--               </keep-alive>-->
           </el-main>

       </el-container>
   </div>
</template>

<script>
    import Menu from '@/components/Menu'
    export default {
        name: "Layout",
        components: { Menu },
        data(){
            return{

            }
        },
        created(){

        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
    .content {
        min-height: 100vh;
        font-size: 15px;
        color: #333333;
        .main {
            width: 1200px;
            margin: 0 auto;
        }
    }
</style>
