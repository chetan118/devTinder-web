import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./utils/appStore";
import Body from "./components/Body";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Requests from "./components/Requests";
import Connections from "./components/Connections";
import CancellationsAndRefunds from "./components/pages/CancellationsAndRefunds";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import Shipping from "./components/pages/Shipping";
import Privacy from "./components/pages/Privacy";
import ContactUs from "./components/pages/ContactUs";
import Premium from "./components/Premium";
import Chat from "./components/Chat";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/user/requests" element={<Requests />} />
              <Route path="/user/connections" element={<Connections />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/chat/:targetUserId" element={<Chat />} />
            </Route>
            <Route
              path="/pages/cancellations-and-refunds"
              element={<CancellationsAndRefunds />}
            />
            <Route
              path="/pages/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/pages/shipping" element={<Shipping />} />
            <Route path="/pages/privacy" element={<Privacy />} />
            <Route path="/pages/contact-us" element={<ContactUs />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
