# Noema Frontend

Noema is a web application that guides users through a structured cognitive rationalization process. It helps users examine automatic thoughts, identify cognitive distortions, and reframe unhelpful thinking patterns using evidence-based techniques rooted in Cognitive Behavioral Therapy (CBT).

---

## How it works

The rationalization flow is a 7-step guided session:

| Step | Description |
|------|-------------|
| 1 | Record when the situation happened and describe it |
| 2 | Select and rate initial emotions |
| 3 | Write down automatic thoughts and rate belief strength |
| 4 | Identify cognitive distortions (AI-assisted) |
| 5 | Examine evidence for and against each thought |
| 6 | Select and rate final emotions after reframing |
| 7 | View a summary of the full session with a downloadable PDF report |

Session state is held in a [Zustand](https://github.com/pmndrs/zustand) store and persists across steps within a single browser session.

### AI integration

At step 4 the app calls the **noema-backend** `/predict` endpoint. It sends the user's situation and thought, and receives:

- Whether the thought is cognitively distorted (binary classification)
- The distortion category (e.g. Catastrophizing, Mind Reading)
- A suggested reframe

See [src/api/predict.ts](src/api/predict.ts) for the request/response shape.

---

## Requirements

- Node.js 18+
- npm 9+
- A running instance of **noema-backend** (default: `http://localhost:8000`)

---

## Setup

```bash
# Install dependencies
npm install

# Copy the environment file and configure it
cp .env.example .env

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Environment variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_BACKEND_URL` | Base URL of the noema-backend API | `http://localhost:8000` |

All variables must be prefixed with `VITE_` to be exposed to the browser by Vite.

---

## Project structure

```
src/
├── api/            # Backend API calls (predict.ts → noema-backend /predict)
├── assets/         # Static images (logos, illustrations)
├── components/     # Shared UI components
│   └── ui/         # Primitive UI elements (Button, Slider, Select, etc.)
├── data/           # Static data (emotion list, cognitive distortion glossary)
├── i18n/           # EN/HR language support (custom context, no external library)
├── lib/            # Utility helpers
├── pages/          # One file per route/step (HomePage, RationalizationStep1Page–7Page)
├── store/          # Zustand store (rationalizationStore.ts — session state)
├── types/          # Shared TypeScript types
├── App.tsx         # Router setup
└── main.tsx        # Entry point
```

---

## Tech stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** — all styling
- **React Router v7** — client-side routing
- **Zustand** — session state management
- **Recharts / Shadcn charts** — emotion pie charts on the summary screen
- **jsPDF + html-to-image** — PDF export on step 7
- **Lucide React** — icons
