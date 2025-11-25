import { LayoutDashboard, Building2, DollarSign, Users, Plus, Eye, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

interface AdminParceirosProps {
  onNavigate: (view: string) => void;
}

export function AdminParceiros({ onNavigate }: AdminParceirosProps) {
  const parceiros = [
    { 
      id: 1, 
      nome: 'Arena Seven', 
      cidade: 'Recife', 
      comissao: 15, 
      ocupacao: 82, 
      receita: 2400,
      peladas: 12
    },
    { 
      id: 2, 
      nome: 'Beach Club', 
      cidade: 'Olinda', 
      comissao: 10, 
      ocupacao: 75, 
      receita: 1800,
      peladas: 8
    },
    { 
      id: 3, 
      nome: 'Quadra 10', 
      cidade: 'Recife', 
      comissao: 12, 
      ocupacao: 68, 
      receita: 1500,
      peladas: 6
    },
    { 
      id: 4, 
      nome: 'Sports Center', 
      cidade: 'Jaboatão', 
      comissao: 15, 
      ocupacao: 90, 
      receita: 3200,
      peladas: 15
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-6 fixed h-screen">
        <div className="mb-8">
          <h1 className="text-purple-600 mb-1">SimboraJogar</h1>
          <p className="text-gray-500 text-sm">Painel Admin</p>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => onNavigate('admin-parceiros')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-100 text-purple-700"
          >
            <Building2 className="w-5 h-5" />
            Parceiros
          </button>
          <button
            onClick={() => onNavigate('admin-detalhes')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700"
          >
            <LayoutDashboard className="w-5 h-5" />
            Detalhes
          </button>
          <button
            onClick={() => onNavigate('admin-financeiro')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700"
          >
            <DollarSign className="w-5 h-5" />
            Financeiro Geral
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-gray-900 mb-2">Parceiros</h2>
            <p className="text-gray-600">Gerencie todos os locais parceiros da plataforma</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Parceiro
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-600">Total de Parceiros</div>
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Building2 className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div className="text-purple-600 text-3xl mb-1">{parceiros.length}</div>
            <p className="text-gray-500 text-sm">+2 este mês</p>
          </Card>

          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-600">Receita Total</div>
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="text-green-600 text-3xl mb-1">
              R$ {parceiros.reduce((acc, p) => acc + p.receita, 0).toLocaleString()}
            </div>
            <p className="text-gray-500 text-sm">Este mês</p>
          </Card>

          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-600">Ocupação Média</div>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="text-blue-600 text-3xl mb-1">
              {Math.round(parceiros.reduce((acc, p) => acc + p.ocupacao, 0) / parceiros.length)}%
            </div>
            <p className="text-gray-500 text-sm">Rede inteira</p>
          </Card>

          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-600">Peladas Ativas</div>
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <div className="text-orange-600 text-3xl mb-1">
              {parceiros.reduce((acc, p) => acc + p.peladas, 0)}
            </div>
            <p className="text-gray-500 text-sm">Total na rede</p>
          </Card>
        </div>

        {/* Parceiros Table */}
        <Card className="rounded-xl border border-gray-200 p-6">
          <h3 className="text-gray-900 mb-6">Lista de Parceiros</h3>
          
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead>Nome</TableHead>
                  <TableHead>Cidade</TableHead>
                  <TableHead>Comissão</TableHead>
                  <TableHead>Ocupação</TableHead>
                  <TableHead>Receita</TableHead>
                  <TableHead>Peladas</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {parceiros.map((parceiro) => (
                  <TableRow key={parceiro.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                          {parceiro.nome[0]}
                        </div>
                        <span className="text-gray-900">{parceiro.nome}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-600">{parceiro.cidade}</TableCell>
                    <TableCell className="text-gray-900">{parceiro.comissao}%</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[80px]">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${parceiro.ocupacao}%` }}
                          />
                        </div>
                        <span className="text-gray-900 text-sm">{parceiro.ocupacao}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-green-600">
                      R$ {parceiro.receita.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-gray-900">{parceiro.peladas}</TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onNavigate('admin-detalhes')}
                        className="hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Ver Detalhes
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
}
