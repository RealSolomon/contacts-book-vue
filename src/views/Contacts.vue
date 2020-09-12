<template>
  <div>
    <Header />
    <ContactsList />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import ContactsList from "@/components/ContactsList.vue";

export default {
  name: "Contacts",
  components: {
    Header,
    ContactsList,
  },
};
</script>
<style scoped>
</style>
