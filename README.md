
# Projeto de Autenticação com NestJS e Prisma

Este projeto é um exemplo prático de autenticação de usuários utilizando NestJS, Prisma e JWT. Ele implementa funcionalidades como login de usuários e requisição de informações sobre médicos.

---

## 🛠️ Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) - Framework para Node.js
- [Prisma](https://www.prisma.io/) - ORM de próxima geração
- [JWT](https://jwt.io/) - Gerenciamento de autenticação
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional
- [bcrypt](https://www.npmjs.com/package/bcrypt) - Biblioteca para hashing de senhas

---

## 📦 Pacotes Instalados

- `@nestjs/common`
- `@nestjs/core`
- `@nestjs/jwt`
- `@nestjs/passport`
- `@nestjs/platform-express`
- `@prisma/client`
- `bcrypt`
- `passport`
- `passport-jwt`
- `prisma`
- `typescript`

---

## 🚀 Instalação

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Configure o Banco de Dados

Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
JWT_SECRET="sua_chave_secreta"
```

### 4. Gere Chaves JWT

Execute os comandos abaixo para gerar as chaves pública e privada:

```bash
openssl genrsa -out private.key 2048
openssl rsa -in private.key -pubout -out public.key
```

### 5. Execute as Migrações

```bash
npx prisma migrate dev --name init
```

### 6. Inicie o Servidor

```bash
npm run start:dev
```

---

## 🌐 Endpoints

### **Autenticação**

#### `POST /auth/login`

**Body:**

```json
{
  "email": "usuario@example.com",
  "senha": "senha123"
}
```

**Response:**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### **Médicos**

#### `GET /medicos`

**Response:**

```json
[
  {
    "id": 1,
    "nome": "Dr. João",
    "especialidade": "Cardiologia",
    "usuarioId": 1,
    "createdAt": "2024-09-12T08:54:54.000Z",
    "updatedAt": "2024-09-12T08:54:54.000Z"
  }
]
```

#### `GET /medicos/:id`

**Response:**

```json
{
  "id": 1,
  "nome": "Dr. João",
  "especialidade": "Cardiologia",
  "usuarioId": 1,
  "createdAt": "2024-09-12T08:54:54.000Z",
  "updatedAt": "2024-09-12T08:54:54.000Z"
}
```

---

## 🗒️ Notas

- Certifique-se de que o banco de dados PostgreSQL esteja em execução.
- Atualize as variáveis de ambiente conforme necessário.
- Utilize o Prisma Studio para explorar os dados do banco de maneira visual:

```bash
npx prisma studio
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.
```
