import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Bem-vindo ao Meu App TS
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Uma aplicação moderna desenvolvida com Vite, React, TypeScript e
          Tailwind CSS. Explore os recursos e funcionalidades disponíveis.
        </p>
        <div className="space-x-4">
          <Link to="/users">
            <Button size="lg">Ver Usuários</Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" size="lg">
              Saiba Mais
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-lg font-semibold mb-3">⚡ Rápido</h3>
          <p className="text-gray-600">
            Desenvolvido com Vite para um desenvolvimento e build extremamente
            rápidos.
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold mb-3">🛠 TypeScript</h3>
          <p className="text-gray-600">
            Tipagem estática para maior confiabilidade e manutenibilidade do
            código.
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold mb-3">🎨 Moderno</h3>
          <p className="text-gray-600">
            Interface moderna com Tailwind CSS e componentes reutilizáveis.
          </p>
        </Card>
      </section>
    </div>
  );
};

export default Home;
