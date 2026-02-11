import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Download } from "lucide-react";

const vendasPorLoja = [
  { loja: "Centro", vendas: 24500, meta: 30000 },
  { loja: "Shopping", vendas: 35200, meta: 35000 },
  { loja: "Online", vendas: 18300, meta: 25000 },
];

const vendasPorCategoria = [
  { categoria: "Calças", valor: 28400, porcentagem: 32 },
  { categoria: "Vestidos", valor: 21200, porcentagem: 24 },
  { categoria: "Camisas", valor: 17800, porcentagem: 20 },
  { categoria: "Blazers", valor: 12600, porcentagem: 14 },
  { categoria: "Outros", valor: 8900, porcentagem: 10 },
];

const COLORS = ["#111827", "#374151", "#6b7280", "#9ca3af", "#d1d5db"];

export function Relatorios() {
  const [periodo, setPeriodo] = useState("mes");
  const [dataInicio, setDataInicio] = useState("2026-02-01");
  const [dataFim, setDataFim] = useState("2026-02-07");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Relatórios</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors text-sm font-medium">
          <Download className="w-4 h-4" />
          Exportar PDF
        </button>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-base font-semibold text-gray-900 mb-4">
          Filtros de Período
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Período
            </label>
            <select
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="hoje">Hoje</option>
              <option value="semana">Esta Semana</option>
              <option value="mes">Este Mês</option>
              <option value="personalizado">Personalizado</option>
            </select>
          </div>

          {periodo === "personalizado" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Data Início
                </label>
                <input
                  type="date"
                  value={dataInicio}
                  onChange={(e) => setDataInicio(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Data Fim
                </label>
                <input
                  type="date"
                  value={dataFim}
                  onChange={(e) => setDataFim(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
            </>
          )}

          <div className="flex items-end">
            <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors text-sm font-medium">
              Aplicar Filtros
            </button>
          </div>
        </div>
      </div>

      {/* Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-5">
          <p className="text-sm text-gray-600 mb-1">Faturamento Total</p>
          <p className="text-2xl font-semibold text-gray-900">R$ 78.000,00</p>
          <p className="text-xs text-green-600 mt-2">+18% vs mês anterior</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-5">
          <p className="text-sm text-gray-600 mb-1">Ticket Médio</p>
          <p className="text-2xl font-semibold text-gray-900">R$ 234,50</p>
          <p className="text-xs text-green-600 mt-2">+5% vs mês anterior</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-5">
          <p className="text-sm text-gray-600 mb-1">Total de Pedidos</p>
          <p className="text-2xl font-semibold text-gray-900">332</p>
          <p className="text-xs text-green-600 mt-2">+12% vs mês anterior</p>
        </div>
      </div>

      {/* Gráfico de Vendas por Loja */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-base font-semibold text-gray-900 mb-4">
          Vendas por Loja (vs Meta)
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={vendasPorLoja}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="loja"
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
              <Legend />
              <Bar dataKey="vendas" fill="#111827" name="Vendas (R$)" />
              <Bar dataKey="meta" fill="#d1d5db" name="Meta (R$)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gráfico de Vendas por Categoria */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-base font-semibold text-gray-900 mb-4">
          Vendas por Categoria
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={vendasPorCategoria}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ categoria, porcentagem }) =>
                    `${categoria} (${porcentagem}%)`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="valor"
                >
                  {vendasPorCategoria.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "6px",
                  }}
                  formatter={(value: number) => `R$ ${value.toLocaleString()}`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-3">
            {vendasPorCategoria.map((cat, index) => (
              <div
                key={cat.categoria}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: COLORS[index] }}
                  ></div>
                  <span className="text-sm font-medium text-gray-900">
                    {cat.categoria}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">
                    R$ {cat.valor.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-600">{cat.porcentagem}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
