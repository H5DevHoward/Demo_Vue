<template>
<section class="edit-component">
    <div
        :class="{tooltip: true, active}">
        <input
            class="edit"
            v-model="value"
            ref="input"
        />
    </div>
    <p>
        <span
            class="label"
            @click.prevent="handleClick"
            ref="span"
            >
            {{ value }}
        </span>
    </p>
</section>
</template>

<script>
export default {
    data () {
        return {
            value: 'Edit me.',
            active: false,
        }
    },
    methods: {
        handleClick() {
            this.active = !this.active;
            document.addEventListener('click', e => {
                if (e.target !== this.$refs.input
                    && e.target !== this.$refs.span) {
                    this.active = false;
                }
            });
        }
    }
}
</script>
<style lang="scss">
    section.edit-component {
        height: 300px;
        position: relative;
        padding-top: 150px;
        text-align: center;

        p {
            font-size: 22px;
            font-weight: bold;
            color: #6d8088;
            height: 30px;
            cursor: default;

            &:before {
                content: '✎';
                display: inline-block;
                margin-right: 5px;
                font-weight: normal;
            }

            span {
                cursor: pointer;
            }
        }

        .tooltip {
            background-color: #5c9bb7;
            background-image: -webkit-linear-gradient(top, #5c9bb7, #5392ad);
            background-image: -moz-linear-gradient(top, #5c9bb7, #5392ad);
            background-image: linear-gradient(top, #5c9bb7, #5392ad);
            box-shadow: 0 1px 1px #ccc;
            border-radius: 3px;
            width: 290px;
            padding: 10px;
            position: absolute;
            left: 50%;
            margin-left: -150px;
            top: 80px;
            display: none;

            &.active {
                display: block;
            }

            input {
                border: none;
                width: 100%;
                line-height: 34px;
                border-radius: 3px;
                box-shadow: 0 2px 6px #bbb inset;
                text-align: center;
                font-size: 16px;
                font-family: inherit;
                color: #8d9395;
                font-weight: bold;
                outline: none;
            }
        }
    }
</style>
