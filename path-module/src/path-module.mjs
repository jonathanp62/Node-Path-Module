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

        this.pathBaseName();
        this.pathDirName();
        this.pathExtName();
        this.pathFormat();
        this.pathIsAbsolute();
        this.pathJoin();
        this.pathParse();
        this.pathNormalize();
        this.pathRelative();
    }

    /**
     * Use path.basename()
     */
    pathBaseName() {
        let baseNameWithExt = path.basename(this.samplePath);
        let baseNameWithoutExt = path.basename(this.samplePath, '.mjs');

        console.log(`Base name w/ ext   : ${baseNameWithExt}`);
        console.log(`Base name w/out ext: ${baseNameWithoutExt}`);
    }

    /**
     * Use path.dirname()
     */
    pathDirName() {
        console.log(`Dir name: ${path.dirname(this.samplePath)}`);
    }

    /**
     * Use path.extname()
     */
    pathExtName() {
        console.log(`Ext name: ${path.extname(this.samplePath)}`);
    }

    /**
     * Use path.format()
     */
    pathFormat() {
        console.log(`Formatted: ${path.format(this.pathToFile)}`);
    }

    /**
     * Use path.isAbsolute()
     */
    pathIsAbsolute() {
        if (path.isAbsolute(this.absolutePath)) {
            console.log(`Path ${this.absolutePath} is absolute`);
        }

        if (!path.isAbsolute(this.relativePath)) {
            console.log(`Path ${this.relativePath} is not absolute`);
        }
    }

    /**
     * Use path.join()
     */
    pathJoin() {
        // The ... destructures the array of strings into string arguments

        let pathToDir = path.join(...this.joinElements);

        console.log(`Joined: ${path.join(pathToDir)}`);
    }

    /**
     * Use path.parse()
     */
    pathParse() {
        let pathObject = path.parse(this.samplePath);

        console.log(`Parsed: ${JSON.stringify(pathObject)}`);

        console.log(`Root: ${pathObject.root}`);
        console.log(`Dir : ${pathObject.dir}`);
        console.log(`Base: ${pathObject.base}`);
        console.log(`Ext : ${pathObject.ext}`);
        console.log(`Name: ${pathObject.name}`);
    }

    /**
     * Use path.normalize()
     */
    pathNormalize() {
        console.log(`Normalized: ${path.normalize(this.normalizePath)}`);
    }

    /**
     * Use path.relative()
     */
    pathRelative() {
        console.log(`Relative: ${path.relative(this.relativeFrom, this.relativeTo)}`);
    }
}
