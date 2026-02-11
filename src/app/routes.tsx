import { createBrowserRouter } from "react-router";
import { Login } from "./pages/Login";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Produtos } from "./pages/Produtos";
import { CadastroProduto } from "./pages/CadastroProduto";
import { Estoque } from "./pages/Estoque";
import { Vendas } from "./pages/Vendas";
import { Clientes } from "./pages/Clientes";
import { Promocoes } from "./pages/Promocoes";
import { Relatorios } from "./pages/Relatorios";
import { Configuracoes } from "./pages/Configuracoes";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "produtos", Component: Produtos },
      { path: "produtos/novo", Component: CadastroProduto },
      { path: "produtos/editar/:id", Component: CadastroProduto },
      { path: "estoque", Component: Estoque },
      { path: "vendas", Component: Vendas },
      { path: "clientes", Component: Clientes },
      { path: "promocoes", Component: Promocoes },
      { path: "relatorios", Component: Relatorios },
      { path: "configuracoes", Component: Configuracoes },
    ],
  },
]);
