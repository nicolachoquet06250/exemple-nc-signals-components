import './style.css'
import {App} from "./components/app";

App({client: false}).hydrate(document.querySelector('#app')!);
