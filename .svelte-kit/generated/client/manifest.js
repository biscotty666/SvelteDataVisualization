export { matchers } from './matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7')];

export const server_loads = [];

export const dictionary = {
	"/": [~2],
	"/colors": [~3],
	"/happyfaces": [4],
	"/irisscatter": [~5],
	"/popbarchart": [~6],
	"/stickycircle": [7]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};