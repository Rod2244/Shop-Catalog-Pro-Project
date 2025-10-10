import { useParams, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductOverview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/ProductStorage/ProductsStorage.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id.toString() === id);
        setProduct(found);
      })
      .catch((err) => console.error("Failed to load product:", err));
  }, [id]);

  if (!product) return <p className="text-gray-400 text-center mt-20">Loading...</p>;

  const overviewPath = `/products/${id}/overview`;
  const isOverviewOpen = location.pathname === overviewPath;

  const handleOverviewClick = () => {
    if (isOverviewOpen) {
      navigate(`/products/${id}`); // Close overview
    } else {
      navigate(overviewPath); // Open overview
    }
  };

  return (
    <div className="text-white px-6 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-indigo-400 hover:text-indigo-200 flex items-center gap-2"
      >
        <span className="material-icons">arrow_back</span> Back
      </button>

      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-3">Overview</h3>
          <p className="text-gray-300 mb-4">
            The Acer Nitro 27” Full HD Gaming Monitor delivers sharp visuals and smooth performance with its 165Hz refresh rate, 1ms response time, and IPS display. Its slim bezel design, adjustable stand, and eye protection features make it perfect for gaming, work, or entertainment.
          </p>  
        {/* Tabs */}
        

        {/* Nested route will render here */}
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProductOverview; 

