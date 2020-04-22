import React, {forwardRef, memo} from 'react';
import {Container, TInput} from './styles';

interface Props {}

const ITextArea = ({...rest}: Props, ref: string) => {
  return (
    <Container>
      <TInput ref={ref} {...rest} />
    </Container>
  );
};

export default memo(forwardRef(ITextArea));
