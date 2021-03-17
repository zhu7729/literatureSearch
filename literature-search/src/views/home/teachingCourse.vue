<template>
    <div>
        <a :href="'http://view.officeapps.live.com/op/view.aspx?src='+pathUrl">点击查看ppt</a>
    </div>
</template>

<script>
    export default {
        name: "teachingCourse",
        data() {
            return {
                pathUrl: 'http://video.ch9.ms/build/2011/slides/TOOL-532T_Sutter.pptx'
            };
        },
    }
</script>

<style scoped>

</style>
