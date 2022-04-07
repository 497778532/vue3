<template>
  <el-input v-model="v"></el-input>

  <div
    style="width: 300px; height: 2000px; background: red"
    v-loading="loading"
  ></div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, ref } from "vue";

export default defineComponent({
  name: "",
  props: {},
  setup() {
    const v = ref(100);
    return {
      v,
    };
  },
  components: {},
});
</script>

<style scoped lang='scss'>
</style>