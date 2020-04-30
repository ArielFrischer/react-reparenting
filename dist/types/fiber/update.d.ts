import type { Fiber } from 'react-reconciler';
/**
 * Update the indices of a fiber and its next siblings.
 *
 * @param fiber - The fiber.
 * @param index - The index of the fiber.
 * @returns - The last sibling index.
 */
export declare function updateFibersIndices(fiber: Fiber, index: number): number;
/**
 * Update the debug owner.
 * I have not yet inquired about how the _debug fields are chosen.
 * For now only the debug owner and source if there is at least one sibling from which to copy those properties.
 * TODO:
 * - _debugID - does it need to be changed?
 * - _debugSource - is it ok like this?
 * - _debugOwner - is it ok like this?
 * - _debugHookTypes - does it need to be changed?
 *
 * @param child - The child fiber.
 * @param parent - The parent fiber.
 */
export declare function updateFiberDebugFields(child: Fiber, parent: Fiber): void;