<template>
  <div class="contactItem">
    <span class="initials">{{ initials }}</span>
    <span>{{ contact.name }}</span>
    <div class="buttonsWrap">
      <Button @click.native="contactDetails" class="btnInfo">
        <template v-slot:text>
          <span class="icon-info"></span>
        </template>
      </Button>
      <Button @click.native="showModal" class="btnDelete">
        <template v-slot:text>
          <span class="icon-close"></span>
        </template>
      </Button>
    </div>

    <Modal ref="modal">
      <template v-slot:title>
        <h3 class="modal-title">Удалить контакт</h3>
      </template>
      <template v-slot:body>Вы уверены что хотите удалить {{ contact.name }}?</template>
      <template v-slot:footer>
        <Button class="modal-footer__button" @click.native="onClick">
          <template v-slot:text>Удалить</template>
        </Button>
      </template>
    </Modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Button from "./Button.vue";
import Modal from "./Modal.vue";

export default {
  name: "ContactItem",
  components: {
    Button,
    Modal,
  },
  props: {
    contact: {
      type: Object,
    },
  },
  computed: {
    initials() {
      const nameArr = this.contact.name.split(" ");
      if (nameArr.length === 1) return nameArr[0][0];
      return nameArr[0][0] + nameArr[1][0];
    },
  },
  methods: {
    ...mapActions("contactsStore", ["selectContact"]),
    showModal() {
      this.$refs.modal.show = true;
    },
    onClick() {
      // console.log("emitting");
      this.$emit("onDelete", this.contact.id);
    },
    contactDetails() {
      this.selectContact(this.contact);
      this.$router.push({ name: "ContactInfo" });
    },
  },
};
</script>

<style scoped>
.contactItem {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px outset black;
  margin-top: 3px;
  width: 700px;
}
.contactItem:hover {
  box-shadow: 0px 5px 30px #000000b3;
}
span {
  display: inline-flex;
  align-items: center;
  padding-left: 2%;
}
.initials {
  height: 30px;
  width: 30px;
  background-color: #0971c7;
  color: #fff;
  font-weight: bold;

  padding-left: 5px;
}
.buttonsWrap {
  display: flex;
}
.btnDelete >>> button {
  width: 30px;
  height: 30px;
  background-color: #c70909;
}
.btnInfo >>> button {
  width: 30px;
  height: 30px;
  background-color: #32bb54;
  border-right: 1px inset darkcyan;
}
.modal-footer__button >>> button {
  background-color: #c70909;
  font-weight: bold;
}
</style>
