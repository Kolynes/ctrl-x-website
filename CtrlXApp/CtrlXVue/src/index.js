import Index from "./components/Index.vue";
import emailRule from "./rules/emailRule";
import nigerianPhoneRule from "./rules/nigerianPhoneRule";
import requiredRule from "./rules/requiredRule";
import Http from "./http"
import Cookies from "./cookies"

Vue.use(Vuetify)
Vue.prototype.$emailRule = emailRule;
Vue.prototype.$nigerianPhoneRule = nigerianPhoneRule;
Vue.prototype.$requiredRule = requiredRule;
Vue.prototype.$cookies = new Cookies()
Vue.prototype.$http = new Http({
    headers: {
        "X-CSRFToken": () => Vue.prototype.$cookies.get("csrftoken")
    }
})

var vueApp = new Vue({
    el: "#vue-app",
    render: h => h(Index)
})

vueApp.$vuetify.theme.primary = "#3041ad";
vueApp.$vuetify.theme.secondary = "#ffeb3b";

