/**
 * (#)path-module.mjs   1.0.0   09/09/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import fs from 'fs';
import path from 'path';

/**
 * The path module demonstration class.
 *
 * See: https://www.javascripttutorial.net/nodejs-tutorial/nodejs-path-module/
 */
export class PathModule {
    /**
     * The constructor.
     *
     * @param config
     */
    constructor(config) {
        this.absolutePath = config.absolutePath;
        this.joinElements = config.joinElements;
        this.normalizePath = config.normalizePath;
        this.pathToFile = config.pathToFile;
        this.relativeFrom = config.relativeFrom;
        this.relativePath = config.relativePath;
        this.relativeTo = config.relativeTo;
        this.resolveElements = config.resolveElements;
        this.samplePath = config.samplePath;
    }

    /**
     * Display the path properties.
     */
    pathProperties() {
        console.log(`sep property      : ${path.sep}`);
        console.log(`delimiter property: ${path.delimiter}`);
    }

    /**
     * Invoke handy path methods.
     */
    pathMethods() {
        if (fs.existsSync(this.samplePath)) {
            console.log(`Path '${this.samplePath}' exists`);
        } else {
            throw new Error(`Path '${this.samplePath}' does not exist`);
        }

        let methods = [
            this.pathBaseName,
            this.pathDirName,
            this.pathExtName,
            this.pathFormat,
            this.pathIsAbsolute,
            this.pathJoin,
            this.pathParse,
            this.pathNormalize,
            this.pathRelative,
            this.pathResolve
        ]

        methods.forEach(method => method(this));
    }

    /**
     * Use path.basename()
     *
     * @param   {PathModule}    pathModule
     */
    pathBaseName(pathModule) {
        let baseNameWithExt = path.basename(pathModule.samplePath);
        let baseNameWithoutExt = path.basename(pathModule.samplePath, '.mjs');

        console.log(`Base name w/ ext   : ${baseNameWithExt}`);
        console.log(`Base name w/out ext: ${baseNameWithoutExt}`);
    }

    /**
     * Use path.dirname()
     *
     * @param   {PathModule}    pathModule
     */
    pathDirName(pathModule) {
        console.log(`Dir name: ${path.dirname(pathModule.samplePath)}`);
    }

    /**
     * Use path.extname()
     *
     * @param   {PathModule}    pathModule
     */
    pathExtName(pathModule) {
        console.log(`Ext name: ${path.extname(pathModule.samplePath)}`);
    }

    /**
     * Use path.format()
     *
     * @param   {PathModule}    pathModule
     */
    pathFormat(pathModule) {
        console.log(`Formatted: ${path.format(pathModule.pathToFile)}`);
    }

    /**
     * Use path.isAbsolute()
     *
     * @param   {PathModule}    pathModule
     */
    pathIsAbsolute(pathModule) {
        if (path.isAbsolute(pathModule.absolutePath)) {
            console.log(`Path ${pathModule.absolutePath} is absolute`);
        }

        if (!path.isAbsolute(pathModule.relativePath)) {
            console.log(`Path ${pathModule.relativePath} is not absolute`);
        }
    }

    /**
     * Use path.join()
     *
     * @param   {PathModule}    pathModule
     */
    pathJoin(pathModule) {
        // The ... destructures the array of strings into string arguments

        let pathToDir = path.join(...pathModule.joinElements);

        console.log(`Joined: ${path.join(pathToDir)}`);
    }

    /**
     * Use path.parse()
     *
     * @param   {PathModule}    pathModule
     */
    pathParse(pathModule) {
        let pathObject = path.parse(pathModule.samplePath);

        console.log(`Parsed: ${JSON.stringify(pathObject)}`);

        console.log(`Root: ${pathObject.root}`);
        console.log(`Dir : ${pathObject.dir}`);
        console.log(`Base: ${pathObject.base}`);
        console.log(`Ext : ${pathObject.ext}`);
        console.log(`Name: ${pathObject.name}`);
    }

    /**
     * Use path.normalize()
     *
     * @param   {PathModule}    pathModule
     */
    pathNormalize(pathModule) {
        console.log(`Normalized: ${path.normalize(pathModule.normalizePath)}`);
    }

    /**
     * Use path.relative()
     *
     * @param   {PathModule}    pathModule
     */
    pathRelative(pathModule) {
        console.log(`Relative: ${path.relative(pathModule.relativeFrom, pathModule.relativeTo)}`);
    }

    /**
     * Use path.resolve()
     *
     * @param   {PathModule}    pathModule
     */
    pathResolve(pathModule) {
        // If the first element is not absolute then
        // the home directory acts as the root.

        pathModule.resolveElements.forEach((array) => {
            array.forEach((element) => {
                console.log(`Element: ${element}`);
            });

            // The ... destructures the array of strings into string arguments

            console.log(`Resolved: ${path.resolve(...array)}`);
        });
    }
}
