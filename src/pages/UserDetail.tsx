import React from "react";
import { useParams, Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { userService } from "../services/userService";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { User } from "../types";

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: user,
    loading,
    error,
  } = useApi<User | null>(() => userService.getUser(Number(id)), null, true);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="text-center py-8">
        <div className="text-red-600 mb-4">
          <svg
            className="w-12 h-12 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Usuário não encontrado</h3>
        <p className="text-gray-600 mb-4">{error}</p>
        <Link to="/users">
          <Button>Voltar para Usuários</Button>
        </Link>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Detalhes do Usuário
        </h1>
        <Link to="/users">
          <Button variant="outline">← Voltar</Button>
        </Link>
      </div>

      {user && (
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h2 className="text-xl font-semibold mb-4">Informações Pessoais</h2>
            <dl className="space-y-3">
              <div>
                <dt className="text-sm font-medium text-gray-500">Nome</dt>
                <dd className="text-lg">{user.name}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Username</dt>
                <dd className="text-lg">{user.username}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="text-lg">{user.email}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Telefone</dt>
                <dd className="text-lg">{user.phone}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Website</dt>
                <dd className="text-lg">{user.website}</dd>
              </div>
            </dl>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-4">Endereço</h2>
            <dl className="space-y-3">
              <div>
                <dt className="text-sm font-medium text-gray-500">Rua</dt>
                <dd className="text-lg">{user.address.street}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Suite</dt>
                <dd className="text-lg">{user.address.suite}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Cidade</dt>
                <dd className="text-lg">{user.address.city}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">CEP</dt>
                <dd className="text-lg">{user.address.zipcode}</dd>
              </div>
            </dl>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-4">Empresa</h2>
            <dl className="space-y-3">
              <div>
                <dt className="text-sm font-medium text-gray-500">Nome</dt>
                <dd className="text-lg">{user.company.name}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Slogan</dt>
                <dd className="text-lg">{user.company.catchPhrase}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Negócio</dt>
                <dd className="text-lg">{user.company.bs}</dd>
              </div>
            </dl>
          </Card>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
