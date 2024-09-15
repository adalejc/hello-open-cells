import { LitElement } from 'lit';
export declare class DataDm extends LitElement {
    apiUrl: string;
    method: string;
    getData(): void;
    getCharacterById(id: number): void;
    _processResponseSuccess(response: Object): void;
    _processResponseError(error: Object): void;
    private _sendData;
}
