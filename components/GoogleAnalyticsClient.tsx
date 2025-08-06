"use client";
import GoogleAnalytics from "./google-analytics";

export default function GoogleAnalyticsClient({ measurementId }: { measurementId: string }) {
  return <GoogleAnalytics measurementId={measurementId} />;
}