/**
 * We bundle Javascript strings as if they were actual Javascript files
 * - input as string instead of filepath (using virtual plugin)
 * - resolve imports to bare modules as third party dependencies to esm.run CDN,
 *   has some limitations of course, see esm.run for info
 * - any imports to style-dictionary are resolved to our version of style-dictionary in this app
 *   this is a bit spaghetti-written atm (abusing globals), and have to hardcode the different entrypoints,
 *   but it works :)
 * - we used to support relative imports to other JS files but for studio we don't need this, we have only
 *   one config, one functions file, and tokens are JSON
 */
export declare function bundle(inputString: string, _fs?: import("../../../types").Volume): Promise<string>;
