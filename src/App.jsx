import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename="/">
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
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
