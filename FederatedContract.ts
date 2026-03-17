export interface AuthUser {
  id: string;
  name: string;
  token: string;
}

export interface AuthModule {
  getUser: () => AuthUser | null;
  isAuthenticated: () => boolean;
  login: (provider: string) => Promise<void>;
}

export interface BaseModuleProps {
  theme: 'light' | 'dark' | 'system';
  auth?: AuthModule;
  onError: (error: Error, info?: string) => void;
}

export interface CalculatorContract extends BaseModuleProps {
  initialValue?: number;
  precision: number;
  onResultChange?: (result: number) => void;
}

export interface PizarraContract extends BaseModuleProps {
  canvasId: string;

  onSave: (dataUrl: string) => Promise<{ success: boolean; url?: string }>;

  tools: Array<'pencil' | 'eraser' | 'shape'>;
}

export interface CurrencyConverterContract extends BaseModuleProps {
  availableCurrencies: string[];
  getExchangeRate: (from: string, to: string) => Promise<number>;
}
