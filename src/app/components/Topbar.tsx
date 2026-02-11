import { useLocation, useNavigate } from "react-router";
import { LogOut, User } from "lucide-react";

const pageNames: Record<string, string> = {
  "/": "Dashboard",
  "/produtos": "Produtos",
  "/produtos/novo": "Cadastro de Produto",
  "/estoque": "Estoque Multiloja",
  "/vendas": "Vendas / Pedidos",
  "/clientes": "Clientes (CRM)",
  "/promocoes": "Promoções",
  "/relatorios": "Relatórios",
  "/configuracoes": "Configurações",
};

export function Topbar() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const pageName = pageNames[location.pathname] || "Gestão";

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
      <h2 className="text-lg font-semibold text-gray-900">{pageName}</h2>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <span className="text-gray-700">Admin</span>
        </div>
        
        <button
          onClick={handleLogout}
          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          title="Sair"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
