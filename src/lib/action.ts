import { tooltipStore } from './store.svelte.js';
import type { Orientation } from './types.js';

export function tooltip(
	node: HTMLElement,
	props: { text: string; orientation?: Orientation; class?: string } = {
		text: '',
		orientation: 'horizontal',
		class: ''
	}
) {
	const showTooltip = (event: MouseEvent) => {
		const target = event.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();

		tooltipStore.isHovered = true;
		tooltipStore.text = props.text;
		tooltipStore.orientation = props.orientation || 'horizontal';
		tooltipStore.spawnerRect = rect;
		tooltipStore.class = props.class || '';
	};

	const hideTooltip = () => {
		tooltipStore.isHovered = false;
	};

	node.addEventListener('mouseover', showTooltip);
	node.addEventListener('mouseout', hideTooltip);

	return {
		destroy() {
			node.removeEventListener('mouseover', showTooltip);
			node.removeEventListener('mouseout', hideTooltip);
		}
	};
}
