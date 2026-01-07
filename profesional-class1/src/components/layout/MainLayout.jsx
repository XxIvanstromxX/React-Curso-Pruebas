import Header from "../ui/Header";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <footer>© Hecho con amor y a la programación</footer>
    </div>
  );
}

export default MainLayout;