# Test Strategy - Cotation App

## Niveaux de Test
- Unit : Services, Utils, DTOs validation
- Integration : API endpoints, DB transactions
- E2E : Parcours critiques (login → création devis → export PDF)

## Coverage Targets
- Lines: 80% minimum
- Functions: 85% minimum
- Branches: 70% minimum

## Environnements
- Local : SQLite/PostgreSQL local
- CI : PostgreSQL service container
- Staging : Azure PostgreSQL (clone prod)