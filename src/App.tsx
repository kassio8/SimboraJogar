import { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { Button } from './components/ui/button';
import { ChatBot } from './components/ChatBot';
import { LocalDashboard } from './components/local/LocalDashboard';
import { LocalDisponibilidade } from './components/local/LocalDisponibilidade';
import { LocalFinanceiro } from './components/local/LocalFinanceiro';
import { LocalAnalytics } from './components/local/LocalAnalytics';
import { LocalPeladas } from './components/local/LocalPeladas';
import { AdminParceiros } from './components/admin/AdminParceiros';
import { AdminDetalhes } from './components/admin/AdminDetalhes';
import { AdminFinanceiro } from './components/admin/AdminFinanceiro';

export default function App() {
  const [currentView, setCurrentView] = useState('local-dashboard');
  const [chatOpen, setChatOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const views = [
    // Painel Local
    { id: 'local-dashboard', name: 'Local - Dashboard', component: <LocalDashboard onNavigate={setCurrentView} /> },
    { id: 'local-disponibilidade', name: 'Local - Disponibilidade', component: <LocalDisponibilidade onNavigate={setCurrentView} /> },
    { id: 'local-financeiro', name: 'Local - Financeiro', component: <LocalFinanceiro onNavigate={setCurrentView} /> },
    { id: 'local-analytics', name: 'Local - Analytics', component: <LocalAnalytics onNavigate={setCurrentView} /> },
    { id: 'local-peladas', name: 'Local - Gerenciar Peladas', component: <LocalPeladas onNavigate={setCurrentView} /> },
    
    // Painel Admin
    { id: 'admin-parceiros', name: 'Admin - Parceiros', component: <AdminParceiros onNavigate={setCurrentView} /> },
    { id: 'admin-detalhes', name: 'Admin - Detalhes', component: <AdminDetalhes onNavigate={setCurrentView} /> },
    { id: 'admin-financeiro', name: 'Admin - Financeiro', component: <AdminFinanceiro onNavigate={setCurrentView} /> },
  ];

  const currentViewData = views.find(v => v.id === currentView);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-purple-600">SimboraJogar</h1>
            <p className="text-gray-500 text-xs">{currentViewData?.name}</p>
          </div>
        </div>
      </div>

      {/* Side Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setMenuOpen(false)}>
          <div className="bg-white w-80 h-full p-6 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-purple-600">Navegação</h2>
              <Button variant="ghost" size="sm" onClick={() => setMenuOpen(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-2">Painel Local (Arena Seven)</h3>
                <div className="space-y-1">
                  {views.filter(v => v.id.startsWith('local')).map(view => (
                    <button
                      key={view.id}
                      onClick={() => {
                        setCurrentView(view.id);
                        setMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        currentView === view.id
                          ? 'bg-green-100 text-green-700'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {view.name.replace('Local - ', '')}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-gray-500 text-xs uppercase tracking-wider mb-2">Painel Admin SimboraJogar</h3>
                <div className="space-y-1">
                  {views.filter(v => v.id.startsWith('admin')).map(view => (
                    <button
                      key={view.id}
                      onClick={() => {
                        setCurrentView(view.id);
                        setMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        currentView === view.id
                          ? 'bg-purple-100 text-purple-700'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {view.name.replace('Admin - ', '')}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div>
        {currentViewData?.component}
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all z-50"
      >
        {chatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* ChatBot Window */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
          <ChatBot onClose={() => setChatOpen(false)} />
        </div>
      )}
    </div>
  );
}
