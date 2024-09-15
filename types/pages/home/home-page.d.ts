import { LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import '../../components/data-dm/data-dm.ts';
import '../../components/header-template/header-template.ts';
import '../../components/detail-view/detail-view.ts';
import '../../components/modal-basic/modal-basic.ts';
export declare class HomePage extends LitElement {
    pageController: PageController;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    listItems: never[];
    selectedItem: {
        name: string;
    };
    visible: boolean;
    _api: any;
    onPageEnter(): void;
    get dataTemplate(): import("lit-html").TemplateResult<1>;
    get itemsTemplate(): import("lit-html").TemplateResult<1>;
    getCharacterById(id: number): void;
    showCharacterDetails({ detail }: CustomEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
