import { Route } from "react-router";
import { BrowserRouter, Routes as Switch, Navigate} from "react-router-dom";
import { Dashboard } from "../pages";




export const Routes = () => {
    
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" element='Página Inicial'/>
          <Route path="/pagina-inicial" element={<Dashboard/>} />
          <Route path="*" element={<Navigate to={'/'}/>} />
        </Switch>
      </BrowserRouter>
    );
}