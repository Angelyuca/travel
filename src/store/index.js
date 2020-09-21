import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        hostels: [],
        filters: [],
        hide: [],
    },

    plugins: [createPersistedState(
        {
            paths: [
                'hostels'
            ],
        }
    )],

    mutations: {
        mutationHostels(state, payload) {
            state.hostels = payload;
        },
        mutationUpdate(state, payload) {
            for (let obj of state.hostels) {
                if (payload.id === obj.id) {
                    obj.like = payload.like
                }
            }
        },
        mutationFilters(state, payload) {
            if (!state.filters.length > 0) {
                state.filters.push(payload);
            } else {
                for (let filter of state.filters) {
                    if (payload.filter === filter.filter) {
                        filter.active = payload.active;
                    } else {
                        state.filters.push(payload);

                    }
                }
            }
        },
        mutationHide(state, payload) {
            state.hide = payload;
        },
    },
    actions: {
        actionHostels(context, payload) {
            context.commit('mutationHostels', payload)
        },
        actionUpdate(context, payload) {
            context.commit('mutationUpdate', payload)
        },
        actionFilters(context, payload) {
            context.commit('mutationFilters', payload)
        },
        actionHide(context, payload) {
            context.commit('mutationHide', payload)
        },
    },
    getters: {
        getHostels(state) {
            return state.hostels
        },
        getFilters(state) {
            return state.filters
        },
        getHide(state) {
            return state.hide
        },

    }
})
