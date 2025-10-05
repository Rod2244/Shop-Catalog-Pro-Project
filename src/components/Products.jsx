function Products({ gridColumns }) {
  const style = {
    display: "grid",
    gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
    gap: "10px",
  };

  const products = ["Monitor", "System Unit", "Mouse", "Headset", "keyboard", "Mouse Pad"];

  return (
    <div>
      <h2>🛍️ Products</h2>
      <p>Grid Layout: {gridColumns} columns</p>
      <div style={style}>
        {products.map((item, i) => (
          <div
            key={i}
            style={{
              background: "#eee",
              border: "1px solid #ccc",
              padding: "10px",
              textAlign: "center",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
