/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import "./bundle-config";
import * as app from 'application';
import { Observable } from 'data/observable';

let time;

app.on("displayed", args => {
    if (app.ios) {
        const uptime = (<any>global).__tns_uptime;
        time = uptime();
        console.log("Startup time: " + time + "ms.");
    }
});

export class ViewModel extends Observable {

    private _counter: number;
    private _message: string;

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value)
        }
    }

    public onTap() {
        this._counter--;
        this.updateMessage();
    }

    private updateMessage() {
        if (app.ios) {
            this.message = time;
        } else {
            if (this._counter <= 0) {
                this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
            } else {
                this.message = `${this._counter} taps left`;
            }
        }
    }
}

app.start({ moduleName: 'main-page' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
