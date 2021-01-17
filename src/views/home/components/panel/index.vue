<template>
    <div :class="`${$prefix}-container`">
        <div :class="`${$prefix}-header`">
            <cp-filter
                :filters="types"
                :selected="filterSelected"
                @handleSelectFilterItem="handleSelectFilterItem"
            />
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
                <span slot="table-created-at" slot-scope="time">{{time | dateFormat}}</span>
                <div slot="table-opecation" slot-scope="project" :class="`${$prefix}-table-opecation`">
                    <span @click="handleOpetationItem('预览', project)">预览</span>
                    <span @click="handleOpetationItem('发布', project)">发布</span>
                    <span @click="handleOpetationItem('删除', project)">删除</span>
                </div>
            </a-table>
        </div>
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>