"use client";

import { ErrorState } from "@/components/common/error-state";

type ErrorPageProps = {
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <ErrorState
      title="Something went wrong"
      description="We couldn't load the books right now. Please try again."
      onRetry={reset}
    />
  );
}
