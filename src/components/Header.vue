<template>
  <div class="header">
    <span>Контакты: {{ howManyContacts }}</span>
    <Button @click.native="showModal" class="headerAddBtn">
      <template v-slot:text>Новый Контакт</template>
    </Button>
    <Modal ref="modal">
      <template v-slot:title>
        <h3 class="modal-title">Новый Контакт</h3>
      </template>
      <template v-slot:body>
        <div class="inputs-wrap">
          <Input
            id="name"
            ph="Имя"
            v-model="name"
            label="Имя"
            class="addContactInput"
            @click.native="removeError"
          />
          <Input ph="Email" type="email" v-model="email" label="Email" class="addContactInput" />
          <Input ph="+380" v-model="phone" label="Телефон" class="addContactInput" />
        </div>
      </template>
      <template v-slot:footer>
        <Button class="modal-footer__button" @click.native="newContact">
          <template v-slot:text>Добавить Контакт</template>
        </Button>
      </template>
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Input from "./Input.vue";
import Button from "./Button.vue";
import Modal from "./Modal.vue";

export default {
  name: "Header",
  components: {
    Input,
    Button,
    Modal,
  },
  data: () => ({
    name: "",
    email: "",
    phone: "",
  }),
  computed: {
    ...mapGetters("contactsStore", ["contactsList"]),
    howManyContacts() {
      return Object.keys(this.contactsList).length;
    },
  },
  methods: {
    ...mapActions("contactsStore", ["addContact"]),
    showModal() {
      this.$refs.modal.show = true;
    },
    // eslint-disable-next-line consistent-return
    newContact() {
      if (!this.name) {
        document.querySelector("#name").classList.add("error");
        return false;
      }
      const { name, email, phone } = this;

      this.addContact({ name, email, phone });
      this.name = "";
      this.email = "";
      this.phone = "";
      this.$refs.modal.show = false;
    },
    removeError(e) {
      e.target.classList.remove("error");
      document.querySelector("#name").classList.remove("error");
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column-reverse;
}
.header span {
  margin-top: 5px;
  font-weight: bold;
}
.headerAddBtn >>> button {
  font-weight: lighter;
  font-size: 15px;
  padding: 12px 28px;
  border-radius: 5px;
}
.header-input {
  margin-left: auto;
}
.addContactInput {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
}
.addContactInput >>> input {
  width: 290px;
  border-radius: 5px;
  height: 25px;
}
.addContactInput >>> label {
  font-size: 13px;
  color: #101038;
}
.error >>> input {
  border-color: 1px solid red;
}
</style>
