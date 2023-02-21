"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const Home_1 = __importDefault(require("./Pages/Home"));
const FavoritesPage_1 = __importDefault(require("./Pages/FavoritesPage"));
const MainLayout_1 = __importDefault(require("./Pages/MainLayout"));
const GeneralPage_1 = __importDefault(require("./Pages/GeneralPage"));
const HealthPage_1 = __importDefault(require("./Pages/HealthPage"));
const SciencePage_1 = __importDefault(require("./Pages/SciencePage"));
const SportsPage_1 = __importDefault(require("./Pages/SportsPage"));
const TechnologyPage_1 = __importDefault(require("./Pages/TechnologyPage"));
const BusinessPage_1 = __importDefault(require("./Pages/BusinessPage"));
const MobileLatest_1 = __importDefault(require("./Pages/MobileLatest"));
const ErrorPage_1 = __importDefault(require("./Pages/ErrorPage"));
const router = (0, react_router_dom_1.createBrowserRouter)((0, react_router_dom_1.createRoutesFromElements)(<react_router_dom_1.Route path="/" element={<MainLayout_1.default />}>
      <react_router_dom_1.Route index element={<Home_1.default />}/>
      <react_router_dom_1.Route path="General" element={<GeneralPage_1.default />}/>
      <react_router_dom_1.Route path="Health" element={<HealthPage_1.default />}/>
      <react_router_dom_1.Route path="Science" element={<SciencePage_1.default />}/>
      <react_router_dom_1.Route path="Sports" element={<SportsPage_1.default />}/>
      <react_router_dom_1.Route path="Technology" element={<TechnologyPage_1.default />}/>
      <react_router_dom_1.Route path="Business" element={<BusinessPage_1.default />}/>
      <react_router_dom_1.Route path="Favorites" element={<FavoritesPage_1.default />}/>
      <react_router_dom_1.Route path="Latest" element={<MobileLatest_1.default />}/>

      <react_router_dom_1.Route path="*" element={<ErrorPage_1.default />}/>
    </react_router_dom_1.Route>));
function App() {
    (0, react_1.useEffect)(() => {
        document.title = "MyNews";
    }, []);
    return <react_router_dom_1.RouterProvider router={router}/>;
}
exports.default = App;
