import { Onboarding } from "@/pages";
import routesPath from "@/utils/routesPath";
import { Route, Routes } from "react-router-dom";


const { HOME } = routesPath;

export default function AppRoute() {
  return (
    <>
      <Routes>
        <Route index path={HOME} element={<Onboarding />} />
      </Routes>
    </>
  );
}
