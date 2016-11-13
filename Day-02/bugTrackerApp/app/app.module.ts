import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';
import {MyAppComponent} from './app.component';
import {BugTracker} from './bug-tracker.component';
import {BugItem} from './Bug.component';
import {BugStats} from './BugStat.component'
import {NewBug} from './NewBug.component';

@NgModule({
    imports : [BrowserModule, FormsModule],
    bootstrap : [MyAppComponent],
    declarations : [MyAppComponent, BugTracker, BugItem, BugStats, NewBug]
})
export class MyAppModule{

}