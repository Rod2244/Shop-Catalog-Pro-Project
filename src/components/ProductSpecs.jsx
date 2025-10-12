import { useParams, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

function ProductSpecs() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/ProductStorage/ProductsStorage.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          console.error("Fetched data is not an array:", data);
          setProduct(null);
          return;
        }
        const found = data.find((p) => p.id == id); // loose comparison
        setProduct(found || null); // just use the found product
      })
      .catch((err) => {
        console.error("Failed to load product:", err);
      });
  }, [id]);

  if (!product) {
    return <p className="text-gray-400 text-center mt-20">Loading...</p>;
  }

  const isSpecsPath = location.pathname.includes(`/products/${id}/specs`);
  const specsTogglePath = isSpecsPath ? `/products/${id}` : `/products/${id}/specs`;

  const handleSpecsClick = () => {
    navigate(specsTogglePath);
  };

  return (
    <div className="text-white px-6 py-10">
      <div className="flex gap-2 mb-2">
        <button
          onClick={() => navigate(-1)}
          className="text-indigo-400 hover:text-indigo-200 flex items-center gap-2"
        >
          <ArrowLeft size={20} /> Back
        </button>
      </div>

      <div className="pt-1 max-w-4xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold mb-3">Specifications</h3>
        {product.specs ? (
          <ul className="list-disc pl-5 space-y-2">
            {Object.entries(product.specs).map(([key, value]) => (
              <li key={key}>
                <strong className="capitalize">{key}:</strong> {value}
              </li>
            ))}
          </ul>
        ) : (
          <p>No specifications available.</p>
        )}

        <div className="mt-6 border-t border-gray-700 pt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProductSpecs;
