import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 dark:opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-500/20 bg-indigo-50 dark:bg-indigo-500/10 text-sm text-indigo-600 dark:text-indigo-400 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            Now tracking 2B+ events monthly
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
            Product analytics
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              that just works
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Understand user behavior, track key metrics, and ship better
            products. Built for teams that move fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm"
            >
              Read the Blog
            </Link>
            <a
              href="https://github.com/beacon-analytics/beacn-sdk"
              className="inline-flex items-center justify-center border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-sm"
            >
              View Source
            </a>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400 mb-3 tracking-wide uppercase">
              Platform
            </p>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Everything you need to understand your users
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {/* Large card - Real-time Events */}
            <div className="md:col-span-4 group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-500/5 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-5">
                  <svg
                    className="w-5 h-5 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Real-time Events
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md">
                  Track every user interaction as it happens. Sub-second
                  ingestion with zero sampling across every plan.
                </p>
                {/* Mini visualization */}
                <div className="mt-6 flex items-end gap-1 h-16">
                  {[
                    40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 50, 88, 72, 92,
                    68, 78, 82, 58, 95,
                  ].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-indigo-100 dark:bg-indigo-500/20"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Small card - Funnel Analysis */}
            <div className="md:col-span-2 group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3C17.5 3 22 6 22 6V18C22 18 17.5 21 12 21C6.5 21 2 18 2 18V6C2 6 6.5 3 12 3Z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Funnel Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Visualize conversion paths and identify where users drop off.
              </p>
            </div>

            {/* Medium card - Session Replay */}
            <div className="md:col-span-3 group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6.75a3.75 3.75 0 0 0-7.5 0v3.75m-3 0h13.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5Z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Session Replay
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Watch real user sessions to understand behavior and debug issues
                faster.
              </p>
            </div>

            {/* Medium card - A/B Testing */}
            <div className="md:col-span-3 group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 8.25h18M4.5 6h15a1.5 1.5 0 0 1 1.5 1.5v11.25A1.5 1.5 0 0 1 19.5 20.25h-15A1.5 1.5 0 0 1 3 18.75V7.5A1.5 1.5 0 0 1 4.5 6Z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                A/B Testing
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Run controlled experiments and measure impact with statistical
                confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Explore the blog
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Learn how to proxy APIs at the edge, keep secrets server-side, and
            build safer frontends with practical guides.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Read the Blog
          </Link>
        </div>
      </section>
    </main>
  );
}
