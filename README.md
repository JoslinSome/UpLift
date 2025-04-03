# 🏋️‍♂️ UpLift - Workout Tracker App

**UpLift** is a modern, mobile workout tracking app designed to help lifters and fitness enthusiasts easily monitor their strength progress over time through custom routines, exercise logs, and visual analytics. Built using the **MIRN stack** (MongoDB, Express, React Native, Node.js), UpLift is all about making progressive overload easy to see — and fun to chase.

---

## 🚀 Features

### 👤 User Authentication
- Secure sign-up & login with JWT tokens
- Each user has their own routines and logs

### 🏋️ Routine Management
- Create custom workout routines (e.g., Push/Pull/Legs, Upper-Lower)
- Add and manage days within routines
- Assign exercises per day (Bench Press, Rows, etc.)

### 📓 Workout Logging
- Track sets, reps, weight for each exercise
- Add notes, like RPE or tempo
- View/edit past workouts

### 📈 Progress Tracking
- Visual charts for strength progression per lift
- Workout streak tracker and consistency heatmap
- Personal record (PR) history
- Top 5 most-used exercises

### 🧠 Dashboard & Extras
- Favorite lifts
- Unit selection (lbs/kg)
- Goal setting
- Dark mode support

---

## 🛠 Tech Stack

**Frontend:**
- React Native
- Axios
- React Navigation
- Charting library (e.g., `react-native-chart-kit`)

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Auth, Bcrypt, Dotenv

---

## 📦 Installation

### Backend Setup
```bash
cd backend
npm install
# Create a .env file with MONGO_URI and JWT_SECRET
npm run dev
