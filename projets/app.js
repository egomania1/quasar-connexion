Vue.createApp({
  setup() {
    let nom = Vue.ref('')
    let mdp = Vue.ref('')
    let voir = Vue.ref(false)
    let msg = Vue.ref('')

    function connecter() {
      msg.value = ''

      if (nom.value == '' || mdp.value == '') {
        msg.value = 'Veuillez remplir tous les champs'
        return
      }

      if (nom.value == 'admin' && mdp.value == '1234') {
        alert('Connexion réussie !')
      } else {
        msg.value = 'Identifiants incorrects'
      }
    }

    return { nom, mdp, voir, msg, connecter }
  }
}).use(Quasar, { config: {} }).mount('#app')
