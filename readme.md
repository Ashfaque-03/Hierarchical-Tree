# 🧩 Hierarchical Tree in Angular

### Author
**Name:** Abdul Ashfaque M

---

## Project Overview
This Angular 16 standalone component displays a hierarchical tree structure using nested `<ul>` and `<li>` tags.

It takes a flat tree object (key → children array) as input and renders a properly indented hierarchy using recursive templates.

---

## Features
- ✅ Angular 16 standalone component (no module)
- ✅ Recursive rendering using `ngTemplateOutlet`
- ✅ `@Input()` support for dynamic tree and root key
- ✅ Minimal CSS indentation (no fancy styles)
- ✅ ARIA roles for accessibility (`role="tree"`, `treeitem`, `group`)
- ✅ Works with `ng serve` (no runtime errors)

---

## Technologies Used
- Angular 16
- TypeScript
- SCSS

---

## How to Run
```bash
git clone https://github.com/Ashfaque-03/Hierarchical-Tree.git
cd hierarchical-tree
npm install
ng serve
