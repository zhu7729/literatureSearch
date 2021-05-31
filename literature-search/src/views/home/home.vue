<template>
    <div>
        <div class="login_style">
            <div @click="login">登录</div>
            <div @click="logout">退出</div>
        </div>
        <div class="header">
            <p>文献检索课程</p>
        </div>
        <div class="main">
            <div class="main_left">
                <div class="main_left_top">
                    <el-card>
                        <div slot="header">
                            <span>课程内容</span>
                        </div>
                        <div v-for="item in listCourse" :key="item.id" class="item">
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
                                <span>教学课件</span>
                            </div>
                            <div v-for="item in listCourseware" :key="item.id" class="item">
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
        <Footer></Footer>
        <common-login v-if="DialogVisible" :visible.sync="DialogVisible"></common-login>
    </div>
</template>

<script>
    import commonLogin from '@/components/commonLogin'
    import Footer from '@/components/Footer'
    export default {
        name: "home",
        components: { Footer,commonLogin },
        data() {
            return {
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
                    {
                        id:4,
                        value:'视频'
                    },
                    {
                        id:5,
                        value:'视频'
                    }
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
                    },
                    {
                        id:5,
                        value:'教学条件'
                    },
                    {
                        id:6,
                        value:'文献检索课程文献检索课程文献检索课程文献检索课程文献检索课程'
                    },
                    {
                        id:7,
                        value:'课程的建设规划'
                    },
                    {
                        id:8,
                        value:'教学效果'
                    },
                    {
                        id:9,
                        value:'教学方法和教学手段'
                    },
                    {
                        id:10,
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
                    },
                    {
                        id:5,
                        value:'教学条件'
                    }
                ],
                listWork:[
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
                    },
                    {
                        id:5,
                        value:'教学条件'
                    },
                    {
                        id:6,
                        value:'文献检索课程'
                    },
                    {
                        id:7,
                        value:'课程的建设规划'
                    },
                    {
                        id:8,
                        value:'教学效果'
                    },
                    {
                        id:9,
                        value:'教学方法和教学手段'
                    },
                    {
                        id:10,
                        value:'教学条件'
                    }
                ],
                DialogVisible:false
            };
        },
        methods: {
            login() {
                this.DialogVisible = true;
            },
            logout() {

            }
        }
    }
</script>

<style scoped lang="scss">
    .login_style {
        position: absolute;
        top: 21px;
        right: 20px;
        z-index: 2;
        overflow: hidden;
        div {
            color: white;
            cursor: pointer;
            float: left;
            font-size: 15px;
            margin-left: 15px;
        }
    }
    .header {
        background-image: url("../.././assets/images/bgc.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding: 120px 0;
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
                .el-card {
                    ::v-deep .el-card__body {

                    }
                    ::v-deep .el-card__header {
                        border-bottom: 1px solid #8E1E20;
                        padding-left: 0;
                        padding-right: 0;
                        margin: 0 20px;
                    }
                }
                .item {
                    margin-bottom: 18px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .item:nth-last-of-type(1) {
                    margin-bottom: 0;
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
                    .el-card {
                        ::v-deep .el-card__body {

                        }
                        ::v-deep .el-card__header {
                            border-bottom: 1px solid #8E1E20;
                            padding-left: 0;
                            padding-right: 0;
                            margin: 0 20px;
                        }
                    }
                    .item:nth-last-of-type(1) {
                        margin-bottom: 0;
                    }
                }
            }
        }
        .main_right {
            float: right;
            width: 590px;
            overflow: hidden;
            >div {
                padding-right: 10px;
                padding-top: 20px;
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
                            border-left: 1px solid #8E1E20;
                            padding-top: 25px;
                            padding-bottom: 25px;
                        }
                        ::v-deep .el-card__header {
                            border: none;
                            padding: 10px 30px 10px 0;
                            >div {
                                padding: 19px 0;
                                span {
                                    padding: 19px 50px;
                                    border: 1px solid #8E1E20;
                                    background-color: #8E1E20;
                                    color: white;
                                }
                            }
                        }
                    }
                    .item {
                        margin-bottom: 25px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .item:nth-last-of-type(1) {
                        margin-bottom: 0;
                    }
                }
            }
            .main_right_top {
                float: left;
            }
            .main_right_bottom {
                float: right;
            }
        }
    }
</style>
