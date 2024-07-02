<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { tooltipStore } from './store.js';
	import { getDynamicPosition } from './functions.js';
	import { afterUpdate } from 'svelte';
	import type { Position } from './types.js';

	let self: HTMLElement;

	let position: Position = { x: 0, y: 0 };

	$: if ($tooltipStore.isHovered) {
		afterUpdate(() => {
			let elementRect = self.getBoundingClientRect();
			const spawnerCoordinates = $tooltipStore.spawnerCoordinates;
			const spawnerPosition = {
				x: spawnerCoordinates.right,
				y: spawnerCoordinates.bottom
			};

			const alignment = getDynamicPosition(self, spawnerPosition, $tooltipStore.orientation);

			console.log(alignment, $tooltipStore.orientation);

			if (alignment === 'top')
				position = {
					x: (spawnerCoordinates.left + spawnerCoordinates.right) / 2,
					y: spawnerCoordinates.top + elementRect.height
				};
			else if (alignment === 'bottom')
				position = {
					x: (spawnerCoordinates.left + spawnerCoordinates.right) / 2,
					y: spawnerCoordinates.bottom
				};
			else if (alignment === 'left')
				position = {
					x: spawnerCoordinates.left - elementRect.width,
					y: (spawnerCoordinates.top + spawnerCoordinates.bottom) / 2
				};
			else if (alignment === 'right')
				position = {
					x: spawnerCoordinates.right,
					y: (spawnerCoordinates.top + spawnerCoordinates.bottom) / 2
				};
		});
	} else if (!$tooltipStore.isHovered) {
		position = { x: 0, y: 0 };
	}
</script>

<div
	style:display={$tooltipStore.isHovered ? 'block' : 'none'}
	class={twMerge('absolute', $$props.class)}
	bind:this={self}
	style="top: {position.y}px; left: {position.x}px"
	class:horizontal={$tooltipStore.orientation === 'horizontal'}
	class:vertical={$tooltipStore.orientation === 'vertical'}
>
	{$tooltipStore.text}
</div>

<style>
	.horizontal {
		transform: translateY(-50%);
	}
	.vertical {
		transform: translateX(-50%);
	}
</style>
