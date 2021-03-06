import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { getSection, Parent, Child } from 'app/stories/sections';
import { content } from 'app/stories/decorators';
import { Button } from '../Button';
import { ButtonType } from '../buttonType';

export default {
  title: getSection(Parent.inputs, Child.button),
  component: Button,
  decorators: [withKnobs, content()]
};

export const Default = () => (
  <Button
    text={text('text', 'Hello Button')}
    disabled={boolean('disabled', false)}
    buttonType={select('ButtonTypes', ButtonType, ButtonType.BUTTON)}
    onClick={action('clicked')}
  />
);
