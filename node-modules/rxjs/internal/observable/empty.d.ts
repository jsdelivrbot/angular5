import { Observable } from '../Observable';
import { SchedulerLike } from '../types';
/**
 * The same Observable instance returned by any call to {@link empty} without a
 * {@link Scheduler}. It is preferrable to use this over `empty()`.
 */
export declare const EMPTY: Observable<never>;
/**
 * Creates an Observable that emits no items to the Observer and immediately
 * emits a complete notification.
 *
 * <span class="informal">Just emits 'complete', and nothing else.
 * </span>
 *
 * <img src="./img/empty.png" width="100%">
 *
 * This static operator is useful for creating a simple Observable that only
 * emits the complete notification. It can be used for composing with other
 * Observables, such as in a {@link mergeMap}.
 *
 * ## Examples
 * ### Emit the number 7, then complete
 * ```javascript
 * const result = empty().pipe(startWith(7));
 * result.subscribe(x => console.log(x));
 * ```
 *
 * ### Map and flatten only odd numbers to the sequence 'a', 'b', 'c'
 * ```javascript
 * const interval$ = interval(1000);
 * result = interval$.pipe(
 *   mergeMap(x => x % 2 === 1 ? of('a', 'b', 'c') : empty()),
 * );
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following to the console:
 * // x is equal to the count on the interval eg(0,1,2,3,...)
 * // x will occur every 1000ms
 * // if x % 2 is equal to 1 print abc
 * // if x % 2 is not equal to 1 nothing will be output
 * ```
 *
 * @see {@link create}
 * @see {@link never}
 * @see {@link of}
 * @see {@link throw}
 *
 * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
 * the emission of the complete notification.
 * @return {Observable} An "empty" Observable: emits only the complete
 * notification.
 * @static true
 * @name empty
 * @owner Observable
 * @deprecated Deprecated in favor of using EMPTY constant.
 */
export declare function empty(scheduler?: SchedulerLike): Observable<never>;
export declare function emptyScheduled(scheduler: SchedulerLike): Observable<never>;
