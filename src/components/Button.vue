<template>
  <div>
    <button :disabled="disabled">
      <slot name="text">btn</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
  background-color: #09c752;
  color: #fff;
  border: none;
  text-align: center;
}
button:hover {
  transform: scale(1.12);
}
button:active,
button:focus {
  outline: none !important;
}
button:disabled {
  background-color: #b9b9b9;
  transform: none;
}
</style>
