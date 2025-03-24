'use client';

import { usePathname } from 'next/navigation';

export function DraftModeIndicator() {
  const pathname = usePathname();

  const handleDisableDraft = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await fetch(`/api/disable-draft?redirect=${pathname}`);

    window.location.reload();
  };

  return (
    <button
      onClick={handleDisableDraft}
      className="fixed bottom-4 left-4 w-auto rounded-md bg-gray-700 px-2 py-1 text-xs text-white hover:bg-gray-900"
    >
      Exit Preview
    </button>
  );
}
