<template>
    <div>
        <el-menu
                :default-active="activeIndex"
                mode="horizontal"
                background-color="#8E1E20"
                text-color="#fff"
                active-text-color="#ffd04b"
                :unique-opened="true"
                router>
            <el-menu-item index="/home">首页</el-menu-item>
            <el-menu-item index="/teachingVideo">教学视频</el-menu-item>
            <el-menu-item index="/courseContent">课程内容</el-menu-item>
            <el-menu-item index="/resources">参考资料</el-menu-item>
            <el-menu-item index="/teachingCourse">教学课件</el-menu-item>
            <el-menu-item index="/studentTask">学生作业</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        data() {
            return {
                activeIndex: '/home',
            };
        },
    }
</script>

<style scoped>
    .el-menu-item {
        font-size: 15px;
    }
</style>
