```mermaid
sequenceDiagram
    actor user
    participant browser

    user->>browser: visits website /spa   
    activate browser
    browser-->>user: lists notes
    deactivate browser
    user->>browser: inputs note   
    activate browser
    browser->>browser: redraws list of notes
    note right of browser: browser shows updated list of notes
    browser-->>user: lists notes
    deactivate browser
```