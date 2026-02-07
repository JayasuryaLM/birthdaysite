import { createBrowserRouter } from "react-router";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";
import { Page3 } from "./pages/Page3";
import { Page4 } from "./pages/Page4";
import { Page5 } from "./pages/Page5";
import { Page6 } from "./pages/Page6";
import { Page7 } from "./pages/Page7";
import { Page8 } from "./pages/Page8";
import { Page9 } from "./pages/Page9";
import { Page10 } from "./pages/Page10";
import { Page11 } from "./pages/Page11";
import { Page12 } from "./pages/Page12";
import { Page13 } from "./pages/Page13";
import { Page14 } from "./pages/Page14";

export const router = createBrowserRouter([
  { path: "/", Component: Page1 },
  { path: "/2", Component: Page2 },
  { path: "/3", Component: Page3 },
  { path: "/4", Component: Page4 },
  { path: "/5", Component: Page5 },
  { path: "/6", Component: Page6 },
  { path: "/7", Component: Page7 },
  { path: "/8", Component: Page8 },
  { path: "/9", Component: Page9 },
  { path: "/10", Component: Page10 },
  { path: "/11", Component: Page11 },
  { path: "/12", Component: Page12 },
  { path: "/13", Component: Page13 },
  { path: "/14", Component: Page14 },
]);
