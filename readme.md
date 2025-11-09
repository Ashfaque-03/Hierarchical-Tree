# 🧩 **Hierarchical Tree in Angular**

### 👨‍💻 Author
**Name:** Abdul Ashfaque M  

---

## 🧠 Project Overview
This project demonstrates a **hierarchical tree structure** built using **Angular 16 standalone components**.  

It takes a **flat key–value tree object** as input and recursively renders the hierarchy using nested `<ul>` and `<li>` tags.  
Each level of the tree is properly indented to visually represent parent–child relationships.

---

## ⚙️ Features
- ✅ Developed with **Angular 16 standalone components** (no module file required)  
- ✅ Implements **recursive rendering** using `ngTemplateOutlet`  
- ✅ Accepts dynamic inputs using `@Input()` for `tree` and `rootKey`  
- ✅ Clean and **minimal styling** — basic indentation, no fancy CSS  
- ✅ Includes **ARIA roles** (`role="tree"`, `treeitem`, `group`) for accessibility  
- ✅ Fully functional with `ng serve` and `ng build` — **no runtime errors**  

---

## 🧰 Technologies Used
- **Angular 16**
- **TypeScript**
- **SCSS**

---

## 🌐 Live Demo
🔗 **View Application:** [https://ashfaque-03.github.io/Hierarchical-Tree/](https://ashfaque-03.github.io/Hierarchical-Tree/)

🎥 **Video Explanation:** [Google Drive Link](https://drive.google.com/file/d/1h0TGcT0uaxLOdyttMqP6StWJycKdSSRe/view?usp=sharing)

---

## 💻 How to Run Locally

```bash

# 1️⃣ Clone the repository
git clone https://github.com/Ashfaque-03/Hierarchical-Tree.git

# 2️⃣ Navigate into the project directory
cd Hierarchical-Tree

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
ng serve

```
---

## 📜 Rendered Output

```
a

    - b

        - d

        - e

            - h

            - i

    - c

        - f

            - j

            - k

        - g

```
