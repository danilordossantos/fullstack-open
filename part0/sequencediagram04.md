```mermaid
sequenceDiagram
    actor user
    participant browser
    participant server

    user->>browser: inputs note 
    browser->>server: HTTP POST /new_note    
    activate server
    note right of browser: browser sends a form
    server-->>browser: HTTP 302 code
    deactivate server
    server->>browser: HTTP GET /notes    
    activate browser
    browser->>browser: reloads /notes
    deactivate browser
    par browser to server
    browser->>server: HTTP main.css    
    activate server
    and browser to server
    browser->>server: HTTP main.js
    and browser to server
    browser->>server: HTTP data.json
    end    
    note right of server: server doesn't save the note in the database
    server->>server: restarts
    deactivate server
```