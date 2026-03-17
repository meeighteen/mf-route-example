classDiagram
    direction UR
    
    %% Definición de Interfaces (Shared Kernel / Contratos)
    class IAuthService {
        <<interface>>
        +getToken() String
        +getUser() User
        +isLoggedIn() Boolean
    }

    class IMathCore {
        <<interface>>
        +calculate(formula: String) Number
        +formatCurrency(val: Number) String
        +validateNumeric(val: any) Boolean
    }

    %% Definición de Módulos (Remotes)
    class ShellHost {
        +AuthServiceImplementation
        +renderRemote(name: String)
    }

    class MFE_Calculadoras {
        +MathCoreImplementation
        +mount(el, deps)
    }

    class MFE_Convertidores {
        +mount(el, deps)
    }

    class MFE_Pizarrita {
        +mount(el, deps)
    }

    %% Relaciones de Inyección y Dependencia
    ShellHost ..> IAuthService : Provee/Inyecta
    MFE_Calculadoras ..|> IMathCore : Implementa y Expone
    
    MFE_Calculadoras --|> IAuthService : Consume (Inyectado)
    MFE_Convertidores --|> IAuthService : Consume (Inyectado)
    MFE_Convertidores --|> IMathCore : Consume (Federado)
    MFE_Pizarrita --|> IAuthService : Consume (Inyectado)

    note for MFE_Calculadoras "Lead de Dominio: \nDueño de la lógica matemática"
    note for ShellHost "Orquestador: \nDueño de la sesión"
