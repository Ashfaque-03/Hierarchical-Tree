import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TreeViewComponent } from './shared-components/tree-view/tree-view.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        TreeViewComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
