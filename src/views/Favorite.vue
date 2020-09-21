<template>
    <div class="wrapper" :class="{ 'wrapper-v2': styleTwo }">
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
        transition: 1s;
        display: flex;
        flex-direction: column;
        max-height: 700px;
        overflow: auto;
        margin: 0;
        scrollbar-width: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }

    .wrapper-v2 {
        transition: 1s;
        display: grid;
        grid-template-columns: repeat(3, 333px);
        justify-content: space-between;
        grid-row-gap: 5px;
        grid-column-gap: 5px;
        position: relative;
    }
</style>
