export default function Loading() {
  return (
    <div
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="h-4 w-36 animate-pulse rounded-full bg-muted" />
          <div className="h-10 w-3/4 animate-pulse rounded-lg bg-muted" />
          <div className="h-10 w-1/2 animate-pulse rounded-lg bg-muted" />
          <div className="h-5 w-2/3 animate-pulse rounded bg-muted" />
          <div className="h-5 w-1/3 animate-pulse rounded bg-muted" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="h-64 animate-pulse rounded-2xl bg-muted" />
          <div className="h-64 animate-pulse rounded-2xl bg-muted" />
          <div className="h-64 animate-pulse rounded-2xl bg-muted" />
        </div>
        <span className="sr-only">Loading content</span>
      </div>
    </div>
  );
}