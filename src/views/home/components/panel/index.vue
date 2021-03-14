<template>
    <div :class="`${$prefix}-container`">
        <div :class="`${$prefix}-header`">
            <cp-filter :filters="types" @handleSelectFilterItem="handleSelectFilterItem" />
        </div>
        <div :class="`${$prefix}-content`">
            <a-table
                rowKey="id"
                :columns="columns"
                :dataSource="projects"
                :pagination="pagination"
                @change="handlePaginationChange"
            >
                <router-link slot="table-name" slot-scope="project" :to="`/topic/${project.id}`">{{project.name}}</router-link>
                <span slot="table-state" slot-scope="state">{{state | stateFormat}}</span>
                <span slot="table-created-at" slot-scope="time">{{time | dateFormat}}</span>
                <div slot="table-opecation" slot-scope="project" :class="`${$prefix}-table-opecation`">
                    <span v-if="project.state > -1" @click="handleOpetationItemByMark(project)">{{`${project.isMark === 2 ? '取消' : ''}标星`}}</span>
                    <span v-if="project.state > -1" @click="handleOpetationItemByPublish(project)">{{`${project.state === 1 ? '下线' : '发布'}`}}</span>
                    <span @click="handleOpetationItemByDelete(project)">{{`${project.state === -1 ? '恢复' : '删除'}`}}</span>
                    <span v-if="project.state > -1" @click="handleProjectPreview(project)">查看</span>
                </div>
            </a-table>
        </div>
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>