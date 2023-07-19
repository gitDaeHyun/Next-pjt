import React, { useEffect, useState, useRef } from 'react';
import ButtonComponent from './button';

import {ButtonProps} from './buttonType'


const Button: React.FC<ButtonProps> = (props, {}: ButtonProps) => (
  <ButtonComponent {...props} />
);

export default Button;