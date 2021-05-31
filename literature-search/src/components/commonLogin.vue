<template>
    <el-dialog title="登录" :visible.sync="visible" :before-close="cancelModal" :close-on-click-modal="false" >
        <div>
            <el-form>
                <el-form-item>
                    <el-radio-group v-model="type">
                        <el-radio :label="1">老师</el-radio>
                        <el-radio :label="2">学生</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="用户名" :label-width="formLabelWidth">
                    <el-input v-model="name" type="text" placeholder="请输入用户名" clearable></el-input>
                </el-form-item>
                <el-form-item label="密 码" :label-width="formLabelWidth">
                    <el-input v-model="password" type="password" placeholder="请输入密码" clearable></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="save">确 定</el-button>
            </div>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: "commonLogin",
        props:{
            visible: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                name:'',
                type:2,
                password:'',
                formLabelWidth:'80px'
            };
        },
        methods:{
            save() {
                console.log(this.type);
                //接口请求成功之后调用关闭
                this.cancelModal();
            },
            //关闭弹窗
            cancelModal(){
                this.$emit('update:visible', false);
            }
        }
    }
</script>

<style scoped>

</style>
