# iFundza AI - UML Use Case Specification & Diagram (Updated Draft)

## 1. System Overview & Architecture Evolution

**iFundza AI** empowers South African high school learners (especially from rural and disadvantaged backgrounds) to master Mathematics and Physical Sciences in their home languages (isiZulu, isiXhosa, Sepedi, Setswana, Sesotho, Afrikaans, etc.) by integrating state-of-the-art multimodal AI models.

### Architecture Shift: Two Unified Flows
* **Flow A - Learner Real-time Screenshot/Upload (Primary Main Flow)**:
  A learner takes a photo or screenshot of a question directly from a textbook, past paper, or classroom board (or uploads an image/PDF via the web app or WhatsApp). The system uses **Gemini 2.5 Flash Multimodal Vision** to read and extract text, mathematical formulas, and scientific diagrams, translates the question into the learner's home language while preserving notation and marks, and allows the learner to immediately ask: *"Explain this in my language"*.
* **Flow B - Teacher Full Paper Translation (Secondary Batch Flow)**:
  Teachers upload complete question papers (PDF/Word). The AI translates the document, the teacher reviews and approves the side-by-side translation, and it is published to the class with automated WhatsApp/Email alerts.

---

## 2. System Actors

### 2.1 Primary Human Actors
| Actor | Role & Priority | Main Actions |
| :--- | :--- | :--- |
| **Learner** | **Main User (Primary Actor)** | Captures screenshot or takes photo of question; uploads image/PDF; selects home language; receives instant translation; asks AI for step-by-step explanations in home language; completes quizzes; downloads translated material. |
| **Teacher** | Secondary / Class Actor | Uploads full question papers; reviews and approves automated translations; creates quizzes; posts announcements; tracks class analytics. |
| **Parent** | Monitoring Actor | Views child's translation activity, downloads, and quiz scores; receives automated progress summaries via WhatsApp and Email. |
| **Administrator** | Governance & Quality Actor | Approves teacher accounts; manages users and supported South African languages; monitors multimodal translation accuracy and SLA logs. |

### 2.2 Secondary / System Actors
| Actor | Role & Integration |
| :--- | :--- |
| **AI Multimodal Engine** | **Gemini 2.5 Flash Vision** (Primary for OCR, diagram understanding, and home language translation); **GPT-4o-mini Vision** (Standby failover). |
| **Messaging Gateway** | **WhatsApp Bot & Email Service** (orchestrated via n8n) for receiving question photos via chat and sending alerts/reports. |
| **Database & Storage** | **PostgreSQL (Supabase)** storing original images/screenshots, extracted text, translated questions, and quiz results. |

---

## 3. Updated UML Use Case Diagram

```mermaid
flowchart LR
    %% Styling Classes
    classDef actorStyle fill:#EBF3FB,stroke:#1E88E5,stroke-width:2px,color:#0D47A1,font-weight:bold;
    classDef mainActorStyle fill:#ECFDF5,stroke:#059669,stroke-width:2.5px,color:#065F46,font-weight:bold;
    classDef systemActor fill:#F3E5F5,stroke:#8E24AA,stroke-width:2px,color:#4A148C,font-weight:bold;
    classDef uc fill:#FFFFFF,stroke:#37474F,stroke-width:1.5px,color:#212121;
    classDef primaryUc fill:#ECFDF5,stroke:#059669,stroke-width:2px,color:#065F46;
    classDef coreUc fill:#F5F3FF,stroke:#7C3AED,stroke-width:2px,color:#5B21B6;
    classDef ruleUc fill:#FDF2F8,stroke:#DB2777,stroke-width:2px,color:#9D174D;

    %% Primary Actors (No Emojis)
    Learner["Learner\n(MAIN USER)"]:::mainActorStyle
    Teacher["Teacher\n(Class Batch Flow)"]:::actorStyle
    Parent["Parent"]:::actorStyle
    Admin["Administrator"]:::actorStyle

    %% Secondary System Actors
    AIEngine["AI Multimodal Engine\n(Gemini 2.5 Flash / GPT-4o-mini)"]:::systemActorStyle
    MessagingGateway["Messaging Gateway\n(WhatsApp Bot & Email via n8n)"]:::systemActorStyle

    %% System Boundary
    subgraph iFundzaSystem ["  iFundza AI Platform Boundary  "]
        direction TB

        %% Authentication & Profiles
        UC01(["UC01: Register & Log In"]):::uc

        %% Flow A: Learner Real-Time Vision (Primary)
        subgraph Sub_LearnerFlow ["Flow A: Learner Real-Time Question Translation (Main)"]
            UC02(["UC02: Capture Question Screenshot / Photo"]):::primaryUc
            UC03(["UC03: Upload Question Image or PDF"]):::primaryUc
            UC04(["UC04: Select Preferred Home Language"]):::uc
            UC05(["UC05: Get Instant Translated Question"]):::primaryUc
            UC06(["UC06: Explain Question in My Language (AI Chat)"]):::coreUc
            UC07(["UC07: Download Translated Question/Paper"]):::uc
            UC08(["UC08: Write Practice Quiz"]):::uc
        end

        %% Multimodal Vision & Translation Engine
        subgraph Sub_AIEngine ["Multimodal Vision & Processing Pipeline"]
            UC19(["UC19: Extract Content via AI Vision (OCR)"]):::coreUc
            UC20(["UC20: Inspect Clarity (Prompt Retake if Blurry)"]):::uc
            UC21(["UC21: Translate Question Text"]):::coreUc
            UC22(["UC22: Preserve Formulas, Numbers & Symbols"]):::ruleUc
            UC23(["UC23: Trigger Multimodal LLM Fallback"]):::uc
        end

        %% Flow B: Teacher Class Papers (Batch)
        subgraph Sub_TeacherFlow ["Flow B: Teacher Full Paper Operations (Batch)"]
            UC09(["UC09: Upload Full Question Paper (PDF/Word)"]):::uc
            UC10(["UC10: Review & Edit Full Translation"]):::uc
            UC11(["UC11: Approve & Publish Class Paper"]):::uc
            UC12(["UC12: Create Practice Quizzes"]):::uc
            UC13(["UC13: View Class Analytics & Results"]):::uc
        end

        %% Parental & Administrative Functions
        subgraph Sub_ParentAdmin ["Monitoring & Administration"]
            UC14(["UC14: View Child Activity & Quiz Scores"]):::uc
            UC15(["UC15: Receive WhatsApp/Email Progress Reports"]):::uc
            UC16(["UC16: Approve Teacher Accounts"]):::uc
            UC17(["UC17: Manage Users & Supported Languages"]):::uc
            UC18(["UC18: Monitor Translation Quality & SLA Logs"]):::uc
        end

        %% Channels & Gateway
        UC24(["UC24: Ingest Question via WhatsApp Bot"]):::primaryUc
        UC25(["UC25: Dispatch WhatsApp / Email Alerts"]):::uc
    end

    %% Learner Connections
    Learner --- UC01
    Learner --- UC02
    Learner --- UC03
    Learner --- UC04
    Learner --- UC05
    Learner --- UC06
    Learner --- UC07
    Learner --- UC08

    %% Teacher Connections
    Teacher --- UC01
    Teacher --- UC09
    Teacher --- UC10
    Teacher --- UC11
    Teacher --- UC12
    Teacher --- UC13

    %% Parent Connections
    Parent --- UC01
    Parent --- UC14
    Parent --- UC15

    %% Admin Connections
    Admin --- UC01
    Admin --- UC16
    Admin --- UC17
    Admin --- UC18

    %% <<include>> Relationships
    UC02 -.->|"<<include>>"| UC19
    UC03 -.->|"<<include>>"| UC19
    UC02 -.->|"<<include>>"| UC04
    UC03 -.->|"<<include>>"| UC04
    UC19 -.->|"<<include>>"| UC21
    UC21 -.->|"<<include>>"| UC22
    UC09 -.->|"<<include>>"| UC19
    UC11 -.->|"<<include>>"| UC25
    UC15 -.->|"<<include>>"| UC25

    %% <<extend>> Relationships
    UC19 -.->|"<<extend>>"| UC20
    UC21 -.->|"<<extend>>"| UC23
    UC05 -.->|"<<extend>>"| UC06
    UC03 -.->|"<<extend>>"| UC24

    %% Secondary System Actor Connections
    UC19 --- AIEngine
    UC21 --- AIEngine
    UC23 --- AIEngine
    UC06 --- AIEngine
    UC24 --- MessagingGateway
    UC25 --- MessagingGateway
```

---

## 4. Detailed Use Case Specifications (Updated Focus)

### UC02 & UC03: Capture Screenshot / Upload Question (Learner Flow A)
- **Primary Actor**: Learner
- **Preconditions**: Learner opens the iFundza AI web app or WhatsApp bot.
- **Includes**: `UC04: Select Preferred Home Language`, `UC19: Extract Content via AI Vision (OCR)`.
- **Extends**: `UC24: Ingest Question via WhatsApp Bot`.
- **Main Success Scenario**:
  1. Learner snaps a photo or takes a screenshot of a Maths or Science question (from a textbook, whiteboard, or exam paper).
  2. Learner chooses their preferred South African home language (e.g. isiZulu, Sepedi).
  3. System uploads the image to the n8n ingestion pipeline and invokes Gemini 2.5 Flash Multimodal Vision.
  4. System extracts text, algebraic formulas ($2x + 3 = 7$), chemical equations ($\text{H}_2\text{O}$), and diagram labels.
  5. System translates the question text into the selected language, preserving all notation and marks.
  6. The translated question is displayed instantly to the learner with the option to ask for an explanation.

---

### UC20: Inspect Image Clarity (Prompt Retake if Blurry)
- **Primary Actor**: AI Multimodal Engine (Gemini Vision)
- **Trigger**: System detects low resolution, blurry text, or cut-off questions.
- **Main Success Scenario**:
  1. AI Vision inspects image readability during OCR preprocessing.
  2. If the question text or formula is illegible, the system responds: *"Please retake photo, the question is not clear or is cut off."*
  3. Learner is prompted to recapture the photo with better lighting and framing.

---

### UC22: Preserve Formulas, Numbers & Symbols
- **Primary Actor**: AI Translation Engine
- **Business Translation Rules**:
  - **Translate ONLY**: Explanatory wording and natural language instructions.
  - **DO NOT Translate**: Numbers ($1, 2, 3.5$), algebraic variables and powers ($x^2, 2x+3=7$), chemical symbols ($\text{H}_2\text{O}, \text{CO}_2$), SI units ($\text{cm}, \text{kg}, \text{m/s}$), and diagram labels.
  - **DO NOT Change**: Question numbering (Q1.1, Q2) or marks ($[3\text{ marks}]$).
  - **Diagrams**: Provide home-language descriptive text while leaving diagram structural labels in their original English/scientific format.

---

### UC06: Explain Question in My Language (AI Chat Assistant)
- **Primary Actor**: Learner
- **Secondary Actor**: AI Multimodal Engine (Gemini 2.5 Flash)
- **Trigger**: Learner clicks "Explain this in my language" on an already translated question.
- **Main Success Scenario**:
  1. System passes the original question, translated question, and learner language context to Gemini.
  2. AI responds in simple, learner-friendly language breaking down the mathematical/scientific concept step-by-step.
  3. Learner can ask follow-up questions in their home language.

---

### UC09 - UC11: Full Paper Upload & Approval (Teacher Flow B)
- **Primary Actor**: Teacher
- **Main Success Scenario**:
  1. Teacher uploads full exam paper (PDF or Word).
  2. AI Vision and Translation Engine processes the entire document.
  3. Teacher audits the side-by-side translation before approving.
  4. Upon approval, n8n triggers automated WhatsApp/Email alerts to enrolled learners and parents.

---

## 5. Updated Requirements Traceability Matrix (FR1 - FR8)

| Requirement | Description | Core Use Cases | Primary Actor |
| :--- | :--- | :--- | :--- |
| **FR1 (NEW)** | Capture screenshot / take photo of question from textbook, paper, or board | `UC02` | Learner |
| **FR2 (NEW)** | Upload question image (JPG/PNG), PDF, or screenshot | `UC03`, `UC24` | Learner |
| **FR3 (NEW)** | Multimodal AI Vision extraction of text, formulas, diagrams (handwritten/printed) | `UC19`, `UC20` | AI Engine (Gemini Vision) |
| **FR4** | Translate to selected home language without changing formulas or numbers | `UC04`, `UC21`, `UC22`, `UC23` | AI Engine |
| **FR5** | Allow Teacher to upload full papers for review and publication | `UC09`, `UC10`, `UC11` | Teacher |
| **FR6** | Allow Learner to chat with AI for step-by-step explanation in home language | `UC06` | Learner / AI Engine |
| **FR7** | Allow Learner to download translated question / paper | `UC07` | Learner |
| **FR8** | Save all original images, translations, and quizzes to Postgres for reuse | `UC05`, `UC09`, `UC14` | Database / System |
