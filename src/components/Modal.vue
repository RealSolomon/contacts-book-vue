<template>
  <div v-if="show" class="modal-shadow" @click.self="closeModal">
    <div class="modal">
      <div class="modal-close" @click="closeModal"><span class="icon-close"></span></div>
      <slot name="title">
        <h3 class="modal-title">title</h3>
      </slot>
      <slot name="body">
        <div class="modal-content">default text</div>
      </slot>
      <slot name="footer">
        <div class="modal-footer">
          <Button class="modal-footer__button" text="Ok" />
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Modal",
  components: {
    Button
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    closeModal() {
      this.show = false;
    }
  }
};
</script>

<style scoped>
.modal-shadow {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background: #00000063;
}
.modal {
  background: #f1f1f1;
  border-radius: 8px;
  padding: 15px;
  min-width: 420px;
  max-width: 580px;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 15px;
}
.modal-close {
  border-radius: 50%;
  color: #fff;
  background: #c70909;
  border: 0.5px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 7px;
  right: 7px;
  width: 25px;
  height: 25px;
  cursor: pointer;
}
.modal-title {
  color: #000;
}
.modal-content {
  margin-bottom: 20px;
}
.modal-footer__button >>> button {
  padding: 8px;
  font-size: 17px;
  font-weight: 500;
  border-radius: 8px;
  min-width: 150px;
  margin-top: 10px;
}
</style>
