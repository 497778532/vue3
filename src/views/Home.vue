<template>
  <!-- <el-header> </el-header> -->
  <div class="erp-contain">
    <Header v-model:value="nav"></Header>
    <div class="erp-main">
      <Aside v-model:value="activeTopMenu" v-if="showAside"></Aside>
      <div class="erp-content" id="main">
        <transition name="scale" mode="out-in">
          <div
            style="width: 100px; height: 100px; background: yellow"
            v-show="show"
          ></div>
        </transition>
        <div>
          <el-button @click="myClick">点击</el-button>
        </div>
        <div class="erp-content-plus">
          <router-view v-slot="{ Component }" >
            <keep-alive :include="['a', 'b']">
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </div>

        <div class="erp-content-min">哈哈哈哈哈哈哈哈</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import api from "@/fetch/api/login";
import Aside from "./Aside.vue";
import Header from "./header.vue";
import { BreadcrumbNav } from "@/components/nav/header";
import _ from "lodash";
interface TopMenu {
  active?: boolean;
  text: string;
  url: string;
  sideMenu?: [];
}

// class madam {
//     name: string
//     age: number
// }
export default defineComponent({
  name: "Home",

  setup() {
    return {
      fileList: 11,
    };
  },
  components: {
    Aside,
    Header,
  },
  methods: {
    myClick() {
      this.show = !this.show;
    },
  },
  data() {
    return {
      num: "2",
      nav: [],
      show: false,
    };
  },
  mounted() {
    console.log(this);
    // const num = this.$lodash.cloneDeep(this.num);
    api.getNav("/category/index.json").then(({ data }) => {
      data.Data.forEach((e: any) => {
        const url = e.url?.replace("#/", "/") ?? null;
        // const url = e.url.replace("#/", "/");
        console.log("this.$route.path", this.$route.fullPath);
        if (url === this.$route.fullPath) {
          e.active = true;
        }
      });
      this.nav = data.Data;
    });
  },
  computed: {
    showAside(): boolean {
      return this.activeTopMenu?.sideMenu?.length ?? false;
    },
    activeTopMenu(): any {
      let res: any = this.nav.find((t: { active?: boolean }) => t.active);
      return res;
    },
  },
});
</script>
<style lang="scss" scoped>
.erp-contain {
  height: 100%;
  overflow: hidden;

  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.5s ease;
  }

  .scale-enter-from,
  .scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }
}
.erp-content-min {
  background-color: #b3c0d1;
  color: va r(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: $background;

  height: 100%;
}

.erp-main {
  height: calc(100% - 90px);
  display: flex;
  .erp-content {
    flex: 1;
    height: calc(100%);
    overflow-y: auto;
    .erp-content-plus {
      min-height: 100%;
    }
  }
}
body > .el-container {
  margin-bottom: 40px;
}
</style>