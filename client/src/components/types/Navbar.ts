import { StringifyOptions } from "querystring";

export interface NavbarPros {
     /** Text to show on the header */
    title?: string,
    /** Indicates what to do on "go back" button click, if a route (string) is passed by parameter
     it will redirect to that route, if it's a function it will run it
    */
    onGoBack?: Function | string,
    className?: string
}