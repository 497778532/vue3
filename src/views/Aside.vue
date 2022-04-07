<template>
  <!-- {{ value.text }}
  <el-button @click="url = '222'">按钮</el-button> -->
  <el-aside width="180px" class="erp-aside">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :default-openeds="openeds()"
    >
      <template v-for="(item, index) in value.sideMenu" :key="index">
        <el-sub-menu :index="`${index}`" v-if="item.children">
          <template #title>
            {{ item.text }}
          </template>
          <el-menu-item-group>
            <el-menu-item
              :class="{ 'red-font': them.url === activeUrl }"
              :index="`${index}-${themIndex}`"
              v-for="(them, themIndex) in item.children"
              >{{ them.text }}</el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>

        <el-menu-item
          :index="index"
          v-else
          :class="{ 'red-font': item.url === activeUrl }"
        >
          {{ item.text }}
        </el-menu-item>
      </template>

      <!-- <el-menu-item index="1-1" v-else>{{ item.text }}</el-menu-item> -->
      <!-- <el-sub-menu >
          <template #title>{{item.text}}</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu> -->

      <!-- <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>Navigator Four</span>
      </el-menu-item> -->
    </el-menu>

    <!-- <div
      v-for="(item, index) in value.sideMenu"
      :class="{ 'red-font': item.active }"
    >
      {{ item.text }}
    </div> -->
  </el-aside>
</template>




<script lang="ts">
import { defineComponent, ref, reactive, watch } from "vue";

export default defineComponent({
  name: "",
  components: {},
  mounted() {},
  props: {
    value: {
      type: Object,
      default: {
        text: "",
        url: "",
        sideMenu: [],
      },
    },
  },
  setup(props, context) {
    const url = ref(props.value.text);
    watch(url, () => {
      alert("1");
    });
    return {
      url,
    };
  },
  data() {
    return {
      activeUrl: "",
    };
  },
  methods: {
    getTargetSideMenu(params: any[], url: string) {
      for (let i = 0; i < params.length; i++) {
        const temp = params[i];
        if (temp.children) {
          const res = temp.children.find((t: any) => t.url === url);
          if (res) {
            this.activeUrl = res.url;
            break;
          }
        }
      }
    },
    openeds(): string[] {
      let arr: string[] = [];
      this.value.sideMenu.forEach((e: any, index: number) => {
        arr.push(`${index}`);
        if (e.children) {
          e.children.forEach((t: any, tIndex: number) => {
            arr.push(`${index}-${tIndex}`);
          });
        }
      });

      return arr;
    },
  },
  watch: {
    "value.sideMenu": {
      deep: true,
      handler(v) {
        this.$emit("input", v);
      },
    },
    "value.url": {
      deep: true,
      immediate: true,
      handler(v) {
        this.getTargetSideMenu(this.value.sideMenu, v);
      },
    },
  },
});
</script>
<style lang="scss">
</style>
<style lang="scss" scoped>
.erp-aside {
  --el-color-white: $background;
}
.el-menu-item.is-active {
  color: #fff;
}
</style>