<template>
    <div class="footer">
        jack-chen　address：xxxx　phone: 15155555555555
    </div>
</template>
<script>
import Vue from 'vue'
export default  Vue.extend({
    components: {
    },
    data() {
        return {
        }
    },
    computed: {
    },
    
    mounted() {
        
    },
    methods: {
        
    }
})
</script>

<style lang="less" scoped>
.footer {
    width: 100%;
    margin-top: 100px;
    padding: 20px 0;
    text-align: center;
    font-size: 14px;
    // background: #f5f5f5;
    background: #000;
    color: #fff;
}

@media screen and (max-width: 750px) {
    .footer {
        margin-top: 20px;
    }
}
</style>
