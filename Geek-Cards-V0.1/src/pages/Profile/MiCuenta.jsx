import React, { useEffect, useState } from "react";
import './MiCuenta.css';

const avatarPlaceholder = "https://ui-avatars.com/api/?name=Usuario";

export default function MiCuenta({ user, onLogout }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [perfil, setPerfil] = useState(null);
  const [compras, setCompras] = useState([]);
  const [ventas, setVentas] = useState([]);
  const [calificaciones, setCalificaciones] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    // Simular carga de datos
    setTimeout(() => {
      try {
        // Usar datos del usuario logueado si están disponibles
        const userData = user || {
          nombre: "Usuario Demo",
          email: "demo@geekcards.com"
        };

        setPerfil({
          nombre: userData.name || userData.nombre,
          email: userData.email,
          avatar: avatarPlaceholder,
        });

        // Datos simulados de compras y ventas
        setCompras([
          { nombre: "Carta Dragón", precio: "$1500", fecha: "2025-08-01" },
          { nombre: "Carta Fénix", precio: "$1200", fecha: "2025-07-15" },
        ]);

        setVentas([
          { nombre: "Carta Mago", estado: "Publicado", precio: "$900" },
          { nombre: "Carta Guerrero", estado: "Vendida", precio: "$1100" },
        ]);

        setCalificaciones({ promedio: 4.7, total: 23 });
        setLoading(false);
      } catch (err) {
        setError("Error al cargar los datos del perfil");
        setLoading(false);
      }
    }, 1200);
  }, [user]);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  if (loading) return <div className="cuenta-loading">Cargando…</div>;
  if (error) return <div className="cuenta-error">{error}</div>;

  return (
    <div className="cuenta-container">
      <h2>Mi Cuenta</h2>
      <section className="cuenta-perfil">
        <img src={perfil?.avatar} alt="Avatar" className="cuenta-avatar" />
        <div>
          <h3>{perfil?.nombre}</h3>
          <p>{perfil?.email}</p>
          <div className="cuenta-actions">
            <button className="cuenta-editar">Editar perfil</button>
            <button className="cuenta-logout" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </section>
      <section className="cuenta-compras">
        <h4>Mis Compras</h4>
        {compras.length === 0 ? (
          <p>No hay datos disponibles</p>
        ) : (
          <ul>
            {compras.map((c, i) => (
              <li key={i}>
                <strong>{c.nombre}</strong> — {c.precio} <span>({c.fecha})</span>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className="cuenta-ventas">
        <h4>Mis Ventas</h4>
        {ventas.length === 0 ? (
          <p>No hay datos disponibles</p>
        ) : (
          <ul>
            {ventas.map((v, i) => (
              <li key={i}>
                <strong>{v.nombre}</strong> — {v.estado} — {v.precio}
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className="cuenta-calificaciones">
        <h4>Calificaciones</h4>
        {calificaciones ? (
          <p>
            Promedio: <strong>{calificaciones.promedio}</strong> / 5<br />
            Total de reseñas: <strong>{calificaciones.total}</strong>
          </p>
        ) : (
          <p>No hay datos disponibles</p>
        )}
      </section>
    </div>
  );
}
