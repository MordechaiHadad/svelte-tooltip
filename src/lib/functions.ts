import type { Orientation, Alignment, Position } from "./types.js";

export const getDynamicPosition = (
	node: HTMLElement,
	spawnerCoordinates: Position,
	orientation: Orientation
): Alignment => {
	let position: Alignment = 'top';

	const rect = node.getBoundingClientRect();
	const windowHeight = window.innerHeight;
	const windowWidth = window.innerWidth;
	if (orientation === 'vertical') {
		if (spawnerCoordinates.y + rect.height > windowHeight) {
			position = 'top';
		} else {
			position = 'bottom';
		}
	} else if (orientation === 'horizontal') {
		if (spawnerCoordinates.x + rect.width > windowWidth) {
			position = 'left';
		} else {
			position = 'right';
		}
	}

	return position;
};