function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="logo">
            ☰ Menú principal
            </div>
            <div className="menu">
                <button>🏠Inicio</button>
                <button>📱 Productos</button>
                <button>⭐ Destacados</button>
                <button>❤️ Favoritos</button>
            </div>

            <div className="perfil">
                <p>👤Usuario</p>
                <p>{props.nombre}</p>
            </div>
            <div className="menu">
                <button>⚙️ Cerrar Sesion</button>
            </div>
        </div>
    )
}

export default Sidebar