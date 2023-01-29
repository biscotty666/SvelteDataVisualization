export { matchers } from './matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10')];

export const server_loads = [];

export const dictionary = {
	"/": [~3],
	"/demos/colors": [~4,[2]],
	"/demos/happyfaces": [5,[2]],
	"/demos/stickycircle": [6,[2]],
	"/irisscatter": [~7],
	"/mmworldmap": [~8],
	"/popbarchart": [~9],
	"/sfline": [~10]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};