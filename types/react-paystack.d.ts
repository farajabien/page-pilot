declare module "react-paystack" {
  interface PaystackButtonProps {
    email: string;
    amount: number;
    metadata?: Record<string, any>;
    currency?: string;
    publicKey: string;
    text?: string;
    onSuccess: (reference: any) => void;
    onClose: () => void;
    className?: string;
    children?: React.ReactNode;
  }

  export const PaystackButton: React.FC<PaystackButtonProps>;

  interface PaystackConfig {
    reference: string;
    email: string;
    amount: number;
    publicKey: string;
    currency?: string;
    [key: string]: any;
  }

  type PaystackHookReturn = (
    callback?: (reference: any) => void,
    onClose?: () => void,
  ) => void;

  export function usePaystackPayment(
    config: PaystackConfig,
  ): PaystackHookReturn;
}
