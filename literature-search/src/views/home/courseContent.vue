<template>
    <div class="course_wrapper">
        <h3><i class="el-icon-d-arrow-right"></i>公开课程</h3>
        <el-collapse v-model="activeNames" accordion>
            <el-collapse-item v-for="item in list" :key="item.name" :title="item.title" :name="item.name" class="item">
                <div>{{item.des}}</div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: "courseContent",
        data() {
            return {
                list:[
                    {
                        name:1,
                        title:'文献检索课程',
                        des:'与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念'
                    },
                    {
                        name:2,
                        title:'课程的建设规划',
                        des:'控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作'
                    },
                    {
                        name:3,
                        title:'教学效果',
                        des:'简化流程：设计简洁直观的操作流程'
                    },
                    {
                        name:4,
                        title:'教学方法和教学手段',
                        des:'用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策'
                    },
                    {
                        name:5,
                        title:'教学条件',
                        des:'简化流程：设计简洁直观的操作流程'
                    }
                ],
                activeNames: ['1']
            };
        }
    }
</script>

<style scoped lang="scss">
    .course_wrapper {
        padding: 20px 0;
        h3 {
            font-size: 16px;
            font-weight: normal;
            text-align: left;
            padding-bottom: 20px;
            color: #409eff;
            i {
                margin-right: 5px;
            }
        }
        .el-collapse {
            ::v-deep .el-collapse-item__content {
                font-size: 14px;
                text-align: left;
                color: gray;
            }
            ::v-deep .el-collapse-item__header {
                font-size: 15px;
            }
        }
    }
</style>
