# Happy Paws - Gestão de Clínicas Odontológicas

Plataforma completa para gestão de clínicas odontológicas. Gerencie sua clínica, equipe e pacientes em um único sistema inteligente.

## 🚀 Como Inicializar o Projeto

### Pré-requisitos

- Instalar Node.js v24.11.1 (ou superior) - [Baixar Node.js](https://nodejs.org/en/download)
- Instalar Laragon v8.4.0 - [Baixar Laragon](https://laragon.org/download)

### Passos para Inicializar

**Passo 1 - Arrumar arquivo .env:**
```bash
npm run dev
```
(ou `npm.cmd run dev` se estiver no PowerShell sem permissões)

**Passo 3 - Iniciar o Laravel:**
```bash
php artisan serve
```

**Passo 2 - Iniciar o React:**
```bash
npm run dev
```
(ou `npm.cmd run dev` se estiver no PowerShell sem permissões)

**Passo 3 - Acessar o projeto:**

Abra seu navegador e acesse: `http://localhost:8080`

## 📁 Estrutura do Projeto

```
HAPPY-PAWS/
├── backend/
│   └── app/
└── frontend/
    └── src/
        ├── assets/     # Armazena arquivos estáticos.
        ├── components/ # Componentes reutilizáveis da interface.
        ├── context/    # Gerencia estados globais com React Context API.
        ├── hooks/      # Hooks próprios para reutilizar lógica entre componentes.
        ├── pages/      # Página inteira da aplicação, acessada pelas rotas.
        ├── routes/     # Gerencia toda a navegação da aplicação.
        ├── services/   # Responsável pela comunicação com o backend (Laravel).
        └── styles/     # uso de CSS Modules, Tailwind configs, variáveis.
```

## 🛠️ Technologies applied

#### Front-end
<img align="center" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg">
<img align="center" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">

#### Back-end
<img align="center" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg">
<img align="center" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg">

#### Databases
<img align="center" height="30" width="33" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg">