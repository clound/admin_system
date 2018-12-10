export const mixin = {
  filters: {
    typeFilter(status) {
      const statusMap = {
        1: 'success',
        2: 'primary'
      }
      return statusMap[status]
    },
    twordFilter(status) {
      const statusMap = {
        1: '技术',
        2: '生活'
      }
      return statusMap[status]
    },
    statusFilter(status) {
      const statusMap = {
        'true': 'success',
        'false': 'info'
      }
      return statusMap[status]
    },
    swordFilter(status) {
      const statusMap = {
        'true': '上线',
        'false': '下线'
      }
      return statusMap[status]
    }
  },
  methods: {
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.handlePage()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.handlePage()
    }
  }
}
