<template>
    <div class="wrapper">
        <CardHostel v-for="hostel in hostels" :key="hostel.id" :hostel="hostel" />
        <p v-if="!hostels.length>0">No favorites</p>
    </div>
</template>

<script>
    import CardHostel from '@/components/CardHostel'

    export default {
        name: "Favorite",
        components: {
            CardHostel
        },

        computed: {

            hostels() {
                let store = this.$store.getters.getHostels;
                store = store.filter(obj => obj.like === true);
                console.log(store);
                let filters = this.$store.getters.getFilters;
                for (let filter of filters) {
                    if (filter.filter === 'dinner' && filter.active === true) {
                        store = store.filter(obj => obj.license != null);
                    }
                }
                return store;
            },

        }
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        max-height: 700px;
        overflow: auto;
        margin: 0;
        scrollbar-width: none;:: -webkit-scrollbar: none;
    }
</style>
