<template>
    <div class="video_wrapper">
        <div class="video_style">
            <common-video :url="videoUrl" :img='videoImg' ref='commonVideo'></common-video>
        </div>
        <el-card class="item" v-for="item in list" :key="item.id">
            <img src="../.././assets/images/video.jpg">
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
                videoImg:''
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
    }
</style>
