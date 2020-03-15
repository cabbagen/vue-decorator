<template>
    <div class="vh-file" @click="handleProjectClick(item)">
        <div class="vhf-cover"></div>
        <div class="vhf-name">
            <span>{{item.name}}</span>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'view-home-project',
        data: function() {
            return {
            };
        },
        props: {
            item: Object,
        },
        methods: {
            handleProjectClick: function(item) {
                this.$router.push({ path: '/topic', query: { projectId: item.id }});
            }
        }
    }
</script>

<style lang="less" scoped>
    .vh-file {
        width: 160px;
        margin: 10px;
    }
    .vhf-cover {
        height: 180px;
        border: 1px solid #dddddd;
        background-color: #ffffff;
        border-radius: 6px;
    }
    .vhf-name {
        line-height: 30px;
        padding: 0 5px;
        font-size: 14px;
    }
</style>
