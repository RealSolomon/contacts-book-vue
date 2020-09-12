<template>
  <div>
    <div class="detailsItem">
      <span>{{ details[0] }}</span> :
      <span>{{ details[1] }}</span>
      <div class="buttonsWrap">
        <Button @click.native="editField" class="btnEdit">
          <template v-slot:text>
            <span class="icon-pencil"></span>
          </template>
        </Button>
        <Button @click.native="showModal" class="btnDelete">
          <template v-slot:text>
            <span class="icon-close"></span>
          </template>
        </Button>
      </div>
    </div>
    <Modal ref="modal">
      <template v-slot:title>
        <h3 class="modal-title">{{ forbiddenToDelete }}:</h3>
      </template>
      <template v-slot:body>
        {{
          `${details[0]} : ${details[1]}
        `
        }}
      </template>
      <template v-slot:footer>
        <Button
          class="modal-footer__button"
          :disabled="disabledBtn"
          @click.native="deleteFieldHandler"
        >
          <template v-slot:text>{{ btnText }}</template>
        </Button>
      </template>
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Button from "./Button.vue";
import Modal from "./Modal.vue";

export default {
  name: "ContactDetailsItem.vue",
  components: {
    Button,
    Modal
  },
  props: {
    details: {
      type: Array
    }
  },
  computed: {
    ...mapGetters("contactsStore", ["viewModalFieldEdit"]),
    disabledBtn() {
      return this.details[0] === "name" || this.details[0] === "id" ? true : null;
    },
    forbiddenToDelete() {
      return this.details[0] === "name" || this.details[0] === "id"
        ? "Вы не можете удалить это поле"
        : "Вы уверены что хотите удалить";
    },
    btnText() {
      return this.details[0] === "name" || this.details[0] === "id" ? "Извините" : "Удалить";
    }
  },
  methods: {
    ...mapActions("contactsStore", [
      "setCurrentFieldToEdit",
      "setViewModalFieldEdit",
      "deleteField"
    ]),
    editField() {
      this.setViewModalFieldEdit(!this.viewModalFieldEdit);
      this.setCurrentFieldToEdit(this.details);
    },
    showModal() {
      this.$refs.modal.show = true;
    },
    deleteFieldHandler() {
      this.$refs.modal.show = false;
      this.deleteField(this.details[0]);
    }
  }
};
</script>
<style scoped>
.detailsItem {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px outset black;
  margin-top: 3px;
  height: 30px;
  padding: 5px;
}
.detailsItem:hover {
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
}
span {
  display: inline-flex;
  align-items: center;
}
.buttonsWrap {
  margin-left: auto;
  display: flex;
}
.btnDelete >>> button {
  width: 30px;
  height: 30px;
  background-color: #c70909;
}
.btnEdit >>> button {
  width: 30px;
  height: 30px;
  background-color: #09c71e;
}
</style>
