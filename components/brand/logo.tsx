export function ZaminAgroLogo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <svg
          width="34"
          height="34"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="g" x1="10" y1="10" x2="54" y2="54">
              <stop stopColor="#22c55e" />
              <stop offset="1" stopColor="#16a34a" />
            </linearGradient>
          </defs>
          <path
            d="M32 6c10.5 6.5 16 15 16 24 0 14-10 22-16 28-6-6-16-14-16-28 0-9 5.5-17.5 16-24Z"
            fill="url(#g)"
          />
          <path
            d="M15 35c9 3 17 3 17 3s-4 8-16 10c-3-3-2-9-1-13Z"
            fill="#86efac"
            opacity="0.9"
          />
          <path
            d="M49 35c-9 3-17 3-17 3s4 8 16 10c3-3 2-9 1-13Z"
            fill="#4ade80"
            opacity="0.9"
          />
          <path
            d="M32 18v34"
            stroke="#065f46"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>

        <div className="leading-tight">
          <div className="text-base font-semibold tracking-tight">
            Zamin Agro
          </div>
          <div className="text-xs text-muted-foreground">
            Greenhouse supplies
          </div>
        </div>
      </div>
    </div>
  );
}
