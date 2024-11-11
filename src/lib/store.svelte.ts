import { Rect, type Orientation } from './types.js';

interface ITooltipStore {
	isHovered: boolean;
	text: string;
	spawnerRect: Rect;
	orientation: Orientation;
	class: string;
}

export let tooltipStore: ITooltipStore = $state({
	isHovered: false,
	text: '',
	spawnerRect: new Rect(),
	orientation: 'horizontal',
	class: ''
});
