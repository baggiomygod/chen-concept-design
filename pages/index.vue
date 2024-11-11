<template>
    <div>
        <web-header></web-header>
        <web-banner></web-banner>
        <div class="wrap-index">
            <div class="category">

                <span 
                    v-for="item in categorys" :key="item.id"
                    :class="{active: item.id === categoryActiveId}"
                    @click="categoryActiveId = item.id"
                >{{ item.title }}</span>
            </div>
            <div class="products">
                <div class="products-item" v-for="item in products" :key="item.id">
                    <nuxt-link :to="'/'">
                        <img :src="item.imageUrl" alt="">
                    </nuxt-link>
                </div>
                <div class="clear"></div>
            </div>
            <div class="products-more" >
                <nuxt-link :to="{name: 'product-type-id', params: { id: categoryActiveId }}">more</nuxt-link>
            </div>
             <!-- 合作 -->
             <cooperation />

            <!-- 品牌解决方案 -->
           <brand v-if="false"/>

           
            <!-- 选择我们 -->
            <advantage v-if="false"/>

            <share v-if="false" :news="news"/>
            <div class="clear"></div>
            <web-footer></web-footer>
        </div>
    </div>
</template>

<script>
import { getNews, getProductCategory, getProducts } from '@/api/getData'
import webBanner from '@/components/web-banner.vue'
import webHeader from '@/components/web-header.vue'
import webFooter from '@/components/web-footer.vue'
import brand from './brand.vue'
import cooperation from './cooperation.vue'
import advantage from './advantage.vue'
import share from './share.vue'
export default {
    components: {
        webHeader,
        webBanner,
        webFooter,
        brand,
        cooperation,
        advantage,
        share
    },
    data() {
        return {
        }
    },
    computed: {
        products() {
            let products = []
            if (this.categoryActiveId === 0){
                    this.productList.forEach(item => {
                        products = [...products, ...item.children]
                    })
                    return products
            }
            products = this.productList.find(item => item.id === this.categoryActiveId)
            return products ? products.children : []
        }
    },
    async asyncData() {
        let news = await getNews({type: 3})
        let categorys = await getProductCategory({})
        const product = await getProducts({page: 1, size: 9999, type: 0})
        let productList = []
        for (let item of product.list) {
            let find = productList.find(f => f.id === item.goodsClassId)
            if (find) {
                if (find.children.length < 8) {
                    find.children.push(item)
                }
            } else {
                productList.push({
                    id: item.goodsClassId,
                    children: [item]
                })
            }
        }

        return {
            news: news.list,
            categorys,
            productList: productList,
            categoryActiveId: categorys[0].id
        }
    },
    methods: {
    }
}

</script>

<style lang="less" scoped>

.wrap-index {
    padding-top: 30px;
    position: relative;
    z-index: 300;
    background: #f5f5f5;
}
.category {
    padding: 30px 0;
    text-align: center;
    span {
        display: inline-block;
        padding: 20px 15px;
        font-size: 14px;
        color: #555;
        cursor: pointer;
        
        &.active {
            color: #fff;
            background: #000;
        }
    }
}
.products {
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    &:after {
        clear: both;
    }
}
.products-item {
    width: 25%;
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
}
.products-more {
    width: 14.75%;
    min-width: 150px;
    margin: 25px auto;
    padding: 1.3vw 0;
    border: 2px solid #999;
    font-size: 1.13vw;
    text-align: center;
    color: #656565;
    cursor: pointer;
    &:hover {
        border: 2px solid #b40c39;
        background: #b40c39;
        a {
            color: #fff;
        }
    }
}






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

.news-text {
    margin: 60px 0 0 0;
    p {
        font-size: 45px;
        color: #414141;
    }
    span {
        padding-top: 5px;
        color: #757575;
        font-size: 14px;
    }
}

@media screen and (max-width: 750px) {
    .category {
        padding: 0;
        span {
            padding: 10px 15px;
            background: #fff;
            margin: 0 5px 10px 5px;
        }
        a {
            font-size: 13px;
        }
    }
    .products-item {
        width: 50%;
        
    }
    .products-more {
        font-size: 14px;
    }
    .brand {
        padding-top: 50px;
        .center {
            >.title {
                font-size: 22px;
            }
            .des {
                font-size: 12px;
            }
            .brand-list {
                .item {
                    width: 100%;
                    margin-bottom: 20px;
                    margin-right: 0;
                    .title {
                        font-size: 16px;
                    }
                    .btn {
                        width: 85px;
                        font-size: 14px;
                        margin-top: 20px;
                        a {
                            padding: 8px;
                        }
                    }
                }
            }
        }
    }

    .cooperation {
        .top {
            padding-left: 10%;
            padding-right: 10%;
            h2 {
                width: 100%;
                font-size: 18px;
                &:after {
                    margin: 30px auto;
                    width: 80px;
                }
            }
            .en {
                width: 100%;
                font-size: 14px;
                line-height: 24px;
            }
        }
        .bottom {
            .item {
                width: 50%!important;
                margin-right: 0!important;
                .num {
                    font-size: 30px;
                }
                .text {
                    font-size: 14px;
                }
            }
        }
    }
    .advantage {
        margin-top: 50px;
        .advantage-title  {
            font-size: 24px;
        }
        .advantage-desc {
            font-size: 14px;
        }
    }
    .advantage-box {
        .images {
            display: none;
        }
        .list {
            .item {
                width: 100%;
                height: initial;
                margin-bottom: 7px;
                &:nth-child(1) {
                    background: url('/advantage01.png') no-repeat;
                    background-size: cover;
                }
                &:nth-child(2) {
                    background: url('/advantage02.png') no-repeat;
                    background-size: cover;
                }
                &:nth-child(3) {
                    background: url('/advantage03.png') no-repeat;
                    background-size: cover;
                }
                &:nth-child(4) {
                    background: url('/advantage04.png') no-repeat;
                    background-size: cover;
                }
                .bottom {
                    position: initial;
                    .title {
                        font-size: 20px;
                    }
                    .subtitle {
                        font-size: 14px;
                    }
                    .desc {
                        font-size: 12px;
                        line-height: 23px;
                    }
                }
            }
        }
    }

    .news {
        .left {
            width: 100%;
            height: auto;
            .list {
                .item {
                    width: 100%;
                }
            }
        }
        .right {
            display: none;
        }
    }

}
</style>

