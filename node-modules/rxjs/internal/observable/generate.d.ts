import { Observable } from '../Observable';
import { SchedulerLike } from '../types';
export declare type ConditionFunc<S> = (state: S) => boolean;
export declare type IterateFunc<S> = (state: S) => S;
export declare type ResultFunc<S, T> = (state: S) => T;
export interface GenerateBaseOptions<S> {
    /**
     * Initial state.
     */
    initialState: S;
    /**
     * Condition function that accepts state and returns boolean.
     * When it returns false, the generator stops.
     * If not specified, a generator never stops.
     */
    condition?: ConditionFunc<S>;
    /**
     * Iterate function that accepts state and returns new state.
     */
    iterate: IterateFunc<S>;
    /**
     * SchedulerLike to use for generation process.
     * By default, a generator starts immediately.
     */
    scheduler?: SchedulerLike;
}
export interface GenerateOptions<T, S> extends GenerateBaseOptions<S> {
    /**
     * Result selection function that accepts state and returns a value to emit.
     */
    resultSelector: ResultFunc<S, T>;
}
/**
 * Generates an observable sequence by running a state-driven loop
 * producing the sequence's elements, using the specified scheduler
 * to send out observer messages.
 *
 * <img src="./img/generate.png" width="100%">
 *
 * @example <caption>Produces sequence of 0, 1, 2, ... 9, then completes.</caption>
 * const res = generate(0, x => x < 10, x => x + 1, x => x);
 *
 * @example <caption>Using asap scheduler, produces sequence of 2, 3, 5, then completes.</caption>
 * const res = generate(1, x => x < 5, x =>  * 2, x => x + 1, Rx.Scheduler.asap);
 *
 * @see {@link from}
 * @see {@link create}
 *
 * @param {S} initialState Initial state.
 * @param {function (state: S): boolean} condition Condition to terminate generation (upon returning false).
 * @param {function (state: S): S} iterate Iteration step function.
 * @param {function (state: S): T} resultSelector Selector function for results produced in the sequence.
 * @param {Scheduler} [scheduler] A {@link SchedulerLike} on which to run the generator loop. If not provided, defaults to emit immediately.
 * @returns {Observable<T>} The generated sequence.
 */
export declare function generate<T, S>(initialState: S, condition: ConditionFunc<S>, iterate: IterateFunc<S>, resultSelector: ResultFunc<S, T>, scheduler?: SchedulerLike): Observable<T>;
/**
 * Generates an observable sequence by running a state-driven loop
 * producing the sequence's elements, using the specified scheduler
 * to send out observer messages.
 * The overload uses state as an emitted value.
 *
 * <img src="./img/generate.png" width="100%">
 *
 * @example <caption>Produces sequence of 0, 1, 2, ... 9, then completes.</caption>
 * const res = generate(0, x => x < 10, x => x + 1);
 *
 * @example <caption>Using asap scheduler, produces sequence of 1, 2, 4, then completes.</caption>
 * const res = generate(1, x => x < 5, x => x  * 2, Rx.Scheduler.asap);
 *
 * @see {@link from}
 * @see {@link create}
 *
 * @param {S} initialState Initial state.
 * @param {function (state: S): boolean} condition Condition to terminate generation (upon returning false).
 * @param {function (state: S): S} iterate Iteration step function.
 * @param {Scheduler} [scheduler] A {@link SchedulerLike} on which to run the generator loop. If not provided, defaults to emit immediately.
 * @returns {Observable<S>} The generated sequence.
 */
export declare function generate<S>(initialState: S, condition: ConditionFunc<S>, iterate: IterateFunc<S>, scheduler?: SchedulerLike): Observable<S>;
/**
 * Generates an observable sequence by running a state-driven loop
 * producing the sequence's elements, using the specified scheduler
 * to send out observer messages.
 * The overload accepts options object that might contain initial state, iterate,
 * condition and scheduler.
 *
 * <img src="./img/generate.png" width="100%">
 *
 * @example <caption>Produces sequence of 0, 1, 2, ... 9, then completes.</caption>
 * const res = generate({
 *   initialState: 0,
 *   condition: x => x < 10,
 *   iterate: x => x + 1,
 * });
 *
 * @see {@link from}
 * @see {@link create}
 *
 * @param {GenerateBaseOptions<S>} options Object that must contain initialState, iterate and might contain condition and scheduler.
 * @returns {Observable<S>} The generated sequence.
 */
export declare function generate<S>(options: GenerateBaseOptions<S>): Observable<S>;
/**
 * Generates an observable sequence by running a state-driven loop
 * producing the sequence's elements, using the specified scheduler
 * to send out observer messages.
 * The overload accepts options object that might contain initial state, iterate,
 * condition, result selector and scheduler.
 *
 * <img src="./img/generate.png" width="100%">
 *
 * @example <caption>Produces sequence of 0, 1, 2, ... 9, then completes.</caption>
 * const res = generate({
 *   initialState: 0,
 *   condition: x => x < 10,
 *   iterate: x => x + 1,
 *   resultSelector: x => x,
 * });
 *
 * @see {@link from}
 * @see {@link create}
 *
 * @param {GenerateOptions<T, S>} options Object that must contain initialState, iterate, resultSelector and might contain condition and scheduler.
 * @returns {Observable<T>} The generated sequence.
 */
export declare function generate<T, S>(options: GenerateOptions<T, S>): Observable<T>;
