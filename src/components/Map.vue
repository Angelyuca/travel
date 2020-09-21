<template>
    <div>
        <button @click="hide()" :class="{ 'btn-v2': valueHide }">Hide the map <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </button>
        <GmapMap
                :center="{lat:52.5194, lng:13.4034}"
                :zoom="12"
                map-type-id="terrain"
                style="width: 100%; min-height: 700px; height: 100%"
        >
            <GmapMarker v-for="(data, index) in markers" :key="index" :position="google && new google.maps.LatLng(data.latitude, data.longitude)"/>
        </GmapMap>
    </div>
</template>

<script>
    import {gmapApi} from 'vue2-google-maps'

    export default {
        name: "Map",
        props: ['pages'],
        data() {
            return {
                valueHide: false,
            }
        },

        methods: {
          hide() {
              this.valueHide = !this.valueHide;
              this.$store.dispatch('actionHide', this.valueHide);
          }
        },

        computed: {
            google: gmapApi,

            markers() {
                let store = this.$store.getters.getHostels;
                let filters = this.$store.getters.getFilters;
                console.log(this.pages);
                if(this.pages === 'main'){
                    for (let filter of filters) {
                        if (filter.filter === 'dinner' && filter.active === true) {
                            let new_store = store.filter(obj => obj.license != null);
                            store = new_store;
                        }
                    }
                } else {
                    store = store.filter(obj => obj.like === true);
                    for (let filter of filters) {
                        if (filter.filter === 'dinner' && filter.active === true) {
                            let new_store = store.filter(obj => obj.license != null);
                            store = new_store;
                        }
                    }
                } return store

            }

        },
    }
</script>

<style scoped>

    button{
        position: absolute;
        z-index: 5;
        margin-left: 3%;
        margin-top: 20px;
        background: #C7C7C7;
        width: 199px;
        height: 44px;
        color: #fff;
        text-transform: uppercase;
        font-size: 15px;
    }
    button:hover{
        opacity: 0.5;
        color: black;
        transition: 1s;
    }

    .btn-v2{
        transform: rotate(-90deg) translate(-70px, -20px);
        transition: 1s;
    }


</style>
