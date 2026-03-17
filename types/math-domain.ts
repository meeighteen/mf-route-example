// types/math-domain.ts

/** * Interfaz que define el Core Matemático.
 * Este es el contrato que el Squad Matemáticas 1 se compromete a mantener.
 */
export interface IMathCore {
  calculate: (expression: string) => number;
  formatResult: (value: number, precision: number) => string;
  validators: {
    isNumber: (input: any) => boolean;
    isValidExpression: (expr: string) => boolean;
  };
}

/** * Interfaz para el Contexto compartido que inyecta el Shell
 */
export interface IShellContext {
  user: {
    id: string;
    permissions: 'read' | 'write' | 'admin';
  };
  theme: 'light' | 'dark';
  notify: (msg: string) => void;
}