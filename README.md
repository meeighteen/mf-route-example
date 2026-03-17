### Mapa de Dependencias y Responsabilidades
```mermaid
classDiagram
    direction TB

    %% Interfaces (Contratos)
    class IAuthService {
        <<interface>>
        +getToken() String
        +getUser() User
    }

    class IMathCore {
        <<interface>>
        +calculate(formula: String) Number
        +validateNumeric(val: any) Boolean
    }

    %% Remotos y Squads
    class ShellHost {
        +AuthServiceImplementation
    }

    class MFE_Calculadoras {
        +MathCoreImplementation
        +mount(el, deps)
    }

    class MFE_Convertidores {
        +ConversionLogic
        +mount(el, deps)
    }

    class MFE_Pizarra {
        +DrawingEngine
        +mount(el, deps)
    }

    %% Relaciones de Dependencia
    ShellHost ..> IAuthService : Inyecta
    MFE_Calculadoras ..|> IMathCore : Implementa (Lead)
    
    MFE_Calculadoras --|> IAuthService : Consume
    
    MFE_Convertidores --|> IAuthService : Consume
    MFE_Convertidores --|> IMathCore : Consume (De Squad Mat 1)
    
    MFE_Pizarra --|> IAuthService : Consume

    %% Notas con saltos de línea
    note for MFE_Calculadoras "SQUAD MATEMÁTICAS 1:<br/>Dueños de Calculadoras.<br/>Proveen el Core Matemático."
    
    note for MFE_Convertidores "SQUAD MATEMÁTICAS 2:<br/>Dueños de Convertidores.<br/>Consumen el Core de Mat 1."

    note for ShellHost "SQUAD SHELL:<br/>Orquestador global y<br/>proveedor de Auth."
