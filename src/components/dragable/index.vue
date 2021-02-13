<template>
	<div :style="dragableStyles" :id="dragableInstanceId" :class="`${$prefix}-container`" @mousedown="handleMouseDown" v-if="!disable">
		<slot></slot>
	</div>
	<div v-else>
		<slot></slot>
	</div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>
