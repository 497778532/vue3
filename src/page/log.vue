
<script lang='tsx'>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["value"],
  render() {
    const slots = {
      suffix: () => (this.$slots.default ? this.$slots.default() : ""),
    };
    return (
      <div>
        <el-input
          vModel={this.value.input}
          {...{ ...this.$attrs }}
          v-slots={slots}
        ></el-input>
      </div>
    );
  },
});
</script>

