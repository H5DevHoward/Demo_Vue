<template>
    <section class="search-component">
        <div class="bar">
            <input
                type="text"
                placeholder="Enter your search terms"
                v-model="value"
            />
        </div>
        <ul>
            <li
                v-for="(item, index) in items"
                :key="index">
                <a href="#">
                    <img :src="item.thumb" />
                </a>
                <p>{{ item.copy }}</p>
            </li>
        </ul>
    </section>
</template>

<script>
const DATA = [
    {
        thumb: '../assets/image/thumb01.jpg',
        copy: 'What You Need To Know About CSS Variables',
    },
    {
        thumb: '../assets/image/thumb02.jpg',
        copy: 'Freebie: 4 Great Looking Pricing Tables',
    },
    {
        thumb: '../assets/image/thumb03.jpg',
        copy: '20 Interesting JavaScript and CSS Libraries for February 2016',
    },
    {
        thumb: '../assets/image/thumb04.png',
        copy: 'Quick Tip: The Easiest Way To Make Responsive Headers',
    },
    {
        thumb: '../assets/image/thumb05.png',
        copy: 'Learn SQL In 20 Minutes',
    },
    {
        thumb: '../assets/image/thumb06.png',
        copy: 'Creating Your First Desktop App With HTML, JS and Electron',
    },
];

export default {
    data () {
        return {
            value: '',
            items: DATA,
        }
    },
    watch: {
        value(val) {
            this.items = DATA.filter(item => item.copy.toUpperCase().includes(val.toUpperCase()));
        }
    },
}
</script>
<style lang="scss" scoped>
    section{
        .bar {
            background-color: #5c9bb7;
            // background-image: -webkit-linear-gradient(top, #5c9bb7, #5392ad);
            // background-image: -moz-linear-gradient(top, #5c9bb7, #5392ad);
            // background-image: linear-gradient(top, #5c9bb7, #5392ad);
            box-shadow: 0 1px 1px #ccc;
            border-radius: 2px;
            width: 400px;
            padding: 14px;
            margin: 45px auto 20px;
            position: relative;

            input {
                border: none;
                width: 100%;
                line-height: 19px;
                padding: 11px 0;
                border-radius: 2px;
                box-shadow: 0 2px 8px #c4c4c4 inset;
                text-align: left;
                font-size: 14px;
                font-family: inherit;
                color: #738289;
                font-weight: bold;
                outline: none;
                text-indent: 40px;
            }
        }

        ul {
            list-style: none;
            width: 428px;
            margin: 0 auto;
            text-align: left;

            li {
                border-bottom: 1px solid #ddd;
                padding: 10px;
                overflow: hidden;

                a {
                    outline: none;
                    color: #389dc1;
                }

                img {
                    width: 60px;
                    height: 60px;
                    float: left;
                    border: none;
                }

                p {
                    margin-left: 75px;
                    font-weight: bold;
                    padding-top: 12px;
                    color: #6e7a7f;
                }
            }
        }
    }
</style>
