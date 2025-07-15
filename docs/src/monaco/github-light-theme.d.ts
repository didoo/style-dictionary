declare const _default: {
    base: string;
    inherit: boolean;
    rules: ({
        background: string;
        token: string;
        foreground?: undefined;
        fontStyle?: undefined;
    } | {
        foreground: string;
        token: string;
        background?: undefined;
        fontStyle?: undefined;
    } | {
        foreground: string;
        fontStyle: string;
        token: string;
        background?: undefined;
    } | {
        foreground: string;
        background: string;
        fontStyle: string;
        token: string;
    } | {
        foreground: string;
        background: string;
        token: string;
        fontStyle?: undefined;
    })[];
    colors: {
        'editor.foreground': string;
        'editor.background': string;
        'editor.selectionBackground': string;
        'editor.inactiveSelectionBackground': string;
        'editor.lineHighlightBackground': string;
        'editorCursor.foreground': string;
        'editorWhitespace.foreground': string;
        'editorIndentGuide.background': string;
        'editorIndentGuide.activeBackground': string;
        'editor.selectionHighlightBorder': string;
    };
};
export default _default;
