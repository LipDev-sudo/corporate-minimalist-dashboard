import { useNavigate } from "react-router";
import { Plus, Edit, Trash2 } from "lucide-react";

const produtos = [
  {
    id: 1,
    nome: "Calça Jeans Skinny",
    categoria: "Calças",
    preco: 189.9,
    estoque: 45,
    status: "Ativo",
  },
  {
    id: 2,
    nome: "Camisa Social Branca",
    categoria: "Camisas",
    preco: 129.9,
    estoque: 32,
    status: "Ativo",
  },
  {
    id: 3,
    nome: "Vestido Floral",
    categoria: "Vestidos",
    preco: 249.9,
    estoque: 18,
    status: "Ativo",
  },
  {
    id: 4,
    nome: "Blazer Preto",
    categoria: "Blazers",
    preco: 399.9,
    estoque: 12,
    status: "Ativo",
  },
  {
    id: 5,
    nome: "Saia Midi",
    categoria: "Saias",
    preco: 159.9,
    estoque: 28,
    status: "Ativo",
  },
  {
    id: 6,
    nome: "Jaqueta Jeans",
    categoria: "Jaquetas",
    preco: 279.9,
    estoque: 15,
    status: "Ativo",
  },
  {
    id: 7,
    nome: "Blusa Estampada",
    categoria: "Blusas",
    preco: 89.9,
    estoque: 52,
    status: "Ativo",
  },
  {
    id: 8,
    nome: "Calça Wide Leg",
    categoria: "Calças",
    preco: 219.9,
    estoque: 22,
    status: "Ativo",
  },
];

export function Produtos() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Produtos</h1>
        <button
          onClick={() => navigate("/produtos/novo")}
          className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Novo Produto
        </button>
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
                  Categoria
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Preço
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Estoque Total
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Status
                </th>
                <th className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider px-6 py-3">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {produtos.map((produto) => (
                <tr key={produto.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {produto.nome}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {produto.categoria}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    R$ {produto.preco.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {produto.estoque} unidades
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {produto.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigate(`/produtos/editar/${produto.id}`)}
                        className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
                        title="Editar"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        className="p-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                        title="Excluir"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
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
