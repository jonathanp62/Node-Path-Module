/**
 * (#)app.mjs   1.0.0   09/09/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import { config } from "../config.mjs";
import { PathModule} from "./path-module.mjs";

/**
 * The application class.
 */
export class App {
    /**
     * The constructor.
     *
     * @param config
     */
    constructor(config) {
        this.config = config;
    }

    /**
     * The run method.
     */
    run() {
        let pathModule = new PathModule(config);

        pathModule.pathProperties();

        try {
            pathModule.pathMethods();
        } catch (error) {
            console.error(error);
        }
    }
}
