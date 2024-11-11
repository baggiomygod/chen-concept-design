<template>
    <div class="cooperation">
        <div class="top">
            <h2>1.concept design 2. Rendering 3. Building consent 4. Landscape design 5. Site level survey and maintenance work </h2>
            <div class="en">
                1.concept design 2. Rendering 3. Building consent 4. Landscape design 5. Site level survey and maintenance work 
                1.concept design 2. Rendering 3. Building consent 4. Landscape design 5. Site level survey and maintenance work 
            </div>
        </div>
        <div class="bottom">
            <div class="item">
                <span class="num">1</span>
                <span class="text">concept design</span>
            </div>
            <div class="item">
                <span class="num">14+</span>
                <span class="text">Rendering</span>
            </div>
            <div class="item">
                <span class="num">200+</span>
                <span class="text">Building consent</span>
            </div>
            <div class="item">
                <span class="num">1500+</span>
                <span class="text">Landscape design</span>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
//import x from ''
export default {
    name: "",
    props: {},
    data() {
        return {};
    },
    components: {},
    computed: {},
    watch: {},
    methods: {},
    created() {}, // 生命周期 - 已经创建
    mounted() {}, //生命周期 - 已经挂载
}
</script>

<style scoped lang="less">
.cooperation {
    .top {
        background: url('/cooperation-bg.jpg') no-repeat 100% 100%;
        padding: 10vw 0 12vw;
        h2 {
            width: 912px;
            margin: 0 auto;
            font-size: 48px;
            color: #fff;
            text-align: center;
            &::after {
                content: "";
                display: block;
                width: 140px;
                background-color: #fff100;
                height: 5px;
                margin: 2vw auto;
            }
        }
        .en {
            width: 912px;
            margin: 0 auto;
            margin-top: 20px;
            text-align: center;
            font-size: 20px;
            color: #fff;
        }
    }
    .bottom {
        margin: 0 auto;
        padding: 5.2vw 0 4vw;
        background: #000;
        text-align: center;
        .item {
            float: left;
            text-align: center;
            .num {
                display: block;
                font-size: 53px;
                color: #fff100;
            }
            .text {
                display: block;
                font-size: 17px;
                color: #fff;
                line-height: 35px;
            }
            &:nth-child(1) {
                width: 14%;
            }
            &:nth-child(2) {
                width: 31%;
            }
            &:nth-child(3) {
                width: 24%;
                margin-right: 8%;
            }
            &:nth-child(4) {
                width: 22%;
            }
        }
    }
}
</style>