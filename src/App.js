import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import LessonViewer from "./components/LessonV// iewer";
// import Vocabulary from "./components/Vocabulary";
// import QuizComponenr from "./components/QuizComponenr";
// import FlashcardGame from "./components/FlashcardGame";
// import MembershipPlans from "./components/MembershipPlans";
// import PaymentPage from "./components/PaymentPage";
// import CertificateViewer from "./components/CertificateViewer";
// import AdminDashbroad from "./components/AdminDashbroad";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from './pages/ProfilePage';


// import LessonDetail from "./pages/LessonDetail";
// import ExercisePage from "./pages/ExercisePage";
// import ResultPage from "./pages/ResultPage";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* User Routes
        <Route path="/lessons" element={<LessonViewer />} />
        <Route path="/lessons/:lessonId" element={<LessonDetail />} />
        <Route path="/exercises/:lessonId" element={<ExercisePage />} />
        <Route path="/result/:exerciseId" element={<ResultPage />} />
        <Route path="/vocabulary/:lessonId" element={<Vocabulary />} />
        <Route path="/flashcards/:lessonId" element={<FlashcardGame />} />

        {/* Membership and Certificate */}
        {/* <Route path="/membership" element={<MembershipPlans />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/certificates" element={<CertificateViewer />} /> */}

        {/* Admin Route */}
        {/* <Route path="/admin" element={user?.role === 'ADMIN' ? <AdminDashbroad /> : <Navigate to="/login" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
