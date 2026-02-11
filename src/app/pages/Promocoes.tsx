import { useState } from "react";
import { Percent, Calendar, ToggleLeft, ToggleRight } from "lucide-react";

const cuponsCriados = [
  {
    id: 1,
    codigo: "VERAO2026",
    tipo: "Percentual",
    desconto: "20%",
    validade: "28/02/2026",
    ativo: true,
    usos: 45,
  },
  {
    id: 2,
    codigo: "PRIMEIRACOMPRA",
    tipo: "Valor Fixo",
    desconto: "R$ 50,00",
    validade: "31/03/2026",
    ativo: true,
    usos: 128,
  },
  {
    id: 3,
    codigo: "FRETEGRATIS",
    tipo: "Frete",
    desconto: "Frete Grátis",
    validade: "15/02/2026",
    ativo: true,
    usos: 67,
  },
  {
    id: 4,
    codigo: "INVERNO2025",
    tipo: "Percentual",
    desconto: "15%",
    validade: "31/12/2025",
    ativo: false,
    usos: 234,
  },
];

export function Promocoes() {
  const [novoCupom, setNovoCupom] = useState({
    codigo: "",
    tipo: "percentual",
    valor: "",
    validade: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock - em produção, salvar no backend
    setNovoCupom({
      codigo: "",
      tipo: "percentual",
      valor: "",
      validade: "",
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Promoções</h1>

      {/* Criar novo cupom */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Criar Novo Cupom
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Código do Cupom
              </label>
              <input
                type="text"
                value={novoCupom.codigo}
                onChange={(e) =>
                  setNovoCupom({ ...novoCupom, codigo: e.target.value.toUpperCase() })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent uppercase"
                placeholder="CUPOM2026"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Tipo de Desconto
              </label>
              <select
                value={novoCupom.tipo}
                onChange={(e) =>
                  setNovoCupom({ ...novoCupom, tipo: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              >
                <option value="percentual">Percentual (%)</option>
                <option value="fixo">Valor Fixo (R$)</option>
                <option value="frete">Frete Grátis</option>
              </select>
            </div>

            {novoCupom.tipo !== "frete" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Valor do Desconto
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={novoCupom.valor}
                  onChange={(e) =>
                    setNovoCupom({ ...novoCupom, valor: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder={novoCupom.tipo === "percentual" ? "20" : "50.00"}
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Validade
              </label>
              <input
                type="date"
                value={novoCupom.validade}
                onChange={(e) =>
                  setNovoCupom({ ...novoCupom, validade: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
          >
            Criar Cupom
          </button>
        </form>
      </div>

      {/* Lista de cupons */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Cupons Criados
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Código
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Tipo
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Desconto
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Validade
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Usos
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {cuponsCriados.map((cupom) => (
                <tr key={cupom.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Percent className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-mono font-semibold text-gray-900">
                        {cupom.codigo}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {cupom.tipo}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {cupom.desconto}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      {cupom.validade}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {cupom.usos}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                        cupom.ativo
                          ? "bg-green-100 text-green-800 hover:bg-green-200"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {cupom.ativo ? (
                        <>
                          <ToggleRight className="w-4 h-4" />
                          Ativo
                        </>
                      ) : (
                        <>
                          <ToggleLeft className="w-4 h-4" />
                          Inativo
                        </>
                      )}
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
