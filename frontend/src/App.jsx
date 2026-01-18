import { useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "./main";
import Routes from "./Routes"; // or whatever routing file you use

const App = () => {
  const { setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "https://hospital-mangement-system-58iq.onrender.com/api/v1/user/patient/me",
          { withCredentials: true }
        );

        setUser(res.data.user);
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };

    fetchUser();
  }, []);

  return <Routes />;
};

export default App;
