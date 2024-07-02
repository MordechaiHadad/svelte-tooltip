import { writable, type Writable } from 'svelte/store';
import type { Coordinates, Orientation, Position } from './types.js';

interface ITooltipStore {
	isHovered: boolean;
	text: string;
	spawnerCoordinates: Coordinates;
	orientation: Orientation;
}

export const tooltipStore: Writable<ITooltipStore> = writable({
	isHovered: false,
	text: '',
	orientation: 'horizontal',
	spawnerCoordinates: { right: 0, bottom: 0, left: 0, top: 0 }
});
