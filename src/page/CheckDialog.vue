<template>
  <el-dialog
    top="10vh"
    :model-value="true"
    custom-class="check-dialog"
    :title="config.title"
    :width="config.width"
    destroy-on-close
    v-if="!willClose"
    :close-on-click-modal="false"
    @close="close"
    append-to-body
  >
    <div class="check-body" @click="goClick">111</div>
    <div class="footer erp-flex erp-align erp-justify">
      <div class="button gray" @click="close" style="margin-right: 20px">
        {{ config.mainText }}
      </div>
      <div class="button blue" @click="save">{{ config.secondText }}</div>
    </div>
  </el-dialog>
</template>

<script>
import _ from "lodash";
import { ref } from "vue";

export default {
  name: "CheckDialog",
  props: {
    initData: {
      type: Object,
      required: true,
    },
    api: {
      type: Function,
      required: true,
    },
    remove: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      resove: null,
      centerDialogVisible: true,
      tableData: [],
      pageInfo: {
        PageSize: 20,
        PageIndex: 1,
        Total: 0,
      },
      willClose: false,
      config: {
        title: "",
        subtitle: "",
        mainText: "返回修改",
        secondText: "跳过并发布",
        tableData: [],
        keyword: "标题",
        width: "800px",
      },
    };
  },
  methods: {
    goClick() {
      this.resove("哈哈哈哈");
    },
    save() {
      const r = this.api();
      if (r instanceof Promise) {
        r.then(this.close);
      } else {
        this.close();
      }
    },
    close() {
      this.$emit("input", false);
      this.$nextTick(() => {
        // this.$destroy();
        this.remove();
        this.willClose = true;
      });
    },
  },
  created() {
    Object.assign(this.config, this.initData);
    const p = new Promise((r, j) => {
      this.resove = r;
    });
    p.then((r) => {
      console.log(r);
    });
  },
};
</script>


<style lang="scss">
.dialog {
  position: fixed;
  left: 50%;
  top: 0;
}
.check-body {
  padding: 20px 30px;
}
.footer {
  height: 82px;
  border-top: 1px solid #f0f0f0;
}
</style>
<style lang="scss">
.check-dialog {
  .el-dialog__header {
    height: 63px;
    line-height: 63px;
    padding: 0 30px;
    border-bottom: 1px solid #e6e6e6;
    .el-dialog__title {
      font-size: 14px;
      color: #333;
    }
  }
  .el-dialog__headerbtn {
    top: 3px;
  }
  .el-dialog__body {
    padding: 0;
  }
}

.check-table {
  .el-table__header-wrapper th,
  .el-table__header-wrapper tr {
    background: #f5f7fa;
  }
  th {
    color: #1a1a1a;
    font-size: 14px;
  }
  td {
    color: #1a1a1a;
    font-size: 12px;
  }
  tr {
  }
}
</style>