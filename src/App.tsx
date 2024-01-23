import { Route, Routes } from "react-router";
import { Accounts } from "./pages/Accounts";
import { Profiles } from "./pages/Profiles";
import { Campaigns } from "./pages/Campaigns";

export default function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={ <Accounts /> } />
        <Route path="/:accountId/profiles" element={ <Profiles /> } />
        <Route path="/:profileId/campaigns" element={ <Campaigns /> } />
      </Routes>
    </div>
  )
}