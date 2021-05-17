import './Header';
import { html } from 'lit';

export default {
  title: 'Example/Header',
};

const Template = ({ user }) => html`<sb-header .user="${user}"></sb-header>`;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
