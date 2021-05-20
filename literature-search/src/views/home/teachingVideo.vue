<template>
    <div class="video_wrapper">
        <div class="video_style">
            <common-video :url="videoUrl" :img='videoImg' ref='commonVideo'></common-video>
        </div>
        <div class="upload" @click="openDialog">上传视频</div>
        <el-card class="item" v-for="item in list" :key="item.id">
            <div class="img_wrapper">
                <img src="../.././assets/images/video.jpg">
                <div class="change_delete">
                    <div>修改</div>
                    <div>删除</div>
                </div>
            </div>
            <div class="word">
                <span>{{item.title}}</span>
                <div>
                    <p>已播放{{item.count}}次</p>
                    <p>
                        <a @click="openVideo(item.src,item.url)">
                            播放
                        </a>
                    </p>
                </div>
            </div>
        </el-card>
        <el-dialog title="上传视频" :visible.sync="dialogFormVisible">
            <el-form>
                <el-form-item label="视频名称" :label-width="formLabelWidth">
                    <el-input v-model="videoTitle" type="text" placeholder="请输入视频名称" clearable></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-upload action="" :auto-upload="true" :http-request="save" :show-file-list="false">
                    <el-button slot="trigger" type="primary">确 定</el-button>
                </el-upload>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import commonVideo from '@/components/commonVideo'
    export default {
        name: "teachingVideo",
        components: { commonVideo },
        data() {
            return {
                list:[
                    {
                        src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=874615681,808613105&fm=26&gp=0.jpg',
                        title:'狗熊',
                        count:'100',
                        url:'https://www.runoob.com/try/demo_source/movie.mp4'
                    },
                    {
                        src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1949817758,305682323&fm=26&gp=0.jpg',
                        title:'海鸥',
                        count:'100',
                        url:'http://vjs.zencdn.net/v/oceans.mp4'
                    },
                    {
                        src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=874615681,808613105&fm=26&gp=0.jpg',
                        title:'狗熊',
                        count:'100',
                        url:'https://www.runoob.com/try/demo_source/movie.mp4'
                    },
                    {
                        src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=874615681,808613105&fm=26&gp=0.jpg',
                        title:'狗熊',
                        count:'100',
                        url:'https://www.runoob.com/try/demo_source/movie.mp4'
                    },
                    {
                        src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1949817758,305682323&fm=26&gp=0.jpg',
                        title:'海鸥',
                        count:'100',
                        url:'http://vjs.zencdn.net/v/oceans.mp4'
                    }
                ],
                videoUrl:[],
                videoImg:'',
                dialogFormVisible:false,
                videoTitle:'',
                formLabelWidth:'80px'
            };
        },
        created () {
            let arr = [];
            let url = this.list[0].url;
            arr.push(url);
            this.videoUrl = arr;
            this.videoImg = this.list[0].src;
        },
        methods: {
            openVideo (src,url) {
                let arr = [];
                arr.push(url);
                this.videoUrl = arr;
                this.videoImg = src;
            },
            openDialog() {
                this.dialogFormVisible = true;
            },
            save(item) {
                //进行参数赋值this.videoTitle为视频名称 item.file为文件 通过浏览器的console可以看到
                console.log(item.file);
                console.log(this.videoTitle);

                //接口请求成功之后 刷新列表数据

                //接口请求成功之后 关闭弹窗
                this.dialogFormVisible = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    .video_wrapper {
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
                        cursor: pointer;
                        color: #409eff;
                    }
                }
            }
        }
        .video_style {
            width: 800px;
            overflow: hidden;
            margin: 0 auto;
            padding-top: 20px;
        }
        .upload {
            position: absolute;
            top: 80px;
            left: 50%;
            margin-left: 450px;
            font-size: 16px;
            color: #409eff;
            cursor: pointer;
        }
        .dialog-footer {
            .el-button {
                padding: 12px 20px;
            }
        }
    }
</style>
