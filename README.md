# Ejemplos de Testing - Monorepo

Este repositorio contiene ejemplos de testing en Node.js y React utilizando distintas herramientas:

- **Jest**: en `jest-tests/`
- **Vitest**: en `vitest-tests/`
- **React Testing Library**: en `react-testing/`

## Requisitos

- Node.js >= 18
- pnpm (recomendado): `npm install -g pnpm`

## Paso 1: Instalar las dependencias

```bash
pnpm i
```

## Paso 2: Ejecutar los tests

```bash
# Tests con Jest
pnpm test:jest

# Tests con Vitest
pnpm test:vitest

# Tests con React + Testing Library
pnpm test:testing-library
```
