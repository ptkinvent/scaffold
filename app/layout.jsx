import "./globals.css";

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Scaffold</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name="description" content="Scaffold." />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function() {
                  try {
                    var darkMode = localStorage.getItem('darkMode') === 'true';
                    if (darkMode) {
                      document.documentElement.classList.add('dark');
                    }
                  } catch (e) {}
                })();
              `,
          }}
        />
      </head>
      <body className="h-full bg-white dark:bg-secondary-800">{children}</body>
    </html>
  );
}
