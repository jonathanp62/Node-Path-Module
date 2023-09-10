/**
 * (#)config.mjs    1.0.0   09/09/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

/**
 * The configuration.
 *
 * @type {{samplePath: string}}
 */
export const config = {
    absolutePath: '/Users/Maestro',
    joinElements: [
        '/home',
        'js',
        'dist',
        'app.js'
    ],
    normalizePath: 'C:\\node.js/module/./js//dist',
    pathToFile: {
        dir: 'public_html/home/js',
        base: 'app.js'
    },
    relativeFrom: '/home/user/config/',
    relativePath: 'Node-Projects',
    relativeTo: '/home/user/js/',
    resolveElements: [
        [
            'html',
            'index.html'
        ],
        [
            'html',
            'js',
            'app.js'
        ],
        [
            '/home/html',
            'about.html'
        ]
    ],
    samplePath: '/Users/Maestro/Node-Projects/YARGS-CLI/yargs-cli/config.mjs'
};
