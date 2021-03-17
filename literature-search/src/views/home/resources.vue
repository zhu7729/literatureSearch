<template>
    <div class="resources_wrapper">
        <el-card v-for="item in list" :key="item.id" class="item">
            <img :src="item.src">
            <div class="word">
                <span>{{item.title}}</span>
                <div>
                    <p>{{item.time}}</p>
                    <p>{{item.author}}</p>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "resources",
        data() {
            return {
                list:[
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        title:'汉堡',
                        time:'2018.06',
                        author:'大卫科波菲尔'
                    },
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        title:'汉堡',
                        time:'2018.06',
                        author:'大卫科波菲尔'
                    },
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        title:'汉堡',
                        time:'2018.06',
                        author:'大卫科波菲尔'
                    },
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        title:'汉堡',
                        time:'2018.06',
                        author:'大卫科波菲尔'
                    },
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        title:'汉堡',
                        time:'2018.06',
                        author:'大卫科波菲尔'
                    },
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        title:'汉堡',
                        time:'2018.06',
                        author:'大卫科波菲尔'
                    },
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        title:'汉堡',
                        time:'2018.06',
                        author:'大卫科波菲尔'
                    },
                    {
                        src:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        title:'汉堡',
                        time:'2018.06',
                        author:'大卫科波菲尔'
                    }
                ]
            };
        }
    }
</script>

<style scoped lang="scss">
    .resources_wrapper {
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
                    color: #409eff;
                }
            }
        }
    }
</style>
