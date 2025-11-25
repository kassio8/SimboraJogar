import { LayoutDashboard, Calendar, DollarSign, Settings, TrendingUp, Users, Clock, Edit, Trash2, Eye } from 'lucide-react';
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

interface LocalPeladasProps {
  onNavigate: (view: string) => void;
}

export function LocalPeladas({ onNavigate }: LocalPeladasProps) {
  const peladas = [
    { 
      id: 1, 
      nome: 'Pelada da Galera', 
      modalidade: 'Vôlei', 
      data: '26/11/2025',
      horario: '16h', 
      jogadores: '8/12',
      confirmados: 8,
      total: 12,
      valor: 20,
      arrecadacao: 160,
      status: 'ativa'
    },
    { 
      id: 2, 
      nome: 'Racha de Sexta', 
      modalidade: 'Futebol', 
      data: '29/11/2025',
      horario: '18h', 
      jogadores: '10/10',
      confirmados: 10,
      total: 10,
      valor: 25,
      arrecadacao: 250,
      status: 'cheia'
    },
    { 
      id: 3, 
      nome: 'Vôlei da Tarde', 
      modalidade: 'Vôlei', 
      data: '27/11/2025',
      horario: '15h', 
      jogadores: '4/12',
      confirmados: 4,
      total: 12,
      valor: 20,
      arrecadacao: 80,
      status: 'ativa'
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-6 fixed h-screen">
        <div className="mb-8">
          <h1 className="text-purple-600 mb-1">Arena Seven</h1>
          <p className="text-gray-500 text-sm">Painel do Local</p>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => onNavigate('local-dashboard')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </button>
          <button
            onClick={() => onNavigate('local-disponibilidade')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700"
          >
            <Calendar className="w-5 h-5" />
            Disponibilidade
          </button>
          <button
            onClick={() => onNavigate('local-financeiro')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700"
          >
            <DollarSign className="w-5 h-5" />
            Financeiro
          </button>
          <button
            onClick={() => onNavigate('local-analytics')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700"
          >
            <TrendingUp className="w-5 h-5" />
            Analytics
          </button>
          <button
            onClick={() => onNavigate('local-peladas')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-100 text-purple-700"
          >
            <Users className="w-5 h-5" />
            Gerenciar Peladas
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700">
            <Settings className="w-5 h-5" />
            Configurações
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-gray-900 mb-2">Gerenciar Peladas</h2>
          <p className="text-gray-600">Visualize e administre todas as peladas criadas</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-600">Peladas Ativas</div>
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div className="text-purple-600 text-3xl mb-1">
              {peladas.filter(p => p.status === 'ativa').length}
            </div>
            <p className="text-gray-500 text-sm">Esta semana</p>
          </Card>

          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-600">Total de Jogadores</div>
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="text-green-600 text-3xl mb-1">
              {peladas.reduce((acc, p) => acc + p.confirmados, 0)}
            </div>
            <p className="text-gray-500 text-sm">Confirmados</p>
          </Card>

          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-600">Arrecadação Total</div>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="text-blue-600 text-3xl mb-1">
              R$ {peladas.reduce((acc, p) => acc + p.arrecadacao, 0)}
            </div>
            <p className="text-gray-500 text-sm">Desta semana</p>
          </Card>

          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-600">Taxa de Ocupação</div>
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <div className="text-orange-600 text-3xl mb-1">
              {Math.round((peladas.reduce((acc, p) => acc + p.confirmados, 0) / peladas.reduce((acc, p) => acc + p.total, 0)) * 100)}%
            </div>
            <p className="text-gray-500 text-sm">Vagas preenchidas</p>
          </Card>
        </div>

        {/* Peladas Table */}
        <Card className="rounded-xl border border-gray-200 p-6">
          <h3 className="text-gray-900 mb-6">Lista de Peladas</h3>
          
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead>Nome</TableHead>
                  <TableHead>Modalidade</TableHead>
                  <TableHead>Data & Hora</TableHead>
                  <TableHead>Jogadores</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Arrecadação</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {peladas.map((pelada) => (
                  <TableRow key={pelada.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                          {pelada.nome[0]}
                        </div>
                        <span className="text-gray-900">{pelada.nome}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-600">{pelada.modalidade}</TableCell>
                    <TableCell>
                      <div className="text-gray-900">{pelada.data}</div>
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {pelada.horario}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[80px]">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${(pelada.confirmados / pelada.total) * 100}%` }}
                          />
                        </div>
                        <span className="text-gray-900 text-sm">{pelada.jogadores}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-900">R$ {pelada.valor}</TableCell>
                    <TableCell className="text-green-600">R$ {pelada.arrecadacao}</TableCell>
                    <TableCell>
                      {pelada.status === 'ativa' ? (
                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          Ativa
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                          Cheia
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="hover:bg-blue-50 hover:text-blue-700"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="hover:bg-purple-50 hover:text-purple-700"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="hover:bg-red-50 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
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
