import {defineComponent, html} from 'nc-signals-components';
import {toUcFirst} from "./helpers.mjs";
import {Counter} from './counter.mjs';

/**
 * @typedef {object} AppProps
 * @property {string|undefined} name name to says hello
 */

/** @type {import('nc-signals-components').Component<AppProps>} */
export const App = defineComponent(props => {
    const name = props.name ? `- ${toUcFirst(props.name)}` : '';

    return html`
        <head>
            <title>Test sans build ${name}</title>
        </head>
        
        <div>
            <h1>Hello ${props?.name ? toUcFirst(props.name) : 'World'}</h1>
        
            ${Counter({
            label: 'Counter',
            min: 0,
            max: 5,
            loop: true
        })}
        </div>
    `
});
