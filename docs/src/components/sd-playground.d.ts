import { Volume } from '@bundled-es-modules/memfs';
import { LitElement } from 'lit';
import '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js';
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import type { Config } from '../../../types/Config.js';
declare type Files = 'tokens' | 'config' | 'script' | 'output';
export declare const registeredComponents: SdPlayground[];
declare class SdPlayground extends LitElement {
    static get styles(): import("lit").CSSResult;
    static get properties(): {
        tokens: {
            reflect: boolean;
            type: StringConstructor;
        };
        config: {
            reflect: boolean;
            type: StringConstructor;
        };
        script: {
            reflect: boolean;
            type: StringConstructor;
        };
        outputFiles: {
            state: boolean;
        };
        defaultSelected: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
    };
    get currentFile(): Files;
    set currentFile(v: Files);
    tokens: string;
    config: string;
    script: string;
    output: string;
    defaultSelected: Files;
    outputFiles: string[];
    _currentFile: Files;
    editor: any;
    volume: InstanceType<typeof Volume>;
    hasInitialized: Promise<void>;
    hasInitializedResolve: (value: void) => void;
    constructor();
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    init(): Promise<void>;
    initMonaco(): Promise<void>;
    initData(): Promise<Config>;
    initScript(): Promise<void>;
    initTokens(): Promise<{
        colors: {
            red: {
                value: string;
                type: string;
            };
        };
    }>;
    initConfig(tokens: Record<string, unknown>): Promise<Config>;
    getFileData(file: 'tokens' | 'config' | 'script' | 'output'): {
        lang: any;
        value: any;
    };
    fileSwitch(val: 'tokens' | 'config' | 'script' | 'output'): Promise<void>;
    runSD(cfg: Config): Promise<void>;
    changeOutputs(filePath: string, changeCurrentFile?: boolean): void;
    traverseDir(dir?: string, files?: string[]): string[];
    saveFile(): Promise<void>;
    ejectHandler(): Promise<void>;
}
export {};
