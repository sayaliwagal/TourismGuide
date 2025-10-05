🌍 Tourism Guide App (React Router)
🧭 Objective

The Tourism Guide App is a small React application built using React Router to practice navigation between pages, dynamic routes using parameters (id), and handling unknown routes with a custom 404 page.

🚀 Project Overview

This app allows users to:

Explore a list of tourist destinations.

View detailed information about each place.

Plan a trip by filling out a simple form.

Navigate smoothly between pages using React Router.

See a friendly 404 message when visiting an undefined route.

🛠️ Tech Stack

React.js

React Router DOM (v6)

HTML, CSS (or Tailwind CSS)

📁 Folder Structure
tourism-guide-app/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── Destinations.jsx
│   │   ├── DestinationDetail.jsx
│   │   ├── PlanTrip.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx
│   ├── index.js
│   └── data.js          # Optional - to store destination info
│
├── package.json
├── README.md
└── ... (other config files)

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/sayaliwagal/TourismGuide
cd tourism-guide-app

2️⃣ Install Dependencies
npm install

3️⃣ Start the Development Server
npm start


The app will run on http://localhost:3000

🧩 App Pages & Features
🏠 Home Page (/)

Displays a welcome message:
“Welcome to the Tourism Guide! Explore and plan your next trip.”

🌴 Destinations Page (/destinations)

Displays a list of 3 tourist destinations (e.g., Goa, Manali, Jaipur).

Each destination is a clickable link.

On click, navigates to that destination’s detail page.

🗺️ Destination Detail Page (/destinations/:id)

This is a dynamic route that shows details of a destination using useParams().

Displays:

Destination name

Description

Travel tips

Example:

Destination: Manali  
Description: A beautiful hill station in Himachal Pradesh.  
Tips: Visit Solang Valley and Rohtang Pass.

🧳 Plan a Trip Page (/plan-trip)

Contains a simple form with:

Your Name

Destination

On form submission, shows an alert message like:
“Trip planned for Monika to Goa.”

⚠️ 404 Page (*)

Displays a custom "404 Page Not Found" message when an invalid route is entered.

🧠 Concepts Practiced

Setting up and using React Router (BrowserRouter, Routes, Route)

Using Link for navigation

Using useParams() for dynamic route handling

Implementing conditional rendering based on route

Managing navigation structure in a React app

🧪 Future Enhancements

Add images for each destination.

Include a search/filter option on the Destinations page.

Add validation and success UI to the Plan Trip form.

Integrate test cases for route and form validation.

🏁 Conclusion

This project helps strengthen your understanding of React Router v6 and dynamic routing in React applications while building a simple, interactive tourism app.