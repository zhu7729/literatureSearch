<template>
    <div>

    </div>
</template>

<script>
    import { examplefn1 } from '@/api/example/example';
    export default {
        name: "example",
        data () {
            return {

            }
        },
        created(){
            this.zz();
        },
        beforeDestroy () {

        },
        methods:{
            zz(){
                examplefn1().then(response => {
                    console.log(response);
                    if (response.code === 0) {
                        if (response.result) {

                        } else {

                        }
                    } else {

                    }
                }).catch((err) => {
                    console.log(err);
                })
            },
        },
    }
</script>

<style scoped lang="scss">

</style>
