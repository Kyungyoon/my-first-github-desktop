import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Overlay shapes for depth */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-25 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute top-1/2 right-20 w-72 h-72 bg-blue-100 rounded-3xl opacity-10 blur-2xl rotate-45"></div>
      </div>

      {/* Nuha Illustration - Bottom Right */}
      <div className="absolute bottom-0 pointer-events-none z-0" style={{ maxWidth: '400px', maxHeight: '400px', right: '-50px' }}>
        <img 
          src="/nuha-illustration.png" 
          alt="Nuha illustration"
          className="w-full h-full object-contain"
          style={{ 
            opacity: 0.8,
            mixBlendMode: 'multiply',
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">Nuha House</h1>
          <div className="flex gap-3">
            <Link to="/login">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors font-semibold shadow-md">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors font-semibold border border-blue-200">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 py-16 pb-32 md:pb-16 relative z-10">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Welcome to <span className="text-blue-600">Nuha House!</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We're over the moon to celebrate our baby boy. <br className="hidden md:block" />To us, Nuha is our little "summer in New York."
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/signup">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 transition-colors font-semibold shadow-lg">
                Create Account
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 transition-colors font-semibold shadow-lg border-2 border-blue-600">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

