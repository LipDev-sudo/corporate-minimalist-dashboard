import {
  TrendingUp,
  ShoppingBag,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const metrics = [
  {
    title: "Vendas Hoje",
    value: "R$ 4.850,00",
    icon: TrendingUp,
    change: "+12%",
    positive: true,
  },
  {
    title: "Pedidos Abertos",
    value: "23",
    icon: ShoppingBag,
    change: "8 novos",
    positive: true,
  },
  {
    title: "Estoque Baixo",
    value: "7",
    icon: AlertTriangle,
    change: "Requer atenção",
    positive: false,
  },
  {
    title: "Status do Sistema",
    value: "Operacional",
    icon: CheckCircle,
    change: "Todos os sistemas OK",
    positive: true,
  },
];

const salesData = [
  { dia: "Seg", vendas: 2400 },
  { dia: "Ter", vendas: 3200 },
  { dia: "Qua", vendas: 2800 },
  { dia: "Qui", vendas: 4100 },
  { dia: "Sex", vendas: 3900 },
  { dia: "Sáb", vendas: 5200 },
  { dia: "Dom", vendas: 3500 },
];

const produtosEstoqueBaixo = [
  { id: 1, nome: "Calça Jeans Skinny", estoque: 3, minimo: 10, loja: "Centro" },
  { id: 2, nome: "Camisa Social Branca", estoque: 5, minimo: 15, loja: "Shopping" },
  { id: 3, nome: "Vestido Floral", estoque: 2, minimo: 8, loja: "Centro" },
  { id: 4, nome: "Blazer Preto", estoque: 4, minimo: 12, loja: "Online" },
  { id: 5, nome: "Saia Midi", estoque: 1, minimo: 6, loja: "Shopping" },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {metric.value}
                </p>
                <p
                  className={`text-xs mt-2 ${
                    metric.positive ? "text-green-600" : "text-amber-600"
                  }`}
                >
                  {metric.change}
                </p>
              </div>
              <div
                className={`p-3 rounded-lg ${
                  metric.positive ? "bg-green-50" : "bg-amber-50"
                }`}
              >
                <metric.icon
                  className={`w-5 h-5 ${
                    metric.positive ? "text-green-600" : "text-amber-600"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gráfico de Vendas */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-base font-semibold text-gray-900 mb-4">
          Vendas da Semana
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="dia"
                tick={{ fill: "#6b7280", fontSize: 12 }}
                axisLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                tick={{ fill: "#6b7280", fontSize: 12 }}
                axisLine={{ stroke: "#e5e7eb" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                }}
              />
              <Line
                type="monotone"
                dataKey="vendas"
                stroke="#111827"
                strokeWidth={2}
                dot={{ fill: "#111827", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Produtos com Estoque Baixo */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-base font-semibold text-gray-900 mb-4">
          Produtos com Estoque Crítico
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider pb-3">
                  Produto
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider pb-3">
                  Loja
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider pb-3">
                  Estoque Atual
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider pb-3">
                  Estoque Mínimo
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider pb-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {produtosEstoqueBaixo.map((produto) => (
                <tr key={produto.id} className="hover:bg-gray-50">
                  <td className="py-3 text-sm text-gray-900">{produto.nome}</td>
                  <td className="py-3 text-sm text-gray-600">{produto.loja}</td>
                  <td className="py-3 text-sm text-gray-900">
                    {produto.estoque} unidades
                  </td>
                  <td className="py-3 text-sm text-gray-600">
                    {produto.minimo} unidades
                  </td>
                  <td className="py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Crítico
                    </span>
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
