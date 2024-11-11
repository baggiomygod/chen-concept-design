<template>
    <div>
        <web-header></web-header>
        <div class="wrap">
            <div class="title">
                <span>ABOUT US</span>
            </div>
            <div class="main">
                <img src="../static/about.jpg" alt="ABOUT US" class="img">
                <div class="content" v-html="company.content"></div>
                <div class="clear"></div>
            </div>
        </div>
        <web-footer></web-footer>
    </div>
</template>

<script>
import { getProductCategory, getNewsInfo } from '@/api/getData'
import webHeader from '@/components/web-header.vue'
import webFooter from '@/components/web-footer.vue'

export default ({
    components: {
        webHeader,
        webFooter
    },
    head() {
        return {
            title: `关于-${this.head.title}`
        }
    },
    async asyncData({app}) {
        const company = await getNewsInfo({ id: 6 })
        console.log(company)
        return {
            head: app.head,
            company: company.info,
        }
    }
})
</script>

<style lang="less" scoped>

.title {
    text-align: center;
    font-size: 24px;
    color: #000;
    span {
        display: block;
        font-size: 14px;
        color: #7f7f7f;
    }
}
.main {
    margin-top: 50px;
    .img {
        width: 45%;
        float: left;
        margin-right: 30px;
        img {
        width: 100%;
        }
    }
    .content {
        width: 50%;
        float: left;
        font-size: 14px;
        line-height: 27px;
    }
}

@media screen and (max-width: 750px) {
    .main {
        .img {
            width: 100%;
        }
        .content {
            width: 100%;
        }
    }
}

</style>
