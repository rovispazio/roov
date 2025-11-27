import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#0f1929] border border-roov-magenta/30 rounded-2xl w-full max-w-md relative overflow-hidden shadow-2xl shadow-roov-magenta/20">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {step === 'form' ? (
            <>
              <h3 className="font-heading font-bold text-2xl mb-2 text-white">
                Prenota il tuo posto <span className="text-roov-magenta">GRATIS</span>
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                I posti sono limitati. Compila il form per assicurarti l'ingresso.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Nome</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-roov-magenta focus:outline-none transition-colors"
                    placeholder="Il tuo nome"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-roov-magenta focus:outline-none transition-colors"
                    placeholder="tua@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Telefono</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-roov-magenta focus:outline-none transition-colors"
                    placeholder="+39 333..."
                  />
                  <p className="text-[10px] text-gray-500 mt-1">Solo per info urgenti via WhatsApp</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Data Evento</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-roov-magenta focus:outline-none transition-colors">
                    <option>17 Maggio - Torre del Castello Brancaccio</option>
                    <option>14 Giugno - Ponte Scotonico</option>
                    <option>12 Luglio - Convento</option>
                  </select>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input type="checkbox" required id="terms" className="mt-1 accent-roov-magenta" />
                  <label htmlFor="terms" className="text-xs text-gray-400">
                    Ho più di 18 anni e autorizzo le riprese video durante l'evento per scopi promozionali.
                  </label>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-roov-purple to-roov-magenta py-4 rounded-lg font-heading font-bold uppercase tracking-widest mt-4 hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {isSubmitting ? 'Elaborazione...' : 'Conferma Prenotazione'}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 animate-bounce">
                <CheckCircle size={48} />
              </div>
              <h3 className="font-heading font-bold text-3xl mb-4 text-white">Sei dei nostri!</h3>
              <p className="text-gray-300 mb-8">
                La tua richiesta è stata ricevuta. Controlla la tua email per il QR Code d'ingresso e i dettagli sulla location.
              </p>
              <button 
                onClick={onClose}
                className="w-full border border-white/20 py-3 rounded-lg font-heading font-semibold hover:bg-white/5 transition-colors"
              >
                Chiudi
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;