import typescriptLogo from '../typescript.svg';
import viteLogo from '/vite.svg';
import {html, signal} from "nc-signals-components";
import {Counter} from "./counter.ts";
import {ListItem} from "./list-item.ts";

type Props = {
    client?: boolean
}

export function App({client = true}: Props = {}) {
    const list = signal<string[]>([]);
    const newValue = signal('');

    setTimeout(() => newValue.set('autocompleted'), 5000);

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        list.set(t => newValue() !== '' ? [...t, newValue()] : t);
        newValue.reset();
    }

    return html`
        <head>
            <title>Une app de test avec la lib nc-signals-components</title>
        </head>
        
        <div>
            <a href="https://vite.dev" target="_blank">
                <img src="${viteLogo}" class="logo" alt="Vite logo"/>
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank">
                <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo"/>
            </a>
            <h1>Vite + TypeScript ${client ? 'CSR' : 'SSR'}<br>(test lib)</h1>
    
            <ul>
                ${list.map(t => ListItem({text: t}))}
            </ul>
    
            ${Counter}
    
            <form onsubmit="${handleSubmit}">
                <div style="margin-bottom: 10px;">
                    <!-- Mise à jour automatique de newValue à l'input -->
                    <input type="text" value="${newValue}"/>
                </div>
    
                <button type="submit">Créer un item</button>
            </form>
    
            <p class="read-the-docs">
                Click on the Vite and TypeScript logos to learn more
            </p>
        </div>
    `
}