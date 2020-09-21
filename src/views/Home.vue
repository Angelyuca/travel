<template>
    <div class="wrapper">
        <div class="block-hotels" :class="{ 'block-hotels-v2': styleTwo }">
            <div class="block-tabs">
                <v-tabs
                        :centered=true
                        background-color=#EEEEEE
                >
                    <v-tab to="/" @click="pages = 'main'">City guide</v-tab>
                    <v-tab to="/favorite" @click="pages = 'favorite'">Favorite</v-tab>
                </v-tabs>
            </div>
            <v-chip-group
                    multiple
                    active-class="primary--text"
                    class="block-filters">
                <v-chip class="btn" @click="sort(filters)">{{filters.name}}</v-chip>
                <v-chip class="btn" @click="sortPrice=!sortPrice">Price</v-chip>
            </v-chip-group>
            <h3>Day 1</h3>
            <router-view :sortPrice="sortPrice"></router-view>
        </div>
        <Map class="map" :class="{ 'map-v2': styleTwo }" v-if="show" :pages="pages"/>
    </div>
</template>

<script>
    import Json from '../../public/static/response_1600444979926'
    import Map from '@/components/Map'

    export default {
        name: 'Home',
        components: {
            Map
        },
        data() {
            return {
                pages: 'main',
                sortPrice: false,
                active: false,
                show: false,
                arr: [],
                filters: {name: 'Dinner', filter: 'dinner', active: false},
            }
        },
        methods: {
            sort(filter) {
                filter.active = !filter.active;
                this.$store.dispatch('actionFilters', filter);
            }
        },

        mounted: function () {
            let store = this.$store.getters.getHostels;
            if (!store.length > 0) {

                let new_arr = Json;

                for (let obj of new_arr) {
                    obj.like = false;
                    this.arr.push(obj);
                }
                this.$store.dispatch('actionHostels', this.arr);
            }
            this.show = !this.show;
        },

        computed: {
            styleTwo() {
                let value = this.$store.getters.getHide;
                if (value === true) {
                    return true
                } else return false
            }
        }


    }
</script>

<style scoped>
    .wrapper {
        margin-left: 10%;
        display: flex;
    }

    .block-hotels {
        width: 60%;
        margin-right: 25px;
        transition: 1s;
    }

    .block-hotels-v2 {
        width: 100%;
        transition: 1s;
    }

    .block-tabs {
        margin-bottom: 25px;
    }

    .v-tab {
        text-transform: capitalize !important;
    }

    .block-filters {
        display: flex;
        margin-bottom: 8px;
    }

    .btn {
        margin-right: 24px !important;
        width: 156px !important;
        height: 34px !important;
        background: #EEEEEE;
        border-radius: 14px !important;
        text-align: center !important;
        display: block !important;
    }

    .theme--light.v-chip:focus {
        opacity: unset;
    }


    h3 {
        margin-bottom: 8px;
    }

    .map {
        width: 40%;
        transition: 1s;
    }

    .map-v2 {
        width: 20%;
        transition: 1s;
    }


</style>
