// @flow
import { welcome } from './welcome';

describe('Describe multiply', () => {
	test('it should return "Hello, User. Welcome to JavaScript Playground!"', () => {
		expect(welcome()).toBe(`Hello, User. Welcome to JavaScript Playground!`);
	});

	test('it should return "Hello, George. Welcome to JavaScript Playground"', () => {
		expect(welcome('George')).toBe(
			`Hello, George. Welcome to JavaScript Playground!`
		);
	});
});
