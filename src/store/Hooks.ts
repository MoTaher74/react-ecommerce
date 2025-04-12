import type {RootState,AppDispatch} from ".";
import {useSelector,useDispatch} from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

// use throughout your app instead of plain

export const useAppDispatch:()=>AppDispatch=useDispatch;
/**
 * A custom hook that acts as a strongly-typed wrapper around the `useSelector` hook from Redux.
 * This hook is specifically typed to work with the application's `RootState`, ensuring type safety
 * when selecting state from the Redux store.
 *
 * @typeParam RootState - The type representing the root state of the Redux store.
 *
 * @example
 * // Example usage:
 * const user = useAppSelector((state) => state.user);
 *
 * @see {@link https://react-redux.js.org/api/hooks#useselector | Redux useSelector Documentation}
 */
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;



