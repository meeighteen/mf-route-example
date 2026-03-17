
export interface BaseModuleProps {
  theme: 'light' | 'dark' | 'system';
  locale: 'es' | 'en';
  // Callback para que el módulo notifique errores al sistema de logs del Shell
  onError: (error: Error, info?: string) => void;
}

export interface CalculatorContract extends BaseModuleProps {
  initialValue?: number;
  precision: number;
  onResultChange?: (result: number) => void;
}

export interface PizarraContract extends BaseModuleProps {
  canvasId: string;
  allowExport: boolean;

  onSave: (dataUrl: string) => Promise<{ success: boolean; url?: string }>;

  tools: Array<'pencil' | 'eraser' | 'shape'>;
}

export interface CurrencyConverterContract extends BaseModuleProps {
  availableCurrencies: string[]; // ['USD', 'EUR', 'MXN']
  // El Shell actúa como Proxy de la API de finanzas
  getExchangeRate: (from: string, to: string) => Promise<number>;
  onTransaction?: (details: { amount: number; from: string; to: string }) => void;
}
