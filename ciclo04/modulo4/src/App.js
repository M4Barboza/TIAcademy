import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/";
import { VisualizarCliente } from "./pages/Cliente/VisualizarCliente";
import { VisualizarPedido } from "./pages/Pedido/VisualizarPedido";
import { VisualizarServico } from "./pages/Servico/VisualizarServico";
import { Menu } from "./components/Menu";
import { Servico } from "./pages/Servico/Servico";
import { Cliente } from "./pages/Cliente/Cliente";
import { Pedido } from "./pages/Pedido/Pedido";
import { Cadastrar } from "./pages/Servico/Cadastrar";
import { Editar } from "./pages/Servico/Editar";
import { CadastrarCliente } from "./pages/Cliente/CadastrarCliente";
import { EditarCliente } from "./pages/Cliente/EditarCliente";
import { CadastrarPedido } from "./pages/Pedido/CadastrarPedido";
import { EditarPedido } from "./pages/Pedido/EditarPedido";
function App() {
  return (
    <div>
      <Menu />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cliente/:id" component={Cliente} />
          <Route path="/visualizarcliente" component={VisualizarCliente} />
          <Route path="/cadastrarcliente" component={CadastrarCliente} />
          <Route path="/editarcliente/:id" component={EditarCliente} />
          <Route path="/visualizarpedido" component={VisualizarPedido} />
          <Route path="/pedido/:id" component={Pedido} />
          <Route path="/editarpedido/:id" component={EditarPedido} />
          <Route path="/cadastrarpedido" component={CadastrarPedido} />
          <Route path="/visualizarservico" component={VisualizarServico} />
          <Route path="/servico/:id" component={Servico} />
          <Route path="/cadastrarservico" component={Cadastrar} />
          <Route path="/editarservico/:id" component={Editar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
