import mutations from "./mutations";

const {
  CONTACTS_LIST,
  SELECTED_CONTACT,
  VIEW_MODAL_FIELD_EDIT,
  CURRENT_FIELD_TO_EDIT,
  SET_TIME_LAPSE,
  PUSH_TIME_LAPSE
} = mutations;

const Contacts = {
  namespaced: true,
  state: {
    contactsList: {
      id17422525bd9: {
        name: "Александр Соломахин",
        id: "id17422525bd9",
        email: "alexsolomahin377@gmail.com",
        phone: "+380964188477"
      },
      id17421525bd1: {
        name: "Иван Иванов",
        id: "id17421525bd1",
        email: "ivanivanov@gmail.com",
        phone: "+380999333111"
      }
    },
    selectedContact: {},
    viewModalFieldEdit: false,
    currentFieldToEdit: [],
    timeLapse: []
  },
  getters: {
    contactsList: ({ contactsList }) => contactsList,
    selectedContact: ({ selectedContact }) => selectedContact,
    viewModalFieldEdit: ({ viewModalFieldEdit }) => viewModalFieldEdit,
    currentFieldToEdit: ({ currentFieldToEdit }) => currentFieldToEdit,
    timeLapse: ({ timeLapse }) => timeLapse
  },
  mutations: {
    [CONTACTS_LIST](state, value) {
      state.contactsList = value;
    },
    [SELECTED_CONTACT](state, value) {
      state.selectedContact = value;
    },
    [VIEW_MODAL_FIELD_EDIT](state, value) {
      state.viewModalFieldEdit = value;
    },
    [CURRENT_FIELD_TO_EDIT](state, value) {
      state.currentFieldToEdit = value;
    },
    [SET_TIME_LAPSE](state, value) {
      state.timeLapse = value;
    },
    [PUSH_TIME_LAPSE](state, value) {
      state.timeLapse.push(value);
    }
  },
  actions: {
    deleteContact({ commit, getters }, value) {
      const { contactsList } = getters;
      const contactsListCopy = { ...contactsList };
      delete contactsListCopy[value];
      commit(CONTACTS_LIST, contactsListCopy);
    },
    addContact({ commit, getters }, value) {
      const { contactsList } = getters;
      const id = `id${(+new Date()).toString(16)}`;
      const contactsListCopy = { ...contactsList };
      contactsListCopy[id] = { ...value, id };
      commit(CONTACTS_LIST, contactsListCopy);
    },
    updateContact({ commit, getters }, value) {
      const { contactsList, selectedContact } = getters;

      // add  contact to timeLapse array;
      commit(PUSH_TIME_LAPSE, selectedContact);

      contactsList[value.id] = value;
      commit(CONTACTS_LIST, contactsList);
      commit(SELECTED_CONTACT, value);
    },
    selectContact({ commit }, value) {
      commit(SELECTED_CONTACT, value);
    },
    setViewModalFieldEdit({ commit }, value) {
      commit(VIEW_MODAL_FIELD_EDIT, value);
    },
    setCurrentFieldToEdit({ commit }, value) {
      commit(CURRENT_FIELD_TO_EDIT, value);
    },
    deleteField({ commit, getters }, value) {
      const { selectedContact, contactsList } = getters;
      const copyContact = { ...selectedContact };

      // add  contact to timeLapse array;
      commit(PUSH_TIME_LAPSE, copyContact);

      const { id } = selectedContact;
      delete selectedContact[value];
      contactsList[id] = selectedContact;

      // add edited contact to contactsList obj
      commit(CONTACTS_LIST, contactsList);

      // add edited contact to selectedContact obj for DOM refresh
      commit(SELECTED_CONTACT, selectedContact);
    },
    setTimeLapse({ commit }, value) {
      commit(SET_TIME_LAPSE, value);
    },
    pushTimeLapse({ commit }, value) {
      commit(PUSH_TIME_LAPSE, value);
    },
    jumpBack({ commit, getters }) {
      const { timeLapse } = getters;
      const stepBack = timeLapse.pop();
      commit(SELECTED_CONTACT, stepBack);
    }
  }
};

export default Contacts;
