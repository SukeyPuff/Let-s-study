import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
  useNavigate,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="rules" element={<Rules />}>
            <Route index element={<RulesTable />} />
            <Route path="detail" element={<Detail />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="wrapper">
        <Sider />
        <Content />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <span>Header</span>
    </div>
  );
}

function Sider() {
  return (
    <div className="sider">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="rules">Rules</Link>
        </li>
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="rule">NotFound</Link>
        </li>
      </ul>
    </div>
  );
}

function Content() {
  return (
    <div className="content">
      <Outlet />
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function Rules() {
  return (
    <>
      <Outlet />
    </>
  );
}

function RulesTable() {
  let navigate = useNavigate();

  return (
    <>
      <h2>RulesTable</h2>
      <button
        onClick={() => {
          navigate("detail");
        }}
      >
        Detail
      </button>
    </>
  );
}

function Detail() {
  return <h3>Detail</h3>;
}

function NotFound() {
  let navigate = useNavigate();

  return (
    <>
      <h1>NotFound</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to HomePage
      </button>
    </>
  );
}

export default App;
