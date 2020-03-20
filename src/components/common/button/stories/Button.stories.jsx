import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../Button';

export default {
  title: 'Button',
  component: Button
};

export const Text = () => <Button text="Hello Button" onClick={action('clicked')} />;

export const Emoji = () => <Button text="😀 😎 👍 💯" onClick={action('clicked')} />;

Emoji.story = {
  name: 'with emoji'
};
