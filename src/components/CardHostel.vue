<template>
    <div class="card" :class="{ 'card-v2': styleTwo }">
        <div class="block-info" :class="{ 'block-info-v2': styleTwo }">
            <div class="block-image" :class="{ 'block-image-v2': styleTwo }">
                <img :src="hostel.images[0].path">
                <span v-if="hostel.license && !styleTwo" class="tag">Dinner</span>
                <i class="fa fa-heart-o heart-v2" v-if="styleTwo" :class="{ like: hostel.like }" aria-hidden="true"
                   @click="like(hostel)"></i>
            </div>
            <div class="block-text" :class="{ 'block-text-v2': styleTwo }">
                <div class="block-title" :class="{ 'block-title-v2': styleTwo }">
                    <span>{{hostel.name}}</span>
                    <div class="block-icons-price">
                        <i class="fa fa-usd" aria-hidden="true" v-bind:class="{ active: hostel.price_range >= 1 }"></i>
                        <i class="fa fa-usd" aria-hidden="true" v-bind:class="{ active: hostel.price_range >= 2 }"></i>
                        <i class="fa fa-usd" aria-hidden="true" v-bind:class="{ active: hostel.price_range >= 3 }"></i>
                        <i class="fa fa-usd" aria-hidden="true" v-bind:class="{ active: hostel.price_range >= 4 }"></i>
                        <i class="fa fa-usd" aria-hidden="true" v-bind:class="{ active: hostel.price_range >= 5 }"></i>
                    </div>
                </div>
                <p>{{description}}</p>
                <div v-if="!styleTwo" class="block-btn">
                    <button>Read more</button>
                    <i class="fa fa-heart-o" :class="{ like: hostel.like }" aria-hidden="true"
                       @click="like(hostel)"></i>
                </div>
            </div>
        </div>
        <i v-if="!styleTwo" class="fa fa-flag"></i>
    </div>
</template>

<script>


    export default {
        name: "CardHostel",
        props: ['hostel'],


        methods: {
            like(hostel) {
                hostel.like = !hostel.like;
                this.$store.dispatch('actionUpdate', hostel);
            }
        },

        computed: {

            description() {
                let a = this.hostel.description.replace(/<\/?[a-zA-Z]+>/gi, '');
                return a;
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

<style scoped lang="scss">

    .card {
        transition: 1s;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 210px;
        background: #EEEEEE;
        padding: 30px 20px 30px 16px;
        margin-bottom: 20px;
    }

    .card-v2 {
        transition: 1s;
        justify-content: unset;
        height: 340px;
        width: 333px;
        background: none;
        padding: 0;
    }

    .block-info {
        display: flex;
    }

    .block-info-v2{
        display: block;
    }

    .block-image {
        transition: 1s;
        width: 150px;
        height: 150px;
        margin-right: 30px;


        img {
            width: inherit;
            height: 100%;
            object-fit: cover;
        }

        .tag {
            position: relative;
            left: 85px;
            top: -150px;
            display: inline-block;
            text-align: center;
            width: 60px;
            height: 18px;
            background: #C4C4C4;
            font-size: 12px;
            color: #5A5A5A;
        }
    }

    .block-image-v2{
        transition: 1s;
        width: 100%;
        height: 205px;
        margin-right: 0;
    }

    .block-text {
        max-width: 417px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;


        p {
            transition: 1s;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            color: #999999;
            overflow: hidden;
            text-overflow: ellipsis;
        }

    }

    .block-text-v2 {
        transition: 1s;
        width: 100%;
        display: block;
        padding-top: 10px;

        p{
            transition: 1s;
            height: 72px;
        }
    }

    .block-title {
        transition: 1s;
        display: flex;

        span {
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            text-transform: uppercase;
            color: #333333;
            margin-right: 15px;
        }

    }

    .block-title-v2{
        transition: 1s;
        justify-content: space-between;
        align-items: center;
    }

    .block-icons-price{
        padding: 0 5px;
    }

    .block-btn {
        display: flex;
        align-items: center;

        button {
            width: 216px;
            height: 39px;
            background: #333333;
            color: white;
            margin-right: 25px;
        }
    }

    .fa-flag {
        opacity: 0.5;
    }

    .fa-usd {
        opacity: 0.5;
    }

    .fa-heart-o {
        cursor: pointer;
    }
    .heart-v2{
        position: relative;
        left: 300px;
        bottom: 200px;
        display: inline-block;
    }

    .like {
        color: red;
    }

    .active {
        opacity: 1;
    }

</style>
