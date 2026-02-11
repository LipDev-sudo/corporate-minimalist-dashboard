import { AlertTriangle, CheckCircle } from "lucide-react";

const estoqueMultiloja = [
  {
    id: 1,
    produto: "Calça Jeans Skinny",
    loja: "Centro",
    quantidade: 15,
    minimo: 10,
    status: "ok",
  },
  {
    id: 2,
    produto: "Calça Jeans Skinny",
    loja: "Shopping",
    quantidade: 22,
    minimo: 10,
    status: "ok",
  },
  {
    id: 3,
    produto: "Calça Jeans Skinny",
    loja: "Online",
    quantidade: 8,
    minimo: 10,
    status: "baixo",
  },
  {
    id: 4,
    produto: "Camisa Social Branca",
    loja: "Centro",
    quantidade: 5,
    minimo: 15,
    status: "critico",
  },
  {
    id: 5,
    produto: "Camisa Social Branca",
    loja: "Shopping",
    quantidade: 18,
    minimo: 15,
    status: "ok",
  },
  {
    id: 6,
    produto: "Camisa Social Branca",
    loja: "Online",
    quantidade: 9,
    minimo: 15,
    status: "baixo",
  },
  {
    id: 7,
    produto: "Vestido Floral",
    loja: "Centro",
    quantidade: 2,
    minimo: 8,
    status: "critico",
  },
  {
    id: 8,
    produto: "Vestido Floral",
    loja: "Shopping",
    quantidade: 12,
    minimo: 8,
    status: "ok",
  },
  {
    id: 9,
    produto: "Vestido Floral",
    loja: "Online",
    quantidade: 4,
    minimo: 8,
    status: "baixo",
  },
  {
    id: 10,
    produto: "Blazer Preto",
    loja: "Centro",
    quantidade: 4,
    minimo: 12,
    status: "critico",
  },
  {
    id: 11,
    produto: "Blazer Preto",
    loja: "Shopping",
    quantidade: 6,
    minimo: 12,
    status: "baixo",
  },
  {
    id: 12,
    produto: "Blazer Preto",
    loja: "Online",
    quantidade: 2,
    minimo: 12,
    status: "critico",
  },
];

export function Estoque() {
  const getStatusInfo = (status: string) => {
    switch (status) {
      case "ok":
        return {
          label: "OK",
          className: "bg-green-100 text-green-800",
          icon: CheckCircle,
        };
      case "baixo":
        return {
          label: "Baixo",
          className: "bg-amber-100 text-amber-800",
          icon: AlertTriangle,
        };
      case "critico":
        return {
          label: "Crítico",
          className: "bg-red-100 text-red-800",
          icon: AlertTriangle,
        };
      default:
        return {
          label: "OK",
          className: "bg-green-100 text-green-800",
          icon: CheckCircle,
        };
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Estoque Multiloja</h1>
        <div className="flex gap-2 text-sm">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">OK</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <span className="text-gray-600">Baixo</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-600">Crítico</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Produto
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Loja
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Quantidade
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Mínimo
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {estoqueMultiloja.map((item) => {
                const statusInfo = getStatusInfo(item.status);
                const StatusIcon = statusInfo.icon;
                return (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {item.produto}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {item.loja}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {item.quantidade} unidades
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {item.minimo} unidades
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${statusInfo.className}`}
                      >
                        <StatusIcon className="w-3 h-3" />
                        {statusInfo.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
