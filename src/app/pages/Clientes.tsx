import { MessageCircle, Mail, User } from "lucide-react";

const clientes = [
  {
    id: 1,
    nome: "Maria Silva",
    email: "maria.silva@email.com",
    whatsapp: "(11) 98765-4321",
    ultimaCompra: "07/02/2026",
    totalCompras: 3,
    valorTotal: 1247.5,
  },
  {
    id: 2,
    nome: "João Santos",
    email: "joao.santos@email.com",
    whatsapp: "(11) 97654-3210",
    ultimaCompra: "07/02/2026",
    totalCompras: 1,
    valorTotal: 189.9,
  },
  {
    id: 3,
    nome: "Ana Costa",
    email: "ana.costa@email.com",
    whatsapp: "(11) 96543-2109",
    ultimaCompra: "07/02/2026",
    totalCompras: 5,
    valorTotal: 2134.6,
  },
  {
    id: 4,
    nome: "Pedro Oliveira",
    email: "pedro.oliveira@email.com",
    whatsapp: "(11) 95432-1098",
    ultimaCompra: "06/02/2026",
    totalCompras: 2,
    valorTotal: 569.8,
  },
  {
    id: 5,
    nome: "Juliana Lima",
    email: "juliana.lima@email.com",
    whatsapp: "(11) 94321-0987",
    ultimaCompra: "06/02/2026",
    totalCompras: 4,
    valorTotal: 987.6,
  },
  {
    id: 6,
    nome: "Carlos Ferreira",
    email: "carlos.ferreira@email.com",
    whatsapp: "(11) 93210-9876",
    ultimaCompra: "06/02/2026",
    totalCompras: 1,
    valorTotal: 679.8,
  },
  {
    id: 7,
    nome: "Beatriz Alves",
    email: "beatriz.alves@email.com",
    whatsapp: "(11) 92109-8765",
    ultimaCompra: "05/02/2026",
    totalCompras: 6,
    valorTotal: 3456.7,
  },
  {
    id: 8,
    nome: "Rafael Souza",
    email: "rafael.souza@email.com",
    whatsapp: "(11) 91098-7654",
    ultimaCompra: "05/02/2026",
    totalCompras: 2,
    valorTotal: 439.8,
  },
];

export function Clientes() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Clientes (CRM)</h1>
        <input
          type="search"
          placeholder="Buscar cliente..."
          className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent w-64"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clientes.map((cliente) => (
          <div
            key={cliente.id}
            className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {cliente.nome}
                </h3>
                <p className="text-sm text-gray-600 truncate flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  {cliente.email}
                </p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">WhatsApp:</span>
                <span className="text-gray-900 font-medium">
                  {cliente.whatsapp}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Última compra:</span>
                <span className="text-gray-900">{cliente.ultimaCompra}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total de compras:</span>
                <span className="text-gray-900 font-medium">
                  {cliente.totalCompras}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Valor total:</span>
                <span className="text-gray-900 font-semibold">
                  R$ {cliente.valorTotal.toFixed(2)}
                </span>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors text-sm font-medium">
              <MessageCircle className="w-4 h-4" />
              Enviar mensagem
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
