import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'hierarchical-tree';
    tree: Record<string, string[]> = {
        "a": ["b", "c"],
        "b": ["d", "e"],
        "c": ["f", "g"],
        "e": ["h", "i"],
        "f": ["j", "k"]
    };

}