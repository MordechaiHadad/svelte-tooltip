<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getDynamicPosition } from './functions.js';
	import { type Position } from './types.js';
	import { fade } from 'svelte/transition';
	import { tooltipStore } from './store.svelte.js';

	let { transition = fade, class: className = '' } = $props();

	let self: HTMLElement | undefined = $state(undefined);
	let position: Position = $state({ x: 0, y: 0 });

	$effect(() => {
		if (tooltipStore.isHovered) {
			let elementRect = self?.getBoundingClientRect();
			if (!elementRect) return;
			const spawnerCoordinates = tooltipStore.spawnerRect;
			const spawnerPosition = {
				x: spawnerCoordinates.right,
				y: spawnerCoordinates.bottom
			};

			const alignment = getDynamicPosition(self, spawnerPosition, tooltipStore.orientation);

			const spawnerXCenter = (spawnerCoordinates.left + spawnerCoordinates.right) / 2;
			const spawnerYCenter = (spawnerCoordinates.top + spawnerCoordinates.bottom) / 2;
			const elementXCenter = elementRect.width / 2;
			const elementYCenter = elementRect.height / 2;
			const center = {
				x: spawnerXCenter - elementXCenter,
				y: spawnerYCenter - elementYCenter
			};

			if (alignment === 'top')
				position = {
					x: 0 < center.x ? center.x : 0,
					y: spawnerCoordinates.top + elementRect.height
				};
			else if (alignment === 'bottom')
				position = {
					x: 0 < center.x ? center.x : 0,
					y: spawnerCoordinates.bottom
				};
			//FIX: Top alignment is not working properly when having an overflow and spawner is at the bottom of the viewport
			else if (alignment === 'left')
				position = {
					x: spawnerCoordinates.left - elementRect.width,
					y: 0 < center.y ? center.y : 0
				};
			else if (alignment === 'right')
				position = {
					x: spawnerCoordinates.right,
					y: 0 < center.y ? center.y : 0
				};
		} else if (!tooltipStore.isHovered) {
			position = { x: 0, y: 0 };
		}
	});
</script>

{#if tooltipStore.isHovered}
	<div
		transition:transition
		class={twMerge('absolute z-50', className, tooltipStore.class)}
		bind:this={self}
		style="top: {position.y}px; left: {position.x}px;"
	>
		{tooltipStore.text}
	</div>
{/if}
