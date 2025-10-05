const ComingSoonAnimation = () => {
  return (
    <div className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Floating abstract shapes */}
      <div className="absolute inset-0">
        {/* Circle 1 */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl animate-pulse" 
             style={{ animationDuration: '4s', animationDelay: '0s' }} />
        
        {/* Circle 2 */}
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 blur-2xl animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
        
        {/* Circle 3 */}
        <div className="absolute bottom-20 left-1/3 w-36 h-36 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-2xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="mb-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center animate-pulse">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 animate-fade-in" 
            style={{ animationDelay: '0.4s' }}>
          Our amazing team is coming soon 💫
        </h3>
        
        <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in" 
           style={{ animationDelay: '0.6s' }}>
          We're building something incredible. Stay tuned to meet the talented people making it all happen.
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
      `}</style>
    </div>
  );
};

export default ComingSoonAnimation;
