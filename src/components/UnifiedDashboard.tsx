import { useState } from 'react';
import {
  LayoutDashboard,
  Calendar,
  Clock,
  DollarSign,
  Settings,
  CheckCircle,
  XCircle,
  MessageCircle,
  TrendingUp,
  Users,
  AlertCircle,
  Building2,
  Eye,
  Plus,
  Activity,
  MessageSquare,
  AlertTriangle,
  BarChart3,
  Menu,
  X,
} from 'lucide-react';

type LocalTab = 'dashboard' | 'reservas' | 'disponibilidade' | 'financeiro';
type AdminTab = 'parceiros' | 'detalhes' | 'financeiro-geral';
type MainView = 'local' | 'admin';

export default function UnifiedDashboard() {
  const [mainView, setMainView] = useState<MainView>('local');
  const [localTab, setLocalTab] = useState<LocalTab>('dashboard');
  const [adminTab, setAdminTab] = useState<AdminTab>('parceiros');
  const [showNotification, setShowNotification] = useState(true);
  const [selectedParceiro, setSelectedParceiro] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`w-72 bg-white border-r border-gray-200 p-6 flex flex-col fixed lg:static inset-y-0 left-0 z-40 transition-transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Logo */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4ADE80] to-[#7C3AED] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">SJ</span>
            </div>
            <div>
              <h2 className="font-bold text-gray-900">SimboraJogar</h2>
              <p className="text-xs text-gray-500">Plataforma Unificada</p>
            </div>
          </div>
        </div>

        {/* Main View Selector */}
        <div className="mb-6">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Painel
          </div>
          <div className="space-y-2">
            <button
              onClick={() => {
                setMainView('local');
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                mainView === 'local'
                  ? 'bg-gradient-to-r from-[#4ADE80] to-[#7C3AED] text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Building2 size={20} />
              <div className="text-left">
                <div className="font-semibold text-sm">Painel do Local</div>
                <div className="text-xs opacity-80">Arena Seven</div>
              </div>
            </button>
            <button
              onClick={() => {
                setMainView('admin');
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                mainView === 'admin'
                  ? 'bg-gradient-to-r from-[#7C3AED] to-[#4ADE80] text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <TrendingUp size={20} />
              <div className="text-left">
                <div className="font-semibold text-sm">Painel SimboraJogar</div>
                <div className="text-xs opacity-80">Admin Geral</div>
              </div>
            </button>
          </div>
        </div>

        <hr className="border-gray-200 my-4" />

        {/* Navigation based on view */}
        {mainView === 'local' ? (
          <nav className="space-y-2 flex-1">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Arena Seven
            </div>
            <button
              onClick={() => {
                setLocalTab('dashboard');
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                localTab === 'dashboard'
                  ? 'bg-[#4ADE80] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => {
                setLocalTab('reservas');
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                localTab === 'reservas'
                  ? 'bg-[#4ADE80] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Calendar size={20} />
              <span>Reservas</span>
            </button>
            <button
              onClick={() => {
                setLocalTab('disponibilidade');
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                localTab === 'disponibilidade'
                  ? 'bg-[#4ADE80] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Clock size={20} />
              <span>Disponibilidade</span>
            </button>
            <button
              onClick={() => {
                setLocalTab('financeiro');
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                localTab === 'financeiro'
                  ? 'bg-[#4ADE80] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <DollarSign size={20} />
              <span>Financeiro</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors">
              <Settings size={20} />
              <span>Configurações</span>
            </button>
          </nav>
        ) : (
          <nav className="space-y-2 flex-1">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Administração Geral
            </div>
            <button
              onClick={() => {
                setAdminTab('parceiros');
                setSelectedParceiro(null);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                adminTab === 'parceiros'
                  ? 'bg-[#7C3AED] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Building2 size={20} />
              <span>Lista de Parceiros</span>
            </button>
            <button
              onClick={() => {
                setAdminTab('detalhes');
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                adminTab === 'detalhes'
                  ? 'bg-[#7C3AED] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Eye size={20} />
              <span>Detalhes do Parceiro</span>
            </button>
            <button
              onClick={() => {
                setAdminTab('financeiro-geral');
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                adminTab === 'financeiro-geral'
                  ? 'bg-[#7C3AED] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <DollarSign size={20} />
              <span>Financeiro Geral</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors">
              <Settings size={20} />
              <span>Configurações</span>
            </button>
          </nav>
        )}
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 pb-24 lg:pb-8">
        {/* Notification Toast */}
        {showNotification && mainView === 'local' && (
          <div className="mb-6 bg-gradient-to-r from-[#4ADE80] to-[#7C3AED] text-white p-4 rounded-xl shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle size={24} />
              <div>
                <p className="font-semibold">Nova reserva confirmada via SimboraJogar</p>
                <p className="text-sm text-white/90">Lucas • 16h • R$ 20 pago</p>
              </div>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="text-white hover:bg-white/20 p-2 rounded-lg"
            >
              <XCircle size={20} />
            </button>
          </div>
        )}

        {/* Render content based on view */}
        {mainView === 'local' && (
          <>
            {localTab === 'dashboard' && <LocalDashboardView />}
            {localTab === 'reservas' && <LocalReservasView />}
            {localTab === 'disponibilidade' && <LocalDisponibilidadeView />}
            {localTab === 'financeiro' && <LocalFinanceiroView />}
          </>
        )}

        {mainView === 'admin' && (
          <>
            {adminTab === 'parceiros' && (
              <AdminParceirosView
                onSelectParceiro={(p: any) => {
                  setSelectedParceiro(p);
                  setAdminTab('detalhes');
                }}
              />
            )}
            {adminTab === 'detalhes' && <AdminDetalhesView parceiro={selectedParceiro} />}
            {adminTab === 'financeiro-geral' && <AdminFinanceiroView />}
          </>
        )}
      </main>
    </div>
  );
}

// LOCAL DASHBOARD VIEWS
function LocalDashboardView() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard - Arena Seven</h1>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4ADE80]/20 to-[#4ADE80]/10 rounded-xl flex items-center justify-center">
              <TrendingUp className="text-[#4ADE80]" size={24} />
            </div>
            <span className="text-xs text-gray-500">Hoje</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">82%</div>
          <div className="text-sm text-gray-600">Taxa de Ocupação</div>
          <div className="mt-3 text-xs text-[#4ADE80]">+12% vs. ontem</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED]/20 to-[#7C3AED]/10 rounded-xl flex items-center justify-center">
              <DollarSign className="text-[#7C3AED]" size={24} />
            </div>
            <span className="text-xs text-gray-500">Este mês</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">R$ 2.400</div>
          <div className="text-sm text-gray-600">Receita SimboraJogar</div>
          <div className="mt-3 text-xs text-[#7C3AED]">15% de comissão</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4ADE80]/20 to-[#7C3AED]/20 rounded-xl flex items-center justify-center">
              <Users className="text-[#7C3AED]" size={24} />
            </div>
            <span className="text-xs text-gray-500">Hoje</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">8</div>
          <div className="text-sm text-gray-600">Reservas Diretas</div>
          <div className="mt-3 text-xs text-gray-500">Via SimboraJogar</div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="font-bold text-gray-900 mb-4">Visão Rápida</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-xs text-gray-600 mt-1">Reservas Hoje</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900">45</div>
            <div className="text-xs text-gray-600 mt-1">Jogadores Esta Semana</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900">4.8</div>
            <div className="text-xs text-gray-600 mt-1">Avaliação Média</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900">28</div>
            <div className="text-xs text-gray-600 mt-1">Peladas Criadas</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocalReservasView() {
  const reservas = [
    { id: 1, nome: 'Lucas', horario: '16h', valor: 20, status: 'pago' },
    { id: 2, nome: 'Felipe', horario: '17h', valor: 25, status: 'pendente' },
    { id: 3, nome: 'Mariana', horario: '18h', valor: 20, status: 'pago' },
    { id: 4, nome: 'João', horario: '19h', valor: 20, status: 'pago' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Reservas do Dia</h1>
        <button className="px-4 py-2 bg-gradient-to-r from-[#4ADE80] to-[#7C3AED] text-white rounded-xl hover:opacity-90 transition-opacity">
          + Nova Reserva
        </button>
      </div>

      <div className="space-y-4">
        {reservas.map((reserva) => (
          <div key={reserva.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4ADE80] to-[#7C3AED] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{reserva.nome[0]}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{reserva.nome}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {reserva.horario}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign size={14} />
                      R$ {reserva.valor}
                    </span>
                    {reserva.status === 'pago' ? (
                      <span className="px-2 py-1 bg-[#4ADE80]/10 text-[#4ADE80] rounded-lg text-xs font-semibold flex items-center gap-1">
                        <CheckCircle size={12} />
                        Pago
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-lg text-xs font-semibold flex items-center gap-1">
                        <AlertCircle size={12} />
                        Pendente
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {reserva.status === 'pago' ? (
                  <>
                    <button className="px-4 py-2 bg-[#4ADE80] text-white rounded-lg hover:bg-[#4ADE80]/90 transition-colors text-sm">
                      Confirmar Presença
                    </button>
                    <button className="px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      <MessageCircle size={16} className="inline mr-1" />
                      Mensagem
                    </button>
                    <button className="px-4 py-2 bg-white border-2 border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm">
                      Cancelar
                    </button>
                  </>
                ) : (
                  <>
                    <button className="px-4 py-2 bg-[#7C3AED] text-white rounded-lg hover:bg-[#7C3AED]/90 transition-colors text-sm">
                      Lembrar Pagamento
                    </button>
                    <button className="px-4 py-2 bg-white border-2 border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm">
                      Cancelar
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LocalDisponibilidadeView() {
  const horarios = [
    { hora: '08:00', status: 'disponivel' },
    { hora: '10:00', status: 'reservado' },
    { hora: '12:00', status: 'disponivel' },
    { hora: '14:00', status: 'disponivel' },
    { hora: '16:00', status: 'reservado' },
    { hora: '18:00', status: 'disponivel' },
    { hora: '20:00', status: 'bloqueado' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Disponibilidade</h1>

      {/* Quick Update */}
      <div className="bg-gradient-to-r from-[#4ADE80]/10 to-[#7C3AED]/10 rounded-xl p-6 border border-[#7C3AED]/20">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-[#4ADE80] to-[#7C3AED] rounded-lg flex items-center justify-center flex-shrink-0">
            <MessageCircle className="text-white" size={20} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-1">Atualização Rápida</h3>
            <p className="text-sm text-gray-600 mb-3">
              Informe quais horários estão disponíveis e atualizaremos automaticamente:
            </p>
            <textarea
              placeholder="Ex: 14h às 18h livres"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent outline-none"
              rows={2}
            />
            <button className="mt-3 px-6 py-2 bg-gradient-to-r from-[#4ADE80] to-[#7C3AED] text-white rounded-lg hover:opacity-90 transition-opacity">
              Atualizar Disponibilidade
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="font-bold text-gray-900 mb-4">Horários de Hoje</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {horarios.map((horario, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border-2 ${
                horario.status === 'disponivel'
                  ? 'bg-[#4ADE80]/10 border-[#4ADE80] text-[#4ADE80]'
                  : horario.status === 'reservado'
                  ? 'bg-[#7C3AED]/10 border-[#7C3AED] text-[#7C3AED]'
                  : 'bg-gray-100 border-gray-300 text-gray-500'
              }`}
            >
              <div className="font-bold text-lg">{horario.hora}</div>
              <div className="text-sm capitalize mt-1">{horario.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LocalFinanceiroView() {
  const pagamentos = [
    { jogador: 'Lucas', horario: '16h', valor: 20, status: 'Pago' },
    { jogador: 'Felipe', horario: '17h', valor: 25, status: 'Aguardando' },
    { jogador: 'Mariana', horario: '18h', valor: 20, status: 'Pago' },
    { jogador: 'João', horario: '19h', valor: 20, status: 'Pago' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Financeiro</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-[#4ADE80] to-[#4ADE80]/80 rounded-xl p-6 text-white shadow-lg">
          <div className="text-sm opacity-90 mb-2">Receita do Dia</div>
          <div className="text-4xl font-bold mb-1">R$ 85</div>
          <div className="text-sm opacity-90">4 pagamentos confirmados</div>
        </div>

        <div className="bg-gradient-to-br from-[#7C3AED] to-[#7C3AED]/80 rounded-xl p-6 text-white shadow-lg">
          <div className="text-sm opacity-90 mb-2">Receita do Mês</div>
          <div className="text-4xl font-bold mb-1">R$ 2.400</div>
          <div className="text-sm opacity-90">89 pagamentos confirmados</div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="font-bold text-gray-900">Pagamentos</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Jogador
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Horário
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Valor
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pagamentos.map((pagamento, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#4ADE80] to-[#7C3AED] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{pagamento.jogador[0]}</span>
                      </div>
                      <span className="text-gray-900">{pagamento.jogador}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{pagamento.horario}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">
                    R$ {pagamento.valor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {pagamento.status === 'Pago' ? (
                      <span className="px-3 py-1 bg-[#4ADE80]/10 text-[#4ADE80] rounded-lg text-sm font-semibold">
                        Pago
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-lg text-sm font-semibold">
                        Aguardando
                      </span>
                    )}
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

// ADMIN VIEWS
function AdminParceirosView({ onSelectParceiro }: { onSelectParceiro: (parceiro: any) => void }) {
  const parceiros = [
    {
      id: 1,
      nome: 'Arena Seven',
      cidade: 'Recife',
      bairro: 'Boa Viagem',
      comissao: 15,
      ocupacao: 82,
      receita: 2400,
      reservas: 45,
      status: 'ativo',
    },
    {
      id: 2,
      nome: 'Beach Club',
      cidade: 'Olinda',
      bairro: 'Casa Caiada',
      comissao: 10,
      ocupacao: 75,
      receita: 1800,
      reservas: 32,
      status: 'ativo',
    },
    {
      id: 3,
      nome: 'Quadra 10',
      cidade: 'Recife',
      bairro: 'Pina',
      comissao: 12,
      ocupacao: 68,
      receita: 1500,
      reservas: 28,
      status: 'ativo',
    },
    {
      id: 4,
      nome: 'Sports Arena',
      cidade: 'Jaboatão',
      bairro: 'Piedade',
      comissao: 15,
      ocupacao: 55,
      receita: 980,
      reservas: 18,
      status: 'pendente',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Painel SimboraJogar - Parceiros</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4ADE80]/20 to-[#4ADE80]/10 rounded-xl flex items-center justify-center">
              <Building2 className="text-[#4ADE80]" size={24} />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{parceiros.length}</div>
          <div className="text-sm text-gray-600">Parceiros Ativos</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED]/20 to-[#7C3AED]/10 rounded-xl flex items-center justify-center">
              <DollarSign className="text-[#7C3AED]" size={24} />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">R$ 6.680</div>
          <div className="text-sm text-gray-600">Receita Total (Mês)</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4ADE80]/20 to-[#7C3AED]/20 rounded-xl flex items-center justify-center">
              <Users className="text-[#7C3AED]" size={24} />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">123</div>
          <div className="text-sm text-gray-600">Reservas Totais</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4ADE80]/20 to-[#7C3AED]/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="text-[#4ADE80]" size={24} />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">70%</div>
          <div className="text-sm text-gray-600">Ocupação Média</div>
        </div>
      </div>

      {/* Add Partner Button */}
      <div className="flex justify-end">
        <button className="px-6 py-3 bg-gradient-to-r from-[#4ADE80] to-[#7C3AED] text-white rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2">
          <Plus size={20} />
          Adicionar Parceiro
        </button>
      </div>

      {/* Partners Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Localização
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Comissão
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Ocupação
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Receita
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {parceiros.map((parceiro) => (
                <tr key={parceiro.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#4ADE80] to-[#7C3AED] rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{parceiro.nome[0]}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{parceiro.nome}</div>
                        <div className="text-xs text-gray-500">{parceiro.reservas} reservas</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-900">{parceiro.cidade}</div>
                    <div className="text-xs text-gray-500">{parceiro.bairro}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-[#7C3AED] font-semibold">{parceiro.comissao}%</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 w-20">
                        <div
                          className="bg-gradient-to-r from-[#4ADE80] to-[#7C3AED] h-2 rounded-full"
                          style={{ width: `${parceiro.ocupacao}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{parceiro.ocupacao}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">
                    R$ {parceiro.receita.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {parceiro.status === 'ativo' ? (
                      <span className="px-3 py-1 bg-[#4ADE80]/10 text-[#4ADE80] rounded-lg text-sm font-semibold">
                        Ativo
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-lg text-sm font-semibold">
                        Pendente
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => onSelectParceiro(parceiro)}
                      className="px-4 py-2 bg-white border-2 border-[#7C3AED] text-[#7C3AED] rounded-lg hover:bg-[#7C3AED] hover:text-white transition-colors flex items-center gap-1 text-sm"
                    >
                      <Eye size={16} />
                      Ver Detalhes
                    </button>
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

function AdminDetalhesView({ parceiro }: { parceiro: any }) {
  const parceiroData = parceiro || {
    nome: 'Arena Seven',
    cidade: 'Recife',
    bairro: 'Boa Viagem',
    comissao: 15,
    ocupacao: 82,
    receita: 2400,
  };

  const historico = [
    { data: '25/11/2025', jogador: 'Lucas', horario: '16h', valor: 20, status: 'Confirmado' },
    { data: '24/11/2025', jogador: 'Felipe', horario: '17h', valor: 25, status: 'Confirmado' },
    { data: '24/11/2025', jogador: 'Mariana', horario: '18h', valor: 20, status: 'Confirmado' },
    { data: '23/11/2025', jogador: 'João', horario: '19h', valor: 20, status: 'Confirmado' },
    { data: '23/11/2025', jogador: 'Ana', horario: '15h', valor: 20, status: 'Cancelado' },
  ];

  const logs = [
    { hora: '16:20', mensagem: 'Reserva confirmada - Lucas - 16h', tipo: 'sucesso' },
    { hora: '15:45', mensagem: 'Horário atualizado - 14h às 18h disponíveis', tipo: 'info' },
    { hora: '14:30', mensagem: 'Pagamento recebido - Felipe - R$ 25', tipo: 'sucesso' },
    { hora: '12:15', mensagem: 'Conflito de agendamento detectado e resolvido', tipo: 'alerta' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Detalhes do Parceiro</h1>

      {/* Header */}
      <div className="bg-gradient-to-r from-[#4ADE80] to-[#7C3AED] rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur">
              <span className="text-white font-bold text-2xl">{parceiroData.nome[0]}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{parceiroData.nome}</h2>
              <p className="text-white/90">
                {parceiroData.cidade} • {parceiroData.bairro}
              </p>
            </div>
          </div>
          <button className="px-6 py-3 bg-white text-[#7C3AED] rounded-xl hover:bg-white/90 transition-colors font-semibold flex items-center gap-2">
            <TrendingUp size={20} />
            Promover Local
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
            <div className="text-white/70 text-sm mb-1">Ocupação</div>
            <div className="text-2xl font-bold">{parceiroData.ocupacao}%</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
            <div className="text-white/70 text-sm mb-1">Receita Mensal</div>
            <div className="text-2xl font-bold">R$ {parceiroData.receita}</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
            <div className="text-white/70 text-sm mb-1">Comissão</div>
            <div className="text-2xl font-bold">{parceiroData.comissao}%</div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <BarChart3 className="text-[#7C3AED]" size={20} />
          Reservas nos Últimos 7 Dias
        </h3>
        <div className="flex items-end justify-between gap-2 h-48">
          {[65, 78, 82, 70, 85, 80, 82].map((height, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full bg-gradient-to-t from-[#4ADE80] to-[#7C3AED] rounded-t-lg transition-all hover:opacity-80"
                style={{ height: `${height}%` }}
              />
              <span className="text-xs text-gray-600">
                {new Date(Date.now() - (6 - idx) * 86400000).toLocaleDateString('pt-BR', { day: '2-digit' })}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="font-bold text-gray-900">Histórico de Reservas</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Data
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Jogador
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Horário
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Valor
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {historico.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">{item.data}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">{item.jogador}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{item.horario}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">R$ {item.valor}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.status === 'Confirmado' ? (
                      <span className="px-3 py-1 bg-[#4ADE80]/10 text-[#4ADE80] rounded-lg text-sm font-semibold">
                        Confirmado
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-red-100 text-red-600 rounded-lg text-sm font-semibold">
                        Cancelado
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Activity Logs */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Activity className="text-[#7C3AED]" size={20} />
          Logs de Atividade
        </h3>
        <div className="space-y-3">
          {logs.map((log, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="flex-shrink-0 mt-1">
                {log.tipo === 'sucesso' && <CheckCircle className="text-[#4ADE80]" size={20} />}
                {log.tipo === 'info' && <MessageSquare className="text-[#7C3AED]" size={20} />}
                {log.tipo === 'alerta' && <AlertTriangle className="text-orange-500" size={20} />}
              </div>
              <div className="flex-1">
                <p className="text-gray-900">{log.mensagem}</p>
                <span className="text-xs text-gray-500">{log.hora}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdminFinanceiroView() {
  const repasses = [
    { parceiro: 'Arena Seven', valor: 2400, comissao: 360, liquido: 2040, status: 'Pago' },
    { parceiro: 'Beach Club', valor: 1800, comissao: 180, liquido: 1620, status: 'Pago' },
    { parceiro: 'Quadra 10', valor: 1500, comissao: 180, liquido: 1320, status: 'Pendente' },
    { parceiro: 'Sports Arena', valor: 980, comissao: 147, liquido: 833, status: 'Pendente' },
  ];

  const webhooks = [
    { hora: '16:23', evento: 'payment.confirmed', parceiro: 'Arena Seven', status: 'sucesso' },
    { hora: '16:22', evento: 'reservation.created', parceiro: 'Beach Club', status: 'sucesso' },
    { hora: '16:15', evento: 'payment.pending', parceiro: 'Quadra 10', status: 'processando' },
    { hora: '16:10', evento: 'reservation.cancelled', parceiro: 'Sports Arena', status: 'sucesso' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Financeiro Geral</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-[#4ADE80] to-[#4ADE80]/80 rounded-xl p-6 text-white shadow-lg">
          <div className="text-sm opacity-90 mb-2">Receita Total</div>
          <div className="text-4xl font-bold mb-1">R$ 6.680</div>
          <div className="text-sm opacity-90">Este mês</div>
        </div>

        <div className="bg-gradient-to-br from-[#7C3AED] to-[#7C3AED]/80 rounded-xl p-6 text-white shadow-lg">
          <div className="text-sm opacity-90 mb-2">Comissão Total</div>
          <div className="text-4xl font-bold mb-1">R$ 867</div>
          <div className="text-sm opacity-90">Este mês</div>
        </div>

        <div className="bg-gradient-to-br from-[#4ADE80] to-[#7C3AED] rounded-xl p-6 text-white shadow-lg">
          <div className="text-sm opacity-90 mb-2">Líquido Parceiros</div>
          <div className="text-4xl font-bold mb-1">R$ 5.813</div>
          <div className="text-sm opacity-90">Este mês</div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="font-bold text-gray-900 mb-4">Receita Diária - Últimos 7 Dias</h2>
        <div className="flex items-end justify-between gap-3 h-64">
          {[450, 520, 680, 590, 720, 650, 780].map((value, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-2">
              <div className="text-sm font-semibold text-gray-700">R$ {value}</div>
              <div
                className="w-full bg-gradient-to-t from-[#4ADE80] to-[#7C3AED] rounded-t-xl transition-all hover:opacity-80"
                style={{ height: `${(value / 800) * 100}%` }}
              />
              <span className="text-xs text-gray-600">
                {new Date(Date.now() - (6 - idx) * 86400000).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'short',
                })}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Repasses Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="font-bold text-gray-900">Repasses aos Parceiros</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Parceiro
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Valor Bruto
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Comissão SJ
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Valor Líquido
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {repasses.map((repasse, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#4ADE80] to-[#7C3AED] rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{repasse.parceiro[0]}</span>
                      </div>
                      <span className="text-gray-900 font-medium">{repasse.parceiro}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-semibold">
                    R$ {repasse.valor.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#7C3AED] font-semibold">
                    R$ {repasse.comissao}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#4ADE80] font-bold">
                    R$ {repasse.liquido.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {repasse.status === 'Pago' ? (
                      <span className="px-3 py-1 bg-[#4ADE80]/10 text-[#4ADE80] rounded-lg text-sm font-semibold">
                        Pago
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-lg text-sm font-semibold">
                        Pendente
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Webhooks Console */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Activity className="text-[#7C3AED]" size={20} />
          Console de Pagamentos (Webhooks)
        </h2>
        <div className="space-y-2">
          {webhooks.map((webhook, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors font-mono text-sm"
            >
              <div className="flex items-center gap-4">
                <span className="text-gray-500 text-xs">{webhook.hora}</span>
                <span className="text-[#7C3AED] font-semibold">{webhook.evento}</span>
                <span className="text-gray-700">{webhook.parceiro}</span>
              </div>
              <div>
                {webhook.status === 'sucesso' ? (
                  <span className="px-3 py-1 bg-[#4ADE80]/10 text-[#4ADE80] rounded-lg text-xs font-semibold">
                    200 OK
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-lg text-xs font-semibold">
                    Processando
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
