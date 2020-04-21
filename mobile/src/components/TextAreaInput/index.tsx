import React, {forwardRef, memo} from 'react';
import {TextInput} from 'react-native';
import {FontGuide} from '../../Utils/styleGuide';
import {TextAreaInputStyle as styles} from './styles';

interface InputProps {
  onChange?(value: any): void;
  value?: string;
  label?: string;
  placeholder?: string;
  autoCorrect?: boolean;
  maxLength?: number;
  type?: 'text' | 'number' | 'password' | 'email' | 'phone';
}

const TextAreaInput = (
  {onChange, value, placeholder, autoCorrect, type = 'text'}: InputProps,
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
      maxLength={280}
      value={value || undefined}
      multiline
      numberOfLines={4}
    />
  );
};

export default memo(forwardRef(TextAreaInput));
