<template>
  <el-button @click="myClick">哈哈哈</el-button>
  <el-button @click="myClick2">出来一个弹框</el-button>
  <p v-for="(item, index) in tableData" :key="index">{{ item }}</p>
  <my></my>
  <log v-model:value="it" placeholder="Please input" clearable>
    <i class="el-icon-edit el-input__icon" slot="suffix">么么 </i>
  </log>
  <div
    style="width: 300px; height: 2000px; background: yellow"
    v-loading="loading"
  ></div>
</template>

<script lang='tsx'>
import { defineComponent, reactive, toRefs, ref, onMounted, watch } from "vue";
import { createApp } from "vue";
import { mapMutations, mapState } from "vuex";
import log from "./log.vue";

import my from "./my";
import { opeUseModelDialog } from "./dialog";
export default defineComponent({
  name: "a",
  props: {},
  setup(props, content) {
    //toRefs//创建props里面的响应式应用
    //toRef props里面有个属性可能没有
    // const table: number[] = [1, 2, 3];
    let tableData: any = ref([]);
    const tableData2: any = ref("");
    const loadList = () => {
      window.setTimeout(() => {
        tableData.value = [1, 2, 3];
      }, 1000);
    };
    const myClick = () => {
      // this.setLoading(!this.loading);
      tableData.value = [4, 5, 6, 7];
      tableData2.value = "哈哈";
    };
    onMounted(() => {
      loadList();
    });
    watch(tableData, (v) => {
      console.log(v);
    });
    watch(tableData2, (v) => {
      console.log(v);
    });
    return {
      tableData,
      loadList,
      myClick,
    };
  },
  data() {
    return {
      it: { input: "" },
      num1: 1,
      num2: 2,
    };
  },
  components: {
    log,
    my,
  },
  methods: {
    ...mapMutations("product", ["setLoading"]),

    /**
     * 判断id是否存在没有则创建
     * @param {String} idSelector
     */

    myClick2() {
      this.tableData = [];

      // console.log(this.tableData)
      opeUseModelDialog(
        () => {
          this.$emit("change");
        },
        {
          title: "123123",
          mainText: "确定",
        }
      );
    },
    getSum() {
      //   function getInput(arr) {
      //    if(arr.length){
      // for (let i = 0; i < arr.length; i++) {
      //       const preArr=getInput(arr[i].children||[])
      //       return [...arr, ...preArr];
      //     }
      //    }else {
      //      return []
      //    }
      //   }
    },
  },
  computed: {
    ...mapState({
      loading: (state: any) => state.product.routerViewLoading,
    }),
  },
  mounted() {
    // const c1 = JSON.parse(JSON.stringify(this.it));
    const runningEffects: any[] = [];

    // function P1(v1: number, v2: number, v3: number): void {
    //   console.log(v1, v2, v3);
    // }

    // const getF = function () {
    //   const arr = [1, 2, 3];
    //   P1(...arr);
    // };
    // getF();
    // P1(1, 2, 3);
    // const num1 = {
    //   a: 1,
    // };

    // const handler = {
    //   get(target: number, property: number, receiver: number) {
    //     // const a = [1, 2];
    //     // console.log(...a)

    //     P1(...arguments: number[]);
    //     // Reflect.get(...arguments:);
    //     // return Reflect.get(...arguments);
    //     return 999;
    //   },
    // };
    // const proxy = new Proxy(num1, handler);
    // console.log("proxy", proxy.a);
    // const num2 = {
    //   a: 2,
    // };
    // let num3 = 0;
    // createEffect(() => {
    //   num3 = num1.a + num2.a;
    // });
    // this.loadList();
  },
});
</script>

<style scoped lang='scss'>
</style>