<template>
  <div class="header start">
    <div v-for="(item, index) in value" :key="index">
      <router-link
        :class="{ 'red-font': item.active }"
        @click="topMenu(item)"
        class="link"
        :to="((item.url || item.link) + '').replace('#/', '/')"
        :target="item.target"
      >
        {{ item.text }}
      </router-link>
    </div>
    <el-color-picker v-model="color" @change="change" show-alpha />
  </div>
</template>




<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "",
  components: {},
  mounted() {},
  props: {
    value: {
      require: true,
      default: [],
    },
  },
  setup(props, context) {
    return {};
  },
  data() {
    return {
      color: "#409eff",
    };
  },
  methods: {
    change(val: string) {
      this.color = val;
      document.getElementsByTagName("body")[0].style.setProperty("--test", val);
    },
    topMenu(item: { url: string; active?: boolean }) {
      this.value.forEach((them: { active?: boolean; url: string }) => {
        them.active = false;
      });
      item.active = true;
      // for (let i = 0; i < this.value.length; i++) {
      //   temp.active = false;
      //   const temp: { url: string } = this.value[i];
      //   if (temp.url === item.url) {
      //     reactive(temp);
      //     temp.active = true;
      //   }
      // }
      // console.log("this.value", this.value);
    },
  },
  watch: {
    value: {
      deep: true,
      handler(val) {
        this.$emit("input", val);
      },
    },
  },
});
</script>
<style lang="scss">
</style>
<style lang="scss" scoped>
.header {
  height: 90px;
  background: $background;
  width: 100%;
  > div {
    flex: 1;
  }
  .link {
    padding: 10px;
    cursor: pointer;
  }
}
</style>