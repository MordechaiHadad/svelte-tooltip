import { tooltipStore } from './store.js';
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
		const target = event.target as HTMLElement;
		const rect = target.getBoundingClientRect();

		tooltipStore.update(() => ({
			isHovered: true,
			text: props.text,
			orientation: props.orientation || 'horizontal',
			spawnerRect: rect,
			class: props.class || ''
		}));
	};

	const hideTooltip = () => {
		tooltipStore.update((store) => ({
			...store,
			isHovered: false
		}));
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
