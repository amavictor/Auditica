import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { MainApp } from "./pages/mainApp/mainApp";
import { Search } from "./pages/search/search";
import { Liked } from "./pages/liked/liked";
import { MainLayout } from "./layout/mainLayout";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { UserContextProvider } from "./contexts/providers/userContextProviders";
import { Details } from "./pages/details/details";
import { ArtistPage } from "./pages/artists/artistPage";
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = new QueryClient();
  const [authToken, setAuthToken] = useState(false);

  useLayoutEffect(() => {    
    let hash: string = location.hash;
    if (hash) {
      const searchParams: any = new URLSearchParams(hash.slice(1));
      const accessToken: any = searchParams.get("access_token");
      window.localStorage.setItem("auditicaToken", accessToken);
      setAuthToken(true);
      navigate("/", { replace: true });
    }
    else {
      const token = localStorage.getItem("auditicaToken")
      if (token) {
        setAuthToken(true)
      }
      else {
        setAuthToken(false)
      }
    }

    // const setInvalidToken = setTimeout(() => {
    //   window.localStorage.setItem("toek", "")
    //   localStorage.setItem("auditicaUser", null)
    //   setAuthToken(false);
    // }, 300000);

    // return () => clearInterval(setInvalidToken);
  }, [location.hash, navigate]);

  interface Components {
    path: string;
    component: any;
  }
  const routes: Components[] = [
    {
      path: "/",
      component: <MainApp />,
    },
    {
      path: "/search",
      component: <Search />,
    },
    {
      path: "/liked-songs",
      component: <Liked />,
    },
    {
      path: "/details",
      component: <Details/>
    },
    {
      path: "/artists/:id",
      component: <ArtistPage/>
    },

  ];

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <Routes>
          {/* <Route path={"/"} element={<Login />} /> */}
          {authToken ? (
            routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<MainLayout>{route.component}</MainLayout>}
              />
            ))
          ) : (
            <Route path={"/"} element={<Login />} />
          )}
        </Routes>
      </UserContextProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
