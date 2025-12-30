# Agendify

Agendify é uma plataforma web voltada para profissionais autônomos que precisam de um gerenciamento de agendamentos inteligente e eficiente.

A aplicação tem como objetivo reduzir o tempo gasto com organização de horários, automatizando o processo de agendamento e facilitando a gestão de compromissos, clientes e disponibilidade — tudo em um só lugar.

<br>

## Tecnologias Utilizadas

- **TypeScript** — Linguagem de programação do projeto
- **React** — Framework moderno
- **Vite** — Ferramenta de build e desenvolvimento
- **NPM** — Gerenciador de pacotes
- **Tailwind CSS** — Framework CSS
- **Redux Toolkit** — Gerenciamento de estado global
- **Axios** — Comuicação com a API
- **Radix UI** — Componentes para UI
- **Shadcn/ui** — Biblioteca de componentes reutilizáveis baseada em Radix UI
- **Lucide-React** — Biblioteca de ícones SVG
- **Framer Motion** — Animações e transições
- **Recharts** – Visualização de dados e gráficos
- **Sonner** – Sistema de notificações (toasts)

<br>

## Estrutura do Projeto

```
agendify_frontend/
├─── public/
│    └── logo.png
├─── src/
│    ├── app/
│    │   ├── api_config.ts
│    │   ├── App.tsx
│    │   ├── main.tsx
│    │   ├── routes.ts
│    │   └── store.ts
│    ├── features/
│    │   ├── chat/
│    │   │   ├── components/
│    │   │   │   ├── AppointmentChat.tsx
│    │   │   │   ├── ButtonBack.tsx
│    │   │   │   ├── ConfirmingAppointment.tsx
│    │   │   │   ├── Initial.tsx
│    │   │   │   ├── LoginChat.tsx
│    │   │   │   ├── NotFoundChat.tsx
│    │   │   │   ├── SelectDate.tsx
│    │   │   │   ├── SelectTime.tsx
│    │   │   │   └── ViewAppointments.tsx
│    │   │   ├── pages/
│    │   │   │   └── chat.tsx
│    │   │   ├── pages/
│    │   │   ├── services.ts
│    │   │   ├── slice.ts
│    │   │   └── types.ts
│    │   ├── marketing/
│    │   │   ├── pages/
│    │   │   │   ├── AboutUs.tsx
│    │   │   │   ├── Contact.tsx
│    │   │   │   ├── Error.tsx
│    │   │   │   ├── HelpCenter.tsx
│    │   │   │   ├── Home.tsx
│    │   │   │   ├── PasswordChangedSuccesfully.tsx
│    │   │   │   ├── PrivacyPolicy.tsx
│    │   │   │   └── TermsOfUse.tsx
│    │   └── professional/
│    │       ├── appointment/
│    │       │   ├── components/
│    │       │   │   ├── AppointmentSchedule.tsx
│    │       │   │   ├── Filters.tsx
│    │       │   │   ├── NoAppointmentsFound.tsx
│    │       │   │   └── TitleAndStatus.tsx
│    │       │   ├── pages/
│    │       │   │   └── appointments.tsx
│    │       │   └── types.ts
│    │       ├── auth/
│    │       │   ├── components/
│    │       │   │   ├── AcceptTerms.tsx
│    │       │   │   ├── FirstSection.tsx
│    │       │   │   ├── FourthSection.tsx
│    │       │   │   ├── ReadTerms.tsx
│    │       │   │   ├── SecondSection.tsx
│    │       │   │   └── ThirdSection.tsx
│    │       │   ├── pages/
│    │       │   │   ├── AcceptTermsOfUsePage.tsx
│    │       │   │   ├── ConfirmRegistration.tsx
│    │       │   │   ├── ForgoutYourPassswordPage.tsx
│    │       │   │   ├── Login.tsx
│    │       │   │   ├── ModifyPasswordWithoutLoginPage.tsx
│    │       │   │   ├── Register.tsx
│    │       │   │   └── VerifyEmailInTheRegistration.tsx
│    │       │   │── services.ts
│    │       │   │── slice_register_professional.ts
│    │       │   └── types.ts
│    │       ├── availability/
│    │       │   ├── components/
│    │       │   │   ├── AvailabilitySchedule.tsx
│    │       │   │   ├── CardsForAvailability.tsx
│    │       │   │   ├── CardsForCreateNewAvailability.tsx
│    │       │   │   ├── DefineyourTimeIntervalseadTerms.tsx
│    │       │   │   ├── NoAvailabilitiesFound.tsx
│    │       │   │   ├── Overview.tsx
│    │       │   │   ├── Search.tsx
│    │       │   │   ├── SelectDates.tsx
│    │       │   │   ├── TimeSlotsAndsSelectDateCard.tsx
│    │       │   │   ├── TitleAndDescriptionComponentForAvailability.tsx
│    │       │   │   └── TitleAndDescriptionComponentForCreateNewAvailability.tsx
│    │       │   ├── pages/
│    │       │   │   ├── availability.tsx
│    │       │   │   └── CrateNewAvailability.tsx
│    │       │   │── slice.ts
│    │       │   └── types.ts
│    │       ├── choose_your_avatar/
│    │       │   ├── layouts/
│    │       │   │   ├── ChooseYourAvatarDesktop.tsx
│    │       │   │   └── ChooseYourAvatarMobile.tsx
│    │       │   ├── utils/
│    │       │   │   └── utils_for_choose_avatar.ts
│    │       │   └── chooseYourAvatarPage.tsx
│    │       ├── dashboard/
│    │       │   ├── components/
│    │       │   │   ├── PieChartGraphicComponent.tsx
│    │       │   │   └── SimpleLineChartGraphicComponent.tsx
│    │       │   ├── pages/
│    │       │   │   └── dashboard.tsx
│    │       │   └── types.ts
│    │       ├── profile/
│    │       │   ├── components/
│    │       │   │   └── VerificationEmailModal.tsx
│    │       │   └── pages/
│    │       │       ├── EditData.tsx
│    │       │       ├── EditEmail.tsx
│    │       │       ├── EmailVerifiedSuccesfully.tsx
│    │       │       ├── ProfessionalProfile.tsx
│    │       │       └── ResetPasswordWithLoginPage.tsx
│    │       ├── services_appointment.ts
│    │       ├── services_availability.ts
│    │       ├── services_professional.ts
│    │       ├── slice.ts
│    │       └── types.ts
│    ├── shared/
│    │   ├── assets/
│    │   │   └── all_cartoon_avatars.ts
│    │   ├── components/
│    │   │   ├── loading/
│    │   │   │   ├── Loading.tsx
│    │   │   │   ├── LoadingScreen.tsx
│    │   │   │   └── slice.ts
│    │   │   ├── FooterBar.tsx
│    │   │   ├── loggedInNavBar.tsx
│    │   │   ├── Logo.tsx
│    │   │   ├── NavBar.tsx
│    │   │   ├── notLoggedInNavBar.tsx
│    │   │   ├── Pagination.tsx
│    │   │   └── ProfessionalSectionComponent.tsx
│    │   ├── types/
│    │   │   └── types.ts
│    │   ├── ui/      --> Componentes do Shadcn/ui
│    │   └── utils/
│    │       ├── PrivateRoutes.tsx
│    │       ├── utils.ts
│    │       └── VerifyAuthentication.tsx
│    └── styles/
│        ├── font.css
│        ├── index.css
│        └── tailwind.css
├── .dockerignore
├── .gitignore
├── components.json
├── Dockerfile
├── eslint.config.js
├── index.html
├── nginx.conf
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

<br>

## Arquitetura

O Agendify foi desenvolvido seguindo uma arquitetura baseada em features chamada **feature-based architecture**, onde cada domínio da aplicação possui sua própria estrutura isolada.

## Autenticação e Segurança

A autenticação é baseada em JWT, com uso de Access Token e Refresh Token.

<br>

## Infraestrutura

A aplicação roda em um container docker, comunicando-se com o backend por meio de uma Docker Network.

<br>

## Benefícios da Arquitetura

A arquitetura prioriza código limpo e bem organizado, facilitando a manutenção, permitindo a evolução do sistema sem acoplamento excessivo e garantindo uma separação clara de domínios.

<br>

## Pré-requisitos

- **Docker**
- **Docker Compose**

<br>

## Variáveis de Ambiente (**.env**)

Crie um arquivo **.env** na raiz do projeto:

```env
VITE_API_URL=http://localhost:8000
```

<br>

## Docker

Subir a aplicação

```bash
docker compose up --build
```

A aplicação ficará disponível em:

```
http://localhost:3000

```
