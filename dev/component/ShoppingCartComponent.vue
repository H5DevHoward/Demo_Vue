<template>
    <section class="shopping-cartComponent">
        <h1>Services</h1>
        <ul>
            <li
                v-for="(item, index) in items"
                :key="index"
                :class="{active: item.active}"
                ref="li"
                @click.prevent="handleClick(item)"
                >
                {{ item.name }}
                <span>
                    ${{ item.price.toFixed(2) }}
                </span>
            </li>
        </ul>
        <div class="total">
            Total: <span>${{ sum.toFixed(2) }}</span>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            items: [
                {
                    name: 'Web Development',
                    price: 300,
                    active: true,
                },
                {
                    name: 'Design',
                    price: 400,
                    active: false,
                },
                {
                    name: 'Integration',
                    price: 250,
                    active: false,
                },
                {
                    name: 'Training',
                    price: 220,
                    active: false,
                },
            ],
        }
    },
    computed: {
        sum() {
            let total = 0;
            this.items.filter(item => item.active).forEach(item => {
                total += item.price;
            });
            return total;
        }
    },
    methods: {
        handleClick(item) {
            item.active = !item.active;
        },
    },
}
</script>
<style lang="scss">
    section.shopping-cartComponent {
        font: 15px/1.3 'Open Sans', sans-serif;
        color: #5e5b64;
        text-align: center;
        background-color: #61a1bc;
        border-radius: 2px;
        box-shadow: 0 1px 1px #ccc;
        width: 400px;
        height: auto;
        padding: 35px 60px;
        margin: 50px auto;

        h1 {
            color: #fff;
            font-size: 64px;
            font-family: 'Cookie', cursive;
            font-weight: normal;
            line-height: 1;
            text-shadow: 0 3px 0 rgba(0,0,0,0.1);
        }

        ul {
            list-style: none;
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            text-align: left;
            margin: 20px 0 15px;

            li {
                padding: 20px 30px;
                background-color: #e35885;
                margin-bottom: 8px;
                box-shadow: 0 1px 1px rgba(0,0,0,0.1);
                cursor: pointer;

                &.active {
                    background-color: #8ec16d;
                }

                span {
                    float: right;
                }
            }
        }

        .total {
            border-top: 1px solid rgba(255,255,255,0.5);
            padding: 15px 30px;
            font-size: 20px;
            font-weight: bold;
            text-align: left;
            color: #fff;

            span {
                float: right;
            }
        }
    }
</style>
