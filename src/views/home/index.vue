<template>
    <div class="view-home">
        <common-header>
            <template v-slot:ch-custom-opecation>
                <div class="ch-search">
                    <i-input v-model="name" suffix="ios-search" style="width: 220px" placeholder="搜索项目" @on-enter="handleInputEnter" />
                </div>
            </template>
        </common-header>
        <div class="vh-content">
            <div class="vh-content-left">
                <cm-slider />
            </div>
            <div class="vh-content-right">
                <div class="vh-content-rigth-title">
                    <h3>我的工作台</h3>
                </div>
                <div class="vh-content-right-table">
                    <cm-panel :projects="projects" />
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import { mapState, mapActions } from 'vuex';
    import Panel from './components/panel.vue';
    import Slider from './components/slider.vue';
    import CommonHeader from '@/components/header/index';

    export default {
        name: 'view-home',
        components: {
            'cm-panel': Panel,
            'cm-slider': Slider,
            'common-header': CommonHeader,
        },
        data: function() {
            return {
                name: '',
            };
        },
        computed: mapState('project', {
            projects: state => state.projects,
            pagination: state => state.pagination,
        }),
        mounted: function() {
            this.getProjects();
        },
        methods: {
            ...mapActions('project', ['getProjects']),
            
            handlePaginationChange: function(pageNo) {
                this.getProjects({ pageNo: pageNo - 1, name: this.name });
            },

            handleInputEnter: function() {
                this.getProjects({ name: this.name });
            }
        },
    }
</script>

<style lang="less" scoped>
    .vh-content {
        display: flex;
        justify-content: space-between;
    }
    .vh-content-left {
        width: 250px;
        height: calc(100vh - 46px);
    }
    .vh-content-right {
        flex: 1;
        width: 100%;
        position: relative;
        box-sizing: border-box;
        padding: 20px 46px 0 46px;
    }
    .vh-content-rigth-title {
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #eeeeee;
    }
</style>
