<template>
   <div>
       <Menu></Menu>
       <el-container>
           <el-header></el-header>
           <el-main>
<!--               <keep-alive>-->
               <router-view></router-view>
<!--               </keep-alive>-->
           </el-main>
           <el-footer></el-footer>
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

<style lang="scss">

</style>
