import Card from "./Card"
function Dashboard(props) {
    return (
        <div className="Dashboard">
            <div className="encabezado">
                <div>
                    <p>UI Design</p>
                </div>
                <input
                    type="text"
                    placeholder="Buscar"
                />
            </div>
            <div className="menu-superior">
                <button>Todos</button>
                <button>Diseño</button>
                <button>Desarrollo</button>
                <button>Servicios</button>
            </div>
            <div className="contenido">
                <div className="tarjetas">
                    <Card
                        titulo="Montaña"
                        descripcion="Explora nuevos caminos y descubre lugares."
                        categoria="Aventura"
                        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvqENXbmWchkEYE4bDV3ITV4pfwJf9Utsi9AcXHSFEg&s=10"
                        precio={120000}
                        estado="Disponible"
                    ></Card>

                    <Card
                        titulo="Galaxy Pro"
                        descripcion="Celular moderno con cámara de alta calidad."
                        categoria="Tecnologia"
                        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW48AnJPQzq_a18WG87x_JqxFkPTKrOELcs_vTeZJ6iQ&s=10"
                        precio="1800000"
                        estado="Nuevo"
                    ></Card>

                    <Card
                        titulo="Tienda Virtual"
                        descripcion="Creación de tiendas para empresas."
                        categoria="E-commerce"
                        imagen="https://www.solbyte.com/wp-content/uploads/2024/12/tienda-online-1.jpg"
                        precio="600000"
                        estado="Disponible"
                    ></Card>

                    <Card
                        titulo="Laptop Gamer"
                        descripcion="Computador portátil para juegos y trabajo."
                        categoria="Computadores"
                        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPr61I1wZ9vVp-bfg2llh6Kd_MOY3qx7Y9vqLg1ZC4A&s=10"
                        precio="3200000"
                        estado="Disponible"
                        destacado={true}
                    ></Card>

                    <Card
                        titulo="Reloj inteligente"
                        descripcion="Controla tus actividades y recibe notificaciones."
                        categoria="Accesorios"
                        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRycMGekM-izMkdk1hJ2RFDFtCTijoKc_5-ydiArz2yQg&s=10"
                        precio="350000"
                        estado="Nuevo"
                        destacado={true}
                    ></Card>

                    <Card
                        titulo="Auto Deportivos"
                        descripcion="Vehículo moderno con exelente rendimiento."
                        categoria="Automoviles"
                        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvyHX29__IzRS7HNCnXonwdKfrILvTqQVjmDfODOWAZw&s=10"
                        precio="75000000"
                        estado="En venta"
                        destacado={true} 
                    ></Card>
                </div>

                <div className="panel">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPr61I1wZ9vVp-bfg2llh6Kd_MOY3qx7Y9vqLg1ZC4A&s=10" alt="Computador destacado" />
                    <div className="imagen-panel"></div>
                    <h2>Computador destacado</h2>
                    <p>Portátil ideal para estudiar, trabajar y jugar.</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>Disponible</p>
                    <button>Ver servicio</button>
                </div>
            </div>
        </div>
    )
}
export default Dashboard