<template>
  <div>
    <Button @click.native="backToMain" class="InfoHeaderBtn">
      <template v-slot:text>
        <span class="icon-chevron-left"></span>
        <span>Назад</span>
      </template>
    </Button>
    <span>{{ selectedContact.name }}</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Button from "@/components/Button.vue";

export default {
  name: "ContactInfoHeader",
  components: {
    Button,
  },
  computed: {
    ...mapGetters("contactsStore", ["selectedContact"]),
  },
  methods: {
    ...mapActions("contactsStore", ["setTimeLapse"]),
    backToMain() {
      this.setTimeLapse([]); // удалить историю
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
<style scoped>
.InfoHeaderBtn {
  position: absolute;
}
.InfoHeaderBtn >>> button {
  width: 75px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
}
</style>
