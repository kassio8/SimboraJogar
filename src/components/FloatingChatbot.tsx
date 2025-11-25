import { useState } from 'react';
import { MessageCircle, X, Send, Trash2, Edit2 } from 'lucide-react';

type Step = 'initial' | 'creating' | 'created' | 'my-peladas' | 'editing' | 'my-reservas' | 'search-results' | 'confirm-payment';

interface Pelada {
  id: string;
  nome: string;
  modalidade: string;
  jogadores: string;
  valor: string;
  data: string;
  horario: string;
  local: string;
}

interface Reserva {
  id: string;
  pelada: string;
  local: string;
  horario: string;
  valor: string;
  data: string;
  status: 'confirmada' | 'pendente';
}

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>('initial');
  const [peladaName, setPeladaName] = useState('');
  const [modalidade, setModalidade] = useState('');
  const [players, setPlayers] = useState('');
  const [value, setValue] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [local, setLocal] = useState('');
  const [editingPeladaId, setEditingPeladaId] = useState<string | null>(null);

  // Mock data - peladas criadas
  const [peladas, setPeladas] = useState<Pelada[]>([
    {
      id: '1',
      nome: 'Pelada da Galera',
      modalidade: '🏐 Vôlei',
      jogadores: '12',
      valor: '20',
      data: '2025-11-26',
      horario: '16:00',
      local: 'avl Arena Seven - Boa Viagem',
    },
    {
      id: '2',
      nome: 'Racha de Sexta',
      modalidade: '⚽ Futebol',
      jogadores: '10',
      valor: '15',
      data: '2025-11-29',
      horario: '18:00',
      local: 'avl Beach Club - Olinda',
    },
  ]);

  // Mock data - reservas feitas
  const [reservas, setReservas] = useState<Reserva[]>([
    {
      id: 'r1',
      pelada: 'Vôlei das Terças',
      local: 'Arena Seven',
      horario: '16h',
      valor: '20',
      data: '26/11/2025',
      status: 'confirmada',
    },
    {
      id: 'r2',
      pelada: 'Beach Tennis',
      local: 'Beach Club',
      horario: '17h',
      valor: '25',
      data: '27/11/2025',
      status: 'confirmada',
    },
  ]);

  const handleCreatePelada = () => {
    setStep('creating');
    resetForm();
  };

  const handleEditPelada = (pelada: Pelada) => {
    setEditingPeladaId(pelada.id);
    setPeladaName(pelada.nome);
    setModalidade(pelada.modalidade);
    setPlayers(pelada.jogadores);
    setValue(pelada.valor);
    setSelectedDate(pelada.data);
    setSelectedTime(pelada.horario);
    setLocal(pelada.local);
    setStep('editing');
  };

  const handleDeletePelada = (id: string) => {
    setPeladas(peladas.filter(p => p.id !== id));
  };

  const handleSavePelada = () => {
    if (!peladaName || !modalidade || !players || !value || !selectedDate || !selectedTime || !local) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const newPelada: Pelada = {
      id: Date.now().toString(),
      nome: peladaName,
      modalidade,
      jogadores: players,
      valor: value,
      data: selectedDate,
      horario: selectedTime,
      local,
    };

    setPeladas([...peladas, newPelada]);
    setStep('created');
  };

  const handleUpdatePelada = () => {
    if (!peladaName || !modalidade || !players || !value || !selectedDate || !selectedTime || !local) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    setPeladas(peladas.map(p => 
      p.id === editingPeladaId 
        ? { ...p, nome: peladaName, modalidade, jogadores: players, valor: value, data: selectedDate, horario: selectedTime, local }
        : p
    ));
    setStep('my-peladas');
    setEditingPeladaId(null);
  };

  const handleCancelReserva = (id: string) => {
    setReservas(reservas.filter(r => r.id !== id));
  };

  const resetForm = () => {
    setPeladaName('');
    setModalidade('');
    setPlayers('');
    setValue('');
    setSelectedDate('');
    setSelectedTime('');
    setLocal('');
    setEditingPeladaId(null);
  };

  const handleBackToInitial = () => {
    setStep('initial');
    resetForm();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-[#4ADE80] to-[#7C3AED] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50"
      >
        {isOpen ? (
          <X className="text-white" size={28} />
        ) : (
          <MessageCircle className="text-white" size={28} />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#4ADE80] to-[#7C3AED] p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#4ADE80] to-[#7C3AED]">
                SJ
              </span>
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold">SimboraJogar Bot</div>
              <div className="text-white/80 text-sm">Online agora</div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {step === 'initial' && (
              <>
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[80%]">
                    <p className="text-gray-800">
                      Olá! Como posso ajudar você hoje?
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setStep('search-results')}
                    className="bg-white border-2 border-[#4ADE80] text-[#4ADE80] px-6 py-3 rounded-xl hover:bg-[#4ADE80] hover:text-white transition-colors">
                    🏐 Buscar peladas
                  </button>
                  <button
                    onClick={handleCreatePelada}
                    className="bg-white border-2 border-[#7C3AED] text-[#7C3AED] px-6 py-3 rounded-xl hover:bg-[#7C3AED] hover:text-white transition-colors"
                  >
                    ➕ Criar nova pelada
                  </button>
                  <button 
                    onClick={() => setStep('my-peladas')}
                    className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                    📋 Minhas peladas
                  </button>
                  <button 
                    onClick={() => setStep('my-reservas')}
                    className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                    📅 Minhas reservas
                  </button>
                </div>
              </>
            )}

            {step === 'search-results' && (
              <>
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[80%]">
                    <p className="text-gray-800">Achei 3 opções próximas 👇</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-md space-y-3">
                  <div className="bg-gradient-to-r from-[#4ADE80]/10 to-[#7C3AED]/10 p-3 rounded-lg border border-[#4ADE80]/20">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🏐</span>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">Arena Seven</div>
                        <div className="text-sm text-gray-600">16h • R$ 20</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setStep('confirm-payment')}
                      className="w-full bg-gradient-to-r from-[#4ADE80] to-[#7C3AED] text-white py-2 rounded-lg hover:opacity-90 transition-opacity">
                      Reservar
                    </button>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🏐</span>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">Beach Club</div>
                        <div className="text-sm text-gray-600">17h • R$ 25</div>
                      </div>
                    </div>
                    <button className="w-full bg-white border-2 border-[#7C3AED] text-[#7C3AED] py-2 rounded-lg hover:bg-[#7C3AED] hover:text-white transition-colors">
                      Reservar
                    </button>
                  </div>
                </div>

                <button 
                  onClick={handleBackToInitial}
                  className="w-full bg-gray-200 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-300 transition-colors">
                  ← Voltar
                </button>
              </>
            )}

            {step === 'confirm-payment' && (
              <>
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[80%]">
                    <p className="text-gray-800">Reserva confirmada! ✅</p>
                    <p className="text-sm text-gray-600 mt-2">Arena Seven • 16h • R$ 20</p>
                  </div>
                </div>

                <button 
                  onClick={handleBackToInitial}
                  className="w-full bg-gradient-to-r from-[#4ADE80] to-[#7C3AED] text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
                  Voltar ao início
                </button>
              </>
            )}

            {step === 'my-peladas' && (
              <>
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[80%]">
                    <p className="text-gray-800">
                      Suas peladas criadas ({peladas.length}):
                    </p>
                  </div>
                </div>

                {peladas.length === 0 ? (
                  <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                    <p className="text-gray-500">Nenhuma pelada criada ainda</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {peladas.map((pelada) => (
                      <div key={pelada.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-gray-900 mb-1">{pelada.nome}</div>
                        <div className="text-sm text-gray-600 mb-2">
                          {pelada.modalidade} • {pelada.jogadores} jogadores • R$ {pelada.valor}
                        </div>
                        <div className="text-xs text-gray-500 mb-3">
                          {new Date(pelada.data).toLocaleDateString('pt-BR')} às {pelada.horario}
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditPelada(pelada)}
                            className="flex-1 bg-[#7C3AED] text-white px-3 py-2 rounded-lg hover:bg-[#7C3AED]/90 transition-colors text-sm flex items-center justify-center gap-1"
                          >
                            <Edit2 size={14} />
                            Editar
                          </button>
                          <button
                            onClick={() => handleDeletePelada(pelada.id)}
                            className="flex-1 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm flex items-center justify-center gap-1"
                          >
                            <Trash2 size={14} />
                            Excluir
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <button 
                  onClick={handleBackToInitial}
                  className="w-full bg-gray-200 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-300 transition-colors">
                  ← Voltar
                </button>
              </>
            )}

            {step === 'my-reservas' && (
              <>
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[80%]">
                    <p className="text-gray-800">
                      Suas reservas ({reservas.length}):
                    </p>
                  </div>
                </div>

                {reservas.length === 0 ? (
                  <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                    <p className="text-gray-500">Nenhuma reserva encontrada</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {reservas.map((reserva) => (
                      <div key={reserva.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-semibold text-gray-900 mb-1">{reserva.pelada}</div>
                        <div className="text-sm text-gray-600 mb-2">
                          {reserva.local} • {reserva.horario}
                        </div>
                        <div className="text-xs text-gray-500 mb-3">
                          {reserva.data} • R$ {reserva.valor}
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                            reserva.status === 'confirmada' 
                              ? 'bg-[#4ADE80]/10 text-[#4ADE80]' 
                              : 'bg-orange-100 text-orange-600'
                          }`}>
                            {reserva.status === 'confirmada' ? 'Confirmada' : 'Pendente'}
                          </span>
                        </div>
                        <button
                          onClick={() => handleCancelReserva(reserva.id)}
                          className="w-full bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm flex items-center justify-center gap-1"
                        >
                          <Trash2 size={14} />
                          Cancelar Reserva
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <button 
                  onClick={handleBackToInitial}
                  className="w-full bg-gray-200 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-300 transition-colors">
                  ← Voltar
                </button>
              </>
            )}

            {(step === 'creating' || step === 'editing') && (
              <>
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[80%]">
                    <p className="text-gray-800">
                      {step === 'creating' ? 'Vamos criar sua pelada!' : 'Editar pelada'} Preencha as informações:
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome da Pelada
                    </label>
                    <input
                      type="text"
                      value={peladaName}
                      onChange={(e) => setPeladaName(e.target.value)}
                      placeholder="Ex: Pelada da Galera"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Modalidade
                    </label>
                    <select 
                      value={modalidade}
                      onChange={(e) => setModalidade(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent outline-none">
                      <option value="">Selecione a modalidade</option>
                      <option value="🏐 Vôlei">🏐 Vôlei</option>
                      <option value="⚽ Futebol">⚽ Futebol</option>
                      <option value="🏀 Basquete">🏀 Basquete</option>
                      <option value="🎾 Beach Tennis">🎾 Beach Tennis</option>
                      <option value="🏓 Futevôlei">🏓 Futevôlei</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número de Jogadores
                    </label>
                    <input
                      type="number"
                      value={players}
                      onChange={(e) => setPlayers(e.target.value)}
                      placeholder="Ex: 12"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Valor por Jogador (R$)
                    </label>
                    <input
                      type="number"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      placeholder="Ex: 20"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Data
                    </label>
                    <button
                      onClick={() => setShowCalendar(!showCalendar)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg text-left hover:border-[#4ADE80] transition-colors"
                    >
                      {selectedDate ? new Date(selectedDate).toLocaleDateString('pt-BR') : '📅 Selecionar data'}
                    </button>
                    {showCalendar && (
                      <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => {
                            setSelectedDate(e.target.value);
                            setShowCalendar(false);
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Horário
                    </label>
                    <button
                      onClick={() => setShowTimePicker(!showTimePicker)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg text-left hover:border-[#4ADE80] transition-colors"
                    >
                      {selectedTime || '🕐 Selecionar horário'}
                    </button>
                    {showTimePicker && (
                      <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                        <input
                          type="time"
                          value={selectedTime}
                          onChange={(e) => {
                            setSelectedTime(e.target.value);
                            setShowTimePicker(false);
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Local
                    </label>
                    <select 
                      value={local}
                      onChange={(e) => setLocal(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ADE80] focus:border-transparent outline-none">
                      <option value="">Selecione o local</option>
                      <option value="avl Arena Seven - Boa Viagem">avl Arena Seven - Boa Viagem</option>
                      <option value="avl Beach Club - Olinda">avl Beach Club - Olinda</option>
                      <option value="avl Quadra 10 - Recife">avl Quadra 10 - Recife</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      if (step === 'editing') {
                        setStep('my-peladas');
                      } else {
                        handleBackToInitial();
                      }
                    }}
                    className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-300 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button 
                    onClick={step === 'editing' ? handleUpdatePelada : handleSavePelada}
                    className="flex-1 bg-gradient-to-r from-[#4ADE80] to-[#7C3AED] text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
                    {step === 'editing' ? 'Salvar Alterações' : 'Criar Pelada'}
                  </button>
                </div>
              </>
            )}

            {step === 'created' && (
              <>
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[80%]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">✅</span>
                      <p className="text-gray-800 font-semibold">Pelada criada com sucesso!</p>
                    </div>
                    <p className="text-gray-800 text-sm">
                      "{peladaName}" foi criada e está disponível para os jogadores.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="font-semibold text-gray-900 mb-2">{peladaName}</div>
                  <div className="text-sm text-gray-600">
                    {modalidade} • {players} jogadores • R$ {value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {new Date(selectedDate).toLocaleDateString('pt-BR')} às {selectedTime}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setStep('my-peladas')}
                    className="w-full bg-[#7C3AED] text-white px-6 py-3 rounded-xl hover:bg-[#7C3AED]/90 transition-colors">
                    Ver Minhas Peladas
                  </button>
                  <button 
                    onClick={handleBackToInitial}
                    className="w-full bg-gray-200 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-300 transition-colors">
                    Voltar ao Início
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}