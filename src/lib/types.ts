export type Orientation = 'horizontal' | 'vertical';

export type Alignment = 'top' | 'bottom' | 'left' | 'right';

export type Position = {
	x: number;
	y: number;
};

export class Rect {
	right: number;
	left: number;
	top: number;
	bottom: number;
	width: number;
	height: number;
	x: number;
	y: number;

	constructor() {
		this.right = 0;
		this.left = 0;
		this.top = 0;
		this.bottom = 0;
		this.width = 0;
		this.height = 0;
		this.x = 0;
		this.y = 0;
	}
}
