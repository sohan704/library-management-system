# OGLibrary

OGLibrary is a MERN stack web app that simulates CRUD operations with JWT.

# Live Link

My website [Click Here](https://library-management-74fff.web.app) 

## 1. Cookie Based Authentication
This website has cookie based authentication system both for google login and email and password based login. When an user logins they get a cookie that is valid for 5 hours. 

## 2. Protected Routes for the logged in users
Only authenticated users can perform CRUD operations in this web app. 

## 3. JWT verification before CRUD operation

If a user doesn't have valid cookies, they won't be allowed to perform CRUD operation.


## 4. Book Categories and Filtering

The home page displays at least 4 types of book categories, each with relevant information (image, category name, and button). Clicking on a category redirects the user to a page with books belonging to that category. A "Filter" button allows users to view only available books (quantity > 0).

## 5. Borrowing and Returning Books
Users can borrow books, which reduces the quantity of the specific book by 1. A modal will prompt the user for a return date. Borrowed books are displayed on a separate page with information like borrowed date, return date, and a "Return" button. Clicking the "Return" button increases the quantity of the book by 1 and removes it from the borrowed books page.

  







# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
