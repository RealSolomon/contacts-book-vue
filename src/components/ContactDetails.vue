<template>
  <div>
    <div class="detailsItemNew">
      <span>Добавить Новое Поле</span>
      <Button class="btnPlus" @click.native="addNewField">
        <template v-slot:text>
          <span class="icon-plus"></span>
        </template>
      </Button>
    </div>

    <ContactDetailsItem
      v-for="(details, index) in Object.entries(selectedContact)"
      :key="index"
      :details="details"
    />
    <ContactFieldEdit />
    <div class="timeLapse">
      <span>Один Шаг Назад ({{ avalaibleSteps }})</span>
      <Button class="btnPlus" @click.native="timeLapseJump" :disabled="!avalaibleSteps">
        <template v-slot:text>
          <span class="icon-undo1"></span>
        </template>
      </Button>
      <span></span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ContactDetailsItem from "./ContactDetailsItem.vue";
import Button from "./Button.vue";
import ContactFieldEdit from "./ContactFieldEdit.vue";

export default {
  name: "ContactDetails",
  components: {
    ContactDetailsItem,
    Button,
    ContactFieldEdit
  },
  data: () => ({}),
  computed: {
    ...mapGetters("contactsStore", ["selectedContact", "viewModalFieldEdit", "timeLapse"]),
    avalaibleSteps() {
      return this.timeLapse.length;
    }
  },
  methods: {
    ...mapActions("contactsStore", [
      "updateContact",
      "setViewModalFieldEdit",
      "setCurrentFieldToEdit",
      "jumpBack"
    ]),
    addNewField() {
      this.setCurrentFieldToEdit([]);
      this.setViewModalFieldEdit(!this.viewModalFieldEdit);
    },
    timeLapseJump() {
      this.jumpBack();
    }
  }
};
</script>

<style scoped>
.detailsItemNew {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px outset black;
  margin-top: 3px;
  height: 30px;
  padding: 5px;
  justify-content: center;
  margin-top: 15px;
}
.btnPlus >>> button {
  width: 30px;
  height: 30px;
  background-color: #0971c7;
  margin-left: 5px;
}
.timeLapse {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5px;
}
</style>
