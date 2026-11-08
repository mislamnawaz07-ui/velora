"use client";
import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const products = [
    { name: "Velora Oversized Tee", price: 2499, tag: "BEST SELLER", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80" },
    { name: "Velora Premium Hoodie", price: 4999, tag: "NEW", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80" },
    { name: "Velora Classic Cap", price: 1499, tag: "HOT", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80" },
    { name: "Velora Cargo Pant", price: 3999, tag: "LIMITED", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80" },
  ];

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const orderOnWhatsApp = () => {
    if (!name || !phone || !address) {
      alert("Please fill Name, Phone and Address first!");
      return;
    }
    const items = cart.map((i) => `${i.name} - Rs.${i.price}`).join("\n");
    const msg = `Hello VELORA!\nMy Order:\n\n${items}\n\nTotal: Rs.${total}\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}`;
    window.open(`https://wa.me/923451959391?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const inputStyle: any = { width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid #333", background: "#111", color: "white", marginBottom: "10px", boxSizing: "border-box" };

  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", fontFamily: "Arial" }}>
      <style>{`.nav-link:hover { color: white !important; text-decoration: underline; cursor: pointer; }`}</style>
     
     
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 20px", borderBottom: "1px solid #222", alignItems: "center", flexWrap: "wrap", gap: "10px", position: "sticky", top: 0, background: "black", zIndex: 50 }}>
        <h2 style={{ letterSpacing: "8px", margin: 0, fontSize: "22px" }}>VELORA</h2>
        
        <div style={{ display: "flex", gap: "20px", fontSize: "14px", color: "#aaa" }}>
        <span className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</span>
        <span className="nav-link" onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}>Shop</span>
        <span className="nav-link" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>About</span>
        </div>
        <button onClick={() => setCartOpen(true)} style={{ background: cart.length > 0 ? "#22c55e" : "white", color: cart.length > 0 ? "white" : "black", border: "none", padding: "8px 20px", borderRadius: "20px", fontWeight: "bold", cursor: "pointer" }}>
          Cart ({cart.length}) 🛒
        </button>
      </div>

      {/* HERO */}
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <p style={{ letterSpacing: "5px", color: "#aaa", fontSize: "12px" }}>NEW COLLECTION 2026</p>
        <h1 style={{ fontSize: "clamp(40px, 10vw, 70px)", margin: "10px 0", letterSpacing: "8px", lineHeight: "1" }}>VELORA</h1>
        <p style={{ color: "#aaa", fontSize: "16px" }}>Wear The Confidence. Premium Fashion For Pakistan.</p>
        <button onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })} style={{ background: "white", color: "black", border: "none", padding: "14px 35px", borderRadius: "30px", fontWeight: "bold", marginTop: "20px", fontSize: "16px", cursor: "pointer" }}>Shop Now →</button>
      </div>

      {/* PRODUCTS */}
      <div id="products" style={{ padding: "0px 20px 60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>Featured Products</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
          {products.map((p) => (
            <div key={p.name} style={{ background: "#111", borderRadius: "15px", padding: "15px", border: "1px solid #222" }}>
              <img src={p.img} alt={p.name} style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "10px" }} />
              <span style={{ background: "white", color: "black", fontSize: "10px", fontWeight: "bold", padding: "4px 10px", borderRadius: "10px", display: "inline-block", marginTop: "15px" }}>{p.tag}</span>
              <h3 style={{ margin: "10px 0 5px 0", fontSize: "16px" }}>{p.name}</h3>
              <p style={{ color: "#aaa", margin: "0 0 15px 0" }}>Rs. {p.price}</p>
              <button onClick={() => setCart([...cart, p])} style={{ width: "100%", background: "white", color: "black", border: "none", padding: "10px", borderRadius: "20px", fontWeight: "bold", cursor: "pointer" }}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <div id="about" style={{ padding: "60px 20px", maxWidth: "800px", margin: "0 auto", textAlign: "center", borderTop: "1px solid #222" }}>
        <h2 style={{ fontSize: "28px", letterSpacing: "4px" }}>ABOUT VELORA</h2>
         <p style={{ color: "#aaa", fontSize: "16px", lineHeight: "1.7" }}>
          VELORA is a premium fashion brand from Pakistan. We make high-quality Oversized Tees, Hoodies, Caps and Cargo Pants for people who want to wear confidence. Every order is delivered with care across Pakistan.
         </p>
         <p style={{ color: "#fff", fontWeight: "bold", marginTop: "15px" }}>📦 Cash on Delivery Available All Over Pakistan</p>
      </div>

      {/* CART DRAWER */}
      {cartOpen && (
        <div style={{ position: "fixed", top: 0, right: 0, width: "380px", maxWidth: "90vw", height: "100vh", background: "#0a0a0a", borderLeft: "1px solid #333", padding: "25px", overflowY: "auto", zIndex: 100 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ margin: 0 }}>Your Cart 🛒</h2>
            <button onClick={() => setCartOpen(false)} style={{ background: "#222", color: "white", border: "none", padding: "8px 12px", borderRadius: "50%", cursor: "pointer" }}>X</button>
          </div>

          {cart.length === 0 ? (
            <p style={{ color: "#888", marginTop: "30px" }}>Your cart is empty. Add something first.</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} style={{ display: "flex", justifyContent: "space-between", background: "#111", padding: "12px", borderRadius: "10px", marginTop: "12px", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <img src={item.img} alt={item.name} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "8px" }} />
                    <div><div style={{ fontWeight: "bold", fontSize: "14px" }}>{item.name}</div><div style={{ color: "#aaa", fontSize: "13px" }}>Rs. {item.price}</div></div>
                  </div>
                  <button onClick={() => setCart(cart.filter((_, i) => i !== index))} style={{ background: "#ff4444", color: "white", border: "none", padding: "6px 10px", borderRadius: "8px", cursor: "pointer" }}>Remove</button>
                </div>
              ))}

              <h3 style={{ marginTop: "25px" }}>Total: Rs. {total}</h3>
              <h3 style={{ fontSize: "18px" }}>Checkout Details</h3>
              <input style={inputStyle} placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input style={inputStyle} placeholder="Phone Number - 03XX XXXXXXX" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <textarea style={{ ...inputStyle, height: "70px" }} placeholder="Full Address - House, Street, City" value={address} onChange={(e) => setAddress(e.target.value)} />
              <button onClick={orderOnWhatsApp} style={{ width: "100%", background: "#25D366", color: "white", border: "none", padding: "14px", borderRadius: "12px", fontWeight: "bold", fontSize: "16px", cursor: "pointer" }}>Order on WhatsApp</button>
              <button onClick={() => setCart([])} style={{ width: "100%", background: "transparent", color: "#888", border: "1px solid #333", padding: "10px", borderRadius: "12px", marginTop: "10px", cursor: "pointer" }}>Clear Cart</button>
            </>
          )}
        </div>
      )}

      <div style={{ textAlign: "center", padding: "30px", borderTop: "1px solid #222", color: "#666", fontSize: "14px" }}>
        © 2026 VELORA - Made in Pakistan | Day 4
      </div>
    </div>
  );
}