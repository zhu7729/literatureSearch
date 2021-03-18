<template>
    <div class="task_wrapper">
        <vue-waterfall-easy :imgsArr="imgArr" @scrollReachBottom="getData" ref="waterfall" @click="clickFn" :maxCols="3" :imgWidth="350">
            <div class="img-info" slot-scope="props">
                <p class="some-info">{{props.value.info}}</p>
                <p class="some-info">{{props.value.info}}</p>
                <p class="some-info">{{props.value.info}}</p>
            </div>
        </vue-waterfall-easy>
    </div>
</template>

<script>
    import vueWaterfallEasy from 'vue-waterfall-easy'
    export default {
        name: "studentTask",
        components: {
            vueWaterfallEasy
        },
        data() {
            return {
                imgArr: [
                    {
                        src:'',
                        href:'',
                        info:'作业1号'
                    },
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        href:'',
                        info:'作业2号'
                    },
                    {
                        src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=874615681,808613105&fm=26&gp=0.jpg',
                        href:'',
                        info:'作业3号'
                    },
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        href:'',
                        info:'作业4号'
                    },
                    {
                        src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1949817758,305682323&fm=26&gp=0.jpg',
                        href:'',
                        info:'作业5号'
                    },
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        href:'',
                        info:'作业6号'
                    },
                    {
                        src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1949817758,305682323&fm=26&gp=0.jpg',
                        href:'',
                        info:'作业7号'
                    }
                ]
            }
        },
        methods: {
            getData() {
                this.$refs.waterfall.waterfallOver();
            },
            clickFn(event, { index, value }) {
                // 阻止a标签跳转
                event.preventDefault();
            }
        },
    }
</script>

<style scoped lang="scss">
    .task_wrapper {
        height: 100vh;
        .some-info {
            color: #333333;
        }
        ::v-deep .vue-waterfall-easy-container {
            font-size: 15px;
            line-height: 30px;
            ::-webkit-scrollbar {display:none}
        }
    }
</style>
