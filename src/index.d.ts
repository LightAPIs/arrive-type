// Type definitions for arrive 2.4
// Project: https://github.com/uzairfarooq/arrive
// Definitions by: Vijay Pemmaraju <https://github.com/vijaypemmaraju>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Modified by: Light <https://github.com/LightAPIs>

// required for declare global to work
export {};

export interface Options {
  /** Watch for changes to existing elements' attributes */
  fireOnAttributesModification?: boolean | undefined;
  /** Fire callback only once, then auto-unbind */
  onceOnly?: boolean | undefined;
  /** Fire callback for elements that already exist in the DOM */
  existing?: boolean | undefined;
  /** Call callback with null after specified milliseconds and Auto-unbind  (0 = disabled) */
  timeout?: number | undefined;
}

export type ArriveSignature = <E extends Element = Element>(
  element: string,
  handlerOrOptions: ((this: E, element: E) => void) | Options,
  handler?: (this: E, element: E) => void
) => Promise<E>;
export type UnbindArriveSignature = <E extends Element = Element>(
  elementOrHandler?: string | ((this: E, element: E) => void),
  handler?: (this: E, element: E) => void
) => void;
export type LeaveSignature = <E extends Element = Element>(
  element: string,
  handlerOrOptions: ((this: E, element: E) => void) | Options,
  handler?: (this: E) => void
) => Promise<E>;
export type UnbindLeaveSignature = <E extends Element = Element>(
  elementOrHandler?: string | ((this: E, element: E) => void),
  handler?: (this: E, element: E) => void
) => void;

declare global {
  class Arrive {
    static unbindAllArrive: () => void;
    static unbindAllLeave: () => void;
  }

  interface Document {
    arrive: ArriveSignature;
    unbindArrive: UnbindArriveSignature;
    leave: LeaveSignature;
    unbindLeave: UnbindLeaveSignature;
  }

  interface JQuery {
    arrive: ArriveSignature;
    unbindArrive: UnbindArriveSignature;
    leave: LeaveSignature;
    unbindLeave: UnbindLeaveSignature;
  }

  interface Window {
    arrive: ArriveSignature;
    unbindArrive: UnbindArriveSignature;
    leave: LeaveSignature;
    unbindLeave: UnbindLeaveSignature;
  }

  interface NodeList {
    arrive: ArriveSignature;
    unbindArrive: UnbindArriveSignature;
    leave: LeaveSignature;
    unbindLeave: UnbindLeaveSignature;
  }

  interface Element {
    arrive: ArriveSignature;
    unbindArrive: UnbindArriveSignature;
    leave: LeaveSignature;
    unbindLeave: UnbindLeaveSignature;
  }

  interface HTMLCollectionBase {
    arrive: ArriveSignature;
    unbindArrive: UnbindArriveSignature;
    leave: LeaveSignature;
    unbindLeave: UnbindLeaveSignature;
  }
}
