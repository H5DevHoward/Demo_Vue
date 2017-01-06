<template>
<section class="navMenu-component">
    <nav>
        <a
            v-for="(item, index) in items"
            :key="index"
            :class="[item.class, { active: currentIndex === index }]"
            @click.prevent="toggle(index)"
            >
            {{ item.name }}
        </a>
    </nav>
    <p>You chose <b>{{ items[currentIndex].name }}</b></p>
</section>
</template>

<script>
export default {
    data () {
        return {
            currentIndex: 0,
            items: [
                {
                    name: 'Home',
                    class: ['Home', 'item0'],
                },
                {
                    name: 'Projects',
                    class: ['Projects', 'item1'],
                },
                {
                    name: 'Services',
                    class: ['Services', 'item2'],
                },
                {
                    name: 'Contact',
                    class: ['Contact', 'item3'],
                },
            ],
        }
    },
    methods: {
        toggle(i) {
            this.currentIndex = i;
        }
    }
}
</script>
<style lang="scss" scoped>
    section.navMenu-component {
        text-align: center;

        nav {
            display: inline-block;
            margin: 60px auto 45px;
            background-color: #5597b4;
            box-shadow: 0 1px 1px #ccc;
            border-radius: 2px;

            a {
                cursor: pointer;
                display: inline-block;
                padding: 18px 30px;
                color: #fff !important;
                font-weight: bold;
                font-size: 16px;
                text-decoration: none !important;
                line-height: 1;
                text-transform: uppercase;
                background-color: transparent;
                -webkit-transition: background-color 0.25s;
                -moz-transition: background-color 0.25s;
                transition: background-color 0.25s;

                &.active {
                    background-color: #e35885;
                }
            }
        }

        p {
            font-size: 22px;
            font-weight: bold;
            color: #7d9098;

            b {
                color: #ffffff;
                display: inline-block;
                padding: 5px 10px;
                background-color: #c4d7e0;
                border-radius: 2px;
                text-transform: uppercase;
                font-size: 18px;
            }
        }
    }
</style>
