const CancelablePromise = require('./cancelable-promice')

const { describe, expect, test } = global

describe('CancelablePromise test', () => {
  test('throws on wrong constructor arguments', () => {
    expect(() => new CancelablePromise()).toThrowError()
    expect(() => new CancelablePromise('wrong')).toThrowError()
  })

  test('create cancelable promise', () => {
    let isCompleted = false
    const promise = new CancelablePromise(() => isCompleted = true)
    expect(promise).toBeInstanceOf(CancelablePromise)
    expect(isCompleted).toBe(true)