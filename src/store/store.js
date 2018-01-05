import Vue from "vue";
import Vuex from "vuex";

import theme from "./modules/theme";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		theme,
		auth
	}
});