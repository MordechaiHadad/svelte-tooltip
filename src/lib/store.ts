import { writable, type Writable } from 'svelte/store';
import { Rect, type Orientation } from './types.js';

interface ITooltipStore {
	isHovered: boolean;
	text: string;
	spawnerRect: Rect;
	orientation: Orientation;
	class: string;
}

export const tooltipStore: Writable<ITooltipStore> = writable({
	isHovered: false,
	text: '',
	spawnerRect: new Rect(),
	orientation: 'horizontal',
	class: ''
});
