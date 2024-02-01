import Image from 'next/image';
import CalendlyLogo from '/path/to/calendly-logo.svg'; // Adjust the path accordingly

export const CalendlyIcon = (props: any) => {
  return <img src="/calendly-logo.svg" alt="Calendly Logo" {...props} />;
};