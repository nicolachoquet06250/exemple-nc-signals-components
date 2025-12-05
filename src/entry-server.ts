import { renderToString } from 'nc-signals-components';
import { App } from './components/app';

export const render = () => renderToString(App, {client: false});
