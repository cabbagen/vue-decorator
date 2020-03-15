<template>
    <div class="view-topic">
        <common-header />
        <div class="vt-content">
            <div class="vt-content-left">
                <mods />
            </div>
            <div class="vt-content-middle">
                <mobile :mobileComponents="mobileComponents" />
            </div>
            <div class="vt-content-right">
                <panels />
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import { mapState } from 'vuex';
    import CommonHeader from '@/components/header/index.vue';
    import Panels from './components/panels.vue';
    import Mods from './components/mods.vue';
    import Mobile from './components/mobile.vue';

    export default {
        name: 'view-topic',
        components: {
            CommonHeader,
            Panels,
            Mods,
            Mobile,
        },
        computed: mapState('page', {
            mobileComponents: state => state.selectedPageModules,
        }),
        data: function() {
            return {
            };
        }
    }
</script>

<style lang="less" scoped>
    .vt-content {
        display: flex;
        height: calc(100vh - 46px);
        justify-content: space-between;
    }
    .vt-content-left {
        width: 180px;
        overflow-y: scroll;
        background-color: #ffffff;
    }
    .vt-content-right {
        width: 220px;
        overflow-y: scroll;
        border-left: 1px solid #cccccc;
        background-color: #f8f8f9;
    }
    .vt-content-middle {
        flex: 1;
        width: 100%;
    }
</style>
