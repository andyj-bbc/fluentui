import * as React from 'react';
import { Position } from '../../Positioning';
import { IButtonStyles } from '../../compat/Button';
import { IIconProps } from '../../Icon';
import { ITheme, IStyle } from '../../Styling';
import { IKeytipProps } from '../../Keytip';
import { IRefObject, IStyleFunctionOrObject } from '../../Utilities';
import { IButtonProps } from '../../compat/Button';

/**
 * {@docCategory SpinButton}
 */
export interface ISpinButton {
  /**
   * Current value of the control.
   */
  value?: string;

  /**
   * Sets focus to the control.
   */
  focus: () => void;
}

/**
 * {@docCategory SpinButton}
 */
export enum KeyboardSpinDirection {
  down = -1,
  notSpinning = 0,
  up = 1,
}

/**
 * {@docCategory SpinButton}
 */
export interface ISpinButtonProps extends React.HTMLAttributes<HTMLDivElement>, React.RefAttributes<HTMLDivElement> {
  /**
   * Gets the component ref.
   */
  componentRef?: IRefObject<ISpinButton>;

  /**
   * Initial value of the control. Updates to this prop will not be respected.
   *
   * Use this if you intend for the SpinButton to be an uncontrolled component which maintains its own value.
   * Mutually exclusive with `value`.
   * @defaultvalue 0
   */
  defaultValue?: string;

  /**
   * Current value of the control.
   *
   * Use this if you intend to pass in a new value as a result of change events.
   * Mutually exclusive with `defaultValue`.
   */
  value?: string;

  /**
   * Min value of the control. If not provided, the control has no minimum value.
   */
  min?: number;

  /**
   * Max value of the control. If not provided, the control has no maximum value.
   */
  max?: number;

  /**
   * Difference between two adjacent values of the control.
   * This value is used to calculate the precision of the input if no `precision` is given.
   * The precision calculated this way will always be \>= 0.
   * @defaultvalue 1
   */
  step?: number;

  /**
   * A description of the control for the benefit of screen reader users.
   */
  ariaLabel?: string;

  /**
   * ID of a label which describes the control, if not using the default label.
   */
  ariaDescribedBy?: string;

  /**
   * A more descriptive title for the control, visible on its tooltip.
   */
  title?: string;

  /**
   * Whether or not the control is disabled.
   */
  disabled?: boolean;

  /**
   * Custom className for the control.
   */
  className?: string;

  /**
   * Descriptive label for the control.
   */
  label?: string;

  /**
   * Where to position the control's label.
   * @defaultvalue Left
   */
  labelPosition?: Position;

  /**
   * Props for an icon to display alongside the control's label.
   */
  iconProps?: IIconProps;

  /**
   * Callback for when the entered value should be validated.
   * @param value - The entered value to validate
   * @param event - The event that triggered this validate, if any (for accessibility)
   * @returns If a string is returned, it will be used as the new value
   */
  onValidate?: (value: string, event?: React.SyntheticEvent<HTMLElement>) => string | void;

  /**
   * Callback for when the increment button or up arrow key is pressed.
   * @param value - The current value to be incremented
   * @param event - The event that triggered this increment
   * @returns If a string is returned, it will be used as the new value
   */
  onIncrement?: (
    value: string,
    event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
  ) => string | void;

  /**
   * Callback for when the decrement button or down arrow key is pressed.
   * @param value - The current value to be decremented
   * @param event - The event that triggered this decrement
   * @returns If a string is returned, it will be used as the new value
   */
  onDecrement?: (
    value: string,
    event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
  ) => string | void;

  /**
   * Callback for when the user focuses the control.
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * Callback for when the control loses focus.
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * Custom props for the increment button.
   */
  incrementButtonIcon?: IIconProps;

  /**
   * Custom props for the decrement button.
   */
  decrementButtonIcon?: IIconProps;

  /**
   * Custom styling for individual elements within the control.
   */
  styles?: IStyleFunctionOrObject<ISpinButtonStyleProps, ISpinButtonStyles>;

  /**
   * Custom styles for the up arrow button.
   *
   * Note: The buttons are in a checked state when arrow keys are used to increment/decrement
   * the SpinButton. Use `rootChecked` instead of `rootPressed` for styling when that is the case.
   */
  upArrowButtonStyles?: Partial<IButtonStyles>;

  /**
   * Custom styles for the down arrow button.
   *
   * Note: The buttons are in a checked state when arrow keys are used to increment/decrement
   * the SpinButton. Use `rootChecked` instead of `rootPressed` for styling when that is the case.
   */
  downArrowButtonStyles?: Partial<IButtonStyles>;

  /**
   * Theme provided by HOC.
   */
  theme?: ITheme;

  /**
   * Accessible label text for the increment button (for screen reader users).
   */
  incrementButtonAriaLabel?: string;

  /**
   * Accessible label text for the decrement button (for screen reader users).
   */
  decrementButtonAriaLabel?: string;

  /**
   * How many decimal places the value should be rounded to.
   *
   * The default is calculated based on the precision of `step`: i.e. if step = 1, precision = 0.
   * step = 0.0089, precision = 4. step = 300, precision = 2. step = 23.00, precision = 2.
   */
  precision?: number;

  /**
   * The position in the parent set (if in a set).
   */
  ariaPositionInSet?: number;

  /**
   * The total size of the parent set (if in a set).
   */
  ariaSetSize?: number;

  /**
   * Sets the control's aria-valuenow. This is the numeric form of `value`.
   * Providing this only makes sense when using as a controlled component.
   */
  ariaValueNow?: number;

  /*
   * Sets the control's aria-valuetext.
   * Providing this only makes sense when using as a controlled component.
   */
  ariaValueText?: string;

  /**
   * Keytip for the control.
   */
  keytipProps?: IKeytipProps;

  /**
   * Additional props for the input field.
   */
  inputProps?: React.InputHTMLAttributes<HTMLElement | HTMLInputElement>;

  /**
   * Additional props for the up and down arrow buttons.
   */
  iconButtonProps?: IButtonProps;
}

/**
 * {@docCategory SpinButton}
 */
export interface ISpinButtonStyles {
  /**
   * Styles for the root of the component.
   */
  root: IStyle;

  /**
   * Style for the label wrapper element, which contains the icon and label.
   */
  labelWrapper: IStyle;

  /**
   * Style for the icon.
   */
  icon: IStyle;

  /**
   * Style for the label text.
   */
  label: IStyle;

  /**
   * Style for the wrapper element of the input field and arrow buttons.
   */
  spinButtonWrapper: IStyle;

  /**
   * Styles for the input.
   */
  input: IStyle;

  /**
   * Styles for the arrowButtonsContainer
   */
  arrowButtonsContainer: IStyle;
}

/**
 * {@docCategory SpinButton}
 */
export interface ISpinButtonStyleProps {
  theme: ITheme;
  className: string | undefined;
  disabled: boolean;
  isFocused: boolean;
  keyboardSpinDirection: KeyboardSpinDirection;
  labelPosition: Position;
}
