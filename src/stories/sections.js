export const Parent = {
  inputs: 'Inputs',
  features: 'Features'
};

export const Child = {
  button: 'Button',
  radioButton: 'Radio button',
  textInput: 'Text'
};

export const getSection = (parent, child) => {
  if (parent && child) {
    return `${parent}/${child}`;
  }

  return `${parent}`;
};