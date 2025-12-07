# PawMart – Pet Adoption & Supplies Platform

## Live Links
**Client Live Website:** https://pet-care-auth-project.web.app  
 
---

## About PawMart
PawMart is a complete pet adoption and pet supplies platform built using MERN stack and Firebase authentication.  
Users can explore pets, adopt them, buy pet items, add new listings, manage personal listings, and track orders.

---

## Main Features
- Full-stack pet adoption and supplies marketplace.
- Firebase authentication with Email/Password and Google login.
- Private routes with user-specific access for adding, updating, deleting listings.
- Order management system with add-to-cart and checkout functionality.
- PDF download option for orders using jsPDF and AutoTable.
- Fully responsive UI for mobile, tablet, and desktop.
- Separate live deployment for client and server using Vercel.

---

## Project Structure

### Navbar
**Before Login:**  
Logo + Site Name | Home | Pets & Supplies | Login | Register

**After Login:**  
Logo + Site Name | Home | Pets & Supplies | Add Listing | My Listings | My Orders | Profile | Logout

---

## Pages & Details

### Home Page (Public)
- Banner section with carousel slider.
- Category section: Pets, Food, Accessories, Care Products.
- Recent Listings: auto-fetched from database.
- Two static awareness sections:
  - “Why Adopt from PawMart?”  
  - “Meet Our Pet Heroes”

### Pets & Supplies Page
- All products and pets displayed from database.
- Search and filter options.
- View details button on each card.

### Login & Register Pages
- Email/Password signup.
- Google OAuth login.
- Error handling, validation, and redirect system.

### Add Listing Page (Private)
- Add new pet or supply item.
- Fields: title, category, price, stock, description, image, location, etc.

### My Listings Page (Private)
- Shows user-specific listings.
- Options to update and delete.

### My Orders Page (Private)
- Shows all orders placed by the user.
- “Download PDF” option for order invoice.

### Details Page
- Shows complete information for a pet or product.
- Includes adoption or order button.

---

## Technologies Used

### Frontend
- React.js  
- React Router  
- Tailwind CSS / DaisyUI  
- Firebase Authentication  
- Axios  

### Backend
- Node.js  
- Express.js  
- MongoDB & Mongoose  
- JWT for security  
- CORS enabled API  

### Deployment
- Vercel (Client)  
- Vercel (Server)  
- MongoDB Atlas  

---

## Author
Developed by **Minhaz Ahmmed**  
Student, CSE Department, International Islamic University Chittagong