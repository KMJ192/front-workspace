type Props = {
  children: React.ReactNode;
};

function RootLayout({ children }: Props) {
  return (
    <html lang='ko'>
      <body>
        <header>
          <h1>sample</h1>
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}

export default RootLayout;
