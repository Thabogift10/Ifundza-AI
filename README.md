# iFundza AI

iFundza AI is a learning-support concept for South African high school learners. It helps learners understand Mathematics and Physical Sciences questions by translating question text into a chosen home language while keeping formulas, numbers, units, and scientific symbols intact.

## The problem and our solution

Many learners understand a subject better in their home language, but school questions and exam papers are often written in English. iFundza AI is designed to let a learner photograph or upload a question, receive a translation, and ask an AI tutor to explain it in simpler language.

The project also proposes a teacher workflow for translating full papers, reviewing the translations, and sharing approved material with a class.

## How the application is structured

The use-case diagram shows the platform boundary, its users, and the main application functions:

- **Learner:** captures or uploads a question, selects a language, gets a translation, asks for an explanation, and practises.
- **Teacher:** uploads and reviews full papers, publishes approved papers, and checks class results.
- **Parent:** views a learner's activity and receives progress updates.
- **Administrator:** manages users and languages and monitors quality.
- **AI and integrations:** a multimodal AI service processes questions; n8n is proposed to connect the application to AI, storage, and messaging.

Open the [use-case diagram](use_case_diagram.html), view its [SVG](use_case_diagram.svg), or read the [use-case specification](USE_CASE_DIAGRAM.md).

Open the [project presentation](presentation.html) in a browser. Use the arrow keys to navigate or print the slides to save them as a PDF.

## Learner question flow

1. The learner submits a question image or document and chooses a target language.
2. The system checks whether the image is readable. If it is blurry or incomplete, the learner is asked to upload it again.
3. A multimodal AI agent extracts the question and translates its written instructions.
4. The system checks the result and preserves formulas, numbers, units, question numbering, and marks.
5. The translation is saved and returned to the learner, who can ask for a step-by-step explanation.

The proposed n8n integration is described in [docs/N8N_WORKFLOW.md](docs/N8N_WORKFLOW.md).

## Repository contents

| File | Purpose |
| --- | --- |
| `presentation.html` | Browser-based project slide deck |
| `index.html`, `styles.css`, `script.js` | iFundza AI landing page and browser-based demonstration |
| `team.html` | Project team page |
| `use_case_diagram.html`, `use_case_diagram.svg` | Visual use-case diagram |
| `USE_CASE_DIAGRAM.md` | Detailed actors, use cases, and requirements |
| `docs/N8N_WORKFLOW.md` | Proposed n8n and AI-agent integration workflow |

## Run the current prototype

Open `index.html` in a modern web browser. The current repository is a front-end prototype; it does not yet include a deployed AI service, database, authentication system, or configured n8n workflow. The integrations in the diagrams and workflow document describe the proposed architecture.

## Important translation rule

Translate explanatory wording only. Preserve mathematical and scientific notation, formulas, numbers, units, question numbering, marks, and diagram labels. Learners should be able to verify AI-generated translations, and teachers should review full-paper translations before publication.
