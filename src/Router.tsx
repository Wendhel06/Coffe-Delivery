import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { Success } from "./pages/Success";
import { DefaultLayout } from "./layouts";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Order />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
