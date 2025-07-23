# Moto Challenge Backend

## Descripción / Description

**ES:**
Este proyecto es un backend de ejemplo construido con Node.js, TypeScript, Express y Prisma, siguiendo la arquitectura hexagonal (puertos y adaptadores). Utiliza PostgreSQL como base de datos y está preparado para escalar y agregar nuevos módulos, como autenticación y registro de usuarios.

**EN:**
This project is a sample backend built with Node.js, TypeScript, Express, and Prisma, following the hexagonal architecture (ports and adapters). It uses PostgreSQL as the database and is ready to scale and add new modules, such as authentication and user registration.

---

## Tecnologías principales / Main Technologies

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- Arquitectura hexagonal / Hexagonal architecture

---

## Arquitectura / Architecture

**ES:**
El proyecto está organizado en capas siguiendo la arquitectura hexagonal:
- **Dominio:** Entidades, value objects, interfaces y lógica de negocio.
- **Aplicación:** Casos de uso (servicios de aplicación).
- **Infraestructura:** Repositorios, controladores, routers y adaptadores externos.
- **Contenedores de servicios:** Inyección de dependencias.

**EN:**
The project is organized in layers following hexagonal architecture:
- **Domain:** Entities, value objects, interfaces, and business logic.
- **Application:** Use cases (application services).
- **Infrastructure:** Repositories, controllers, routers, and external adapters.
- **Service containers:** Dependency injection.

---

## Instalación y configuración / Installation & Setup

1. **Clona el repositorio / Clone the repository**
   ```sh
   git clone <repo-url>
   cd moto-challenge-backend
   ```
2. **Instala las dependencias / Install dependencies**
   ```sh
   npm install
   # o / or
   yarn install
   ```
3. **Configura la base de datos / Configure the database**
   - Asegúrate de tener PostgreSQL corriendo y crea una base de datos.
   - Edita el archivo `.env` con tu conexión:
     ```env
     DATABASE_URL="postgresql://<usuario>:<contraseña>@localhost:5432/<nombre_db>?schema=public"
     ```
4. **Inicializa Prisma y la base de datos / Initialize Prisma and the database**
   ```sh
   npx prisma migrate dev --name init
   npx prisma generate
   ```
5. **Inicia el servidor / Start the server**
   ```sh
   npm run dev
   # o / or
   yarn dev
   ```

---

## Comandos útiles / Useful commands

- `npx prisma migrate dev --name <nombre>`: Ejecuta una migración de base de datos / Run a database migration
- `npx prisma generate`: Genera el cliente de Prisma / Generate Prisma client
- `npm run dev` o `yarn dev`: Inicia el servidor en modo desarrollo / Start the server in development mode

---

## Estructura de carpetas / Folder structure

```
moto-challenge-backend/
├── prisma/                # Esquema de Prisma / Prisma schema
├── src/
│   ├── users/             # Módulo de usuarios / Users module
│   │   ├── application/   # Casos de uso / Use cases
│   │   ├── domain/        # Entidades, value objects, interfaces / Entities, value objects, interfaces
│   │   ├── infrastructure/# Repositorios, controladores, routers / Repositories, controllers, routers
│   ├── shared/            # Código compartido / Shared code
│   │   ├── errors/        # Errores de dominio / Domain errors
│   │   └── serviceContainers/ # Inyección de dependencias / Dependency injection
├── .env                   # Variables de entorno / Environment variables
├── package.json
├── README.md
└── ...
```

---



---

## Licencia / License

**ES:**  
Este proyecto está licenciado bajo la [Licencia Pública General Affero de GNU, versión 3 (AGPL-3.0)](https://www.gnu.org/licenses/agpl-3.0.html).

**EN:**  
This project is licensed under the [GNU Affero General Public License, version 3 (AGPL-3.0)](https://www.gnu.org/licenses/agpl-3.0.html).
