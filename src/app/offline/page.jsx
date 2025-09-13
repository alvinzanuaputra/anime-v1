'use client';

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-color-dark">
      <div className="text-center px-4">
        <div className="mb-8">
          <svg 
            className="w-24 h-24 mx-auto text-color-primary mb-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M18 10l2 2-2 2M6 14l-2-2 2-2" 
            />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-color-primary mb-4">
          You're Offline
        </h1>
        
        <p className="text-color-secondary text-lg mb-8 max-w-md mx-auto">
          No internet connection detected. Some features may not be available, but you can still browse cached anime content.
        </p>
        
        <div className="space-y-4">
          <button 
            onClick={() => window.location.reload()} 
            className="bg-color-accent hover:bg-opacity-80 text-color-dark px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try Again
          </button>
          
          <div className="text-sm text-color-secondary">
            <p>or</p>
            <a 
              href="/" 
              className="text-color-accent hover:text-color-primary transition-colors duration-300 underline"
            >
              Go to Homepage
            </a>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-color-secondary bg-opacity-10 rounded-lg">
          <h2 className="text-lg font-semibold text-color-primary mb-3">
            Offline Features Available:
          </h2>
          <ul className="text-color-secondary text-sm space-y-2">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Browse cached anime pages
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              View previously loaded content
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Access app navigation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
