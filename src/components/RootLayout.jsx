import { Link, Outlet } from "react-router-dom";

export default () => (
  <>
    <header>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/admin">Administração</Link>
      </nav>
    </header>
    <main>
      <p>
        Esse é o layout principal. Abaixo está o conteúdo dinâmico de cada rota
        filha.
      </p>
      <hr />
      <Outlet />
    </main>
    <footer>
      <p>Feito com React Router DOM =D</p>
    </footer>
  </>
);
