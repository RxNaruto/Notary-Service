import {CheckDocuments} from "./components/CheckDocuments";
import { FooterLinks } from "./components/FooterLinks";
import{ Inbox } from"./components/Inbox";
const App=()=>{
  return (
    <div className="bg-black min-h-screen">
    <div>
      <CheckDocuments label={"Check Documents"}/>
      <Inbox label={"Home"}/>
      <Inbox label={"Inbox"}/>
      <Inbox label={"Login"}/>
      </div>
      </div>
  )
}
export default App;
