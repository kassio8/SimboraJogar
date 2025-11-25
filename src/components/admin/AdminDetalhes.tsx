import { LayoutDashboard, Building2, DollarSign, ChevronLeft, MessageSquare, TrendingUp, Calendar, Users } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AdminDetalhesProps {
  onNavigate: (view: string) => void;
}

export function AdminDetalhes({ onNavigate }: AdminDetalhesProps) {
  const reservasData = [
    { dia: 'Seg', reservas: 8 },
    { dia: 'Ter', reservas: 12 },
    { dia: 'Qua', reservas: 10 },
    { dia: 'Qui', reservas: 15 },
    { dia: 'Sex', reservas: 18 },
    { dia: 'Sáb', reservas: 20 },
    { dia: 'Dom', reservas: 16 },
  ];

  const mensagensIA = [
    { id: 1, data: '25/11/2025 14:23', mensagem: 'Quais horários estão disponíveis hoje?', resposta: '14h às 18h livres' },
    { id: 2, data: '25/11/2025 12:10', mensagem: 'Você aceita reserva para amanhã às 16h?', resposta: 'Sim, temos disponibilidade' },
    { id: 3, data: '24/11/2025 18:45', mensagem: 'Qual o valor da quadra no sábado?', resposta: 'R$ 120 por hora' },
  ];

  const pagamentos = [
    { id: 1, data: '25/11', valor: 240, status: 'processado' },
    { id: 2, data: '24/11', valor: 320, status: 'processado' },
    { id: 3, data: '23/11', valor: 180, status: 'processado' },
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
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700"
          >
            <Building2 className="w-5 h-5" />
            Parceiros
          </button>
          <button
            onClick={() => onNavigate('admin-detalhes')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-100 text-purple-700"
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
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => onNavigate('admin-parceiros')}
            className="mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Voltar para Parceiros
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-900 mb-2">Arena Seven</h2>
              <p className="text-gray-600">Detalhes completos do parceiro</p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <TrendingUp className="w-4 h-4 mr-2" />
              Promover Local
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="text-gray-600 mb-2">Ocupação</div>
            <div className="text-purple-600 text-3xl mb-1">82%</div>
            <p className="text-gray-500 text-sm">+5% vs. semana passada</p>
          </Card>

          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="text-gray-600 mb-2">Receita</div>
            <div className="text-green-600 text-3xl mb-1">R$ 2.400</div>
            <p className="text-gray-500 text-sm">Este mês</p>
          </Card>

          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="text-gray-600 mb-2">Comissão SJ</div>
            <div className="text-blue-600 text-3xl mb-1">R$ 360</div>
            <p className="text-gray-500 text-sm">15% do total</p>
          </Card>

          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="text-gray-600 mb-2">Peladas Ativas</div>
            <div className="text-orange-600 text-3xl mb-1">12</div>
            <p className="text-gray-500 text-sm">Nesta semana</p>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <Card className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-6">Reservas nos Últimos 7 Dias</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={reservasData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="dia" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    padding: '12px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="reservas" 
                  stroke="#7C3AED" 
                  strokeWidth={3}
                  dot={{ fill: '#7C3AED', r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-6">Pagamentos e Repasses</h3>
            <div className="space-y-3">
              {pagamentos.map((pagamento) => (
                <div
                  key={pagamento.id}
                  className="bg-gray-50 rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-gray-900">R$ {pagamento.valor}</div>
                      <div className="text-sm text-gray-600">{pagamento.data}</div>
                    </div>
                  </div>
                  <div className="text-green-600 text-sm">✓ {pagamento.status}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Mensagens Automáticas */}
        <Card className="rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-gray-900">Mensagens Automáticas (Logs)</h3>
          </div>

          <div className="space-y-4">
            {mensagensIA.map((msg) => (
              <div
                key={msg.id}
                className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-200"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0 text-sm">
                    🤖
                  </div>
                  <div className="flex-1">
                    <div className="text-purple-900 mb-1">{msg.mensagem}</div>
                    <div className="text-xs text-purple-600">{msg.data}</div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 ml-11">
                  <div className="text-gray-700">{msg.resposta}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
