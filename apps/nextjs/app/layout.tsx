import '@styles/globals.css';

type Props = {
  children: React.ReactNode;
};

function RootLayout({ children }: Props) {
  return (
    <html lang='ko'>
      <body>
        <main>{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}

export default RootLayout;
