import {html} from "nc-signals-components";

type Props = {
    text: string
}

export function ListItem({text}: Props) {
    return html`<li>${text}</li>`;
}