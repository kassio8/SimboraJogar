import { Volume2, Camera, Paperclip, Mic } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface ChatBotProps {
  onClose: () => void;
}

type Step = 
  | 'menu' 
  | 'buscar-pelada' 
  | 'escolher-pelada' 
  | 'pagamento' 
  | 'pix' 
  | 'confirmado'
  | 'criar-pelada'
  | 'form-criar'
  | 'pelada-criada';

export function ChatBot({ onClose }: ChatBotProps) {
  const [step, setStep] = useState<Step>('menu');
  const [selectedPelada, setSelectedPelada] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    sport: '',
    players: '',
    value: '',
    location: '',
    time: '',
    date: '',
  });

  const peladas = [
    { id: 1, local: 'Arena Seven', horario: '16h', valor: 20, vagas: 6 },
    { id: 2, local: 'Beach Club', horario: '17h', valor: 25, vagas: 4 },
    { id: 3, local: 'Quadra 10', horario: '18h', valor: 18, vagas: 2 },
  ];

  // Generate next 7 days
  const getNextDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dateStr = date.toLocaleDateString('pt-BR');
      const label = i === 0 ? 'Hoje' : i === 1 ? 'Amanhã' : dateStr;
      days.push({ value: dateStr, label });
    }
    return days;
  };

  return (
    <div className="h-full bg-[#0B141A] flex flex-col">
      {/* WhatsApp Header */}
      <div className="bg-[#1F2C34] px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
          SJ
        </div>
        <div className="flex-1">
          <div className="text-white">SimboraJogar</div>
          <div className="text-xs text-gray-400">online</div>
        </div>
        <Volume2 className="w-5 h-5 text-gray-400" />
      </div>

      {/* Chat Area */}
      <div 
        className="flex-1 overflow-y-auto px-4 py-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23182229' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      >
        <div className="flex flex-col gap-2">
          {/* Menu Inicial */}
          {step === 'menu' && (
            <>
              <div className="flex justify-start">
                <div className="bg-[#1F2C34] text-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow">
                  Olá! 👋 Como posso ajudar?
                  <div className="text-xs text-gray-400 mt-1">agora</div>
                </div>
              </div>

              <div className="flex justify-start mt-2">
                <div className="bg-[#1F2C34] rounded-lg p-3 max-w-[85%] shadow-lg">
                  <div className="space-y-2">
                    <button
                      onClick={() => setStep('buscar-pelada')}
                      className="w-full bg-[#0B141A] hover:bg-[#1a2730] rounded-xl p-3 transition-colors text-left border border-gray-700"
                    >
                      <div className="text-white">🏐 Buscar pelada</div>
                      <div className="text-xs text-gray-400 mt-1">Encontre jogos próximos</div>
                    </button>
                    <button
                      onClick={() => setStep('criar-pelada')}
                      className="w-full bg-[#0B141A] hover:bg-[#1a2730] rounded-xl p-3 transition-colors text-left border border-gray-700"
                    >
                      <div className="text-white">➕ Criar pelada</div>
                      <div className="text-xs text-gray-400 mt-1">Organize seu próprio jogo</div>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Buscar Pelada */}
          {step === 'buscar-pelada' && (
            <>
              <div className="flex justify-start">
                <div className="bg-[#1F2C34] text-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow">
                  Achei 3 opções próximas 👇
                  <div className="text-xs text-gray-400 mt-1">agora</div>
                </div>
              </div>

              <div className="flex justify-start mt-2">
                <div className="bg-[#1F2C34] rounded-lg p-3 max-w-[85%] shadow-lg">
                  <div className="space-y-3">
                    {peladas.map((pelada) => (
                      <button
                        key={pelada.id}
                        onClick={() => {
                          setSelectedPelada(pelada);
                          setStep('escolher-pelada');
                        }}
                        className="w-full bg-[#0B141A] hover:bg-[#1a2730] rounded-xl p-3 transition-colors text-left border border-gray-700"
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-2xl">🏐</div>
                          <div className="flex-1">
                            <div className="text-white">{pelada.local}</div>
                            <div className="text-sm text-gray-400">{pelada.horario} • R$ {pelada.valor} por pessoa</div>
                            <div className="text-xs text-green-400 mt-1">{pelada.vagas} vagas disponíveis</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep('menu')}
                    className="mt-3 w-full text-purple-400 text-sm hover:text-purple-300"
                  >
                    ← Voltar
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Escolher Pelada - Pagamento */}
          {step === 'escolher-pelada' && selectedPelada && (
            <>
              <div className="flex justify-start">
                <div className="bg-[#1F2C34] text-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow">
                  <div className="mb-2">✅ Ótima escolha!</div>
                  <div className="bg-[#0B141A] rounded-lg p-3 border border-gray-700">
                    <div className="text-sm text-gray-300">🏐 {selectedPelada.local}</div>
                    <div className="text-sm text-gray-400 mt-1">Amanhã • {selectedPelada.horario}</div>
                    <div className="text-green-400 mt-2">R$ {selectedPelada.valor},00</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">agora</div>
                </div>
              </div>

              <div className="flex justify-start mt-2">
                <div className="bg-[#1F2C34] text-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow">
                  Como deseja pagar?
                  <div className="text-xs text-gray-400 mt-1">agora</div>
                </div>
              </div>

              <div className="flex justify-start mt-2">
                <div className="bg-[#1F2C34] rounded-lg p-3 max-w-[85%] shadow-lg">
                  <div className="space-y-2">
                    <button
                      onClick={() => setStep('pix')}
                      className="w-full bg-[#0B141A] hover:bg-[#1a2730] rounded-xl p-4 transition-colors text-left border border-gray-700"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-2xl">💳</div>
                        <div>
                          <div className="text-white">PIX</div>
                          <div className="text-xs text-gray-400">Aprovação instantânea</div>
                        </div>
                      </div>
                    </button>
                    <button
                      onClick={() => setStep('pix')}
                      className="w-full bg-[#0B141A] hover:bg-[#1a2730] rounded-xl p-4 transition-colors text-left border border-gray-700"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-2xl">💳</div>
                        <div>
                          <div className="text-white">Cartão de Crédito</div>
                          <div className="text-xs text-gray-400">Parcele em até 3x</div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <button
                    onClick={() => setStep('buscar-pelada')}
                    className="mt-3 w-full text-purple-400 text-sm hover:text-purple-300"
                  >
                    ← Voltar
                  </button>
                </div>
              </div>
            </>
          )}

          {/* PIX */}
          {step === 'pix' && selectedPelada && (
            <>
              <div className="flex justify-start">
                <div className="bg-[#1F2C34] text-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow">
                  Aqui está o QR Code:
                  <div className="text-xs text-gray-400 mt-1">agora</div>
                </div>
              </div>

              <div className="flex justify-start mt-2">
                <div className="bg-[#1F2C34] rounded-xl p-4 max-w-[85%] shadow-lg">
                  <div className="bg-white rounded-xl p-4 mb-4">
                    <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                      <div className="text-white text-4xl">QR</div>
                    </div>
                  </div>

                  <div className="space-y-3 text-white">
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Local:</span>
                      <span>{selectedPelada.local}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Horário:</span>
                      <span>{selectedPelada.horario}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-700">
                      <span className="text-gray-400">Valor:</span>
                      <span className="text-green-400 text-xl">R$ {selectedPelada.valor},00</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setStep('confirmado')}
                    className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg transition-colors"
                  >
                    ✓ Já realizei o pagamento
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Confirmado */}
          {step === 'confirmado' && (
            <>
              <div className="flex justify-start">
                <div className="bg-[#1F2C34] text-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">✓</div>
                    <span>Pagamento confirmado! 🎉</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">agora</div>
                </div>
              </div>

              <div className="flex justify-start mt-2">
                <div className="bg-[#1F2C34] rounded-xl p-4 max-w-[85%] shadow-lg">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 mb-3">
                    <div className="text-center text-white mb-3">
                      <div className="text-3xl mb-2">🏐</div>
                      <div className="text-sm opacity-90">Você está na pelada!</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setStep('menu')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors"
                  >
                    ✓ Voltar ao menu
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Criar Pelada - Início */}
          {step === 'criar-pelada' && (
            <>
              <div className="flex justify-start">
                <div className="bg-[#1F2C34] text-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow">
                  Ótimo! Vamos criar sua pelada 🏐
                  <div className="text-xs text-gray-400 mt-1">agora</div>
                </div>
              </div>

              <div className="flex justify-start mt-2">
                <div className="bg-[#1F2C34] rounded-lg p-3 max-w-[85%] shadow-lg">
                  <button
                    onClick={() => setStep('form-criar')}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl p-4 transition-all"
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">➕</div>
                      <div>Começar criação</div>
                      <div className="text-xs opacity-80 mt-1">Preencha os dados</div>
                    </div>
                  </button>
                  <button
                    onClick={() => setStep('menu')}
                    className="mt-3 w-full text-purple-400 text-sm hover:text-purple-300"
                  >
                    ← Voltar
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Formulário Criar */}
          {step === 'form-criar' && (
            <>
              <div className="flex justify-start">
                <div className="bg-[#1F2C34] text-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow">
                  Preencha os dados:
                  <div className="text-xs text-gray-400 mt-1">agora</div>
                </div>
              </div>

              <div className="flex justify-start mt-2">
                <div className="bg-[#1F2C34] rounded-xl p-4 w-full shadow-lg">
                  <div className="space-y-3">
                    <div>
                      <Label className="text-gray-300 text-xs mb-1 block">Nome da pelada</Label>
                      <Input
                        placeholder="Ex: Pelada da Galera"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-[#0B141A] border-gray-700 text-white placeholder:text-gray-500 text-sm"
                      />
                    </div>

                    <div>
                      <Label className="text-gray-300 text-xs mb-1 block">Modalidade</Label>
                      <Select value={formData.sport} onValueChange={(value) => setFormData({ ...formData, sport: value })}>
                        <SelectTrigger className="bg-[#0B141A] border-gray-700 text-white text-sm">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="volei">🏐 Vôlei</SelectItem>
                          <SelectItem value="futebol">⚽ Futebol</SelectItem>
                          <SelectItem value="basquete">🏀 Basquete</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-gray-300 text-xs mb-1 block">Data</Label>
                      <Select value={formData.date} onValueChange={(value) => setFormData({ ...formData, date: value })}>
                        <SelectTrigger className="bg-[#0B141A] border-gray-700 text-white text-sm">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {getNextDays().map((day) => (
                            <SelectItem key={day.value} value={day.value}>{day.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-gray-300 text-xs mb-1 block">Horário</Label>
                      <Input
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="bg-[#0B141A] border-gray-700 text-white text-sm"
                      />
                    </div>

                    <div>
                      <Label className="text-gray-300 text-xs mb-1 block">Número de jogadores</Label>
                      <Input
                        type="number"
                        placeholder="Ex: 12"
                        value={formData.players}
                        onChange={(e) => setFormData({ ...formData, players: e.target.value })}
                        className="bg-[#0B141A] border-gray-700 text-white placeholder:text-gray-500 text-sm"
                      />
                    </div>

                    <div>
                      <Label className="text-gray-300 text-xs mb-1 block">Valor (R$)</Label>
                      <Input
                        type="number"
                        placeholder="Ex: 20"
                        value={formData.value}
                        onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                        className="bg-[#0B141A] border-gray-700 text-white placeholder:text-gray-500 text-sm"
                      />
                    </div>

                    <div>
                      <Label className="text-gray-300 text-xs mb-1 block">Local</Label>
                      <Select value={formData.location} onValueChange={(value) => setFormData({ ...formData, location: value })}>
                        <SelectTrigger className="bg-[#0B141A] border-gray-700 text-white text-sm">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="arena-seven">Arena Seven</SelectItem>
                          <SelectItem value="beach-club">Beach Club</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      onClick={() => setStep('pelada-criada')}
                      className="w-full bg-green-600 hover:bg-green-700 text-white text-sm"
                    >
                      Criar pelada
                    </Button>
                    <button
                      onClick={() => setStep('criar-pelada')}
                      className="w-full text-purple-400 text-sm hover:text-purple-300"
                    >
                      ← Voltar
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Pelada Criada */}
          {step === 'pelada-criada' && (
            <>
              <div className="flex justify-start">
                <div className="bg-[#1F2C34] text-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl">✅</div>
                    <span>Pelada criada!</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">agora</div>
                </div>
              </div>

              <div className="flex justify-start mt-2">
                <div className="bg-[#1F2C34] rounded-xl p-4 max-w-[85%] shadow-lg">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-4 mb-3 text-white">
                    <div className="text-lg">{formData.name || 'Pelada da Galera'}</div>
                    <div className="text-sm opacity-90 mt-1">{formData.sport || 'Vôlei'} • {formData.date}</div>
                  </div>
                  <button
                    onClick={() => setStep('menu')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors"
                  >
                    ✓ Voltar ao menu
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Input Bar */}
      <div className="bg-[#1F2C34] px-2 py-2 flex items-center gap-2">
        <button className="p-2 text-gray-400">
          <Paperclip className="w-5 h-5" />
        </button>
        <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-2 text-gray-400 flex items-center text-sm">
          Use os botões acima
        </div>
        <button className="p-2 text-gray-400">
          <Camera className="w-5 h-5" />
        </button>
        <button className="p-2 text-gray-400">
          <Mic className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
