# BaseLayerOS Governance Console

The BaseLayerOS Governance Console is the enterprise interface for the
deterministic governance substrate powering regulated AI execution,
attestation pipelines, and CAGE‑compatible verification.

This console provides:

- Deterministic substrate execution
- CAGE parity verification dashboard
- Governance vector explorer
- Envelope inspector (raw, inner, canonicalized)
- Digest + seal verification
- Governance pack integration
- Attestation viewer
- Enterprise‑grade UI theme

## Technology Stack

- **Rust** — deterministic substrate, CAGE harness, envelope verification
- **Tauri** — secure, local, cross‑platform application shell
- **React + TypeScript** — enterprise UI
- **TailwindCSS** — deterministic styling system
- **Vite** — high‑performance build system

## Running the Console

Install dependencies:

`npm install`

Start the Console

`npm run tauri`

Build for Production

`npm run build`

## Repository Structure

src-tauri/        # Rust backend (substrate, CAGE harness, commands)
src/              # React frontend (enterprise console)
components/       # Governance UI components
pages/            # Console views
vectors/          # Governance vectors (commit, refusal, tamper)
schemas/          # Governance schema registry

## Governance Substrate

The console interfaces with the BaseLayerOS substrate, providing:

- Deterministic envelope canonicalization
- SHA‑256 digest generation
- HMAC‑V2 seal verification
- Governance pack evaluation
- Attestation integration
- CAGE parity reporting

## CAGE Compatibility

BaseLayerOS is the only deterministic execution substrate capable of
producing CAGE‑compatible parity results across commit, refusal, and
tamper vectors.

This console exposes those results visually for enterprise review.

## License

Proprietary — © BaseLayerOS
