import { Outlet, useNavigate, useLocation } from "react-router";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { useEffect } from "react";

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Mock de verificação de autenticação
  useEffect(() => {
    // Em produção, verificar se há token/sessão válida
    const isAuthenticated = true; // Mock
    if (!isAuthenticated && location.pathname !== "/login") {
      navigate("/login");
    }
  }, [navigate, location]);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        <Topbar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
