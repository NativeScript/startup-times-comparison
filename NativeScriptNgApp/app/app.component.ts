import { Component } from "@angular/core";
import * as app from "application";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;
    public uptime: string;

    public get message(): string {
        if (app.ios) {
            return this.uptime;
        } else {
            if (this.counter > 0) {
                return this.counter + " taps left";
            } else {
                return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
            }
        }
    }

    public onTap() {
        this.counter--;
    }

    ngAfterViewChecked() {
        if (app.ios && !this.uptime) {
            const uptime = (<any>global).__tns_uptime() + "ms.";
            setTimeout(() => {
                this.uptime = uptime;
                console.log("Startup time: " + this.uptime + "ms.");
            }, 0);
        }
    }
}
