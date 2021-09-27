import {html} from '../../../node_modules/lit-html/lit-html.js';
import {firstEleTemplate} from '../firstEleSection/firstSectionTemplate.js';
import { secondSectionTemplate } from '../secondSection/secondSectionTemplate.js';

export let homeTemplate = (product) => html`
        
            ${firstEleTemplate(product)}
            ${secondSectionTemplate()}

`;