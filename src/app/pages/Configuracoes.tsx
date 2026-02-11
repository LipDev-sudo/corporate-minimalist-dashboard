import { Save } from "lucide-react";

export function Configuracoes() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Configurações</h1>

      {/* Informações da Empresa */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Informações da Empresa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Nome da Empresa
            </label>
            <input
              type="text"
              defaultValue="Vagamundo"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              CNPJ
            </label>
            <input
              type="text"
              defaultValue="12.345.678/0001-90"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              E-mail
            </label>
            <input
              type="email"
              defaultValue="contato@vagamundo.com.br"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Telefone
            </label>
            <input
              type="tel"
              defaultValue="(11) 3456-7890"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Lojas */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Lojas</h2>
        <div className="space-y-3">
          {["Centro", "Shopping", "Online"].map((loja) => (
            <div
              key={loja}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-md"
            >
              <div>
                <p className="font-medium text-gray-900">{loja}</p>
                <p className="text-sm text-gray-600">
                  {loja === "Online"
                    ? "Loja virtual"
                    : `Endereço da loja ${loja}`}
                </p>
              </div>
              <button className="px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                Editar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Notificações */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Notificações
        </h2>
        <div className="space-y-3">
          <label className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-gray-900">
              Alertas de estoque baixo
            </span>
            <input
              type="checkbox"
              defaultChecked
              className="w-4 h-4 text-gray-900 rounded focus:ring-2 focus:ring-gray-900"
            />
          </label>
          <label className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-gray-900">Novos pedidos</span>
            <input
              type="checkbox"
              defaultChecked
              className="w-4 h-4 text-gray-900 rounded focus:ring-2 focus:ring-gray-900"
            />
          </label>
          <label className="flex items-center justify-between p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
            <span className="text-sm text-gray-900">
              Relatórios semanais por e-mail
            </span>
            <input
              type="checkbox"
              className="w-4 h-4 text-gray-900 rounded focus:ring-2 focus:ring-gray-900"
            />
          </label>
        </div>
      </div>

      <button className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium">
        <Save className="w-4 h-4" />
        Salvar Configurações
      </button>
    </div>
  );
}
