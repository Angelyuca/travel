<template>
    <div class="wrapper" :class="{ 'wrapper-v2': styleTwo }">
        <CardHostel v-for="hostel in hostels" :key="hostel.id" :hostel="hostel"/>
    </div>

</template>

<script>
    import CardHostel from '@/components/CardHostel'

    export default {
        name: "CityGuide",
        props: ['sortPrice'],
        components: {
            CardHostel
        },
        data() {
            return {
                isSort: false,
            }
        },

        computed: {

            hostels() {
                let store = this.$store.getters.getHostels;
                let filters = this.$store.getters.getFilters;
                if (this.isSort === true) {
                    store = store.sort((a, b) => a.price_range > b.price_range ? 1 : -1);
                } else {
                    console.log('отмена');
                    store = store.sort((a, b) => a.id > b.id ? 1 : -1);
                }
                for (let filter of filters) {
                    if (filter.filter === 'dinner' && filter.active === true) {
                        let new_store = store.filter(obj => obj.license != null);
                        store = new_store;
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

        },

        watch: {
            sortPrice: function (value) {
                this.isSort = value;
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        transition: 1s;
        display: flex;
        flex-direction: column;
        height: 700px;
        overflow: auto;
        margin: 0;
        scrollbar-width: none;:: -webkit-scrollbar: none;
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
