import { NotaryServices } from "./components/NotaryServices";
import { NotaryTypes } from "./components/NotaryTypes";

const App=()=>{
  return( <>
  
      <NotaryServices label={"Notary Services"}/>
      <NotaryTypes label={"Affidavits"}/>
      <NotaryTypes label={"Real Estate Deals"}/>
      <NotaryTypes label={"Car "}/>

  </>
  )
}


export default App;
