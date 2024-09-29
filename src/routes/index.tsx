import { Onboarding, Welcome } from "@/pages";
import Register from "@/pages/register";
import routesPath from "@/utils/routesPath";
import { Route, Routes } from "react-router-dom";

const { HOME, ONBOARDING, REGISTER } = routesPath;

export default function AppRoute() {
  return (
    <>
      <Routes>
        <Route path={ONBOARDING} element={<Onboarding />} />
        <Route index path={HOME} element={<Welcome />} />
        <Route path={REGISTER} element={<Register />} />
        {/* <Route index path={LOGIN} element={<Login />} /> */}
      </Routes>
    </>
  );
}
