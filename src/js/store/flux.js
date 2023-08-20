const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contactList: [],
    },
    actions: {
      getContactList: () => {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        fetch(
          "https://playground.4geeks.com/apis/fake/contact/agenda/jose",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => setStore({ contactList: result }))
          .catch((error) => console.log("error", error));
      },

      postContact: (newContact) => {
        console.log(newContact)
        const actions = getActions();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(newContact);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://playground.4geeks.com/apis/fake/contact/", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            actions.getContactList();
            console.log(result);
          })
          .catch((error) => console.log('error', error));
      },

      deleteContact: (index) => {
        const actions = getActions();
        const currentContactList = getStore().contactList;
        const selectedContact = currentContactList[index];

        const requestOptions = {
          method: "DELETE",
          redirect: "follow",
        };

        fetch(
          `https://playground.4geeks.com/apis/fake/contact/${selectedContact.id}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log("Contact deleted from API:", result);
            actions.getContactList();
          })
          .catch((error) => console.log("Error deleting contact:", error));
      },


    },
  };
};

export default getState;
