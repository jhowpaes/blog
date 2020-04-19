import React, {forwardRef, memo} from 'react';
import {TextInput} from 'react-native';
import {FontGuide} from '../../Utils/styleGuide';
import {ITextStyle as styles} from './styles';

interface InputProps {
  onChange?(value: any): void;
  value?: string;
  label?: string;
  placeholder?: string;
  autoCorrect?: boolean;
  maxLength?: number;
  type?: 'text' | 'number' | 'password' | 'email' | 'phone';
}

const IText = (
  {
    onChange,
    value,
    placeholder,
    autoCorrect,
    maxLength,
    type = 'text',
  }: InputProps,
  ref:
    | string
    | ((instance: TextInput | null) => void)
    | React.RefObject<TextInput>
    | null
    | undefined,
) => {
  return (
    <TextInput
      style={[styles.input, FontGuide.textInput]}
      placeholder={placeholder}
      autoCorrect={autoCorrect}
      onChange={onChange}
      secureTextEntry={type === 'password'}
      ref={ref}
      maxLength={maxLength}
      value={value || undefined}
    />
  );
};

export default memo(forwardRef(IText));
