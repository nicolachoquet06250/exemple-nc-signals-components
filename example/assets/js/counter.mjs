import {signal, defineComponent, html} from 'nc-signals-components';

/**
 * @typedef {object} CounterProps
 * @property {string|undefined} label counter prefix
 * @property {number|undefined} min min value
 * @property {number|undefined} max max value
 * @property {boolean|undefined} loop loop between min and max values or not
 */

/** @type {import('nc-signals-components').Component<CounterProps>} */
export const Counter = defineComponent(props => {
    props.loop = props.loop === undefined ? false : props.loop;
    const counter = signal(0);

    /**
     * @param {'inc'|'dec'} type
     * @returns {(e: Event) => void}
     */
    const createHandler = (type) => {
        if (type === 'inc') {
            return () => {
                counter.set(c => {
                    if (props.max !== undefined && c === props.max) {
                        if (props.loop) return props.min;
                        return c;
                    }
                    return c + 1
                });
            }
        }
        return e => {
            e.preventDefault();
            counter.set(c => {
                if (props.min !== undefined && c === props.min) {
                    if (props.loop) return props.max;
                    return c;
                }
                return c - 1;
            });
        }
    }

    return html`<button 
            onclick="${createHandler('inc')}"
            oncontextmenu="${createHandler('dec')}"
    >
        ${props?.label ? `${props.label} ` : ''}${counter}
    </button>`
});