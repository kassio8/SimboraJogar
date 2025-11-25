import { LayoutDashboard, Building2, DollarSign, TrendingUp, AlertCircle, Activity, Download } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AdminFinanceiroProps {
  onNavigate: (view: string) => void;
}

export function AdminFinanceiro({ onNavigate }: AdminFinanceiroProps) {
  const receitaData = [
    { dia: 'Seg', receita: 1200, comissao: 180 },
    { dia: 'Ter', receita: 1500, comissao: 225 },
    { dia: 'Qua', receita: 1800, comissao: 270 },
    { dia: 'Qui', receita: 2100, comissao: 315 },
    { dia: 'Sex', receita: 2400, comissao: 360 },
    { dia: 'Sáb', receita: 3200, comissao: 480 },
    { dia: 'Dom', receita: 2800, comissao: 420 },
  ];

  const logs = [
    { id: 1, tipo: 'info', mensagem: 'Novo parceiro Arena Seven adicionado à rede', data: '25/11 14:23' },
    { id: 2, tipo: 'success', mensagem: 'Pagamento processado: R$ 240,00 - Beach Club', data: '25/11 12:10' },
    { id: 3, tipo: 'warning', mensagem: 'Conflito de agendamento detectado - Quadra 10 - 16h', data: '25/11 10:05' },
    { id: 4, tipo: 'success', mensagem: 'Webhook recebido: Pagamento confirmado R$ 180,00', data: '24/11 18:30' },
    { id: 5, tipo: 'info', mensagem: 'Atualização automática de disponibilidade - Arena Seven', data: '24/11 15:22' },
  ];

  const webhooks = [
    { id: 1, evento: 'payment.success', parceiro: 'Arena Seven', valor: 240, data: '25/11 14:23' },
    { id: 2, evento: 'payment.success', parceiro: 'Beach Club', valor: 180, data: '25/11 12:10' },
    { id: 3, evento: 'reservation.created', parceiro: 'Quadra 10', valor: 0, data: '25/11 10:05' },
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
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700"
          >
            <LayoutDashboard className="w-5 h-5" />
            Detalhes
          </button>
          <button
            onClick={() => onNavigate('admin-financeiro')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-100 text-purple-700"
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
            <h2 className="text-gray-900 mb-2">Financeiro Geral</h2>
            <p className="text-gray-600">Visão completa das finanças da plataforma</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Download className="w-4 h-4 mr-2" />
            Exportar Relatório
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-600">Receita Total</div>
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="text-green-600 text-3xl mb-1">R$ 15.000</div>
            <p className="text-gray-500 text-sm">Esta semana</p>
          </Card>

          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-600">Comissão SJ</div>
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div className="text-purple-600 text-3xl mb-1">R$ 2.250</div>
            <p className="text-gray-500 text-sm">15% média</p>
          </Card>

          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-600">Transações</div>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Activity className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="text-blue-600 text-3xl mb-1">156</div>
            <p className="text-gray-500 text-sm">Últimos 7 dias</p>
          </Card>

          <Card className="p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-600">Taxa de Sucesso</div>
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="text-green-600 text-3xl mb-1">98.5%</div>
            <p className="text-gray-500 text-sm">Pagamentos aprovados</p>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <Card className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-6">Receita Diária</h3>
            <ResponsiveContainer width="100%" height={250}>
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

          <Card className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-6">Comissão Semanal</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={receitaData}>
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
                <Bar dataKey="comissao" fill="#7C3AED" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Logs e Webhooks */}
        <div className="grid grid-cols-2 gap-6">
          {/* Logs */}
          <Card className="rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Activity className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-gray-900">Logs do Sistema</h3>
            </div>

            <div className="space-y-3">
              {logs.map((log) => (
                <div
                  key={log.id}
                  className={`rounded-lg p-3 border ${
                    log.tipo === 'success'
                      ? 'bg-green-50 border-green-200'
                      : log.tipo === 'warning'
                      ? 'bg-yellow-50 border-yellow-200'
                      : 'bg-blue-50 border-blue-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      log.tipo === 'success'
                        ? 'bg-green-500'
                        : log.tipo === 'warning'
                        ? 'bg-yellow-500'
                        : 'bg-blue-500'
                    }`}>
                      {log.tipo === 'success' ? '✓' : log.tipo === 'warning' ? '!' : 'i'}
                    </div>
                    <div className="flex-1">
                      <div className={`text-sm ${
                        log.tipo === 'success'
                          ? 'text-green-900'
                          : log.tipo === 'warning'
                          ? 'text-yellow-900'
                          : 'text-blue-900'
                      }`}>
                        {log.mensagem}
                      </div>
                      <div className={`text-xs mt-1 ${
                        log.tipo === 'success'
                          ? 'text-green-600'
                          : log.tipo === 'warning'
                          ? 'text-yellow-600'
                          : 'text-blue-600'
                      }`}>
                        {log.data}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Webhooks */}
          <Card className="rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Activity className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-gray-900">Console de Webhooks</h3>
            </div>

            <div className="space-y-3">
              {webhooks.map((webhook) => (
                <div
                  key={webhook.id}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-purple-600 text-sm font-mono">{webhook.evento}</div>
                    {webhook.valor > 0 && (
                      <div className="text-green-600">R$ {webhook.valor}</div>
                    )}
                  </div>
                  <div className="text-gray-900 text-sm mb-1">{webhook.parceiro}</div>
                  <div className="text-xs text-gray-500">{webhook.data}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
