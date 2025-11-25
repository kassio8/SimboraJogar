import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import FloatingChatbot from './components/FloatingChatbot';
import UnifiedDashboard from './components/UnifiedDashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="relative">
        <UnifiedDashboard />
      </main>

      {/* Floating Chatbot */}
      <FloatingChatbot />
    </div>
  );
}