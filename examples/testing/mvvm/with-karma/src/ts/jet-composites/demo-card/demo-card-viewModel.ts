"use strict";

import * as ko from "knockout";
import * as componentStrings from "ojL10n!./resources/nls/demo-card-strings";
import Context = require("ojs/ojcontext");
import Composite = require("ojs/ojcomposite");
import "ojs/ojknockout";

export default class DemoCard implements Composite.ViewModel<Composite.PropertiesType> {
    busyResolve: (() => void);
    composite: Element;
    messageText: ko.Observable<string>;
    properties: Composite.PropertiesType;
    res: { [key: string]: string };
    initials: String;
    workFormatted: String;
    flipCard: Function;

    constructor(context: Composite.ViewModelContext<Composite.PropertiesType>) {
        //At the start of your viewModel constructor
        const elementContext: Context = Context.getContext(context.element);
        const busyContext: Context.BusyContext = elementContext.getBusyContext();
        const options = { "description": "Web Component Startup - Waiting for data" };
        this.busyResolve = busyContext.addBusyState(options);

        this.composite = context.element;

        //Example observable
        this.messageText = ko.observable("Hello from Example Component");
        this.properties = context.properties;
        this.res = componentStrings["demo-card"];

        // Example for parsing context properties
        // if (context.properties.name) {
        //     parse the context properties here
        // }

        /**
        * Formats a 10 digit number as a phone number.
        * @param  {number} number The number to format
        * @return {string}        The formatted phone number
        */
        let formatPhoneNumber = (number: number) => {
            return Number(number).toString().replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        }

        // The props field on context is a Promise. Once that resolves,
        // we can access the properties that were defined in the composite metadata
        // and were initially set on the composite DOM element.

        if (context.properties.name) {
            let initials = context.properties.name.match(/\b\w/g);
            this.initials = (initials.shift() + initials.pop()).toUpperCase();
        }
        if (context.properties.workNumber)
            this.workFormatted = formatPhoneNumber(context.properties.workNumber);

        /**
         * Flips a card
         * @param  {KeyboardEvent} event The click and enter events
         */
        this.flipCard = (event: KeyboardEvent, model: object): void => {
            if (event.type === 'click' || (event.type === 'keypress' && event.key === 'Enter')) {
                // It's better to look for View elements using a selector
                // instead of by DOM node order which isn't gauranteed.
                const css = this.composite.querySelector('.demo-card-flip-container')!.classList;
                if (css.contains('demo-card-flipped')) {
                    css.remove('demo-card-flipped');
                } else {
                    css.add('demo-card-flipped');
                }
            }
        };

        //Once all startup and async activities have finished, relocate if there are any async activities
        this.busyResolve();
    }

    //Lifecycle methods - implement if necessary

    activated(context: Composite.ViewModelContext<Composite.PropertiesType>): Promise<any> | void {

    };

    connected(context: Composite.ViewModelContext<Composite.PropertiesType>): void {

    };

    bindingsApplied(context: Composite.ViewModelContext<Composite.PropertiesType>): void {

    };

    propertyChanged(context: Composite.PropertyChangedContext<Composite.PropertiesType>): void {

    };

    disconnectd(element: Element): void {

    };
};