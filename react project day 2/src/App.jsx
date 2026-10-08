import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StudentProfile from "./StudentProfile";

function App() {
  const [count, setCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  return (
    <>
      <Header />

      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && (
        <StudentProfile
          name="Anu"
          department="CSE"
          year="3rd Year"
          count={count}
          setCount={setCount}
        />
      )}

      <Footer />
    </>
  );
}

export default App;