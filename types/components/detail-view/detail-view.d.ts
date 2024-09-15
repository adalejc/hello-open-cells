import { LitElement } from 'lit';
export declare class DetailView extends LitElement {
    item: {
        image: string;
        name: string;
        status: string;
        species: string;
        location: {
            name: string;
        };
        gender: string;
    };
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
