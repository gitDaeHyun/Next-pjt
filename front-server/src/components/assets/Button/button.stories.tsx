import { Meta, Story } from '@storybook/react';
import { ButtonProps } from './buttonType';
import ButtonComponent from './button';

export default {
  title: 'assets/Button',
  component: ButtonComponent,
  parameters: {},
  argTypes: {
    themes: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
    size : { control: 'select', options: ['small','medium', 'large'] },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <ButtonComponent {...args} />
);

export const Button = Template.bind({});
Button.args = {
  color: 'blue',
  size: 'small',
  themes: 'primary',
};

Button.argTypes = {
  themes: {
    control: 'select',
    options: ['primary', 'secondary', 'tertiary'],
  },
  size : { 
    control: 'select', 
    options: ['small','medium', 'large'] },
};