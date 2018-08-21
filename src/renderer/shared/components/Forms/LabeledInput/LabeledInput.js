import React from 'react';
import classNames from 'classnames';
import { string, node } from 'prop-types';

import Label from '../Label';
import Input from '../Input';
import styles from './LabeledInput.scss';

export default function LabeledInput(props) {
  const { id, label, labelClass, ...passDownProps } = props;

  return (
    <Label htmlFor={id} label={label} className={classNames(styles.labeledInput, labelClass)}>
      <Input id={id} {...passDownProps} />
    </Label>
  );
}

LabeledInput.propTypes = {
  id: string.isRequired,
  label: node.isRequired,
  labelClass: string
};

LabeledInput.defaultProps = {
  labelClass: null
};
