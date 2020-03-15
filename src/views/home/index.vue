<template>
    <div class="view-home">
        <common-header>
            <template v-slot:ch-custom-opecation>
                <div class="ch-search">
                    <i-input
                        v-model="name"
                        suffix="ios-search"
                        style="width: 220px"
                        placeholder="搜索项目"
                        @on-enter="handleInputEnter"
                    />
                </div>
            </template>
        </common-header>
        <div class="vh-content">
            <div class="vh-content-left">
                <slider />
            </div>
            <div class="vh-content-right">
                <template v-if="projects.length > 0">
                    <div class="vh-content-right-projects">
                        <project :item="item" :key="index" v-for="(item, index) in projects" />
                    </div>
                    <div class="vh-content-right-pagination" v-if="pagination.total > 0">
                        <Page
                            :total="pagination.total"
                            :current="pagination.pageNo + 1"
                            :page-size="pagination.pageSize"
                            @on-change="handlePaginationChange"
                        />
                    </div>
                </template>
                <template v-else>
                    <div class="vh-content-right-empty">
                        <img src="/images/empty.png" alt="empty" />
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import { mapState, mapActions } from 'vuex';
    import CommonHeader from '@/components/header/index';
    import Slider from './components/slider.vue';
    import Project from './components/project.vue';

    export default {
        name: 'view-home',
        components: {
            CommonHeader,
            Slider,
            Project,
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
        box-sizing: border-box;
        padding: 19px 40px 0 40px;
        position: relative;
    }
    .vh-content-right-empty {
        display: flex;
        justify-content: center;

        img {
            display: block;
            width: 200px;
            margin-top: 80px;
        }
    }
    .vh-content-right-projects {
        display: flex;
        margin: 0 -10px;
        flex-wrap: wrap;
        align-items: flex-start;
    }
    .vh-content-right-pagination {
        display: flex;
        position: absolute;
        bottom: 30px;
        left: 45%;
        justify-content: center;
    }
</style>












