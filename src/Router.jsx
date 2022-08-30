import {
  Home,
  Parents,
  ContactUs,
  Teachers,
  Layers,
  PageNotFound,
} from "./components/pages/index";
import { Routes, Route } from "react-router-dom";
import TeachersProvider from "./contexts/Teachers-Context";
import LayerֹֹAProvider from "./contexts/Layers-A-Context"
import LayerֹֹBProvider from "./contexts/Layers-B-Context"
import ParentsProvider from "./contexts/Parents-Context"
export default function Router() {
  return (
    <div id="div_main">
      <Routes>                                                     
        <Route path="/" element={<Home />} />
        <Route path="Parents" element={<ParentsProvider><Parents/></ParentsProvider>} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route
          path="Teachers"
          element={
            <TeachersProvider>
              <Teachers />
            </TeachersProvider>
          }
        />
        <Route path="Layers" element={
        <LayerֹֹBProvider>
        <LayerֹֹAProvider><Layers /></LayerֹֹAProvider></LayerֹֹBProvider>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
