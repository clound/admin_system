<template>
  <div class="app-container">

    <el-table :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="User">
        <template slot-scope="scope">
          <span>{{scope.row.user.name}}</span>
        </template>
      </el-table-column>

      <el-table-column width="320px" align="center" label="title">
        <template slot-scope="scope">
          <span>{{scope.row.title}}</span>
        </template>
      </el-table-column>

       <el-table-column class-name="status-col" align="center"  label="Status" width="110">
        <template slot-scope="scope">
          <el-tag :type="scope.row.type | statusFilter">{{scope.row.type | wordFilter}}</el-tag>
        </template>
      </el-table-column>
      
      <el-table-column  align="center" label="description">
        <template slot-scope="scope">
          <span>{{scope.row.description}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="120">
        <template slot-scope="scope">
          <!-- <router-link :to="'/example/edit/'+scope.row.id"> -->
            <el-button type="primary" size="small" icon="el-icon-edit"  @click="showcontent(scope.row)">Edit</el-button>
          <!-- </router-link> -->
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="内容"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span v-html="morecontent"></span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page"
        :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div> -->

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getList } from '@/api/article'
export default {
  data() {
    return {
      centerDialogVisible: false,
      list: null,
      total: 0,
      listLoading: true,
      morecontent: '',
      listQuery: {
        page: 1,
        limit: 10,
        username: ''
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
  computed: {
    ...mapGetters([
      'username'
    ])
  },
  created() {
    this._getList()
  },
  methods: {
    _getList() {
      this.listLoading = true
      // console.log(this.listQuery)
      this.listQuery.username = this.username
      getList(this.listQuery).then(response => {
        console.log(response)
        this.list = response.data && response.data.rows
        this.total = response.data && response.data.total
        this.listLoading = false
      })
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this._getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this._getList()
    },
    showcontent(row) {
      const str = new Buffer(row.content)
      this.centerDialogVisible = true
      this.morecontent = str.toString()
    }
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