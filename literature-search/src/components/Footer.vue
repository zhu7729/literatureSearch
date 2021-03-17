<template>
    <div>
        <div class="footer">
            <div class="title">
                <img src=".././assets/images/img.png" alt="">
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
        name: "Footer"
    }
</script>

<style scoped lang="scss">
    .footer {
        padding-bottom: 20px;
        text-align: left;
        .title {
            background-color: #8E1E20;
            width: 100%;
            line-height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            color: white;
            img {
                width: 30px;
                padding-left: 10px;
                padding-right: 10px;
            }
        }
        ul {
            width: 1200px;
            margin: 0 auto;
            li{
                padding-left: 10px;
                line-height: 30px;
            }
        }
    }
</style>
