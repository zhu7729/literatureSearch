<template>
    <div class="commonVideo">
        <video-player  class="video-player vjs-custom-skin"
                       ref="videoPlayer"
                       :playsinline="true"
                       :options="playerOptions">
        </video-player>
    </div>
</template>

<script>
    export default {
        name: "commonVideo",
        props:{
            url: {
                type: Array,
                default:function(){
                    return []
                }
            },
            img: {
                type: String,
                default: ''
            }
        },
        data (){
            return{
                // 视频播放
                playerOptions : {
                    playbackRates: [0.5, 1.0, 2.0, 4.0, 8.0, 16.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        src: '',  // 路径
                        type: 'video/mp4'  // 类型
                    }],
                    poster: "", //你的封面地址
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true  //全屏按钮
                    }
                }
            }
        },
        watch: {
            url: {
                handler (url) {
                    this.dealFormat(url);
                },
                immediate: true
            }
        },
        methods: {
            dealFormat(url) {
                let _img = this.img;
                let _url = url;
                let srcArr = [];
                let obj = {
                    type: 'video/mp4',
                    src: ''
                };
                _url.forEach(item => {
                    obj.src = item;
                    srcArr.push(obj);
                });
                this.playerOptions.sources = srcArr;
                this.playerOptions.poster = _img;
            }
        }
    }
</script>

<style scoped lang="scss">
    .commonVideo {
        ::v-deep .video-js {
            .vjs-big-play-button {
                outline: none;
                border: 1px solid #fff;
                width: 2em;
                height: 2em;
                line-height: 2em;
                border-radius: 50%;
                top: 50%;
                left: 50%;
                margin-top: -1em;
                margin-left: -1em;
            }
        }
    }
</style>
