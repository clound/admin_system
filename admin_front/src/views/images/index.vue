<template>
  <div class="app-container">
    <sticky className="sub-navbar ">
      <el-button style="margin-left: 10px;" type="success" @click="crawelData">获取</el-button>
    </sticky>
    <el-table :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>
      
      <el-table-column width="150" align="center" label="缩略图">
        <template slot-scope="scope">
          <img :src="scope.row.url" :alt="scope.row.name" width="80" height="80"/>
        </template>
      </el-table-column>

      <el-table-column  align="center" label="标题">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>

       <el-table-column  align="center" width="100" label="查看次数" >
        <template slot-scope="scope">
          <el-tag >{{scope.row.view}}</el-tag>
        </template>
      </el-table-column>
      
      <el-table-column  width="320" align="center" label="上传日期">
        <template slot-scope="scope">
          <span>{{scope.row.date}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="200">
        <template slot-scope="scope">
          <!-- <router-link :to="'/example/edit/'+scope.row.id"> -->
            <el-button type="primary" size="small" icon="el-icon-edit"  @click="showcontent(scope.row)">查看</el-button>
          <!-- </router-link> -->
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="查看"
      :visible.sync="centerDialogVisible"
      width="50%"
      center>
      <div style="width: 100%; text-align:center;">
        <img :src="showimg" class="image">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page"
        :page-sizes="[10,20,30,50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import Sticky from '@/components/Sticky' // 粘性header组件
import { fetchCrawel, postCrawel } from '@/api/crawel'
export default {
  name: 'crawelList',
  data() {
    return {
      centerDialogVisible: false,
      list: null,
      total: 0,
      listLoading: true,
      showimg: '',
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: 'success',
        2: 'primary'
      }
      return statusMap[status]
    },
    wordFilter(status) {
      const statusMap = {
        1: '技术',
        2: '生活'
      }
      return statusMap[status]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      postCrawel(this.listQuery).then(response => {
        console.log(response)
        this.list = response.data.rows
        this.total = response.data.count
        this.listLoading = false
      })
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    showcontent(row) {
      this.centerDialogVisible = true
      this.showimg = row.url
    },
    crawelData() {
      fetchCrawel().then(response => {
        console.log(response)
      })
    }
  },
  components: {
    Sticky
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>