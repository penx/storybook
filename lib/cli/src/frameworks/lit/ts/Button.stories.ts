import './Button';
import { html } from 'lit';

export default {
  title: 'Example/Button',
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
  parameters: {
    actions: {
      handles: ['click', 'sb-button:click'],
    },
  },
};

const Template = ({ primary, backgroundColor, size, label, onClick }: any) =>
  html`<sb-button
    ?primary="${primary}"
    .size="${size}"
    .label="${label}"
    .backgroundColor="${backgroundColor}"
    @sb-button:click="${onClick}"
  ></sb-button>`;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  onClick: (e: Event) => console.log(`Clicked`, e),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  onClick: (e: Event) => console.log(`Clicked`, e),
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  onClick: (e: Event) => console.log(`Clicked`, e),
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  onClick: (e: Event) => console.log(`Clicked`, e),
};
