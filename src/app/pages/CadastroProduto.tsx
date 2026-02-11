import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Upload } from "lucide-react";

export function CadastroProduto() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    nome: "",
    categoria: "",
    preco: "",
    tamanhos: [] as string[],
    cores: [] as string[],
  });

  const categorias = ["Calças", "Camisas", "Vestidos", "Blazers", "Saias", "Jaquetas", "Blusas"];
  const tamanhosDisponiveis = ["PP", "P", "M", "G", "GG"];
  const coresDisponiveis = ["Preto", "Branco", "Azul", "Vermelho", "Verde", "Bege"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock - em produção, salvar no backend
    navigate("/produtos");
  };

  const toggleTamanho = (tamanho: string) => {
    setFormData((prev) => ({
      ...prev,
      tamanhos: prev.tamanhos.includes(tamanho)
        ? prev.tamanhos.filter((t) => t !== tamanho)
        : [...prev.tamanhos, tamanho],
    }));
  };

  const toggleCor = (cor: string) => {
    setFormData((prev) => ({
      ...prev,
      cores: prev.cores.includes(cor)
        ? prev.cores.filter((c) => c !== cor)
        : [...prev.cores, cor],
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/produtos")}
          className="p-2 hover:bg-gray-100 rounded-md transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-2xl font-semibold text-gray-900">
          {isEdit ? "Editar Produto" : "Novo Produto"}
        </h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Nome do Produto
              </label>
              <input
                type="text"
                value={formData.nome}
                onChange={(e) =>
                  setFormData({ ...formData, nome: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="Ex: Calça Jeans Skinny"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Categoria
              </label>
              <select
                value={formData.categoria}
                onChange={(e) =>
                  setFormData({ ...formData, categoria: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              >
                <option value="">Selecione uma categoria</option>
                {categorias.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Preço (R$)
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.preco}
                onChange={(e) =>
                  setFormData({ ...formData, preco: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="0,00"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tamanhos Disponíveis
            </label>
            <div className="flex flex-wrap gap-2">
              {tamanhosDisponiveis.map((tamanho) => (
                <button
                  key={tamanho}
                  type="button"
                  onClick={() => toggleTamanho(tamanho)}
                  className={`px-4 py-2 rounded-md border transition-colors ${
                    formData.tamanhos.includes(tamanho)
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-900"
                  }`}
                >
                  {tamanho}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cores Disponíveis
            </label>
            <div className="flex flex-wrap gap-2">
              {coresDisponiveis.map((cor) => (
                <button
                  key={cor}
                  type="button"
                  onClick={() => toggleCor(cor)}
                  className={`px-4 py-2 rounded-md border transition-colors ${
                    formData.cores.includes(cor)
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-900"
                  }`}
                >
                  {cor}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Imagem do Produto
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                Clique para fazer upload ou arraste a imagem
              </p>
              <p className="text-xs text-gray-500 mt-1">
                PNG, JPG até 5MB
              </p>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="px-6 py-2.5 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
            >
              Salvar Produto
            </button>
            <button
              type="button"
              onClick={() => navigate("/produtos")}
              className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
