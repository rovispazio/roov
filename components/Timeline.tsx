import React, { useState, useEffect } from 'react';

interface TimelineEvent {
  id: number;
  title: string;
  location: string;
  dateStr: string; // For display
  targetDate: string; // ISO format for calculation
  spotsTotal: number;
  spotsTaken: number;
}

const timelineData: TimelineEvent[] = [
  {
    id: 1,
    title: "ACT I: ASCENSION",
    location: "TORRE CASTELLO BRANCACCIO",
    dateStr: "17 MAGGIO 2025",
    targetDate: "2025-05-17T19:00:00",
    spotsTotal: 50,
    spotsTaken: 0, // Fully available
  },
  {
    id: 2,
    title: "ACT II: CROSSING",
    location: "PONTE SCOTONICO",
    dateStr: "14 GIUGNO 2025",
    targetDate: "2025-06-14T19:00:00",
    spotsTotal: 50,
    spotsTaken: 0, // Fully available
  },
  {
    id: 3,
    title: "ACT III: REDEMPTION",
    location: "CONVENTO EX OMNI",
    dateStr: "12 LUGLIO 2025",
    targetDate: "2025-07-12T19:00:00",
    spotsTotal: 50,
    spotsTaken: 0, // Fully available
  }
];

const Timeline: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const newTimeLeft: { [key: number]: string } = {};
      
      timelineData.forEach(event => {
        const difference = +new Date(event.targetDate) - +new Date();
        
        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((difference / 1000 / 60) % 60);
          const seconds = Math.floor((difference / 1000) % 60);
          
          // Pad with zeros
          const d = days < 10 ? `0${days}` : days;
          const h = hours < 10 ? `0${hours}` : hours;
          const m = minutes < 10 ? `0${minutes}` : minutes;
          const s = seconds < 10 ? `0${seconds}` : seconds;

          newTimeLeft[event.id] = `${d}d ${h}h ${m}m ${s}s`;
        } else {
          newTimeLeft[event.id] = "INCOMING";
        }
      });
      
      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="timeline" className="py-24 md:py-32 bg-roov-black border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col items-start md:items-center mb-16 md:mb-24 reveal-on-scroll">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">SEQUENCE</h2>
          <p className="text-gray-500 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase">
            Synchronize your time
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto pl-4 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-[19px] md:left-[50px] top-0 bottom-0 w-[1px] bg-white/10"></div>

          <div className="space-y-16 md:space-y-24">
            {timelineData.map((event) => {
              const spotsRemaining = event.spotsTotal - event.spotsTaken;
              const isUrgent = spotsRemaining < 15;
              const percentTaken = (event.spotsTaken / event.spotsTotal) * 100;

              return (
                <div key={event.id} className="relative flex flex-col md:flex-row gap-8 md:gap-16 group reveal-on-scroll">
                  
                  {/* Node Marker */}
                  <div className={`absolute left-[15px] md:left-[46px] top-2 w-[9px] h-[9px] rounded-full z-10 border transition-all duration-500 ${isUrgent ? 'bg-red-600 border-red-900 shadow-[0_0_10px_rgba(220,38,38,0.5)]' : 'bg-black border-white/40 group-hover:bg-white'}`}></div>

                  {/* Left Column: Date & Countdown (Desktop) */}
                  <div className="hidden md:flex flex-col items-end w-[250px] text-right pt-1">
                     <span className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-1">{event.dateStr}</span>
                     <div className="font-mono text-lg text-white tabular-nums tracking-tight">
                       {timeLeft[event.id] || "LOADING..."}
                     </div>
                  </div>

                  {/* Content Body */}
                  <div className="pl-12 md:pl-0 flex-1 pt-1">
                    {/* Mobile Date/Timer */}
                    <div className="md:hidden mb-4 border-l border-white/10 pl-3">
                       <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">{event.dateStr}</span>
                       <div className="font-mono text-sm text-white tabular-nums">
                         {timeLeft[event.id] || "--:--:--:--"}
                       </div>
                    </div>

                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-1 leading-none">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base mb-6 font-light">
                      {event.location}
                    </p>

                    {/* Capacity Protocol Bar */}
                    <div className="w-full max-w-md">
                      <div className="flex justify-between items-end mb-2 font-mono text-[10px] uppercase tracking-wider">
                        <span className="text-gray-600">Capacity Protocol</span>
                        <span className={isUrgent ? "text-red-500 animate-pulse font-bold" : "text-gray-400"}>
                          {isUrgent ? `⚠️ ${spotsRemaining} INVITES LEFT` : `${spotsRemaining} SPOTS AVAILABLE`}
                        </span>
                      </div>
                      
                      <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 ease-out ${isUrgent ? 'bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]' : 'bg-white/40'}`}
                          style={{ width: `${percentTaken}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex justify-between mt-1 font-mono text-[9px] text-gray-700">
                        <span>0</span>
                        <span>{event.spotsTotal}</span>
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;