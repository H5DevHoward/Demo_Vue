<template>
    <section>
        <div>
            <nav class="bar">
                <span
                    v-for="(item, index) in navItems"
                    :key="index"
                    class="nav-item"
                    @click.prevent="toggle(item.types)"
                    >
                    {{ item.name }}
                </span>
            </nav>
            <transition-group class="show-item" tag="div" name="fade">
                <img
                    v-for="(item, index) in showItems"
                    :key="index"
                    :src="item.src"
                />
            </transition-group>
        </div>
    </section>
</template>

<script>
import _ from 'lodash';

const IMAGES = [
    {
        src: '../assets/image/red01.jpg',
        type: ['A'],
    },
    {
        src: '../assets/image/red02.jpg',
        type: ['A'],
    },
    {
        src: '../assets/image/red03.jpg',
        type: ['A'],
    },
    {
        src: '../assets/image/red04.jpg',
        type: ['A'],
    },
    {
        src: '../assets/image/red05.jpg',
        type: ['A'],
    },
    {
        src: '../assets/image/red06.jpg',
        type: ['A'],
    },
    {
        src: '../assets/image/red07.jpg',
        type: ['A'],
    },
    {
        src: '../assets/image/green01.jpg',
        type: ['B'],
    },
    {
        src: '../assets/image/green02.jpg',
        type: ['B'],
    },
    {
        src: '../assets/image/green03.jpg',
        type: ['B'],
    },
    {
        src: '../assets/image/green04.jpg',
        type: ['B'],
    },
    {
        src: '../assets/image/green05.jpg',
        type: ['B'],
    },
    {
        src: '../assets/image/green06.jpg',
        type: ['B'],
    },
    {
        src: '../assets/image/green07.jpg',
        type: ['B'],
    },
    {
        src: '../assets/image/green08.jpg',
        type: ['B'],
    },
    {
        src: '../assets/image/green09.jpg',
        type: ['B'],
    },
    {
        src: '../assets/image/blue01.jpg',
        type: ['C'],
    },
    {
        src: '../assets/image/blue02.jpg',
        type: ['C'],
    },
    {
        src: '../assets/image/blue03.jpg',
        type: ['C'],
    },
    {
        src: '../assets/image/blue04.jpg',
        type: ['C'],
    },
    {
        src: '../assets/image/blue05.jpg',
        type: ['C'],
    },
    {
        src: '../assets/image/blue06.jpg',
        type: ['C'],
    },
    {
        src: '../assets/image/blue07.jpg',
        type: ['C'],
    },
    {
        src: '../assets/image/blue08.jpg',
        type: ['C'],
    },
    {
        src: '../assets/image/blue09.jpg',
        type: ['C'],
    },
    {
        src: '../assets/image/blue10.jpg',
        type: ['C'],
    },
    {
        src: '../assets/image/blue11.jpg',
        type: ['C'],
    },
];

const NAV = [
    {
        name: '所有分类',
        types: ['A', 'B', 'C'],
    },
    {
        name: '分类A',
        types: ['A'],
    },
    {
        name: '分类B',
        types: ['B'],
    },
    {
        name: '分类C',
        types: ['C'],
    },
    {
        name: '分类A+B',
        types: ['A', 'B'],
    },
    {
        name: '分类B+C',
        types: ['B', 'C'],
    },
    {
        name: '分类A+C',
        types: ['A', 'C'],
    },
];

export default {
    data () {
        return {
            navItems: NAV,
            filterOption: NAV[0].types,
        }
    },
    methods: {
        toggle(types) {
            this.filterOption = types;
        }
    },
    computed: {
        showItems() {
            return _.shuffle(IMAGES.filter(item => !item.type.map(item => this.filterOption.includes(item)).includes(false)));
        }
    },
}
</script>
<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }

    nav {
        width: 600px;
        position: relative;
        margin: 0 auto;
        text-align: center;

        span {
            display: inline-block;
            width: 12%;
            height: 100%;
            cursor: pointer;
            background-color: #8281ac;
            border: 1px solid #fff;
        }
    }
</style>
