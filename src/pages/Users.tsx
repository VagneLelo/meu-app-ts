import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { userService } from "../services/userService";
import { useDebounce } from "../hooks/useDebounce";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { User } from "../types";

const Users: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearch = useDebounce(searchTerm, 300);

  const {
    data: users,
    loading,
    error,
    refetch,
  } = useApi<User[]>(userService.getUsers, [], true);

  const filteredUsers = users?.filter(
    (user) =>
      user.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      user.email.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

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
        <h3 className="text-lg font-semibold mb-2">
          Erro ao carregar usuários
        </h3>
        <p className="text-gray-600 mb-4">{error}</p>
        <Button onClick={refetch}>Tentar Novamente</Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Usuários</h1>
        <span className="text-gray-600">
          {filteredUsers?.length}{" "}
          {filteredUsers?.length === 1 ? "usuário" : "usuários"}
        </span>
      </div>

      <Card>
        <Input
          label="Buscar usuários"
          placeholder="Digite nome ou email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Card>

      <div className="grid gap-4">
        {filteredUsers?.map((user) => (
          <Card key={user.id} className="hover:shadow-lg transition">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {user.name}
                </h3>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500">{user.phone}</p>
                <p className="text-sm text-gray-500">{user.website}</p>
              </div>
              <Link to={`/users/${user.id}`}>
                <Button variant="outline" size="sm">
                  Ver Detalhes
                </Button>
              </Link>
            </div>
          </Card>
        ))}

        {filteredUsers?.length === 0 && (
          <Card className="text-center py-8">
            <p className="text-gray-500">Nenhum usuário encontrado.</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Users;
