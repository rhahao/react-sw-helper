import { PropsWithChildren } from 'react';

export type ServiceWorkerWrapperType = PropsWithChildren & {
  onError?: (error: Error) => void;
  onInstalled?: () => void;
  onUpdated?: () => void;
  onWaiting?: () => void;
  publicServiceWorkerDest: string;
  publicUrl?: string;
};
