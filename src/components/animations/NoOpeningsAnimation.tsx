const NoOpeningsAnimation = () => {
  return (
    <div className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-blue-50/50 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-blue-950/20">
      {/* Floating hearts and particles */}
      <div className="absolute inset-0">
        {/* Glowing hearts */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatHeart ${Math.random() * 8 + 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <svg
              className="w-6 h-6 text-pink-400/40 dark:text-pink-300/30"
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{
                filter: 'blur(1px)',
                animation: `pulse ${Math.random() * 3 + 2}s ease-in-out infinite`
              }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        ))}

        {/* Soft gradient orbs */}
        <div className="absolute top-12 left-12 w-40 h-40 rounded-full bg-gradient-to-br from-pink-300/30 to-purple-300/30 blur-3xl animate-pulse" 
             style={{ animationDuration: '5s' }} />
        
        <div className="absolute bottom-16 right-16 w-48 h-48 rounded-full bg-gradient-to-br from-purple-300/30 to-blue-300/30 blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '1s' }} />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-pink-400/20 to-purple-400/20"
            style={{
              width: `${Math.random() * 15 + 8}px`,
              height: `${Math.random() * 15 + 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 12 + 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="mb-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          {/* Main heart icon */}
          <div className="inline-block relative">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center shadow-xl">
              <svg
                className="w-16 h-16 text-white animate-pulse"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ animationDuration: '2s' }}
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            {/* Surrounding small hearts */}
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div className="absolute -bottom-1 -left-3 w-6 h-6 rounded-full bg-purple-300 flex items-center justify-center animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4 animate-fade-in" 
            style={{ animationDelay: '0.4s' }}>
          No current openings — but stay tuned 💖
        </h3>
        
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6 animate-fade-in" 
           style={{ animationDelay: '0.6s' }}>
          We're not hiring right now, but amazing opportunities are on the way. We'd love to keep you in the loop!
        </p>

        <p className="text-sm text-muted-foreground/80 max-w-md mx-auto animate-fade-in" 
           style={{ animationDelay: '0.8s' }}>
          Send us your resume at <a href="mailto:careers@optimind.com" className="text-primary hover:underline font-medium">careers@optimind.com</a> and we'll reach out when the perfect role opens up.
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
        @keyframes floatHeart {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-30px) translateX(15px) rotate(5deg);
          }
          50% {
            transform: translateY(-15px) translateX(-15px) rotate(-5deg);
          }
          75% {
            transform: translateY(-40px) translateX(10px) rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
};

export default NoOpeningsAnimation;
