import type * as monacoType from 'monaco-editor';
export declare let monaco: typeof monacoType;
declare global {
    interface Window {
        monaco: typeof monacoType;
        require: NodeRequire | undefined;
    }
}
export declare function ensureMonacoIsLoaded(srcPath?: string): Promise<unknown>;
export declare function init(elem: HTMLDivElement): Promise<monacoType.editor.IStandaloneCodeEditor>;
export declare function changeLang(lang: string, ed: typeof monacoType.editor): Promise<void>;
