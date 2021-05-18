<template>
    <div class="course_wrapper">
        <el-card class="item" v-for="item in list" :key="item.id">
            <div class="img_wrapper">
                <img src="../.././assets/images/ppt.jpg">
                <div class="change_delete">
                    <div>修改</div>
                    <div>删除</div>
                </div>
            </div>
            <div class="word">
                <span>{{item.title}}</span>
                <div>
                    <p>已查看{{item.count}}次</p>
                    <p>
                        <a :href="'http://view.officeapps.live.com/op/view.aspx?src='+item.url">
                            查看
                        </a>
                    </p>
                </div>
            </div>
        </el-card>
        <div class="upload">上传课件</div>
    </div>
</template>

<script>
    export default {
        name: "teachingCourse",
        data() {
            return {
                list:[
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        title:'汉堡',
                        count:'100',
                        url:'http://video.ch9.ms/build/2011/slides/TOOL-532T_Sutter.pptx'
                    },
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        title:'汉堡',
                        count:'100',
                        url:'http://video.ch9.ms/build/2011/slides/TOOL-532T_Sutter.pptx'
                    },
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        title:'汉堡',
                        count:'100',
                        url:'http://video.ch9.ms/build/2011/slides/TOOL-532T_Sutter.pptx'
                    },
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        title:'汉堡',
                        count:'100',
                        url:'http://video.ch9.ms/build/2011/slides/TOOL-532T_Sutter.pptx'
                    },
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        title:'汉堡',
                        count:'100',
                        url:'http://video.ch9.ms/build/2011/slides/TOOL-532T_Sutter.pptx'
                    },
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        title:'汉堡',
                        count:'100',
                        url:'http://video.ch9.ms/build/2011/slides/TOOL-532T_Sutter.pptx'
                    },
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        title:'汉堡',
                        count:'100',
                        url:'http://video.ch9.ms/build/2011/slides/TOOL-532T_Sutter.pptx'
                    },
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        title:'汉堡',
                        count:'100',
                        url:'http://video.ch9.ms/build/2011/slides/TOOL-532T_Sutter.pptx'
                    }
                ]
            };
        },
    }
</script>

<style scoped lang="scss">
    .course_wrapper {
        overflow: hidden;
        .item {
            width: 220px;
            float: left;
            margin-right: 25px;
            box-sizing: border-box;
            margin-top: 25px;
            img {
                width: 178px;
                height: 178px;
            }
            .img_wrapper {
                position: relative;
                .change_delete {
                    display: none;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 9;
                    background-color: rgba(0,0,0,0.5);
                    color:#409eff;
                    width: 178px;
                    height: 178px;
                    font-size: 16px;
                    line-height: 30px;
                    overflow: hidden;
                    box-sizing: border-box;
                    padding: 70px 30px;
                    >div {
                        float: left;
                        width: 59px;
                        text-align: center;
                        cursor: pointer;
                    }
                }
                &:hover {
                    .change_delete {
                        display: block;
                    }
                }
            }
        }
        .item:nth-of-type(5n) {
            margin-right: 0;
        }
        .item:nth-of-type(1) {
            margin-right: 25px;
        }
        .item:nth-last-of-type(1) {
            margin-bottom: 25px;
        }
        .word {
            >span {
                display: block;
                line-height: 30px;
                font-size: 16px;
                text-align: left;
            }
            >div {
                font-size: 14px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                >p:nth-of-type(1) {
                    color: gray;
                }
                >p:nth-of-type(2) {
                    a {
                        color: #409eff;
                    }
                }
            }
        }
        .upload {
            position: absolute;
            top: 90px;
            left: 50%;
            margin-left: 650px;
            font-size: 16px;
            color: #409eff;
            cursor: pointer;
        }
    }
</style>
