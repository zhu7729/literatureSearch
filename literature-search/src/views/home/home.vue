<template>
    <div>
        <div class="header">
            <p>文献检索课程</p>
        </div>
        <div class="main">
            <div class="main_left">
                <div class="main_left_top">
                    <el-card>
                        <div slot="header">
                            <span>教学队伍</span>
                        </div>
                        <div v-for="item in listTeam" :key="item.id" class="item">
                            {{item.value}}
                        </div>
                    </el-card>
                </div>
                <div class="main_left_bottom">
                    <div class="small_card">
                        <el-card>
                            <div slot="header">
                                <span>教学视频</span>
                            </div>
                            <div v-for="item in listVideo" :key="item.id" class="item">
                                {{item.value}}
                            </div>
                        </el-card>
                    </div>
                    <div class="small_card">
                        <el-card>
                            <div slot="header">
                                <span>课程评价</span>
                            </div>
                            <div v-for="item in listAssess" :key="item.id" class="item">
                                {{item.value}}
                            </div>
                        </el-card>
                    </div>
                </div>
            </div>
            <div class="main_right">
                <div class="main_right_top">
                    <div class="small_card">
                        <el-card shadow="never">
                            <div slot="header">
                                <span>课程内容</span>
                            </div>
                            <div v-for="item in listCourse" :key="item.id" class="item">
                                > {{item.value}}
                            </div>
                        </el-card>
                    </div>
                    <div class="small_card">
                        <el-card shadow="never">
                            <div slot="header">
                                <span>参考资料</span>
                            </div>
                            <div v-for="item in listMeans" :key="item.id" class="item">
                                > {{item.value}}
                            </div>
                        </el-card>
                    </div>
                </div>
                <div class="main_right_bottom">
                    <div class="small_card">
                        <el-card shadow="never">
                            <div slot="header">
                                <span>教学课件</span>
                            </div>
                            <div v-for="item in listCourseware" :key="item.id" class="item">
                                > {{item.value}}
                            </div>
                        </el-card>
                    </div>
                    <div class="small_card">
                        <el-card shadow="never">
                            <div slot="header">
                                <span>学生作业</span>
                            </div>
                            <div v-for="item in listWork" :key="item.id" class="item">
                                > {{item.value}}
                            </div>
                        </el-card>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="title">
                <img src="../.././assets/images/img.png" alt="">
                <p>热门栏目</p>
            </div>
            <ul>
                <li>review</li>
                <li>申请表格</li>
                <li>课程教学录像教学要点</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                listTeam:[
                    {
                        id:1,
                        value:'教学队伍情况教学队伍情况教学队伍情况教学队伍情况教学队伍情况教学队伍情况'
                    },
                    {
                        id:2,
                        value:'课程负责人'
                    },
                    {
                        id:3,
                        value:'主讲教师'
                    },
                    {
                        id:4,
                        value:'主讲教师'
                    },{
                        id:5,
                        value:'主讲教师'
                    }
                ],
                listVideo:[
                    {
                        id:1,
                        value:'视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频视频'
                    },
                    {
                        id:2,
                        value:'视频'
                    },
                    {
                        id:3,
                        value:'视频'
                    },
                ],
                listAssess:[
                    {
                        id:1,
                        value:'自我评价'
                    },
                    {
                        id:2,
                        value:'学生评价'
                    },
                    {
                        id:3,
                        value:'同事评价'
                    },
                ],
                listCourse:[
                    {
                        id:1,
                        value:'文献检索课程'
                    },
                    {
                        id:2,
                        value:'课程的建设规划'
                    },
                    {
                        id:3,
                        value:'教学效果'
                    },
                    {
                        id:4,
                        value:'教学方法和教学手段'
                    },{
                        id:5,
                        value:'教学条件'
                    }
                ],
                listMeans:[
                    {
                        id:1,
                        value:'文献检索课程文献检索课程文献检索课程文献检索课程'
                    },
                    {
                        id:2,
                        value:'课程的建设规划'
                    },
                    {
                        id:3,
                        value:'教学效果'
                    },
                    {
                        id:4,
                        value:'教学方法和教学手段'
                    },{
                        id:5,
                        value:'教学条件'
                    }
                ],
                listCourseware:[
                    {
                        id:1,
                        value:'文献检索课程文献检索课程文献检索课程文献检索课程文献检索课程'
                    },
                    {
                        id:2,
                        value:'课程的建设规划'
                    },
                    {
                        id:3,
                        value:'教学效果'
                    },
                    {
                        id:4,
                        value:'教学方法和教学手段'
                    },{
                        id:5,
                        value:'教学条件'
                    }
                ],
                listWork:[
                    {
                        id:1,
                        value:'文献检索课程'
                    },
                    {
                        id:2,
                        value:'课程的建设规划'
                    },
                    {
                        id:3,
                        value:'教学效果'
                    },
                    {
                        id:4,
                        value:'教学方法和教学手段'
                    },{
                        id:5,
                        value:'教学条件'
                    }
                ],
            };
        },
        methods: {

        }
    }
</script>

<style scoped lang="scss">
    .header {
        background-image: url("../.././assets/images/bgc.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding: 100px 0;
        p {
            font-size: 30px;
            text-align: center;
            line-height: 30px;
            color: white;
        }
    }
    .main {
        overflow: hidden;
        padding-bottom: 20px;
        .main_left {
            float: left;
            width: 590px;
            .main_left_top {
                padding-left: 10px;
                padding-top: 20px;
                text-align: left;
                .item {
                    margin-bottom: 18px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            .main_left_bottom {
                padding-left: 10px;
                padding-top: 20px;
                text-align: left;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .small_card {
                    float: left;
                    width: 280px;
                    .item {
                        margin-bottom: 18px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
        .main_right {
            float: right;
            width: 590px;
            >div {
                padding-right: 10px;
                padding-top: 10px;
                text-align: left;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .small_card {
                    float: left;
                    width: 280px;
                    .el-card {
                        border: none;
                        ::v-deep .el-card__body {
                            border-left: 1px solid #EBEEF5;
                            padding-top: 10px;
                            padding-bottom: 10px;
                        }
                        ::v-deep .el-card__header {
                            border: none;
                            padding: 10px 30px 10px 0;
                            >div {
                                padding: 8px 0;
                                span {
                                    padding: 8px 20px;
                                    border: 1px solid #EBEEF5;
                                }
                            }
                        }
                    }
                    .item {
                        margin-bottom: 18px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
            .main_right_top {

            }
            .main_right_bottom {
                padding-top: 20px;
            }
        }
    }
    .footer {
        padding-bottom: 20px;
        text-align: left;
        .title {
            box-sizing: border-box;
            width: 100%;
            line-height: 40px;
            border-radius: 5px;
            border: 1px solid #EBEEF5;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            img {
                width: 30px;
                padding-left: 10px;
                padding-right: 10px;
            }
        }
        ul {
            li{
                padding-left: 10px;
                line-height: 30px;
            }
        }
    }
</style>
