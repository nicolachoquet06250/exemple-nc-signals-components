import {computed, html, signal} from "nc-signals-components";

export function Counter() {
    const count = signal(0);
    const double = computed(() => count() * 2);

    const handleClick = () => count.set(c => c + 1);
    const handleRightClick = (e: MouseEvent) => {
        e.preventDefault();
        count.set(c => c - 1);
    };

    return html`<div class="card">
        <button type="button" onclick="${handleClick}" oncontextmenu="${handleRightClick}">
            Clicks: ${count} (*2 = ${double})
        </button>
    </div>`;
}