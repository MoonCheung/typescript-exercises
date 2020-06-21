/*
 * @Description: 用于环境变量，避免多个函数的类型重复
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2020-06-16 22:39:36
 */

declare module 'stats' {
  type comparator<T> = (a: T, b: T) => number;

  export function getMaxIndex<T>(input: T[], comparator: comparator<T>): number;
  export function getMaxElement<T>(input: T[], comparator: comparator<T>): T;
  export function getMinIndex<T>(input: T[], comparator: comparator<T>): number;
  export function getMinElement<T>(input: T[], comparator: comparator<T>): T;
  export function getMedianIndex<T>(input: T[], comparator: comparator<T>): number;
  export function getMedianElement<T>(input: T[], comparator: comparator<T>): T;
  export function getAverageValue<T>(input: T[], comparator: comparator<T>): number;
}
