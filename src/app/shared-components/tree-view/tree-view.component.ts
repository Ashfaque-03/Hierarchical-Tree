import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface TreeNode {
    name: string;
    children: TreeNode[];
}

@Component({
    selector: 'app-tree-view',
    templateUrl: './tree-view.component.html',
    styleUrls: ['./tree-view.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class TreeViewComponent implements OnInit {

    /** Input: complete tree data */
    @Input() tree: Record<string, string[]> = {};

    /** Input: root node key (starting point) */
    @Input() rootKey: string = '';

    rootNode: TreeNode | null = null;

    ngOnInit(): void {
        if (this.rootKey && Object.keys(this.tree).length > 0) {
            this.rootNode = this.buildTree(this.rootKey);
        }
    }

    /**
     * Returns children of a given node
     */
    private getChildren(node: string): string[] {
        return this.tree[node] || [];
    }

    /**
     * Recursively builds a tree from a given node
     */
    private buildTree(node: string): any {
        return {
            name: node,
            children: this.getChildren(node).map(child => this.buildTree(child))
        };
    }

}
