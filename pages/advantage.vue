<template>
    <div class="advantage">
        <div class="center">
            <div class="advantage-title animate__animated animate__zoomInDown">为什么选择我们？</div>
            <div class="advantage-desc">策略先行 差异化设计 懂创意 更懂营销</div>
            <div class="advantage-box">
                <div class="images">
                    <img src="/advantage01.png" ref="images1" class="animate__animated1" v-show="advantageIndex === 0">
                    <img src="/advantage02.png" ref="images2" class="animate__animated1 animate__fadeIn1" v-show="advantageIndex === 1">
                    <img src="/advantage03.png" ref="images3" class="animate__animated1 animate__fadeIn1" v-show="advantageIndex === 2">
                    <img src="/advantage04.png" ref="images4" class="animate__animated1 animate__fadeIn1" v-show="advantageIndex === 3">
                </div>
                <div class="list">
                    
                    <div class="item" @mouseover="mouseover(0)">
                        <div class="bottom">
                            <div class="title">策略先行</div>
                            <div class="subtitle">策略精准，效益倍增</div>
                            <div class="desc">我们有专门的营销策划师，所有的设计都会基于目标市场、产品、目标消费者等因素进行严谨的策略规划，从而让您的品牌赢得市场。</div>
                        </div>
                    </div>
                    <div class="item" @mouseover="mouseover(1)">
                        <div class="bottom">
                            <div class="title">差异创意</div>
                            <div class="subtitle">路子有点野，却与众不同</div>
                            <div class="desc">
                                <p>没有创意，就没有差异!</p>
                                <p>没有差异，就没有记忆!</p>
                                <p>没有记忆，就没有生意!</p>
                            </div>
                        </div>
                    </div>
                    <div class="item" @mouseover="mouseover(2)">
                        <div class="bottom">
                            <div class="title">高效输出</div>
                            <div class="subtitle">团队协同作战</div>
                            <div class="desc">
                                <p>科学的流程，总监全盘布局</p>
                                <p>团队头脑风暴，明确方向</p>
                                <p>然后分工合作协同作战，快速输出</p>
                            </div>
                        </div>
                    </div>
                    <div class="item" @mouseover="mouseover(3)">
                        <div class="bottom">
                            <div class="title">合作灵活</div>
                            <div class="subtitle">整体策划分阶段执行，顾问式服务</div>
                            <div class="desc">
                                <p>战略全局规划，分阶段输出，能根据市场作出灵活调整，成体系，成本低，熟悉每一个环节，易于落地</p>
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
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
        return {
            advantageIndex: 0
        };
    },
    components: {},
    computed: {},
    watch: {},
    methods: {
        mouseover(val) {
            this.advantageIndex = val
        }
    },
    created() {}, // 生命周期 - 已经创建
    mounted() {}, //生命周期 - 已经挂载
}
</script>

<style scoped lang="less">
.advantage {
    margin-top: 100px;
    .advantage-title {
        font-size: 40px;
        color: #454545;
        text-align: center;
    }
    .advantage-desc {
        margin-top: 15px;
        font-size: 16px;
        text-align: center;
    }
}

.advantage-box {
    height: 32.85vw;
    position: relative;
    margin-top: 35px;
    .images {
        position: absolute;
        width: 100%;
        height: 100%;
    
        img {
            width: 100%;
            height: 100%;
            display: block;
        }
    }
    .list {
        position: relative;
        height: 100%;
        z-index: 5;
        .item {
            width: 25%;
            height: 100%;
            float: left;
            position: relative;
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            .bottom {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                color: #fff;
                padding: 4% 8%;
                .title {
                    font-size: 28px;
                }
                .subtitle {
                    margin-top: 15px;
                    font-size: 14px;
                }
                .desc {
                    margin-top: 20px;
                    font-size: 14px;
                }
            }
            &:hover {
                background-color: rgba(0, 0, 0, 0.2);
            }
        }
    }
}

</style>