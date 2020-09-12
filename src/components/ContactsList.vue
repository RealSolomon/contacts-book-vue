<template>
  <div>
    <div class="contactsWrap">
      <ContactItem
        v-for="(contact,index) in contactsList"
        :key="index"
        :contact="contact"
        @onDelete="handleDelete"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ContactItem from "./ContactItem.vue";

export default {
  name: "ContactsList",
  components: {
    ContactItem,
  },
  computed: {
    ...mapGetters("contactsStore", ["contactsList"]),
  },
  methods: {
    ...mapActions("contactsStore", ["deleteContact"]),
    handleDelete(value) {
      this.deleteContact(value);
    },
  },
};
</script>

  <style scoped>
.contactsWrap {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}
</style>
