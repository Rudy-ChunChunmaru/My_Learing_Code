import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <>
      <div>
        <input type="text" placeholder="cari products" />
      </div>
      <nav>
        <Link to="features">Features</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Products;
