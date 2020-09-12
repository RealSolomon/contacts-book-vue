<template>
  <div class="input">
    <label>{{ label }} </label>
    <input
      :type="type"
      :placeholder="ph"
      v-model="content"
      :disabled="disabled"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    ph: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: ""
    },
    req: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      content: ""
      // eslint-disable-next-line semi
    };
  },
  watch: {},
  mounted() {
    this.content = this.value;
    // console.log(this.value);
  },
  methods: {
    handleInput() {
      this.$emit("input", this.content);
    }
  }
};
</script>
<style scoped>
input:focus {
  outline: none !important;
}
</style>
