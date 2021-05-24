<!-- 上传 -->
<template>
  <div>
    <div class="upone">
      <el-upload
        class="avatar-uploader"
        action="http://localhost:3000/api/upload"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :on-remove="handleRemove"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <p>{{imgName}}</p>
    </div>
  </div>
</template>

<script>
import { getImg } from '@/api/upload'
export default {
  name:'upload',
  data () {
    return {
      imageUrl: '',
      imgName:''
    };
  },

  components: {},

  computed: {},
  created(){
    this.getImg()
  },
  mounted(){},

  methods: {
    async getImg(){
      let imgdata = await getImg()
      this.imgName=imgdata.data.filename
      this.imageUrl=imgdata.data.imgUrl
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.imgName=file.response.filename;
      this.$message({
          message: '上传成功',
          type: 'success'
        })
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}

</script>
<style lang='scss' scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>