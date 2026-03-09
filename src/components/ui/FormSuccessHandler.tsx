'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ThankYouPopup } from '@/components/ui/ThankYouPopup';

export function FormSuccessHandler() {
  const [showThankYou, setShowThankYou] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check for FormSubmit.co success parameters
    const message = searchParams.get('message');
    const title = searchParams.get('title');

    // FormSubmit.co typically adds parameters like ?message=Email+sent+successfully
    if (message === 'Email+sent+successfully' || message === 'success' || title === 'success') {
      setShowThankYou(true);
      // Clean up URL by removing the success parameters
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.delete('message');
        url.searchParams.delete('title');
        window.history.replaceState({}, '', url.toString());
      }
    }
  }, [searchParams]);

  return (
    <ThankYouPopup
      isOpen={showThankYou}
      onClose={() => setShowThankYou(false)}
    />
  );
}