<template>
  <div class="app-container">
    <el-row>
      <el-col :span="6" v-for="(item, index) in list" :key="index" :offset="index > 0 ? 1 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.url" class="image">
          <div style="padding: 14px;">
            <span>{{item.name}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.date }}</time>
              <el-button type="text" class="button">{{item.view}}</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  data() {
    return {
      list: null
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        // console.log(response)
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

</style>
