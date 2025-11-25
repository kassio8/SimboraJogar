import { LayoutDashboard, Calendar, DollarSign, Settings, TrendingUp, Send, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Textarea } from '../ui/textarea';

interface LocalDisponibilidadeProps {
  onNavigate: (view: string) => void;
}

export function LocalDisponibilidade({ onNavigate }: LocalDisponibilidadeProps) {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const horarios = [
    { time: '08:00', status: 'disponivel' },
    { time: '09:00', status: 'disponivel' },
    { time: '10:00', status: 'disponivel' },
    { time: '11:00', status: 'ocupado' },
    { time: '12:00', status: 'ocupado' },
    { time: '13:00', status: 'ocupado' },
    { time: '14:00', status: 'disponivel' },
    { time: '15:00', status: 'disponivel' },
    { time: '16:00', status: 'disponivel' },
    { time: '17:00', status: 'disponivel' },
    { time: '18:00', status: 'disponivel' },
    { time: '19:00', status: 'ocupado' },
    { time: '20:00', status: 'ocupado' },
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
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-100 text-purple-700"
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
          <h2 className="text-gray-900 mb-2">Disponibilidade</h2>
          <p className="text-gray-600">Atualize sua disponibilidade via mensagem</p>
        </div>

        {/* Message Card */}
        <Card className="rounded-xl border border-gray-200 p-6 mb-8">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                🤖
              </div>
              <div className="flex-1">
                <div className="text-purple-900 mb-1">Mensagem automática</div>
                <p className="text-purple-700">
                  Responda de forma simples: informe os horários disponíveis e o sistema atualizará automaticamente o calendário.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-gray-700 mb-2 block">Digite sua resposta</label>
              <Textarea
                placeholder="Ex: 14h às 18h livres"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[100px] rounded-xl border-gray-300"
              />
            </div>

            <Button
              onClick={handleSend}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              disabled={sent}
            >
              {sent ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Atualizado com sucesso!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Enviar atualização
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Calendar */}
        <Card className="rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-gray-900">Calendário de Disponibilidade</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Disponível</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Ocupado</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-3">
            {horarios.map((horario) => (
              <div
                key={horario.time}
                className={`rounded-xl p-4 border-2 transition-all ${
                  horario.status === 'disponivel'
                    ? 'bg-green-50 border-green-200 hover:border-green-300'
                    : 'bg-red-50 border-red-200'
                }`}
              >
                <div className="text-center">
                  <div className="text-gray-900 mb-1">{horario.time}</div>
                  <div
                    className={`text-xs ${
                      horario.status === 'disponivel' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {horario.status === 'disponivel' ? '✓ Livre' : '✗ Ocupado'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sent && (
            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
              <Check className="w-5 h-5 text-green-600" />
              <div className="text-green-900">
                Calendário atualizado! Os horários 14:00 às 18:00 foram marcados como disponíveis.
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
