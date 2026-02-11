import { Eye } from "lucide-react";

const pedidos = [
  {
    id: "#1234",
    cliente: "Maria Silva",
    loja: "Centro",
    valor: 378.8,
    status: "Pago",
    data: "07/02/2026",
  },
  {
    id: "#1235",
    cliente: "João Santos",
    loja: "Shopping",
    valor: 189.9,
    status: "Pendente",
    data: "07/02/2026",
  },
  {
    id: "#1236",
    cliente: "Ana Costa",
    loja: "Online",
    valor: 529.7,
    status: "Pago",
    data: "07/02/2026",
  },
  {
    id: "#1237",
    cliente: "Pedro Oliveira",
    loja: "Centro",
    valor: 249.9,
    status: "Enviado",
    data: "06/02/2026",
  },
  {
    id: "#1238",
    cliente: "Juliana Lima",
    loja: "Shopping",
    valor: 159.9,
    status: "Pago",
    data: "06/02/2026",
  },
  {
    id: "#1239",
    cliente: "Carlos Ferreira",
    loja: "Online",
    valor: 679.8,
    status: "Processando",
    data: "06/02/2026",
  },
  {
    id: "#1240",
    cliente: "Beatriz Alves",
    loja: "Centro",
    valor: 399.9,
    status: "Pago",
    data: "05/02/2026",
  },
  {
    id: "#1241",
    cliente: "Rafael Souza",
    loja: "Shopping",
    valor: 219.9,
    status: "Cancelado",
    data: "05/02/2026",
  },
  {
    id: "#1242",
    cliente: "Camila Rodrigues",
    loja: "Online",
    valor: 449.8,
    status: "Entregue",
    data: "04/02/2026",
  },
  {
    id: "#1243",
    cliente: "Lucas Martins",
    loja: "Centro",
    valor: 129.9,
    status: "Pago",
    data: "04/02/2026",
  },
];

export function Vendas() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pago":
        return "bg-green-100 text-green-800";
      case "Pendente":
        return "bg-amber-100 text-amber-800";
      case "Processando":
        return "bg-blue-100 text-blue-800";
      case "Enviado":
        return "bg-purple-100 text-purple-800";
      case "Entregue":
        return "bg-teal-100 text-teal-800";
      case "Cancelado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Vendas / Pedidos</h1>
        <div className="flex gap-3">
          <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
            <option>Todas as lojas</option>
            <option>Centro</option>
            <option>Shopping</option>
            <option>Online</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
            <option>Todos os status</option>
            <option>Pago</option>
            <option>Pendente</option>
            <option>Processando</option>
            <option>Enviado</option>
            <option>Entregue</option>
            <option>Cancelado</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Pedido
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Cliente
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Loja
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Valor
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Status
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Data
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pedidos.map((pedido) => (
                <tr key={pedido.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {pedido.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {pedido.cliente}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {pedido.loja}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    R$ {pedido.valor.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        pedido.status
                      )}`}
                    >
                      {pedido.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {pedido.data}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
                      title="Ver detalhes"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
