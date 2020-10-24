<template>
	<div :style="dragableStyles" :id="dragableInstanceId" :class="`${$prefix}-container`" @mousedown="handleMouseDown">
		<slot></slot>
	</div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>
