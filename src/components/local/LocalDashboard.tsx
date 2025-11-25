import { LayoutDashboard, Calendar, DollarSign, Settings, TrendingUp, Clock, MessageSquare, Check, X, Bell } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface LocalDashboardProps {
  onNavigate: (view: string) => void;
}

export function LocalDashboard({ onNavigate }: LocalDashboardProps) {
  const reservas = [
    { id: 1, nome: 'Lucas', horario: '16h', status: 'pago', valor: 20 },
    { id: 2, nome: 'Felipe', horario: '17h', status: 'pendente', valor: 25 },
    { id: 3, nome: 'Marina', horario: '18h', status: 'pago', valor: 20 },
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
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-100 text-purple-700"
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
        <div className="mb-8">
          <h2 className="text-gray-900 mb-2">Dashboard</h2>
          <p className="text-gray-600">Visão geral das suas reservas e métricas</p>
        </div>

        {/* Notification Toast */}
        <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-green-900">Nova reserva confirmada via SimboraJogar</div>
            <p className="text-green-700 text-sm mt-1">Lucas • 16h • R$ 20,00</p>
          </div>
          <button className="text-green-600 hover:text-green-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-600">Ocupação</div>
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div className="text-purple-600 text-3xl mb-1">82%</div>
            <p className="text-gray-500 text-sm">+12% vs. semana passada</p>
          </Card>

          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-600">Receita SimboraJogar</div>
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="text-green-600 text-3xl mb-1">R$ 2.400</div>
            <p className="text-gray-500 text-sm">Este mês</p>
          </Card>

          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-600">Reservas Diretas</div>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="text-blue-600 text-3xl mb-1">8</div>
            <p className="text-gray-500 text-sm">Hoje</p>
          </Card>
        </div>

        {/* Reservas do Dia */}
        <Card className="rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-gray-900">Reservas do Dia</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              Hoje, {new Date().toLocaleDateString('pt-BR')}
            </div>
          </div>

          <div className="space-y-4">
            {reservas.map((reserva) => (
              <div
                key={reserva.id}
                className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                      {reserva.nome[0]}
                    </div>
                    <div>
                      <div className="text-gray-900">{reserva.nome}</div>
                      <div className="text-sm text-gray-600 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {reserva.horario}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-900">R$ {reserva.valor},00</div>
                    {reserva.status === 'pago' ? (
                      <div className="text-green-600 text-sm flex items-center gap-1 justify-end">
                        <Check className="w-4 h-4" />
                        Pago
                      </div>
                    ) : (
                      <div className="text-yellow-600 text-sm flex items-center gap-1 justify-end">
                        <Clock className="w-4 h-4" />
                        Pendente
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  {reserva.status === 'pago' ? (
                    <>
                      <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                        <Check className="w-4 h-4 mr-2" />
                        Confirmar Presença
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        <X className="w-4 h-4 mr-2" />
                        Cancelar
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                        <Bell className="w-4 h-4 mr-2" />
                        Lembrar Pagamento
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        <X className="w-4 h-4 mr-2" />
                        Cancelar
                      </Button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
