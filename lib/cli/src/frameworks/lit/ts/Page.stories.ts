import { html } from 'lit';
import * as HeaderStories from './Header.stories';
import './Page';

export default {
  title: 'Example/Page',
};

const Template = ({ user }: any) => html`<sb-page user="${user}"></sb-page>`;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
