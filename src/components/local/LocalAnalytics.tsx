import { LayoutDashboard, Calendar, DollarSign, Settings, TrendingUp } from 'lucide-react';
import { Card } from '../ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

interface LocalAnalyticsProps {
  onNavigate: (view: string) => void;
}

export function LocalAnalytics({ onNavigate }: LocalAnalyticsProps) {
  const ocupacaoData = [
    { dia: 'Seg', ocupacao: 65 },
    { dia: 'Ter', ocupacao: 75 },
    { dia: 'Qua', ocupacao: 82 },
    { dia: 'Qui', ocupacao: 90 },
    { dia: 'Sex', ocupacao: 95 },
    { dia: 'Sáb', ocupacao: 100 },
    { dia: 'Dom', ocupacao: 88 },
  ];

  const receitaData = [
    { dia: 'Seg', receita: 280 },
    { dia: 'Ter', receita: 320 },
    { dia: 'Qua', receita: 380 },
    { dia: 'Qui', ocupacao: 420 },
    { dia: 'Sex', receita: 450 },
    { dia: 'Sáb', receita: 520 },
    { dia: 'Dom', receita: 480 },
  ];

  const horarioData = [
    { horario: '8h', reservas: 2 },
    { horario: '10h', reservas: 3 },
    { horario: '12h', reservas: 5 },
    { horario: '14h', reservas: 6 },
    { horario: '16h', reservas: 8 },
    { horario: '18h', reservas: 10 },
    { horario: '20h', reservas: 7 },
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
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-100 text-purple-700"
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
          <h2 className="text-gray-900 mb-2">Analytics</h2>
          <p className="text-gray-600">Análise detalhada do desempenho da quadra</p>
        </div>

        {/* Charts Grid */}
        <div className="space-y-6">
          {/* Ocupação Diária */}
          <Card className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-6">Ocupação Diária (%)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ocupacaoData}>
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
                <Bar dataKey="ocupacao" fill="#7C3AED" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Receita Diária */}
          <Card className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-6">Receita Diária (R$)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={receitaData}>
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
                  dataKey="receita" 
                  stroke="#4ADE80" 
                  strokeWidth={3}
                  dot={{ fill: '#4ADE80', r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Reservas por Horário */}
          <Card className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-6">Número de Reservas por Horário</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={horarioData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="horario" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    padding: '12px'
                  }}
                />
                <Bar dataKey="reservas" fill="#4ADE80" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Insights */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  📈
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Horário de Pico</div>
                  <p className="text-gray-600 text-sm">
                    O horário das 18h é o mais procurado, com 10 reservas esta semana.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  💰
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Melhor Dia</div>
                  <p className="text-gray-600 text-sm">
                    Sábado teve a maior receita da semana: R$ 520,00
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
