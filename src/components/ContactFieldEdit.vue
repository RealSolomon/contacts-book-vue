<template>
  <div>
    <Modal ref="modal">
      <template v-slot:title>
        <h3 class="modal-title">{{ cantEditComp }}</h3>
      </template>
      <template v-slot:body>
        <div class="inputs-wrap">
          <Input
            id="key"
            ph="key"
            v-model="key"
            @click.native="removeError"
            class="addFieldInput"
            :disabled="disableKeyInput"
          />
          <span>:</span>
          <Input
            ph="value"
            id="value"
            v-model="value"
            class="addFieldInput"
            @click.native="removeError"
            :disabled="disableValueInput"
          />
        </div>
      </template>
      <template v-slot:footer>
        <Button class="modal-footer__button" @click.native="addNewField" :disabled="disableBtn">
          <template v-slot:text>Ok</template>
        </Button>
        <Button class="modal-footer__button" @click.native="cancel">
          <template v-slot:text>Отмена</template>
        </Button>
      </template>
    </Modal>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Modal from "./Modal.vue";
import Input from "./Input.vue";
import Button from "./Button.vue";

export default {
  name: "ContactFieldEdit",
  components: {
    Button,
    Modal,
    Input,
  },
  data: () => ({
    key: "",
    value: "",
  }),
  watch: {
    viewModalFieldEdit() {
      this.showModal();
    },
    currentFieldToEdit() {
      this.fieldToData();
    },
  },
  computed: {
    ...mapGetters("contactsStore", [
      "selectedContact",
      "viewModalFieldEdit",
      "currentFieldToEdit",
    ]),
    cantEditComp() {
      return this.key === "id"
        ? `Не возможно редактировать ${this.key}`
        : "Редактировать";
    },
    disableBtn() {
      return this.key === "id" ? true : null;
    },
    disableKeyInput() {
      return this.key === "id" || this.key === "name" ? true : null;
    },
    disableValueInput() {
      return this.key === "id" ? true : null;
    },
  },
  methods: {
    ...mapActions("contactsStore", ["updateContact", "setCurrentFieldToEdit"]),
    showModal() {
      this.$refs.modal.show = true;
    },
    fieldToData() {
      const [key, value] = this.currentFieldToEdit;
      this.key = key;
      this.value = value;
    },
    addNewField() {
      if (this.key && this.value) {
        const contact = { ...this.selectedContact };
        contact[this.key] = this.value;
        this.updateContact(contact);
        this.$refs.modal.show = false;
      }
      if (!this.key) document.querySelector("#key").classList.add("error");
      if (!this.value) document.querySelector("#value").classList.add("error");
    },
    cancel() {
      if (!confirm("Are you sure?")) {
        return;
      }
      this.$refs.modal.show = false;
    },
    removeError() {
      document
        .querySelectorAll("input")
        .forEach((input) => input.parentNode.classList.remove("error"));
    },
  },
};
</script>
<style scoped>
.inputs-wrap {
  display: flex;
  justify-content: center;
}
.inputs-wrap span {
  font-size: 19px;
  font-weight: bold;
  align-self: center;
  margin: 0 5px;
}
.addFieldInput >>> input {
  width: 220px;
  border-radius: 5px;
  height: 25px;
}
.addFieldInput >>> label {
  font-size: 15px;
  color: #101038;
}
.error >>> input {
  border-color: red;
}
.modal-footer__button {
  float: left;
  width: 40%;
  padding-left: 30px;
}
</style>
