declare const _default: {
    base: string;
    inherit: boolean;
    rules: ({
        background: string;
        token: string;
        foreground?: undefined;
    } | {
        foreground: string;
        token: string;
        background?: undefined;
    } | {
        foreground: string;
        background: string;
        token: string;
    })[];
    colors: {
        'editor.foreground': string;
        'editor.background': string;
        'editor.selectionBackground': string;
        'editor.lineHighlightBackground': string;
        'editorCursor.foreground': string;
        'editorWhitespace.foreground': string;
    };
};
export default _default;
