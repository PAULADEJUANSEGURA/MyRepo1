import MiCabecera from "./MiCabecera";
import MiCarrousel from "./MiCarrousel";
import MiFormRegister from "./MiFormRegister";
import "./style.css";

function App() {
  return (
    <><nav>
     <MiCabecera />,
     </nav>
     <main>
        <MiCarrousel />,
    </main>
      <div>
       <MiFormRegister />,   
      </div>
    </>
  );
}

export default App;

