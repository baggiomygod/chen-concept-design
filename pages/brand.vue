<template>
    <div class="brand">
        <div class="center">
            <div class="title">品牌解决方案</div>
            <div class="des">
                <p>我们根据您的品牌发展所处的不同阶段，针对性的提出解决方案</p>
                <p>并根据当前的市场规律和变化统一规划，分阶段执行，提供基于进化式的全程品牌服务策略，为你的品牌发展提供持续不断的动力！</p>
            </div>
            <div class="brand-list">
                <div class="item">
                    <div class="title">初创品牌</div>
                    <div class="image">
                        <img src="/brand01.jpg">
                    </div>
                    <div class="des">
                        <p>没有品牌，客户记不住</p>
                        <p>没有品牌，陷于价格战，产品无溢价空间</p>
                        <p>没有品牌，无法与同行竞争</p>
                        <p>想做品牌，不知如何开始？</p>
                    </div>
                    <div class="btn">
                        <a href="tencent://message/?uin=目标123456号&Site=qq&Menu=yes">立即咨询</a>
                    </div>
                </div>
                <div class="item">
                    <div class="title">发展中品牌</div>
                    <div class="image">
                        <img src="/brand02.jpg">
                    </div>
                    <div class="des">
                        <p>以前的品牌系统已无法适应现在的市场需求</p>
                        <p>品牌整体形象应用混乱，执行难度大</p>
                        <p>集团下多个品牌相互竞争，定位模糊不清</p>
                        <p>线上线下形象不统一，产品力，传播力不够</p>
                    </div>
                    <div class="btn">
                        <a href="tencent://message/?uin=目标123456号&Site=qq&Menu=yes">立即咨询</a>
                    </div>
                </div>
                <div class="item">
                    <div class="title">成熟型品牌</div>
                    <div class="image">
                        <img src="/brand03.jpg">
                    </div>
                    <div class="des">
                        <p>品牌目标消费人群结构发生变化，比如品片人群年轻化,原品牌缺乏活力和粘性，品牌战略方向调整，需要更新品牌形象，以满足新的发展需求</p>
                        <p>品牌市场布局发生变化，国内讯往国际市场延伸，外销转内销，需要全新的品牌支撑品牌产品布局或推广渠道发生变化，需要全新的品牌形象支撑</p>
                    </div>
                    <div class="btn">
                        <a href="tencent://message/?uin=目标123456号&Site=qq&Menu=yes">立即咨询</a>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
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
.brand {
    width: 100%;
    background: #f5f5f5;
    // padding: 105px 0 100px;
    padding-top: 105px;
    .center >.title {
        font-size: 45px;
        font-weight: bold;
        color: #000;
    }
    .des {
        margin-top: 12px;
        font-size: 16px;
        line-height: 27px;
    }
}
.brand-list {
    margin-top: 80px;
    padding-bottom: 60px;
    .item {
        width: 31%;
        float: left;
        margin-right: 3.5%;
        .title {
            font-size: 20px;
            padding-bottom: 20px;
            margin-bottom: 20px;
            border-bottom: 1px solid #ddd;
            color: #000;
            font-weight: bold;
        }
        img {
            width: 100%;
        }
        .btn {
            margin-top: 40px;
            width: 170px;
            // padding: 15px;
            background: #fff;
            text-align: center;
            font-size: 18px;
            transition: all 0.3s;
            box-sizing: border-box;
            cursor: pointer;
            a {
                display: block;
                padding: 15px;
                border: 1px solid #000;
                color: #000;
                &:hover {
                    border: 1px solid #b40c39;
                    background: #b40c39;
                    color: #fff;
                }
            }
        }
        &:nth-child(3) {
            margin-right: 0;
        }
    }
   
}
</style>