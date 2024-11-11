<template>
    <div class="news">
        <div class="center">
            <div class="left">
                <div class="title">
                    <h2>观点分享</h2>
                </div>
                <div class="list">
                    <div class="item" v-for="item in news" :key="item.id">
                        <div class="img">
                            <nuxt-link :to="{name: 'news-id', params: { id: item.id }}">
                                <img :src="item.imageUrl" :alt="item.title">
                            </nuxt-link>
                        </div>
                        <div class="title multi-ellipsis-2">
                            <nuxt-link :to="{name: 'news-id', params: { id: item.id }}">{{ item.title }}</nuxt-link>
                        </div>
                        <div class="desc">{{ item.desc }}</div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <div class="right">
                <div class="title">经典案例</div>
                <div class="list">
                    <!-- <div class="item" v-for="item in rollingList" :key="item.id"></div> -->
                </div>
                <!-- <rolling :data="rollingList"></rolling> -->
            </div>
            <div class="clear"></div>
        
        </div>
    </div>
</template>

<script>
//import x from ''
export default {
    name: "",
    props: {
        news: {
            type: Array,
            default() {
                return [];
            }
        }
    },
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
.news {
    padding-top: 125px;
    padding-bottom: 80px;
    background: #f5f5f5;
    .left {
        width: 74%;
        overflow: hidden;
        background: #fff;
        float: left;
        padding: 5px 15px 15px 15px;
        >.title {
            display: flex;
            align-items: center;
            a {
                color: #414141;
            }
            h2 {
                flex: 1;
                padding: 30px 17px;
                font-size: 24px;
                color: #414141;
            }
            .more {
                margin-right: 20px;
                font-size: 16px;
            }
        }
        .list {
            .item {
                width: 32%;
                float: left;
                margin-right: 2%;
                padding-bottom: 5px;
                margin-bottom: 20px;
                .img {
                    width: 100%;
                    min-height: 100px;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: 100%;
                        display: block;
                        transition: all 0.7s;
                        &:hover {
                            transform: scale(1.05);
                        }
                    }
                }
                .title {
                    a {
                        display: block;
                        height: 38px;
                        margin: 20px 0 10px 0;
                        font-size: 14px;
                        color: #000;
                    }
                    
                }
                .desc {
                    height: 60px;
                    line-height: 21px;
                    overflow: hidden;
                    font-size: 12px;
                }
                &:nth-child(3n) {
                    margin-right: 0;
                }
            }
        }
    }

    .right {
        float: right;
        width: 25%;
        overflow: hidden;
        background: #fff;
        >.title {
            padding: 30px 17px;
            font-size: 24px;
            color: #414141;
        }
    }
}


</style>