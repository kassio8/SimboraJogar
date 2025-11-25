import { LayoutDashboard, Calendar, DollarSign, Settings, TrendingUp, Download, Check, Clock } from 'lucide-react';
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

interface LocalFinanceiroProps {
  onNavigate: (view: string) => void;
}

export function LocalFinanceiro({ onNavigate }: LocalFinanceiroProps) {
  const pagamentos = [
    { id: 1, jogador: 'Lucas', horario: '16h', valor: 20, status: 'pago', data: '25/11/2025' },
    { id: 2, jogador: 'Felipe', horario: '17h', valor: 25, status: 'aguardando', data: '25/11/2025' },
    { id: 3, jogador: 'Marina', horario: '18h', valor: 20, status: 'pago', data: '25/11/2025' },
    { id: 4, jogador: 'Carlos', horario: '14h', valor: 20, status: 'pago', data: '24/11/2025' },
    { id: 5, jogador: 'Ana', horario: '15h', valor: 25, status: 'pago', data: '24/11/2025' },
    { id: 6, jogador: 'Pedro', horario: '16h', valor: 20, status: 'aguardando', data: '24/11/2025' },
  ];

  const totalPago = pagamentos.filter(p => p.status === 'pago').reduce((acc, p) => acc + p.valor, 0);
  const totalPendente = pagamentos.filter(p => p.status === 'aguardando').reduce((acc, p) => acc + p.valor, 0);

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
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-100 text-purple-700"
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
            onClick={() => onNavigate('local-criar-pelada')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700"
          >
            <Calendar className="w-5 h-5" />
            Criar Pelada
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
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-gray-900 mb-2">Financeiro</h2>
            <p className="text-gray-600">Acompanhe os pagamentos e receitas</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Download className="w-4 h-4 mr-2" />
            Exportar Relatório
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-600">Total Recebido</div>
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="text-green-600 text-3xl mb-1">R$ {totalPago}</div>
            <p className="text-gray-500 text-sm">{pagamentos.filter(p => p.status === 'pago').length} pagamentos confirmados</p>
          </Card>

          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-600">Aguardando</div>
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
            <div className="text-yellow-600 text-3xl mb-1">R$ {totalPendente}</div>
            <p className="text-gray-500 text-sm">{pagamentos.filter(p => p.status === 'aguardando').length} pagamentos pendentes</p>
          </Card>

          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-600">Total do Período</div>
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div className="text-purple-600 text-3xl mb-1">R$ {totalPago + totalPendente}</div>
            <p className="text-gray-500 text-sm">Últimos 7 dias</p>
          </Card>
        </div>

        {/* Payments Table */}
        <Card className="rounded-xl border border-gray-200 p-6">
          <h3 className="text-gray-900 mb-6">Histórico de Pagamentos</h3>
          
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead>Jogador</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Horário</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pagamentos.map((pagamento) => (
                  <TableRow key={pagamento.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                          {pagamento.jogador[0]}
                        </div>
                        <span className="text-gray-900">{pagamento.jogador}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-600">{pagamento.data}</TableCell>
                    <TableCell className="text-gray-600">{pagamento.horario}</TableCell>
                    <TableCell>
                      <span className="text-gray-900">R$ {pagamento.valor},00</span>
                    </TableCell>
                    <TableCell>
                      {pagamento.status === 'pago' ? (
                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          <Check className="w-4 h-4" />
                          Pago
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                          <Clock className="w-4 h-4" />
                          Aguardando
                        </div>
                      )}
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
