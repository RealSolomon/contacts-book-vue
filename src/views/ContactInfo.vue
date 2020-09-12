<template>
  <div>
    <ContactInfoHeader />
    <ContactDetails />
  </div>
</template>
<script>
import ContactInfoHeader from "@/components/ContactInfoHeader.vue";
import ContactDetails from "@/components/ContactDetails.vue";
import { mapGetters } from "vuex";

export default {
  name: "ContactInfo",
  components: {
    ContactInfoHeader,
    ContactDetails,
  },
  mounted() {
    if (!Object.keys(this.selectedContact).length) {
      this.$router.push({ name: "Home" });
    }
  },
  computed: {
    ...mapGetters("contactsStore", ["selectedContact"]),
  },
  methods: {},
};
</script>
