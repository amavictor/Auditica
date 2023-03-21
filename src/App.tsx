import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { MainApp } from "./pages/mainApp/mainApp";
import { Search } from "./pages/search/search";
import { Liked } from "./pages/liked/liked";
import { MainLayout } from "./layout/mainLayout";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"


function App() {
  const location = useLocation();
  const [authToken, setAuthToken] = useState<boolean>(false);
  const navigate = useNavigate();
  const queryClient = new QueryClient();

  useLayoutEffect(() => {
    let hash: string = location.hash;

    if (hash) {
      const searchParams: any = new URLSearchParams(hash.slice(1));
      const accessToken: any = searchParams.get("access_token");
      console.log(accessToken);
      window.localStorage.setItem("auditicaToken", accessToken);
      navigate("/", { replace: true });
      setAuthToken(true);
    }

    const setInvalidToken = setInterval(() => {
      window.localStorage.setItem("toek", "");
      setAuthToken(false);
    }, 180000);

    return () => clearInterval(setInvalidToken);
  }, []);

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
  ];

  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
