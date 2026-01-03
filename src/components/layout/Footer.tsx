import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p>&copy; 2024 Meu App TS. Todos os direitos reservados.</p>
          <p className="text-gray-400 mt-2">
            Desenvolvido com Vite, React, TypeScript e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
