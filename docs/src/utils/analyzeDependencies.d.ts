export declare function analyzeDependencies(code: string): Promise<{
    source: string;
    specifiers: Array<{
        name: string;
        default: boolean;
    }>;
    package: string;
}[]>;
