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
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16')];

export const server_loads = [];

export const dictionary = {
	"/": [~3],
	"/demos/colors": [~4,[2]],
	"/demos/happyfaces": [5,[2]],
	"/demos/menus": [6,[2]],
	"/demos/sfline": [~7,[2]],
	"/demos/stickycircle": [8,[2]],
	"/demos/worldmap": [~9,[2]],
	"/histmm": [~10],
	"/irisscatter": [~11],
	"/newplot": [12],
	"/popbarchart": [~13],
	"/worldmapcitiessize": [~15],
	"/worldmapcities": [~14],
	"/worldmapmm": [~16]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';