<template>
    <div :class="`${$prefix}-container`">
        <div :class="`${$prefix}-${projectInfo.type === 3 ? 'web' : 'mobile'}`">
            <div class="inner">
                <draggable v-model="modules" @start="handleDragStart" @end="handleDragEnd" v-bind="dragOptions">
                    <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                        <div v-for="(item) in modules" :key="item.id" :class="`${$prefix}-row`">
                            <component
                                :data="item"
                                :componentId="item.id"
                                :is="`tc-${item.type}-edit`"
                                @visibleMonitor="visibleMonitor"
                                @handleComponentOk="handleComponentOk"
                                @handleComponentDelete="handleComponentDelete"
                            />
                        </div>
                    </transition-group>
                </draggable>
            </div>
        </div>
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>
