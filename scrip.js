window.addEventListener("scroll", function () {
  const imagen = document.querySelector(".bg");
  const menu = document.querySelector(".menu");

  let scroll = window.scrollY;
  let opacidad = 1 - scroll / 600;

  if (opacidad < 0) {
    opacidad = 0;
  }

  if (imagen) {
    imagen.style.opacity = opacidad;
  }

  if (menu) {
    if (scroll > 80) {
      menu.classList.add("scrolled");
    } else {
      menu.classList.remove("scrolled");
    }
  }
});

document.querySelectorAll(".btn-info").forEach(function (boton) {
  boton.addEventListener("click", function () {
    const info = boton.parentElement.querySelector(".info-habitacion");

    if (info.style.display === "block") {
      info.style.display = "none";
      boton.textContent = "Ver información";
    } else {
      info.style.display = "block";
      boton.textContent = "Ocultar información";
    }
  });
});

// URL BASE DE TU BACKEND
// Cuando tengas tu link de Render, ponlo aquí (ej: "https://hotel-backend.onrender.com")
// const BASE_URL = "http://localhost:3000"; // Usa esta línea solo cuando programes localmente
const BASE_URL = "https://hotel-backend-3-s5xp.onrender.com"; 

const API_USUARIOS = `${BASE_URL}/api/usuarios`;
const API_RESERVAS = `${BASE_URL}/api/reservas`;
const API_HABITACIONES = `${BASE_URL}/api/habitaciones`;
const API_PAGOS = `${BASE_URL}/api/pagos`;
const API_NOTIFICACIONES = `${BASE_URL}/api/notificaciones`;
const STORAGE_USUARIO = "usuario";
const STORAGE_TOKEN = "token";

const modalLogin = document.getElementById("modalLogin");
const modalRegistro = document.getElementById("modalRegistro");
const modalCuenta = document.getElementById("modalCuenta");
const modalConfirmacionAccion = document.getElementById("modalConfirmacionAccion");
const modalPagoReserva = document.getElementById("modalPagoReserva");
const modalEditarReserva = document.getElementById("modalEditarReserva");

const cerrarLogin = document.getElementById("cerrarLogin");
const cerrarRegistro = document.getElementById("cerrarRegistro");
const cerrarCuenta = document.getElementById("cerrarCuenta");
const cerrarConfirmacion = document.getElementById("cerrarConfirmacion");
const cerrarPagoReserva = document.getElementById("cerrarPagoReserva");
const cerrarEditarReserva = document.getElementById("cerrarEditarReserva");
const btnCancelarConfirmacion = document.getElementById("btnCancelarConfirmacion");
const btnAceptarConfirmacion = document.getElementById("btnAceptarConfirmacion");
const tituloConfirmacion = document.getElementById("tituloConfirmacion");
const mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
const resumenPagoReserva = document.getElementById("resumenPagoReserva");
const formPagoReserva = document.getElementById("formPagoReserva");
const metodoPagoReserva = document.getElementById("metodoPagoReserva");
const montoPagoReserva = document.getElementById("montoPagoReserva");
const mensajePagoReserva = document.getElementById("mensajePagoReserva");
const formEditarReservaUsuario = document.getElementById("formEditarReservaUsuario");
const mensajeEditarReservaUsuario = document.getElementById("mensajeEditarReservaUsuario");
const editReservaId = document.getElementById("editReservaId");
const editReservaHabitacionId = document.getElementById("editReservaHabitacionId");
const editReservaHabitacionTexto = document.getElementById("editReservaHabitacionTexto");
const editReservaFechaInicio = document.getElementById("editReservaFechaInicio");
const editReservaFechaFin = document.getElementById("editReservaFechaFin");

const irARegistro = document.getElementById("irARegistro");
const irALogin = document.getElementById("irALogin");

const authButtons = document.getElementById("authButtons");

const formRegistro = document.getElementById("formRegistro");
const mensajeRegistro = document.getElementById("mensajeRegistro");

const formLogin = document.getElementById("formLogin");
const mensajeLogin = document.getElementById("mensajeLogin");

const cuentaNombre = document.getElementById("cuentaNombre");
const cuentaEmail = document.getElementById("cuentaEmail");
const cuentaRol = document.getElementById("cuentaRol");

const cerrarSesionBtn = document.getElementById("cerrarSesionBtn");
const btnVerReservas = document.getElementById("btnVerReservas");
const btnVerNotificaciones = document.getElementById("btnVerNotificaciones");
const btnEditarPerfil = document.getElementById("btnEditarPerfil");
const badgeNotificaciones = document.getElementById("badgeNotificaciones");
const btnLeerTodasNotificaciones = document.getElementById("btnLeerTodasNotificaciones");

const panelReservas = document.getElementById("panelReservas");
const panelNotificaciones = document.getElementById("panelNotificaciones");
const panelEditarPerfil = document.getElementById("panelEditarPerfil");
const listaReservas = document.getElementById("listaReservas");
const listaNotificaciones = document.getElementById("listaNotificaciones");

const formEditarPerfil = document.getElementById("formEditarPerfil");
const mensajeEditarPerfil = document.getElementById("mensajeEditarPerfil");

const mensajeReserva = document.getElementById("mensajeReserva");
const btnBuscarReserva = document.getElementById("btnBuscarReserva");
const resultadosHabitaciones = document.getElementById("resultadosHabitaciones");

const resumenReserva = document.getElementById("resumenReserva");
const resumenHabitacion = document.getElementById("resumenHabitacion");
const resumenTipo = document.getElementById("resumenTipo");
const resumenVista = document.getElementById("resumenVista");
const resumenPiso = document.getElementById("resumenPiso");
const resumenPrecio = document.getElementById("resumenPrecio");
const resumenNoches = document.getElementById("resumenNoches");
const resumenTotal = document.getElementById("resumenTotal");
const btnConfirmarReserva = document.getElementById("btnConfirmarReserva");

// Variables DOM para Recepcionista
const panelRecepcionista = document.getElementById("panelRecepcionista");
const seccionBuscador = document.getElementById("reservar");
const seccionServicios = document.getElementById("servicios");
const seccionHabitaciones = document.getElementById("habitaciones");
const tbodyReservas = document.getElementById("tbodyReservas");
const adminNombre = document.getElementById("adminNombre");
const adminResumenRol = document.getElementById("adminResumenRol");
const adminHeroEstado = document.getElementById("adminHeroEstado");
const adminHeroDetalle = document.getElementById("adminHeroDetalle");
const metricIngresos = document.getElementById("metricIngresos");
const metricActivas = document.getElementById("metricActivas");
const metricHoy = document.getElementById("metricHoy");
const metricOcupacion = document.getElementById("metricOcupacion");
const adminActividadLista = document.getElementById("adminActividadLista");
const adminResumenFiltros = document.getElementById("adminResumenFiltros");
const adminBuscarReserva = document.getElementById("adminBuscarReserva");
const adminFiltroEstado = document.getElementById("adminFiltroEstado");
const adminFiltroTipo = document.getElementById("adminFiltroTipo");
const adminFiltroFecha = document.getElementById("adminFiltroFecha");
const limpiarFiltrosReservasBtn = document.getElementById("limpiarFiltrosReservas");
const adminHabitacionesGrid = document.getElementById("adminHabitacionesGrid");
const adminBuscarHabitacion = document.getElementById("adminBuscarHabitacion");
const adminFiltroEstadoHabitacion = document.getElementById("adminFiltroEstadoHabitacion");
const adminFiltroTipoHabitacion = document.getElementById("adminFiltroTipoHabitacion");
const adminFiltroPisoHabitacion = document.getElementById("adminFiltroPisoHabitacion");
const metricUsuariosActivos = document.getElementById("metricUsuariosActivos");
const metricUsuariosBloqueados = document.getElementById("metricUsuariosBloqueados");
const metricUsuariosClientes = document.getElementById("metricUsuariosClientes");
const metricUsuariosStaff = document.getElementById("metricUsuariosStaff");
const adminBuscarUsuario = document.getElementById("adminBuscarUsuario");
const adminFiltroRolUsuario = document.getElementById("adminFiltroRolUsuario");
const adminFiltroEstadoUsuario = document.getElementById("adminFiltroEstadoUsuario");
const adminFiltroBloqueoUsuario = document.getElementById("adminFiltroBloqueoUsuario");
const adminResumenUsuarios = document.getElementById("adminResumenUsuarios");
const tbodyUsuariosAdmin = document.getElementById("tbodyUsuariosAdmin");
let calendar;

let accionPendiente = null;
let habitacionPendiente = null;
let habitacionSeleccionada = null;
let reservasAdminCache = [];
let habitacionesAdminCache = [];
let usuariosAdminCache = [];
let resolverConfirmacionActual = null;
let reservaPagoActiva = null;
let reservaEdicionActiva = null;

function esRolAdministrativo(usuario) {
  return Boolean(usuario && (usuario.id_rol === 1 || usuario.id_rol === 2));
}

function corregirTextosUI() {
  const reemplazos = [
    ["#abrirLogin", "Iniciar sesión"],
    [".habitaciones.container p", "Espacios diseñados con elegancia y atención para brindarte la mejor experiencia."],
    ['img[alt="Habitación estándar"]', null, "Habitación estándar"],
    ['img[alt="Habitación familiar"]', null, "Habitación familiar"],
    ['#btnBuscarReserva', "BUSCAR"],
    ['#mensajeReserva', "Disponibilidad en tiempo real · Respuesta rápida · Diseño responsive"],
    ['label[for="huespedesReserva"]', "Huéspedes"],
    ['label[for="tipoHabitacionReserva"]', "Tipo de habitación"],
    ['label[for="adminBuscarReserva"]', "Buscar huésped"],
    ['label[for="adminFiltroTipo"]', "Tipo de habitación"],
    ['#adminBuscarHabitacion', null, null, "Número, tipo o vista"],
    ['#btn-tab-reportes', null],
    ['#btn-tab-calendario', null],
    ['#btn-tab-lista-reservas', null],
    ['#btn-tab-habitaciones', null]
  ];

  reemplazos.forEach(([selector, texto, alt, placeholder]) => {
    const elemento = document.querySelector(selector);
    if (!elemento) return;
    if (texto !== null && texto !== undefined) elemento.textContent = texto;
    if (alt) elemento.alt = alt;
    if (placeholder) elemento.placeholder = placeholder;
  });

  document.querySelectorAll(".btn-info").forEach((boton) => {
    boton.textContent = "Ver información";
  });

  document.querySelectorAll('option[value="estandar"]').forEach((opcion) => {
    opcion.textContent = "Estándar";
  });

  const opcionJardin = document.querySelector('#vistaReserva option[value="jardin"]');
  if (opcionJardin) opcionJardin.textContent = "Jardín";

  const resumenHabitacionLabel = document.querySelector("#resumenReserva .resumen-item span");
  if (resumenHabitacionLabel) resumenHabitacionLabel.textContent = "Habitación";

  const metricaOcupacion = document.querySelector(".metric-card span:last-of-type");
  if (metricaOcupacion && metricaOcupacion.textContent.includes("Ocupaci")) {
    metricaOcupacion.textContent = "Ocupación";
  }

  const tituloRecientes = document.querySelector("#tab-reportes .admin-panel h3");
  if (tituloRecientes) tituloRecientes.textContent = "Reservas más recientes";

  const kickers = document.querySelectorAll(".admin-panel-kicker");
  if (kickers[1]) kickers[1].textContent = "Visión general";
  if (kickers[2]) kickers[2].textContent = "Planificación";

  const thHuesped = document.querySelector(".tabla-reservas th");
  if (thHuesped) thHuesped.textContent = "Huésped";
}

function mostrarModal(modal) {
  if (!modal) return;
  modal.classList.add("activo");
  document.body.style.overflow = "hidden";
}

function ocultarModal(modal) {
  if (!modal) return;
  modal.classList.remove("activo");

  const algunModalActivo =
    (modalLogin && modalLogin.classList.contains("activo")) ||
    (modalRegistro && modalRegistro.classList.contains("activo")) ||
    (modalCuenta && modalCuenta.classList.contains("activo")) ||
    (modalPagoReserva && modalPagoReserva.classList.contains("activo"));

  if (!algunModalActivo) {
    document.body.style.overflow = "auto";
  }
}

function cerrarModalConfirmacion(respuesta) {
  ocultarModal(modalConfirmacionAccion);

  if (resolverConfirmacionActual) {
    resolverConfirmacionActual(respuesta);
    resolverConfirmacionActual = null;
  }
}

function confirmarEnPagina({
  titulo = "Confirmar acción",
  mensaje = "¿Seguro que deseas continuar?",
  textoAceptar = "Confirmar",
  textoCancelar = "Volver"
} = {}) {
  if (!modalConfirmacionAccion || !btnAceptarConfirmacion || !btnCancelarConfirmacion) {
    return Promise.resolve(window.confirm(mensaje));
  }

  if (resolverConfirmacionActual) {
    resolverConfirmacionActual(false);
  }

  if (tituloConfirmacion) tituloConfirmacion.textContent = titulo;
  if (mensajeConfirmacion) mensajeConfirmacion.textContent = mensaje;
  btnAceptarConfirmacion.textContent = textoAceptar;
  btnCancelarConfirmacion.textContent = textoCancelar;

  mostrarModal(modalConfirmacionAccion);

  return new Promise((resolve) => {
    resolverConfirmacionActual = resolve;
  });
}

function obtenerUsuarioSesion() {
  if (!localStorage.getItem(STORAGE_TOKEN)) {
    return null;
  }

  const usuarioGuardado = localStorage.getItem(STORAGE_USUARIO);
  try {
    return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
  } catch (e) {
    console.error("Error al parsear usuario de sesión", e);
    return null;
  }
}

function guardarUsuarioSesion(usuario) {
  localStorage.setItem(STORAGE_USUARIO, JSON.stringify(usuario));
}

function obtenerTokenSesion() {
  return localStorage.getItem(STORAGE_TOKEN);
}

function guardarTokenSesion(token) {
  localStorage.setItem(STORAGE_TOKEN, token);
}

function guardarSesionCompleta(usuario, token) {
  guardarUsuarioSesion(usuario);
  if (token) {
    guardarTokenSesion(token);
  }
}

function limpiarSesion() {
  localStorage.removeItem(STORAGE_USUARIO);
  localStorage.removeItem(STORAGE_TOKEN);
}

async function authFetch(url, options = {}) {
  const token = obtenerTokenSesion();
  const headers = { ...(options.headers || {}) };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const respuesta = await fetch(url, {
    ...options,
    headers
  });

  if (respuesta.status === 401 && token) {
    limpiarSesion();
    actualizarZonaUsuario();
    if (modalCuenta) ocultarModal(modalCuenta);
  }

  return respuesta;
}

function limpiarPanelesCuenta() {
  if (panelReservas) panelReservas.classList.remove("activo");
  if (panelNotificaciones) panelNotificaciones.classList.remove("activo");
  if (panelEditarPerfil) panelEditarPerfil.classList.remove("activo");
}

function actualizarAccionesCuenta(usuario) {
  const esAdmin = esRolAdministrativo(usuario);

  if (btnVerReservas) {
    btnVerReservas.style.display = esAdmin ? "none" : "block";
  }

  if (panelReservas) {
    panelReservas.classList.remove("activo");
    panelReservas.style.display = esAdmin ? "none" : "";
  }
}

function actualizarBadgeNotificaciones(notificaciones = []) {
  if (!badgeNotificaciones) return;

  const noLeidas = notificaciones.filter((notificacion) => notificacion.estado !== "leido").length;
  badgeNotificaciones.textContent = String(noLeidas);
  badgeNotificaciones.classList.toggle("oculto", noLeidas === 0);
}

function formatearFechaNotificacion(fecha) {
  try {
    return new Date(fecha).toLocaleString("es-CO");
  } catch (error) {
    return fecha;
  }
}

async function cargarNotificacionesUsuario() {
  if (!obtenerUsuarioSesion() || !listaNotificaciones) return;

  listaNotificaciones.innerHTML = `<p class="texto-vacio">Cargando notificaciones...</p>`;

  try {
    const respuesta = await authFetch(API_NOTIFICACIONES);
    const resultado = await respuesta.json();

    if (!respuesta.ok) {
      listaNotificaciones.innerHTML = `<p class="texto-vacio">${resultado.mensaje || "No se pudieron cargar las notificaciones"}</p>`;
      actualizarBadgeNotificaciones([]);
      return;
    }

    actualizarBadgeNotificaciones(resultado);

    if (!resultado.length) {
      listaNotificaciones.innerHTML = `<p class="texto-vacio">No tienes notificaciones por ahora.</p>`;
      return;
    }

    listaNotificaciones.innerHTML = resultado.map((notificacion) => `
      <article class="notificacion-item ${notificacion.estado !== "leido" ? "no-leida" : ""}">
        <div class="notificacion-item-head">
          <span class="notificacion-tipo">${notificacion.tipo || "general"}</span>
          <span class="notificacion-fecha">${formatearFechaNotificacion(notificacion.fecha)}</span>
        </div>
        <p>${notificacion.mensaje}</p>
        ${notificacion.estado !== "leido"
          ? `<div class="notificacion-acciones"><button type="button" class="btn-notificacion" data-id-notificacion="${notificacion.id_notificacion}">Marcar como leída</button></div>`
          : ""
        }
      </article>
    `).join("");

    document.querySelectorAll(".btn-notificacion").forEach((boton) => {
      boton.addEventListener("click", async function () {
        const idNotificacion = this.dataset.idNotificacion;

        try {
          const respuestaLeida = await authFetch(`${API_NOTIFICACIONES}/${idNotificacion}/leer`, {
            method: "PATCH"
          });

          const resultadoLeida = await respuestaLeida.json();

          if (!respuestaLeida.ok) {
            mostrarNotificacionFlotante(resultadoLeida.mensaje || "No se pudo actualizar la notificación.", "#c62828");
            return;
          }

          await cargarNotificacionesUsuario();
        } catch (error) {
          console.error("Error al marcar notificación:", error);
        }
      });
    });
  } catch (error) {
    console.error("Error al cargar notificaciones:", error);
    listaNotificaciones.innerHTML = `<p class="texto-vacio">No se pudo conectar con el servidor.</p>`;
  }
}

function enlazarBotonesAuth() {
  const abrirLogin = document.getElementById("abrirLogin");
  const abrirRegistro = document.getElementById("abrirRegistro");
  const abrirCuenta = document.getElementById("abrirCuenta");
  const abrirCuentaAdmin = document.getElementById("abrirCuentaAdmin");

  if (abrirLogin) {
    abrirLogin.addEventListener("click", function (e) {
      e.preventDefault();
      mostrarModal(modalLogin);
    });
  }

  if (abrirRegistro) {
    abrirRegistro.addEventListener("click", function (e) {
      e.preventDefault();
      mostrarModal(modalRegistro);
    });
  }

  if (abrirCuenta) {
    abrirCuenta.addEventListener("click", function (e) {
      e.preventDefault();
      cargarDatosCuenta();
      limpiarPanelesCuenta();
      mostrarModal(modalCuenta);
    });
  }

  if (abrirCuentaAdmin) {
    abrirCuentaAdmin.addEventListener("click", function (e) {
      e.preventDefault();
      cargarDatosCuenta();
      limpiarPanelesCuenta();
      mostrarModal(modalCuenta);
    });
  }

  const cerrarSesionAdmin = document.getElementById("cerrarSesionAdmin");
  if (cerrarSesionAdmin) {
    cerrarSesionAdmin.addEventListener("click", () => {
      limpiarSesion();
      salirDeVistaAdministrativa();
      actualizarZonaUsuario();
    });
  }
}

function actualizarZonaUsuario() {
  const usuario = obtenerUsuarioSesion();

  if (!authButtons) return;

  if (!usuario) {
    salirDeVistaAdministrativa();
    actualizarBadgeNotificaciones([]);
  }

  if (esRolAdministrativo(usuario)) {
    authButtons.innerHTML = "";
    entrarComoRecepcionista();
    enlazarBotonesAuth();
    return;
  }

  if (usuario) {
    authButtons.innerHTML = `
      <a href="#" class="iniciar-btn" id="abrirCuenta">Mi cuenta</a>
    `;
    
    // Si la sesión es de Recepcionista(2) o Admin(1), mostramos su panel
    if (usuario.id_rol === 1 || usuario.id_rol === 2) {
      entrarComoRecepcionista();
    }

  } else {
    authButtons.innerHTML = `
      <a href="#" class="iniciar-btn" id="abrirLogin">Iniciar sesión</a>
      <a href="#" class="registrarse-btn" id="abrirRegistro">Registrarse</a>
    `;
  }

  enlazarBotonesAuth();
}

function cargarDatosCuenta() {
  const usuario = obtenerUsuarioSesion();
  if (!usuario) return;

  actualizarAccionesCuenta(usuario);

  if (cuentaNombre) {
    cuentaNombre.textContent = `${usuario.nombre || ""} ${usuario.apellido || ""}`.trim();
  }

  if (cuentaEmail) {
    cuentaEmail.textContent = usuario.email || "";
  }

  if (cuentaRol) {
    cuentaRol.textContent = usuario.rol || "Cliente";
  }

  cargarNotificacionesUsuario();
}

function actualizarEncabezadoAdmin() {
  const usuario = obtenerUsuarioSesion();
  if (!usuario) return;

  const nombreCompleto = `${usuario.nombre || ""} ${usuario.apellido || ""}`.trim() || "Equipo administrativo";
  const rolVisible = usuario.rol || "Administrador";

  if (adminNombre) {
    adminNombre.textContent = `Hola, ${nombreCompleto}`;
  }

  if (adminResumenRol) {
    adminResumenRol.textContent = `${rolVisible} con acceso a reservas, calendario, habitaciones y seguimiento operativo.`;
  }

  corregirTextosUI();
}

function llenarFormularioEditar(usuario) {
  const editNombre = document.getElementById("editNombre");
  const editApellido = document.getElementById("editApellido");
  const editEmail = document.getElementById("editEmail");
  const editTelefono = document.getElementById("editTelefono");
  const editDireccion = document.getElementById("editDireccion");

  if (editNombre) editNombre.value = usuario.nombre || "";
  if (editApellido) editApellido.value = usuario.apellido || "";
  if (editEmail) editEmail.value = usuario.email || "";
  if (editTelefono) editTelefono.value = usuario.telefono || "";
  if (editDireccion) editDireccion.value = usuario.direccion || "";
}

async function cargarPerfilUsuario() {
  if (!obtenerUsuarioSesion()) return;

  try {
    const respuesta = await authFetch(`${API_USUARIOS}/me`);
    const resultado = await respuesta.json();

    if (respuesta.ok) {
      const usuarioActualizado = {
        id_usuario: resultado.id_usuario,
        nombre: resultado.nombre,
        apellido: resultado.apellido,
        email: resultado.email,
        telefono: resultado.telefono,
        direccion: resultado.direccion,
        id_rol: resultado.id_rol,
        rol: resultado.rol
      };

      guardarUsuarioSesion(usuarioActualizado);
      cargarDatosCuenta();
      llenarFormularioEditar(usuarioActualizado);
    }
  } catch (error) {
    console.error("Error al cargar perfil:", error);
  }
}

async function cargarReservasUsuario() {
  if (!obtenerUsuarioSesion() || !listaReservas) return;

  listaReservas.innerHTML = `<p class="texto-vacio">Cargando reservas...</p>`;

  try {
    const respuesta = await authFetch(`${API_RESERVAS}/mis-reservas`);
    const resultado = await respuesta.json();

    if (!respuesta.ok) {
      listaReservas.innerHTML = `<p class="texto-vacio">${resultado.mensaje || "No se pudieron cargar las reservas"}</p>`;
      return;
    }

    if (resultado.length === 0) {
      listaReservas.innerHTML = `<p class="texto-vacio">Aún no has realizado reservas.</p>`;
      return;
    }

    listaReservas.innerHTML = resultado.map(reserva => {
      const fechaInicio = normalizarFechaSinHora(reserva.fecha_inicio);
      const hoy = normalizarFechaSinHora(new Date());
      const puedeCancelar = reserva.estado === 'reservada' && fechaInicio >= hoy;
      const puedeEditar = reserva.estado === 'reservada' && fechaInicio >= hoy;
      const mostrarAccionCancelacion = reserva.estado === 'reservada';

      let statusClass = '';
      let statusText = '';
      switch (reserva.estado) {
        case 'reservada':
          statusClass = 'status-reservada';
          statusText = 'Reservada';
          break;
        case 'confirmada':
          statusClass = 'status-confirmada';
          statusText = 'Confirmada';
          break;
        case 'cancelada':
          statusClass = 'status-cancelada';
          statusText = 'Cancelada';
          break;
        case 'finalizada': // Asumiendo 'finalizada' para reservas pasadas
          statusClass = 'status-finalizada';
          statusText = 'Estadía Finalizada';
          break;
        default:
          statusClass = 'status-desconocido';
          statusText = reserva.estado;
      }

      return `
      <div class="tarjeta-reserva">
        <p><strong>Reserva:</strong> #${reserva.id_reserva}</p>
        <p><strong>Habitación:</strong> ${reserva.numero_habitacion} - ${reserva.tipo_habitacion}</p>
        <p><strong>Check-in:</strong> ${reserva.fecha_inicio.split('T')[0]}</p>
        <p><strong>Check-out:</strong> ${reserva.fecha_fin.split('T')[0]}</p>
        <p><strong>Estado:</strong> <span class="status-badge ${statusClass}">${statusText}</span></p>
        <p><strong>Total:</strong> $${formatearPrecio(reserva.total)}</p>
        ${puedeEditar ? `<button class="btn-editar-reserva" data-id-reserva="${reserva.id_reserva}" data-id-habitacion="${reserva.id_habitacion}" data-numero-habitacion="${reserva.numero_habitacion}" data-tipo-habitacion="${reserva.tipo_habitacion}" data-fecha-inicio="${reserva.fecha_inicio.split('T')[0]}" data-fecha-fin="${reserva.fecha_fin.split('T')[0]}"><i class="fas fa-calendar-check"></i> Reprogramar reserva</button>` : ''}
        ${puedeCancelar ? `<button class="btn-cancelar-reserva" data-id-reserva="${reserva.id_reserva}"><i class="fas fa-times-circle"></i> Cancelar Reserva</button>` : ''}
        ${!puedeCancelar && mostrarAccionCancelacion ? `<div class="estado-cancelacion-no-disponible">Esta reserva ya no se puede cancelar.</div>` : ''}
      </div>
    `;
    }).join("");

    document.querySelectorAll(".btn-editar-reserva").forEach(boton => {
      boton.addEventListener("click", function() {
        abrirModalEditarReserva({
          id_reserva: Number(this.dataset.idReserva),
          id_habitacion: Number(this.dataset.idHabitacion),
          numero_habitacion: this.dataset.numeroHabitacion,
          tipo_habitacion: this.dataset.tipoHabitacion,
          fecha_inicio: this.dataset.fechaInicio,
          fecha_fin: this.dataset.fechaFin
        });
      });
    });

    document.querySelectorAll(".btn-cancelar-reserva").forEach(boton => {
      boton.addEventListener("click", function() {
        const idReserva = this.dataset.idReserva;
        manejarCancelacionReserva(idReserva);
      });
    });
  } catch (error) {
    console.error("Error al cargar reservas:", error);
    listaReservas.innerHTML = `<p class="texto-vacio">No se pudo conectar con el servidor.</p>`;
  }
}

function manejarLoginExitoso(usuario) {
  actualizarZonaUsuario();

  if (esRolAdministrativo(usuario)) {
    entrarComoRecepcionista();
    ocultarModal(modalLogin);
  } else {
    if (accionPendiente === "reservar") {
      accionPendiente = null;
      ocultarModal(modalLogin);
      window.location.href = "#reservar";

      if (mensajeReserva && habitacionPendiente) {
        mensajeReserva.textContent = `Ya iniciaste sesión. Ahora selecciona o confirma tu habitación.`;
      }
    } else {
      setTimeout(() => {
        ocultarModal(modalLogin);
      }, 800);
    }
  }
}

function obtenerImagenPorTipo(tipo) {
  const tipoNormalizado = (tipo || "").toLowerCase();

  if (tipoNormalizado === "suite") return "images/photo-1702411200201-3061d0eea802.jpeg";
  if (tipoNormalizado === "familiar") return "images/hb3.jpeg";
  return "images/hb1.jpeg";
}

function formatearPrecio(valor) {
  return new Intl.NumberFormat("es-CO").format(Number(valor));
}

function calcularNoches(fechaInicio, fechaFin) {
  const inicio = normalizarFechaSinHora(fechaInicio);
  const fin = normalizarFechaSinHora(fechaFin);
  const diferencia = fin - inicio;
  return Math.ceil(diferencia / (1000 * 60 * 60 * 24));
}

async function refrescarEstadoHabitaciones() {
  reservasAdminCache = [];
  habitacionesAdminCache = [];

  const fechaInicio = document.getElementById("fechaInicioReserva")?.value;
  const fechaFin = document.getElementById("fechaFinReserva")?.value;

  if (fechaInicio && fechaFin) {
    await buscarHabitacionesElegantes();
  }

  if (document.body.classList.contains("admin-mode")) {
    await Promise.all([
      cargarReportesAdmin(),
      cargarTablaReservasRecepcion(),
      cargarHabitacionesAdmin()
    ]);
  }
}

function normalizarFechaSinHora(fecha) {
  if (fecha instanceof Date) {
    const copia = new Date(fecha);
    copia.setHours(0, 0, 0, 0);
    return copia;
  }

  const valor = typeof fecha === "string" ? fecha.split("T")[0] : "";
  const partes = valor.split("-");

  let fechaNormalizada;

  if (partes.length === 3) {
    const [anio, mes, dia] = partes.map(Number);
    fechaNormalizada = new Date(anio, mes - 1, dia);
  } else {
    fechaNormalizada = new Date(valor);
  }

  fechaNormalizada.setHours(0, 0, 0, 0);
  return fechaNormalizada;
}

function obtenerMetaEstadoReserva(estado) {
  switch (estado) {
    case 'reservada':
      return { clase: 'status-reservada', texto: 'Reservada' };
    case 'confirmada':
      return { clase: 'status-confirmada', texto: 'Confirmada' };
    case 'cancelada':
      return { clase: 'status-cancelada', texto: 'Cancelada' };
    case 'finalizada':
      return { clase: 'status-finalizada', texto: 'Estadia finalizada' };
    default:
      return { clase: 'status-desconocido', texto: estado };
  }
}

function actualizarResumenReserva(habitacion) {
  const fechaInicio = document.getElementById("fechaInicioReserva").value;
  const fechaFin = document.getElementById("fechaFinReserva").value;

  if (!habitacion || !fechaInicio || !fechaFin) {
    if (resumenReserva) resumenReserva.classList.add("oculto");
    return;
  }

  const noches = calcularNoches(fechaInicio, fechaFin);

  if (noches <= 0) {
    if (mensajeReserva) {
      mensajeReserva.textContent = "La fecha de salida debe ser posterior al check-in.";
    }
    if (resumenReserva) resumenReserva.classList.add("oculto");
    return;
  }

  const total = noches * Number(habitacion.precio_base);

  resumenHabitacion.textContent = habitacion.numero;
  resumenTipo.textContent = habitacion.tipo_habitacion;
  resumenVista.textContent = habitacion.vista || "No definida";
  resumenPiso.textContent = habitacion.piso;
  resumenPrecio.textContent = `$${formatearPrecio(habitacion.precio_base)}`;
  resumenNoches.textContent = noches;
  resumenTotal.textContent = `$${formatearPrecio(total)}`;

  resumenReserva.classList.remove("oculto");
}

function renderizarHabitaciones(habitaciones) {
  if (!resultadosHabitaciones) return;

  if (!habitaciones || habitaciones.length === 0) {
    resultadosHabitaciones.innerHTML = `
      <div class="mensaje-sin-resultados">
        No se encontraron habitaciones con esos filtros.
      </div>
    `;
    if (resumenReserva) resumenReserva.classList.add("oculto");
    return;
  }

  resultadosHabitaciones.innerHTML = habitaciones.map(habitacion => `
    <div class="tarjeta-habitacion">
      <img 
        src="${obtenerImagenPorTipo(habitacion.tipo_habitacion)}" 
        alt="${habitacion.tipo_habitacion}" 
        class="imagen-habitacion-card"
      >
      <div class="contenido-habitacion-card">
        <span class="badge-habitacion">${habitacion.tipo_habitacion}</span>
        <h3 class="titulo-habitacion-card">Habitación ${habitacion.numero}</h3>
        <p class="detalle-habitacion"><strong>Piso:</strong> ${habitacion.piso}</p>
        <p class="detalle-habitacion"><strong>Vista:</strong> ${habitacion.vista || "No definida"}</p>
        <p class="detalle-habitacion"><strong>Capacidad:</strong> ${habitacion.capacidad} huésped(es)</p>
        <p class="detalle-habitacion"><strong>Estado:</strong> ${habitacion.estado}</p>
        <div class="precio-habitacion">$ ${formatearPrecio(habitacion.precio_base)} / noche</div>
        <div class="acciones-habitacion">
          <button class="btn-reservar-card" data-id="${habitacion.id_habitacion}">
            Seleccionar
          </button>
        </div>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".btn-reservar-card").forEach(boton => {
    boton.addEventListener("click", () => {
      const usuario = obtenerUsuarioSesion();
      const idHabitacion = Number(boton.dataset.id);
      const habitacion = habitaciones.find(h => Number(h.id_habitacion) === idHabitacion);

      if (!usuario) {
        accionPendiente = "reservar";
        habitacionPendiente = idHabitacion;
        mostrarModal(modalLogin);
        return;
      }

      habitacionPendiente = idHabitacion;
      habitacionSeleccionada = habitacion;
      actualizarResumenReserva(habitacion);

      if (mensajeReserva) {
        mensajeReserva.textContent = `Habitación ${habitacion.numero} seleccionada. Revisa el resumen y confirma tu reserva.`;
      }

      window.location.href = "#resumenReserva";
    });
  });
}

async function buscarHabitacionesElegantes() {
  const tipo = document.getElementById("tipoHabitacionReserva").value;
  const vista = document.getElementById("vistaReserva").value;
  const piso = document.getElementById("pisoReserva").value;
  const huespedes = document.getElementById("huespedesReserva").value;
  const fechaInicio = document.getElementById("fechaInicioReserva").value;
  const fechaFin = document.getElementById("fechaFinReserva").value;

  if (!fechaInicio || !fechaFin) {
    if (mensajeReserva) {
      mensajeReserva.textContent = "Selecciona check-in y check-out antes de buscar.";
    }
    if (resultadosHabitaciones) {
      resultadosHabitaciones.innerHTML = "";
    }
    if (resumenReserva) {
      resumenReserva.classList.add("oculto");
    }
    return;
  }

  if (calcularNoches(fechaInicio, fechaFin) <= 0) {
    if (mensajeReserva) {
      mensajeReserva.textContent = "La fecha de salida debe ser posterior al check-in.";
    }
    if (resultadosHabitaciones) {
      resultadosHabitaciones.innerHTML = "";
    }
    if (resumenReserva) {
      resumenReserva.classList.add("oculto");
    }
    return;
  }

  try {
    const params = new URLSearchParams({
      tipo,
      vista,
      piso,
      huespedes,
      fecha_inicio: fechaInicio,
      fecha_fin: fechaFin
    });

    const respuesta = await fetch(`${API_HABITACIONES}/buscar/filtros?${params.toString()}`);
    const resultado = await respuesta.json();

    if (respuesta.ok) {
      renderizarHabitaciones(resultado);
      if (mensajeReserva) {
        mensajeReserva.textContent = `${resultado.length} habitación(es) encontrada(s).`;
      }
    } else {
      if (mensajeReserva) {
        mensajeReserva.textContent = resultado.mensaje || "No se pudieron buscar habitaciones.";
      }
    }
  } catch (error) {
    console.error("Error al buscar habitaciones:", error);
    if (mensajeReserva) {
      mensajeReserva.textContent = "No se pudo conectar con el servidor.";
    }
  }
}

async function crearReservaReal() {
  const usuario = obtenerUsuarioSesion();

  if (!usuario) {
    mostrarModal(modalLogin);
    return;
  }

  if (!habitacionPendiente || !habitacionSeleccionada) {
    if (mensajeReserva) {
      mensajeReserva.textContent = "Primero selecciona una habitación.";
    }
    return;
  }

  const fechaInicio = document.getElementById("fechaInicioReserva").value;
  const fechaFin = document.getElementById("fechaFinReserva").value;

  if (!fechaInicio || !fechaFin) {
    if (mensajeReserva) {
      mensajeReserva.textContent = "Debes seleccionar check-in y check-out.";
    }
    return;
  }

  const noches = calcularNoches(fechaInicio, fechaFin);

  if (noches <= 0) {
    if (mensajeReserva) {
      mensajeReserva.textContent = "La fecha de salida debe ser posterior al check-in.";
    }
    return;
  }

  try {
    const respuesta = await authFetch(API_RESERVAS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id_habitacion: Number(habitacionPendiente),
        fecha_inicio: fechaInicio,
        fecha_fin: fechaFin
      })
    });

    const resultado = await respuesta.json();

    if (respuesta.ok) {
      if (mensajeReserva) {
        mensajeReserva.textContent = "Reserva creada correctamente.";
      }

      habitacionPendiente = null;
      habitacionSeleccionada = null;

      if (resumenReserva) {
        resumenReserva.classList.add("oculto");
      }

      if (resultadosHabitaciones) {
        resultadosHabitaciones.innerHTML = "";
      }

      await cargarReservasUsuario();
      await refrescarEstadoHabitaciones();
    } else {
      if (mensajeReserva) {
        mensajeReserva.textContent = resultado.mensaje || "No se pudo crear la reserva.";
      }
    }
  } catch (error) {
    console.error("Error al crear reserva:", error);
    if (mensajeReserva) {
      mensajeReserva.textContent = "No se pudo conectar con el servidor.";
    }
  }
}

async function manejarCancelacionReserva(idReserva) {
  if (!confirm("¿Estás seguro de que deseas cancelar esta reserva? Esta acción no se puede deshacer.")) {
    return;
  }

  try {
    const respuesta = await authFetch(`${API_RESERVAS}/${idReserva}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const resultado = await respuesta.json();

    if (respuesta.ok) {
      mostrarNotificacionFlotante(resultado.mensaje || "Reserva cancelada exitosamente.", '#dc3545'); // Red color for cancellation
      await cargarReservasUsuario(); 
      await refrescarEstadoHabitaciones();
    } else {
      mostrarNotificacionFlotante(resultado.mensaje || "Error al cancelar la reserva.", '#ffc107'); // Orange for warning
    }
  } catch (error) {
    console.error("Error al cancelar reserva:", error);
    mostrarNotificacionFlotante("No se pudo conectar con el servidor para cancelar la reserva.", '#ffc107');
  }
}

function cerrarModalEditarReservaUsuario() {
  reservaEdicionActiva = null;

  if (formEditarReservaUsuario) {
    formEditarReservaUsuario.reset();
  }

  if (mensajeEditarReservaUsuario) {
    mensajeEditarReservaUsuario.textContent = "";
  }

  ocultarModal(modalEditarReserva);
}

function abrirModalEditarReserva(reserva) {
  reservaEdicionActiva = reserva;

  if (editReservaId) editReservaId.value = String(reserva.id_reserva);
  if (editReservaHabitacionId) editReservaHabitacionId.value = String(reserva.id_habitacion);
  if (editReservaHabitacionTexto) {
    editReservaHabitacionTexto.value = `Habitacion ${reserva.numero_habitacion} · ${reserva.tipo_habitacion}`;
  }
  if (editReservaFechaInicio) editReservaFechaInicio.value = reserva.fecha_inicio;
  if (editReservaFechaFin) editReservaFechaFin.value = reserva.fecha_fin;
  if (mensajeEditarReservaUsuario) mensajeEditarReservaUsuario.textContent = "";

  mostrarModal(modalEditarReserva);
}

async function cancelarMiReserva(id) {
  if (!confirm("¿Deseas cancelar esta reserva? La habitación quedará disponible para otros huéspedes.")) {
    return;
  }

  try {
    const respuesta = await authFetch(`${API_RESERVAS}/${id}`, {
      method: "DELETE"
    });

    const resultado = await respuesta.json();

    if (respuesta.ok) {
      alert(resultado.mensaje || "Reserva cancelada.");
      await cargarReservasUsuario(); // Recarga la lista para mostrar el cambio
      await refrescarEstadoHabitaciones();
    } else {
      alert(resultado.mensaje || "No se pudo cancelar.");
    }
  } catch (error) {
    console.error("Error al cancelar:", error);
  }
}

if (cerrarLogin) {
  cerrarLogin.addEventListener("click", function () {
    ocultarModal(modalLogin);
  });
}

if (cerrarRegistro) {
  cerrarRegistro.addEventListener("click", function () {
    ocultarModal(modalRegistro);
  });
}

if (cerrarCuenta) {
  cerrarCuenta.addEventListener("click", function () {
    ocultarModal(modalCuenta);
  });
}

if (cerrarPagoReserva) {
  cerrarPagoReserva.addEventListener("click", function () {
    ocultarModal(modalPagoReserva);
  });
}

if (cerrarEditarReserva) {
  cerrarEditarReserva.addEventListener("click", function () {
    cerrarModalEditarReservaUsuario();
  });
}

if (cerrarConfirmacion) {
  cerrarConfirmacion.addEventListener("click", function () {
    cerrarModalConfirmacion(false);
  });
}

if (btnCancelarConfirmacion) {
  btnCancelarConfirmacion.addEventListener("click", function () {
    cerrarModalConfirmacion(false);
  });
}

if (btnAceptarConfirmacion) {
  btnAceptarConfirmacion.addEventListener("click", function () {
    cerrarModalConfirmacion(true);
  });
}

if (irARegistro) {
  irARegistro.addEventListener("click", function (e) {
    e.preventDefault();
    ocultarModal(modalLogin);
    mostrarModal(modalRegistro);
  });
}

if (irALogin) {
  irALogin.addEventListener("click", function (e) {
    e.preventDefault();
    ocultarModal(modalRegistro);
    mostrarModal(modalLogin);
  });
}

window.addEventListener("click", function (e) {
  if (e.target === modalLogin) ocultarModal(modalLogin);
  if (e.target === modalRegistro) ocultarModal(modalRegistro);
  if (e.target === modalCuenta) ocultarModal(modalCuenta);
  if (e.target === modalConfirmacionAccion) cerrarModalConfirmacion(false);
  if (e.target === modalPagoReserva) ocultarModal(modalPagoReserva);
  if (e.target === modalEditarReserva) cerrarModalEditarReservaUsuario();
});

window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    ocultarModal(modalLogin);
    ocultarModal(modalRegistro);
    ocultarModal(modalCuenta);
    ocultarModal(modalPagoReserva);
    cerrarModalEditarReservaUsuario();
    cerrarModalConfirmacion(false);
  }
});

if (formPagoReserva) {
  formPagoReserva.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (!reservaPagoActiva) return;

    if (mensajePagoReserva) mensajePagoReserva.textContent = "Guardando pago...";

    try {
      const respuesta = await authFetch(`${API_PAGOS}/reserva/${reservaPagoActiva}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          metodo_pago: metodoPagoReserva?.value,
          monto: Number(montoPagoReserva?.value || 0)
        })
      });

      const resultado = await respuesta.json();

      if (!respuesta.ok) {
        if (mensajePagoReserva) mensajePagoReserva.textContent = resultado.mensaje || "No se pudo registrar el pago.";
        return;
      }

      renderizarResumenPagoModal(resultado);

      if (montoPagoReserva) {
        montoPagoReserva.value = resultado.saldoPendiente > 0 ? String(resultado.saldoPendiente) : "";
      }

      if (mensajePagoReserva) {
        mensajePagoReserva.textContent = resultado.mensaje || "Pago registrado correctamente.";
      }

      reservasAdminCache = [];
      await Promise.all([
        cargarTablaReservasRecepcion(),
        cargarReportesAdmin()
      ]);

      mostrarNotificacionFlotante(resultado.mensaje || "Pago registrado correctamente.", "#2e7d32");
    } catch (error) {
      console.error("Error al registrar pago:", error);
      if (mensajePagoReserva) mensajePagoReserva.textContent = "No se pudo conectar con el servidor.";
    }
  });
}

if (formEditarReservaUsuario) {
  formEditarReservaUsuario.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (!reservaEdicionActiva) return;

    const fechaInicio = editReservaFechaInicio?.value;
    const fechaFin = editReservaFechaFin?.value;
    const noches = calcularNoches(fechaInicio, fechaFin);

    if (!fechaInicio || !fechaFin || noches <= 0) {
      if (mensajeEditarReservaUsuario) {
        mensajeEditarReservaUsuario.textContent = "Selecciona fechas validas para reprogramar la reserva.";
      }
      return;
    }

    if (mensajeEditarReservaUsuario) {
      mensajeEditarReservaUsuario.textContent = "Guardando cambios...";
    }

    try {
      const respuesta = await authFetch(`${API_RESERVAS}/${reservaEdicionActiva.id_reserva}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id_habitacion: Number(reservaEdicionActiva.id_habitacion),
          fecha_inicio: fechaInicio,
          fecha_fin: fechaFin
        })
      });

      const resultado = await respuesta.json();

      if (!respuesta.ok) {
        if (mensajeEditarReservaUsuario) {
          mensajeEditarReservaUsuario.textContent = resultado.mensaje || "No se pudo actualizar la reserva.";
        }
        return;
      }

      cerrarModalEditarReservaUsuario();
      mostrarNotificacionFlotante(resultado.mensaje || "Reserva reprogramada correctamente.", "#1B263B");
      await cargarReservasUsuario();
      await refrescarEstadoHabitaciones();
    } catch (error) {
      console.error("Error al reprogramar reserva:", error);
      if (mensajeEditarReservaUsuario) {
        mensajeEditarReservaUsuario.textContent = "No se pudo conectar con el servidor.";
      }
    }
  });
}

if (formRegistro) {
  formRegistro.addEventListener("submit", async function (e) {
    e.preventDefault();

    const datosRegistro = {
      nombre: document.getElementById("nombre").value.trim(),
      apellido: document.getElementById("apellido").value.trim(),
      email: document.getElementById("email").value.trim(),
      telefono: document.getElementById("telefono").value.trim(),
      direccion: document.getElementById("direccion").value.trim(),
      password: document.getElementById("password").value
    };

    try {
      const respuesta = await fetch(`${API_USUARIOS}/registro`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datosRegistro)
      });

      const resultado = await respuesta.json();

      if (respuesta.ok) {
        mensajeRegistro.textContent = resultado.mensaje || "Usuario registrado correctamente";
        mensajeRegistro.style.color = "green";
        formRegistro.reset();

        setTimeout(() => {
          mensajeRegistro.textContent = "";
          ocultarModal(modalRegistro);
          mostrarModal(modalLogin);
        }, 1000);
      } else {
        mensajeRegistro.textContent = resultado.mensaje || "Error al registrar usuario";
        mensajeRegistro.style.color = "red";
      }
    } catch (error) {
      console.error("Error en registro:", error);
      mensajeRegistro.textContent = "No se pudo conectar con el servidor";
      mensajeRegistro.style.color = "red";
    }
  });
}

if (formLogin) {
  formLogin.addEventListener("submit", async function (e) {
    e.preventDefault();

    const datosLogin = {
      email: document.getElementById("loginEmail").value.trim(),
      password: document.getElementById("loginPassword").value
    };

    try {
      const respuesta = await fetch(`${API_USUARIOS}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datosLogin)
      });

      const resultado = await respuesta.json();

      if (respuesta.ok) {
        mensajeLogin.textContent = resultado.mensaje || "Inicio de sesión exitoso";
        mensajeLogin.style.color = "green";

        if (resultado.usuario) {
          guardarSesionCompleta(resultado.usuario, resultado.token);
          manejarLoginExitoso(resultado.usuario);
        }

        setTimeout(() => {
          mensajeLogin.textContent = "";
        }, 1000);
      } else {
        mensajeLogin.textContent = resultado.mensaje || "Error al iniciar sesión";
        mensajeLogin.style.color = "red";
      }
    } catch (error) {
      console.error("Error en login:", error);
      mensajeLogin.textContent = "No se pudo conectar con el servidor";
      mensajeLogin.style.color = "red";
    }
  });
}

if (cerrarSesionBtn) {
  cerrarSesionBtn.addEventListener("click", function () {
    limpiarSesion();
    ocultarModal(modalCuenta);

    salirDeVistaAdministrativa();
    actualizarZonaUsuario();
  });
}

if (btnVerReservas) {
  btnVerReservas.addEventListener("click", async function () {
    if (panelNotificaciones) panelNotificaciones.classList.remove("activo");
    if (panelEditarPerfil) panelEditarPerfil.classList.remove("activo");
    if (panelReservas) panelReservas.classList.add("activo");
    await cargarReservasUsuario();
  });
}

if (btnVerNotificaciones) {
  btnVerNotificaciones.addEventListener("click", async function () {
    if (panelReservas) panelReservas.classList.remove("activo");
    if (panelEditarPerfil) panelEditarPerfil.classList.remove("activo");
    if (panelNotificaciones) panelNotificaciones.classList.add("activo");
    await cargarNotificacionesUsuario();
  });
}

if (btnEditarPerfil) {
  btnEditarPerfil.addEventListener("click", async function () {
    if (panelNotificaciones) panelNotificaciones.classList.remove("activo");
    if (panelReservas) panelReservas.classList.remove("activo");
    if (panelEditarPerfil) panelEditarPerfil.classList.add("activo");
    await cargarPerfilUsuario();
  });
}

if (btnLeerTodasNotificaciones) {
  btnLeerTodasNotificaciones.addEventListener("click", async function () {
    try {
      const respuesta = await authFetch(`${API_NOTIFICACIONES}/leer-todas`, {
        method: "PATCH"
      });

      const resultado = await respuesta.json();

      if (!respuesta.ok) {
        mostrarNotificacionFlotante(resultado.mensaje || "No se pudieron actualizar las notificaciones.", "#c62828");
        return;
      }

      await cargarNotificacionesUsuario();
      mostrarNotificacionFlotante(resultado.mensaje || "Notificaciones actualizadas.", "#1B263B");
    } catch (error) {
      console.error("Error al marcar todas las notificaciones:", error);
    }
  });
}

if (formEditarPerfil) {
  formEditarPerfil.addEventListener("submit", async function (e) {
    e.preventDefault();

    const usuario = obtenerUsuarioSesion();
    if (!usuario) return;

    const datosActualizados = {
      nombre: document.getElementById("editNombre").value.trim(),
      apellido: document.getElementById("editApellido").value.trim(),
      email: document.getElementById("editEmail").value.trim(),
      telefono: document.getElementById("editTelefono").value.trim(),
      direccion: document.getElementById("editDireccion").value.trim()
    };

    try {
      const respuesta = await authFetch(`${API_USUARIOS}/me`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datosActualizados)
      });

      const resultado = await respuesta.json();

      if (respuesta.ok) {
        const usuarioActualizado = {
          id_usuario: resultado.usuario.id_usuario,
          nombre: resultado.usuario.nombre,
          apellido: resultado.usuario.apellido,
          email: resultado.usuario.email,
          telefono: resultado.usuario.telefono,
          direccion: resultado.usuario.direccion,
          id_rol: resultado.usuario.id_rol,
          rol: resultado.usuario.rol
        };

        guardarSesionCompleta(usuarioActualizado, resultado.token);
        cargarDatosCuenta();

        if (mensajeEditarPerfil) {
          mensajeEditarPerfil.textContent = resultado.mensaje || "Datos actualizados";
          mensajeEditarPerfil.style.color = "green";
        }
      } else {
        if (mensajeEditarPerfil) {
          mensajeEditarPerfil.textContent = resultado.mensaje || "No se pudo actualizar";
          mensajeEditarPerfil.style.color = "red";
        }
      }
    } catch (error) {
      console.error("Error al actualizar perfil:", error);
      if (mensajeEditarPerfil) {
        mensajeEditarPerfil.textContent = "No se pudo conectar con el servidor";
        mensajeEditarPerfil.style.color = "red";
      }
    }
  });
}

document.querySelectorAll(".btn-reservar").forEach(function (boton) {
  boton.addEventListener("click", function (e) {
    const usuario = obtenerUsuarioSesion();
    const idHabitacion = boton.dataset.idHabitacion;

    if (!usuario) {
      e.preventDefault();
      accionPendiente = "reservar";
      habitacionPendiente = idHabitacion;
      mostrarModal(modalLogin);
    } else {
      habitacionPendiente = idHabitacion;
      if (mensajeReserva) {
        mensajeReserva.textContent = `Vas a reservar la habitación ${idHabitacion}. Ahora completa las fechas y busca disponibilidad.`;
      }
    }
  });
});

if (btnBuscarReserva) {
  btnBuscarReserva.addEventListener("click", async function () {
    await buscarHabitacionesElegantes();
  });
}

if (btnConfirmarReserva) {
  btnConfirmarReserva.addEventListener("click", async function () {
    await crearReservaReal();
  });
}

// =========================================================
// SECCIÓN 1: VALIDACIÓN DINÁMICA DE FECHAS DE RESERVA
// =========================================================
document.addEventListener("DOMContentLoaded", function () {
  const fechaInicioInput = document.getElementById("fechaInicioReserva");
  const fechaFinInput = document.getElementById("fechaFinReserva");

  if (fechaInicioInput && fechaFinInput) {
    const hoy = new Date().toISOString().split('T')[0];
    fechaInicioInput.setAttribute("min", hoy);
    fechaFinInput.setAttribute("min", hoy);

    fechaInicioInput.addEventListener("change", function () {
      const fechaSeleccionada = fechaInicioInput.value;
      if (fechaSeleccionada) {
        fechaFinInput.setAttribute("min", fechaSeleccionada);
        if (fechaFinInput.value && fechaFinInput.value < fechaSeleccionada) {
          fechaFinInput.value = "";
        }
      }
      if (habitacionSeleccionada) actualizarResumenReserva(habitacionSeleccionada);
    });

    fechaFinInput.addEventListener("change", function () {
      if (habitacionSeleccionada) actualizarResumenReserva(habitacionSeleccionada);
    });
  }
});


// =========================================================
// SECCIÓN 2: LÓGICA DEL PANEL DE RECEPCIONISTA (NUEVO)
// =========================================================

function entrarComoRecepcionista() {
    document.body.classList.add('admin-mode');
    actualizarEncabezadoAdmin();

    if (panelRecepcionista) {
        panelRecepcionista.style.display = 'block';
        panelRecepcionista.classList.remove('oculto');

        window.switchTab('reportes');
    }
}

function salirDeVistaAdministrativa() {
    document.body.classList.remove('admin-mode');

    if (panelRecepcionista) {
        panelRecepcionista.style.display = 'none';
        panelRecepcionista.classList.add('oculto');
    }
}

async function cargarReportesAdmin() {
    const divReportes = document.getElementById('contenidoReportes');
    if (!divReportes) return;

    try {
        const respuesta = await authFetch(API_RESERVAS);
        const reservas = await respuesta.json();
        
        let ingresos = 0;
        let ocupadas = 0;
        let huespedes = new Set();

        if (respuesta.ok) {
            reservas.forEach(res => {
                if(res.estado !== 'cancelada' && res.estado !== 'finalizada') {
                    ingresos += Number(res.total) || 0;
                    ocupadas++;
                    huespedes.add(`${res.nombre} ${res.apellido}`);
                }
            });
        }

        const formatoMoneda = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(ingresos);

        divReportes.innerHTML = `
            <div class="reports-grid">
                <div class="report-card card-ingresos">
                    <div class="report-info">
                        <h3>Ingresos Totales</h3>
                        <p>${formatoMoneda}</p>
                    </div>
                    <i class="fas fa-dollar-sign report-icon"></i>
                </div>
                <div class="report-card card-ocupacion">
                    <div class="report-info">
                        <h3>Ocupación</h3>
                        <p>${ocupadas} <span style="font-size:1rem; font-weight:normal;">reservas activas</span></p>
                    </div>
                    <i class="fas fa-bed report-icon"></i>
                </div>
                <div class="report-card card-huespedes">
                    <div class="report-info">
                        <h3>Huéspedes Registrados</h3>
                        <p>${huespedes.size}</p>
                    </div>
                    <i class="fas fa-users report-icon"></i>
                </div>
            </div>

            <div style="background: white; border: 1px solid #eaeaea; border-radius: 8px; padding: 20px;">
                <h3 style="margin-top:0; color:#1B263B; border-bottom: 2px solid #eaeaea; padding-bottom:10px;">📋 Registro Reciente</h3>
                <ul style="list-style:none; padding:0; margin:0; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    ${Array.from(huespedes).map(h => `<li style="padding: 10px; background: #f9f9f9; border-radius: 5px;"><i class="fas fa-user" style="color:#C6A75E; margin-right:8px;"></i> ${h}</li>`).join('') || '<li>No hay huéspedes registrados.</li>'}
                </ul>
            </div>
        `;
    } catch (error) {
        console.error("Error cargando reportes", error);
        divReportes.innerHTML = '<p style="color:red;">No se pudieron cargar las estadísticas.</p>';
    }
}

async function initCalendario() {
    const calendarEl = document.getElementById('calendar');
    if (!calendarEl || typeof FullCalendar === 'undefined') return;
    
    let eventosCalendario = [];
    try {
        const respuesta = await authFetch(API_RESERVAS);
        const reservas = await respuesta.json();
        
        if (respuesta.ok) {
            eventosCalendario = reservas.map(res => ({
                title: `Hab ${res.numero_habitacion} - ${res.nombre} ${res.apellido}`,
                start: res.fecha_inicio.split('T')[0],
                end: res.fecha_fin.split('T')[0],
                color: res.estado === 'reservada' ? '#c6a75e' : (res.estado === 'confirmada' ? '#2e7d32' : (res.estado === 'finalizada' ? '#6c757d' : '#c62828'))
            }));
        }
    } catch (error) {
        console.error("No se pudieron cargar los eventos del calendario", error);
    }

    if(!calendar) {
        calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            locale: 'es',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek'
            },
            events: eventosCalendario
        });
    } else {
        calendar.removeAllEvents();
        calendar.addEventSource(eventosCalendario);
    }
    
    calendar.render();
}

async function cargarTablaReservasRecepcion() {
    if (!tbodyReservas) return;
    
    tbodyReservas.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:20px;">Cargando reservas del sistema...</td></tr>';
    
    try {
        const respuesta = await authFetch(API_RESERVAS);
        const reservas = await respuesta.json();
        
        if (respuesta.ok && reservas.length > 0) {
            tbodyReservas.innerHTML = reservas.map(res => `
                <tr>
                    <td style="padding: 15px; border-bottom: 1px solid #eee;"><strong>${res.nombre} ${res.apellido}</strong><br><small>${res.email}</small></td>
                    <td style="padding: 15px; border-bottom: 1px solid #eee;">${res.tipo_habitacion}<br><small>Habitación ${res.numero_habitacion}</small></td>
                    <td style="padding: 15px; border-bottom: 1px solid #eee;">${res.fecha_inicio.split('T')[0]} <br>al<br> ${res.fecha_fin.split('T')[0]}</td>
                    <td style="padding: 15px; border-bottom: 1px solid #eee; text-transform: uppercase; font-weight:bold; font-size: 12px; color: ${res.estado==='reservada'?'#c6a75e':(res.estado==='confirmada'?'#2e7d32':(res.estado==='finalizada'?'#6c757d':'#c62828'))}">${obtenerMetaEstadoReserva(res.estado).texto}</td>
                    <td style="padding: 15px; border-bottom: 1px solid #eee;">
                        ${res.estado === 'reservada' ? `<button style="background:#2e7d32; color:white; border:none; padding:8px 12px; border-radius:6px; cursor:pointer; font-weight:bold; font-family:'Lato'; margin-right:8px;" onclick="cambiarEstadoReserva(${res.id_reserva}, 'confirmada')"><i class="fas fa-door-open"></i> Check-in</button>` : ''}
                        ${res.estado === 'confirmada' ? `<button style="background:#6c757d; color:white; border:none; padding:8px 12px; border-radius:6px; cursor:pointer; font-weight:bold; font-family:'Lato'; margin-right:8px;" onclick="cambiarEstadoReserva(${res.id_reserva}, 'finalizada')"><i class="fas fa-flag-checkered"></i> Finalizar</button>` : ''}
                        <button style="background:#1B263B; color:white; border:none; padding:8px 12px; border-radius:6px; cursor:pointer; font-weight:bold; font-family:'Lato';" onclick="generarFactura('${res.nombre} ${res.apellido}', ${res.total})"><i class="fas fa-file-pdf"></i> Factura PDF</button>
                    </td>
                </tr>
            `).join('');
        } else {
            tbodyReservas.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:20px;">No hay reservas registradas en el sistema.</td></tr>';
        }
    } catch (error) {
        console.error("Error al cargar la tabla de recepción", error);
        tbodyReservas.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:20px; color:red;">Error al conectar con la base de datos.</td></tr>';
    }
}

// Pestañas dinámicas globales fusionadas
window.switchTab = function(tabName, event) {
    document.getElementById('tab-reportes').style.display = 'none';
    document.getElementById('tab-calendario').style.display = 'none';
    document.getElementById('tab-lista-reservas').style.display = 'none';
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.style.background = 'transparent';
        btn.style.color = '#0D1B2A';
    });
    
    document.getElementById('tab-' + tabName).style.display = 'block';
    
    let targetElement = event ? event.currentTarget : document.getElementById('btn-tab-' + tabName);
    if (targetElement) {
        targetElement.classList.add('active');
        targetElement.style.background = '#C6A75E';
        targetElement.style.color = 'white';
    }
    
    // Cargar contenido dinámicamente según la pestaña
    if (tabName === 'calendario') {
        if(calendar) {
            calendar.render();
        } else {
            initCalendario();
        }
    } else if (tabName === 'reportes') {
        cargarReportesAdmin();
    } else if (tabName === 'lista-reservas') {
        cargarTablaReservasRecepcion();
    }
};

async function obtenerReservasAdmin() {
    const respuesta = await authFetch(API_RESERVAS);
    const reservas = await respuesta.json();

    if (!respuesta.ok) {
        throw new Error(reservas.mensaje || "No se pudieron cargar las reservas");
    }

    reservasAdminCache = reservas;
    return reservas;
}

async function obtenerHabitacionesAdmin() {
    const respuesta = await authFetch(API_HABITACIONES);
    const habitaciones = await respuesta.json();

    if (!respuesta.ok) {
        throw new Error(habitaciones.mensaje || "No se pudieron cargar las habitaciones");
    }

    habitacionesAdminCache = habitaciones;
    return habitaciones;
}

async function asegurarDatosAdmin() {
    const tareas = [];

    if (!reservasAdminCache.length) tareas.push(obtenerReservasAdmin());
    if (!habitacionesAdminCache.length) tareas.push(obtenerHabitacionesAdmin());
    if (!usuariosAdminCache.length) tareas.push(obtenerUsuariosAdmin());

    if (tareas.length) {
        await Promise.all(tareas);
    }

    return {
        reservas: reservasAdminCache,
        habitaciones: habitacionesAdminCache,
        usuarios: usuariosAdminCache
    };
}

async function obtenerUsuariosAdmin() {
    const respuesta = await authFetch(API_USUARIOS);
    const usuarios = await respuesta.json();

    if (!respuesta.ok) {
        throw new Error(usuarios.mensaje || "No se pudieron cargar los usuarios");
    }

    usuariosAdminCache = usuarios;
    return usuarios;
}

function formatearMonedaCOP(valor) {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    }).format(Number(valor) || 0);
}

function renderizarResumenPagoModal(data) {
    if (!resumenPagoReserva) return;

    resumenPagoReserva.innerHTML = `
        <div class="resumen-pago-item">
            <span>Reserva</span>
            <strong>#${data.reserva.id_reserva}</strong>
        </div>
        <div class="resumen-pago-item">
            <span>Huésped</span>
            <strong>${data.reserva.nombre} ${data.reserva.apellido}</strong>
        </div>
        <div class="resumen-pago-item">
            <span>Total factura</span>
            <strong>${formatearMonedaCOP(data.factura.total)}</strong>
        </div>
        <div class="resumen-pago-item">
            <span>Total pagado</span>
            <strong>${formatearMonedaCOP(data.totalPagado)}</strong>
        </div>
        <div class="resumen-pago-item">
            <span>Saldo pendiente</span>
            <strong>${formatearMonedaCOP(data.saldoPendiente)}</strong>
        </div>
        <div class="resumen-pago-item">
            <span>Estado reserva</span>
            <strong>${obtenerMetaEstadoReserva(data.reserva.estado).texto}</strong>
        </div>
    `;
}

window.abrirModalPagoReserva = async function(idReserva) {
    reservaPagoActiva = idReserva;

    if (mensajePagoReserva) mensajePagoReserva.textContent = "";
    if (resumenPagoReserva) resumenPagoReserva.innerHTML = `<div class="admin-empty-state">Cargando información de pago...</div>`;

    mostrarModal(modalPagoReserva);

    try {
        const respuesta = await authFetch(`${API_PAGOS}/reserva/${idReserva}`);
        const resultado = await respuesta.json();

        if (!respuesta.ok) {
            if (mensajePagoReserva) mensajePagoReserva.textContent = resultado.mensaje || "No se pudo cargar el pago.";
            return;
        }

        renderizarResumenPagoModal(resultado);

        if (montoPagoReserva) {
            montoPagoReserva.value = resultado.saldoPendiente > 0 ? String(resultado.saldoPendiente) : "";
        }

        if (metodoPagoReserva) {
            metodoPagoReserva.value = "efectivo";
        }

        if (mensajePagoReserva) {
            mensajePagoReserva.textContent = resultado.saldoPendiente <= 0
                ? "La factura ya está pagada."
                : "";
        }
    } catch (error) {
        console.error("Error al abrir modal de pago:", error);
        if (mensajePagoReserva) mensajePagoReserva.textContent = "No se pudo conectar con el servidor.";
    }
};

function esReservaActiva(estado) {
    return estado === "reservada" || estado === "confirmada";
}

function obtenerClaseEstadoHabitacion(estado) {
    switch (estado) {
        case "disponible":
            return "status-confirmada";
        case "reservada":
            return "status-reservada";
        case "ocupada":
            return "status-cancelada";
        case "mantenimiento":
            return "status-finalizada";
        default:
            return "status-desconocido";
    }
}

function obtenerEtiquetaEstadoHabitacion(habitacion) {
    if (habitacion.estado === "mantenimiento") {
        return "Mantenimiento";
    }

    if (habitacion.reserva_activa_estado === "confirmada") {
        return "Ocupada";
    }

    if (habitacion.reserva_activa_estado === "reservada") {
        return "Reservada";
    }

    if (habitacion.estado === "ocupada") {
        return "Ocupada";
    }

    if (habitacion.estado === "reservada") {
        return "Reservada";
    }

    return "Disponible";
}

function obtenerEstadoVisualHabitacion(habitacion) {
    if (habitacion.estado === "mantenimiento") return "mantenimiento";
    if (habitacion.reserva_activa_estado === "confirmada") return "ocupada";
    if (habitacion.reserva_activa_estado === "reservada") return "reservada";
    if (habitacion.estado === "ocupada") return "ocupada";
    if (habitacion.estado === "reservada") return "reservada";
    return "disponible";
}

function formatearFechaCorta(fecha) {
    if (!fecha) return "Sin fecha";
    return String(fecha).split("T")[0];
}

function obtenerUsuariosFiltrados() {
    return usuariosAdminCache.filter(usuario => {
        const texto = (adminBuscarUsuario?.value || "").trim().toLowerCase();
        const rol = adminFiltroRolUsuario?.value || "todos";
        const estado = adminFiltroEstadoUsuario?.value || "todos";
        const acceso = adminFiltroBloqueoUsuario?.value || "todos";
        const nombre = `${usuario.nombre || ""} ${usuario.apellido || ""}`.trim().toLowerCase();
        const email = String(usuario.email || "").toLowerCase();
        const rolUsuario = String(usuario.rol || "").toLowerCase();
        const estadoUsuario = String(usuario.estado || "").toLowerCase();
        const estaBloqueado = Boolean(usuario.bloqueado);

        return (!texto || nombre.includes(texto) || email.includes(texto))
            && (rol === "todos" || rolUsuario === rol)
            && (estado === "todos" || estadoUsuario === estado)
            && (acceso === "todos" || (acceso === "bloqueado" ? estaBloqueado : !estaBloqueado));
    });
}

function renderizarMetricasUsuarios() {
    const activos = usuariosAdminCache.filter(usuario => String(usuario.estado).toLowerCase() === "activo" && !usuario.bloqueado).length;
    const bloqueados = usuariosAdminCache.filter(usuario => Boolean(usuario.bloqueado)).length;
    const clientes = usuariosAdminCache.filter(usuario => String(usuario.rol).toLowerCase() === "cliente").length;
    const staff = usuariosAdminCache.filter(usuario => ["administrador", "recepcionista"].includes(String(usuario.rol).toLowerCase())).length;

    if (metricUsuariosActivos) metricUsuariosActivos.textContent = String(activos);
    if (metricUsuariosBloqueados) metricUsuariosBloqueados.textContent = String(bloqueados);
    if (metricUsuariosClientes) metricUsuariosClientes.textContent = String(clientes);
    if (metricUsuariosStaff) metricUsuariosStaff.textContent = String(staff);
}

function renderizarUsuariosAdmin(usuarios) {
    if (!tbodyUsuariosAdmin) return;

    if (adminResumenUsuarios) {
        adminResumenUsuarios.textContent = `${usuarios.length} usuario(s) encontrados con los filtros actuales.`;
    }

    if (!usuarios.length) {
        tbodyUsuariosAdmin.innerHTML = `<tr><td colspan="5" class="admin-empty-state">No hay usuarios que coincidan con esa búsqueda.</td></tr>`;
        return;
    }

    const usuarioSesion = obtenerUsuarioSesion();

    tbodyUsuariosAdmin.innerHTML = usuarios.map(usuario => {
        const esMismoUsuario = usuarioSesion && Number(usuarioSesion.id_usuario) === Number(usuario.id_usuario);
        const accesoClase = usuario.bloqueado ? "is-locked" : "is-free";
        const accesoTexto = usuario.bloqueado ? "Bloqueado" : "Libre";
        const estadoTexto = usuario.estado || "activo";
        const siguienteEstado = String(usuario.estado).toLowerCase() === "activo" ? "inactivo" : "activo";
        const accionEstadoTexto = siguienteEstado === "activo" ? "Activar" : "Inactivar";

        return `
            <tr>
                <td>
                    <div class="admin-table-guest">
                        <strong>${usuario.nombre} ${usuario.apellido || ""}</strong>
                        <small>${usuario.email}</small>
                    </div>
                </td>
                <td><span class="admin-user-role">${usuario.rol}</span></td>
                <td><span class="admin-status-pill ${String(estadoTexto).toLowerCase() === "activo" ? "status-confirmada" : "status-finalizada"}">${estadoTexto}</span></td>
                <td><span class="admin-status-pill ${accesoClase}">${accesoTexto}</span></td>
                <td>
                    <div class="admin-actions-cell">
                        ${esMismoUsuario
                          ? `<button class="admin-action-btn admin-action-disabled" type="button" disabled><i class="fas fa-user-shield"></i> Tu cuenta</button>
                             <button class="admin-action-btn admin-action-disabled" type="button" disabled><i class="fas fa-user-lock"></i> Protegida</button>`
                          : `<button class="admin-action-btn ${usuario.bloqueado ? "admin-action-success" : "admin-action-warning"}" onclick="actualizarAccesoUsuarioAdmin(${usuario.id_usuario}, ${!usuario.bloqueado}, '${String(usuario.estado || "activo").toLowerCase()}')"><i class="fas ${usuario.bloqueado ? "fa-lock-open" : "fa-lock"}"></i> ${usuario.bloqueado ? "Desbloquear" : "Bloquear"}</button>
                             <button class="admin-action-btn admin-action-neutral" onclick="actualizarAccesoUsuarioAdmin(${usuario.id_usuario}, ${Boolean(usuario.bloqueado)}, '${siguienteEstado}')"><i class="fas fa-user-gear"></i> ${accionEstadoTexto}</button>`
                        }
                    </div>
                </td>
            </tr>
        `;
    }).join("");
}

async function cargarUsuariosAdmin() {
    if (!tbodyUsuariosAdmin) return;

    tbodyUsuariosAdmin.innerHTML = `<tr><td colspan="5" class="admin-empty-state">Cargando usuarios...</td></tr>`;

    try {
        await obtenerUsuariosAdmin();
        renderizarMetricasUsuarios();
        renderizarUsuariosAdmin(obtenerUsuariosFiltrados());
    } catch (error) {
        console.error("Error cargando usuarios", error);
        tbodyUsuariosAdmin.innerHTML = `<tr><td colspan="5" class="admin-empty-state">No se pudieron cargar los usuarios.</td></tr>`;
    }
}

function actualizarHeroAdmin(reservas, habitaciones) {
    const activas = reservas.filter(reserva => esReservaActiva(reserva.estado)).length;
    const ocupadas = habitaciones.filter(habitacion => habitacion.estado === "ocupada" || habitacion.estado === "reservada").length;

    if (adminHeroEstado) {
        adminHeroEstado.textContent = `${ocupadas} habitaciones en movimiento`;
    }

    if (adminHeroDetalle) {
        adminHeroDetalle.textContent = `${activas} reservas activas y ${Math.max(habitaciones.length - ocupadas, 0)} habitaciones con margen de operación.`;
    }
}

function renderizarActividadReciente(reservas) {
    if (!adminActividadLista) return;

    const recientes = [...reservas]
        .sort((a, b) => new Date(b.fecha_creacion) - new Date(a.fecha_creacion))
        .slice(0, 5);

    if (!recientes.length) {
        adminActividadLista.innerHTML = `<div class="admin-empty-state">aún no hay actividad reciente para mostrar.</div>`;
        return;
    }

    adminActividadLista.innerHTML = recientes.map(reserva => {
        const metaEstado = obtenerMetaEstadoReserva(reserva.estado);
        return `
            <article class="admin-activity-item">
                <div>
                    <strong>${reserva.nombre} ${reserva.apellido}</strong>
                    <p>Habitación ${reserva.numero_habitacion} · ${reserva.tipo_habitacion}</p>
                </div>
                <div class="admin-activity-meta">
                    <span class="admin-status-pill ${metaEstado.clase}">${metaEstado.texto}</span>
                    <p>${reserva.fecha_inicio.split("T")[0]}</p>
                </div>
            </article>
        `;
    }).join("");
}

function renderizarResumenOperativo(reservas, habitaciones) {
    const divReportes = document.getElementById("contenidoReportes");
    if (!divReportes) return;

    const totalHuespedes = new Set(reservas.map(reserva => `${reserva.nombre} ${reserva.apellido}`)).size;
    const disponibles = habitaciones.filter(habitacion => habitacion.estado === "disponible").length;
    const mantenimiento = habitaciones.filter(habitacion => habitacion.estado === "mantenimiento").length;
    const suites = habitaciones.filter(habitacion => String(habitacion.tipo_habitacion).toLowerCase() === "suite").length;

    divReportes.innerHTML = `
        <article class="admin-overview-card">
            <span class="admin-panel-kicker">Huespedes</span>
            <strong>${totalHuespedes} registrados</strong>
            <p>Clientes con movimiento o historial dentro del sistema actual.</p>
        </article>
        <article class="admin-overview-card">
            <span class="admin-panel-kicker">Disponibilidad</span>
            <strong>${disponibles} listas para vender</strong>
            <p>Habitaciones disponibles en este momento para nuevas reservas.</p>
        </article>
        <article class="admin-overview-card">
            <span class="admin-panel-kicker">Mantenimiento</span>
            <strong>${mantenimiento} en revisión</strong>
            <p>Controla cuántas habitaciones no están habilitadas para operación.</p>
        </article>
        <article class="admin-overview-card">
            <span class="admin-panel-kicker">Inventario premium</span>
            <strong>${suites} suites activas</strong>
            <p>Seguimiento visual para tus habitaciones de mayor valor.</p>
        </article>
    `;
}

cargarReportesAdmin = async function() {
    try {
        const { reservas, habitaciones } = await asegurarDatosAdmin();
        const hoy = new Date().toISOString().split("T")[0];
        const reservasActivas = reservas.filter(reserva => esReservaActiva(reserva.estado));
        const ingresos = reservasActivas.reduce((total, reserva) => total + (Number(reserva.total) || 0), 0);
        const checkInsHoy = reservas.filter(reserva => reserva.fecha_inicio.split("T")[0] === hoy).length;
        const ocupacion = habitaciones.length
            ? Math.round((habitaciones.filter(habitacion => habitacion.estado === "ocupada" || habitacion.estado === "reservada").length / habitaciones.length) * 100)
            : 0;

        if (metricIngresos) metricIngresos.textContent = formatearMonedaCOP(ingresos);
        if (metricActivas) metricActivas.textContent = String(reservasActivas.length);
        if (metricHoy) metricHoy.textContent = String(checkInsHoy);
        if (metricOcupacion) metricOcupacion.textContent = `${ocupacion}%`;

        actualizarHeroAdmin(reservas, habitaciones);
        renderizarActividadReciente(reservas);
        renderizarResumenOperativo(reservas, habitaciones);
    } catch (error) {
        console.error("Error cargando reportes", error);
        if (adminActividadLista) {
            adminActividadLista.innerHTML = `<div class="admin-empty-state">No se pudo cargar la actividad reciente.</div>`;
        }
        const divReportes = document.getElementById("contenidoReportes");
        if (divReportes) {
            divReportes.innerHTML = `<div class="admin-empty-state">No se pudo cargar el resumen operativo.</div>`;
        }
    }
};

function obtenerReservasFiltradas() {
    return reservasAdminCache.filter(reserva => {
        const texto = (adminBuscarReserva?.value || "").trim().toLowerCase();
        const estado = adminFiltroEstado?.value || "todos";
        const tipo = adminFiltroTipo?.value || "todos";
        const fecha = adminFiltroFecha?.value || "";
        const nombreCompleto = `${reserva.nombre} ${reserva.apellido}`.toLowerCase();
        const correo = String(reserva.email || "").toLowerCase();
        const tipoHabitacion = String(reserva.tipo_habitacion || "").toLowerCase();
        const fechaInicio = reserva.fecha_inicio.split("T")[0];

        return (!texto || nombreCompleto.includes(texto) || correo.includes(texto))
            && (estado === "todos" || reserva.estado === estado)
            && (tipo === "todos" || tipoHabitacion === tipo)
            && (!fecha || fechaInicio === fecha);
    });
}

function renderizarTablaReservasAdmin(reservas) {
    if (!tbodyReservas) return;

    if (adminResumenFiltros) {
        adminResumenFiltros.textContent = `${reservas.length} reserva(s) encontradas con los filtros actuales.`;
    }

    if (!reservas.length) {
        tbodyReservas.innerHTML = `<tr><td colspan="5" class="admin-empty-state">No hay reservas que coincidan con la busqueda actual.</td></tr>`;
        return;
    }

    tbodyReservas.innerHTML = reservas.map(reserva => {
        const metaEstado = obtenerMetaEstadoReserva(reserva.estado);
        return `
            <tr>
                <td><div class="admin-table-guest"><strong>${reserva.nombre} ${reserva.apellido}</strong><small>${reserva.email}</small></div></td>
                <td><div class="admin-table-room"><strong>${reserva.tipo_habitacion}</strong><small>Habitación ${reserva.numero_habitacion}</small></div></td>
                <td class="admin-room-dates">${reserva.fecha_inicio.split("T")[0]}<br>al<br>${reserva.fecha_fin.split("T")[0]}</td>
                <td><span class="admin-status-pill ${metaEstado.clase}">${metaEstado.texto}</span></td>
                <td>
                    <div class="admin-actions-cell">
                        ${reserva.estado === "reservada" ? `<button class="admin-action-btn admin-action-primary" onclick="cambiarEstadoReserva(${reserva.id_reserva}, 'confirmada')"><i class="fas fa-door-open"></i> Check-in</button>` : ""}
                        ${reserva.estado === "confirmada" ? `<button class="admin-action-btn admin-action-muted" onclick="cambiarEstadoReserva(${reserva.id_reserva}, 'finalizada')"><i class="fas fa-flag-checkered"></i> Finalizar</button>` : ""}
                        ${reserva.estado !== "cancelada" ? `<button class="admin-action-btn admin-action-gold" onclick="abrirModalPagoReserva(${reserva.id_reserva})"><i class="fas fa-credit-card"></i> Pago</button>` : ""}
                        <button class="admin-action-btn admin-action-neutral" onclick="generarFactura('${reserva.nombre} ${reserva.apellido}', ${reserva.total})"><i class="fas fa-file-pdf"></i> Factura</button>
                    </div>
                </td>
            </tr>
        `;
    }).join("");
}

cargarTablaReservasRecepcion = async function() {
    if (!tbodyReservas) return;

    tbodyReservas.innerHTML = `<tr><td colspan="5" class="admin-empty-state">Cargando reservas del sistema...</td></tr>`;

    try {
        await asegurarDatosAdmin();
        renderizarTablaReservasAdmin(obtenerReservasFiltradas());
    } catch (error) {
        console.error("Error al cargar la tabla de recepción", error);
        tbodyReservas.innerHTML = `<tr><td colspan="5" class="admin-empty-state">Error al conectar con la base de datos.</td></tr>`;
    }
};

function obtenerHabitacionesFiltradas() {
    return habitacionesAdminCache.filter(habitacion => {
        const texto = (adminBuscarHabitacion?.value || "").trim().toLowerCase();
        const estado = adminFiltroEstadoHabitacion?.value || "todos";
        const tipo = adminFiltroTipoHabitacion?.value || "todos";
        const piso = adminFiltroPisoHabitacion?.value || "todos";
        const numero = String(habitacion.numero || "");
        const tipoHabitacion = String(habitacion.tipo_habitacion || "").toLowerCase();
        const vista = String(habitacion.vista || "").toLowerCase();
        const estadoVisual = obtenerEstadoVisualHabitacion(habitacion);

        return (!texto || numero.includes(texto) || tipoHabitacion.includes(texto) || vista.includes(texto))
            && (estado === "todos" || estadoVisual === estado)
            && (tipo === "todos" || tipoHabitacion === tipo)
            && (piso === "todos" || String(habitacion.piso) === piso);
    });
}

function renderizarHabitacionesAdmin(habitaciones) {
    if (!adminHabitacionesGrid) return;

    if (!habitaciones.length) {
        adminHabitacionesGrid.innerHTML = `<div class="admin-empty-state">No hay habitaciones que coincidan con esos filtros.</div>`;
        return;
    }

    adminHabitacionesGrid.innerHTML = habitaciones.map(habitacion => `
        <article class="admin-room-card">
            <div class="admin-room-media">
                <img src="${obtenerImagenPorTipo(habitacion.tipo_habitacion)}" alt="${habitacion.tipo_habitacion}">
                <span class="admin-room-badge admin-status-pill ${obtenerClaseEstadoHabitacion(obtenerEstadoVisualHabitacion(habitacion))}">${obtenerEtiquetaEstadoHabitacion(habitacion)}</span>
            </div>
            <div class="admin-room-body">
                <div class="admin-room-top">
                    <div>
                        <h4>${habitacion.numero}</h4>
                        <p>${habitacion.tipo_habitacion}</p>
                    </div>
                    <span class="admin-room-price">${formatearMonedaCOP(habitacion.precio_base)}</span>
                </div>
                <div class="admin-room-meta">
                    <span><i class="fas fa-layer-group"></i> Piso ${habitacion.piso}</span>
                    <span><i class="fas fa-eye"></i> Vista ${habitacion.vista || "ciudad"}</span>
                    <span><i class="fas fa-users"></i> ${habitacion.capacidad} huésped(es)</span>
                    <span><i class="fas fa-door-open"></i> Tipo ${habitacion.tipo_habitacion}</span>
                </div>
                <div class="admin-room-footer">
                    <div class="admin-room-status-copy">
                        <strong>${habitacion.descripcion || "Sin descripción adicional"}</strong>
                        <small>
                            ${habitacion.reserva_activa_id
                              ? `Bloqueada por reserva #${habitacion.reserva_activa_id} del ${formatearFechaCorta(habitacion.reserva_activa_inicio)} al ${formatearFechaCorta(habitacion.reserva_activa_fin)}`
                              : habitacion.estado === "mantenimiento"
                                ? "Habitación temporalmente fuera de servicio."
                                : "Disponible para gestión y nuevas reservas."
                            }
                        </small>
                    </div>
                    <div class="admin-room-actions">
                        ${habitacion.estado !== "mantenimiento"
                          ? habitacion.reserva_activa_id
                            ? `<button class="admin-action-btn admin-action-disabled" type="button" disabled><i class="fas fa-lock"></i> Reserva activa</button>`
                            : `<button class="admin-action-btn admin-action-warning" onclick="actualizarEstadoHabitacionAdmin(${habitacion.id_habitacion}, 'mantenimiento')"><i class="fas fa-screwdriver-wrench"></i> Mantenimiento</button>`
                          : `<button class="admin-action-btn admin-action-success" onclick="actualizarEstadoHabitacionAdmin(${habitacion.id_habitacion}, 'disponible')"><i class="fas fa-circle-check"></i> Disponible</button>`
                        }
                    </div>
                </div>
            </div>
        </article>
    `).join("");
}

async function cargarHabitacionesAdmin() {
    if (!adminHabitacionesGrid) return;

    adminHabitacionesGrid.innerHTML = `<div class="admin-empty-state">Cargando habitaciones...</div>`;

    try {
        await asegurarDatosAdmin();
        renderizarHabitacionesAdmin(obtenerHabitacionesFiltradas());
    } catch (error) {
        console.error("Error cargando habitaciones", error);
        adminHabitacionesGrid.innerHTML = `<div class="admin-empty-state">No se pudieron cargar las habitaciones.</div>`;
    }
}

window.actualizarEstadoHabitacionAdmin = async function(idHabitacion, nuevoEstado) {
    const mensajeConfirmacion = nuevoEstado === "mantenimiento"
        ? "¿Quieres marcar esta habitación como mantenimiento?"
        : "¿Quieres volver a marcar esta habitación como disponible?";

    if (!confirm(mensajeConfirmacion)) return;

    try {
        const respuesta = await authFetch(`${API_HABITACIONES}/${idHabitacion}/estado`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nuevoEstado })
        });

        const resultado = await respuesta.json();

        if (!respuesta.ok) {
            mostrarNotificacionFlotante(resultado.mensaje || "No se pudo actualizar la habitación.", "#c62828");
            return;
        }

        habitacionesAdminCache = [];
        await Promise.all([
            cargarHabitacionesAdmin(),
            cargarReportesAdmin()
        ]);

        mostrarNotificacionFlotante(resultado.mensaje || "Estado de habitación actualizado.", "#1B263B");
    } catch (error) {
        console.error("Error al actualizar estado de habitación:", error);
        mostrarNotificacionFlotante("No se pudo conectar con el servidor para actualizar la habitación.", "#c62828");
    }
};
window.actualizarEstadoHabitacionAdmin = async function(idHabitacion, nuevoEstado) {
    const mensaje = nuevoEstado === "mantenimiento"
        ? "¿Quieres marcar esta habitación como mantenimiento?"
        : "¿Quieres volver a marcar esta habitación como disponible?";

    const confirmo = await confirmarEnPagina({
        titulo: "Actualizar habitación",
        mensaje,
        textoAceptar: "Sí, continuar",
        textoCancelar: "Volver"
    });

    if (!confirmo) return;

    try {
        const respuesta = await authFetch(`${API_HABITACIONES}/${idHabitacion}/estado`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nuevoEstado })
        });

        const resultado = await respuesta.json();

        if (!respuesta.ok) {
            mostrarNotificacionFlotante(resultado.mensaje || "No se pudo actualizar la habitación.", "#c62828");
            return;
        }

        habitacionesAdminCache = [];
        await Promise.all([
            cargarHabitacionesAdmin(),
            cargarReportesAdmin()
        ]);

        mostrarNotificacionFlotante(resultado.mensaje || "Estado de habitación actualizado.", "#1B263B");
    } catch (error) {
        console.error("Error al actualizar estado de habitación:", error);
        mostrarNotificacionFlotante("No se pudo conectar con el servidor para actualizar la habitación.", "#c62828");
    }
};

window.actualizarAccesoUsuarioAdmin = async function(idUsuario, bloqueado, estado) {
    const accion = bloqueado ? "bloquear" : "actualizar";
    const confirmo = await confirmarEnPagina({
        titulo: "Actualizar usuario",
        mensaje: `¿Quieres ${accion} este usuario?`,
        textoAceptar: "Sí, continuar",
        textoCancelar: "Volver"
    });

    if (!confirmo) return;

    try {
        const respuesta = await authFetch(`${API_USUARIOS}/${idUsuario}/acceso`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ bloqueado, estado })
        });

        const resultado = await respuesta.json();

        if (!respuesta.ok) {
            mostrarNotificacionFlotante(resultado.mensaje || "No se pudo actualizar el usuario.", "#c62828");
            return;
        }

        usuariosAdminCache = [];
        await cargarUsuariosAdmin();
        mostrarNotificacionFlotante(resultado.mensaje || "Usuario actualizado correctamente.", "#1B263B");
    } catch (error) {
        console.error("Error al actualizar acceso del usuario:", error);
        mostrarNotificacionFlotante("No se pudo conectar con el servidor para actualizar el usuario.", "#c62828");
    }
};

window.cambiarEstadoReserva = async function(id, nuevoEstado) {
    const confirmo = await confirmarEnPagina({
        titulo: "Actualizar reserva",
        mensaje: `¿Estás seguro de marcar esta reserva como ${nuevoEstado}?`,
        textoAceptar: "Sí, actualizar",
        textoCancelar: "Volver"
    });

    if (!confirmo) return;

    try {
        const respuesta = await authFetch(`${API_RESERVAS}/${id}/estado`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nuevoEstado })
        });

        if (respuesta.ok) {
            reservasAdminCache = [];
            habitacionesAdminCache = [];
            mostrarNotificacionFlotante(`Reserva actualizada a ${obtenerMetaEstadoReserva(nuevoEstado).texto}`, "#2e7d32");
            cargarTablaReservasRecepcion();
            cargarReportesAdmin();
            cargarHabitacionesAdmin();
        }
    } catch (error) {
        console.error("Error al actualizar estado", error);
    }
};
async function manejarCancelacionReserva(idReserva) {
  const confirmo = await confirmarEnPagina({
    titulo: "Cancelar reserva",
    mensaje: "¿Estás seguro de que deseas cancelar esta reserva? Esta acción no se puede deshacer.",
    textoAceptar: "Sí, cancelar",
    textoCancelar: "No cancelar"
  });

  if (!confirmo) return;

  try {
    const respuesta = await authFetch(`${API_RESERVAS}/${idReserva}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const resultado = await respuesta.json();

    if (respuesta.ok) {
      mostrarNotificacionFlotante(resultado.mensaje || "Reserva cancelada exitosamente.", "#dc3545");
      await cargarReservasUsuario();
      await refrescarEstadoHabitaciones();
    } else {
      mostrarNotificacionFlotante(resultado.mensaje || "Error al cancelar la reserva.", "#ffc107");
    }
  } catch (error) {
    console.error("Error al cancelar reserva:", error);
    mostrarNotificacionFlotante("No se pudo conectar con el servidor para cancelar la reserva.", "#ffc107");
  }
}

async function cancelarMiReserva(id) {
  const confirmo = await confirmarEnPagina({
    titulo: "Cancelar reserva",
    mensaje: "¿Deseas cancelar esta reserva? La habitación quedará disponible para otros huéspedes.",
    textoAceptar: "Sí, cancelar",
    textoCancelar: "Volver"
  });

  if (!confirmo) return;

  try {
    const respuesta = await authFetch(`${API_RESERVAS}/${id}`, {
      method: "DELETE"
    });

    const resultado = await respuesta.json();

    if (respuesta.ok) {
      mostrarNotificacionFlotante(resultado.mensaje || "Reserva cancelada.", "#8c2f39");
      await cargarReservasUsuario();
      await refrescarEstadoHabitaciones();
    } else {
      mostrarNotificacionFlotante(resultado.mensaje || "No se pudo cancelar.", "#c62828");
    }
  } catch (error) {
    console.error("Error al cancelar:", error);
    mostrarNotificacionFlotante("No se pudo conectar con el servidor para cancelar la reserva.", "#c62828");
  }
}

window.actualizarEstadoHabitacionAdmin = async function(idHabitacion, nuevoEstado) {
    const mensaje = nuevoEstado === "mantenimiento"
        ? "¿Quieres marcar esta habitación como mantenimiento?"
        : "¿Quieres volver a marcar esta habitación como disponible?";

    const confirmo = await confirmarEnPagina({
        titulo: "Actualizar habitación",
        mensaje,
        textoAceptar: "Sí, continuar",
        textoCancelar: "Volver"
    });

    if (!confirmo) return;

    try {
        const respuesta = await authFetch(`${API_HABITACIONES}/${idHabitacion}/estado`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nuevoEstado })
        });

        const resultado = await respuesta.json();

        if (!respuesta.ok) {
            mostrarNotificacionFlotante(resultado.mensaje || "No se pudo actualizar la habitación.", "#c62828");
            return;
        }

        habitacionesAdminCache = [];
        await Promise.all([
            cargarHabitacionesAdmin(),
            cargarReportesAdmin()
        ]);

        mostrarNotificacionFlotante(resultado.mensaje || "Estado de habitación actualizado.", "#1B263B");
    } catch (error) {
        console.error("Error al actualizar estado de habitación:", error);
        mostrarNotificacionFlotante("No se pudo conectar con el servidor para actualizar la habitación.", "#c62828");
    }
};

window.actualizarAccesoUsuarioAdmin = async function(idUsuario, bloqueado, estado) {
    const accion = bloqueado ? "bloquear" : "actualizar";
    const confirmo = await confirmarEnPagina({
        titulo: "Actualizar usuario",
        mensaje: `¿Quieres ${accion} este usuario?`,
        textoAceptar: "Sí, continuar",
        textoCancelar: "Volver"
    });

    if (!confirmo) return;

    try {
        const respuesta = await authFetch(`${API_USUARIOS}/${idUsuario}/acceso`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ bloqueado, estado })
        });

        const resultado = await respuesta.json();

        if (!respuesta.ok) {
            mostrarNotificacionFlotante(resultado.mensaje || "No se pudo actualizar el usuario.", "#c62828");
            return;
        }

        usuariosAdminCache = [];
        await cargarUsuariosAdmin();
        mostrarNotificacionFlotante(resultado.mensaje || "Usuario actualizado correctamente.", "#1B263B");
    } catch (error) {
        console.error("Error al actualizar acceso del usuario:", error);
        mostrarNotificacionFlotante("No se pudo conectar con el servidor para actualizar el usuario.", "#c62828");
    }
};

window.cambiarEstadoReserva = async function(id, nuevoEstado) {
    const confirmo = await confirmarEnPagina({
        titulo: "Actualizar reserva",
        mensaje: `¿Estás seguro de marcar esta reserva como ${nuevoEstado}?`,
        textoAceptar: "Sí, actualizar",
        textoCancelar: "Volver"
    });

    if (!confirmo) return;

    try {
        const respuesta = await authFetch(`${API_RESERVAS}/${id}/estado`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nuevoEstado })
        });

        if (respuesta.ok) {
            reservasAdminCache = [];
            habitacionesAdminCache = [];
            mostrarNotificacionFlotante(`Reserva actualizada a ${obtenerMetaEstadoReserva(nuevoEstado).texto}`, "#2e7d32");
            cargarTablaReservasRecepcion();
            cargarReportesAdmin();
            cargarHabitacionesAdmin();
        }
    } catch (error) {
        console.error("Error al actualizar estado", error);
    }
};

window.actualizarAccesoUsuarioAdmin = async function(idUsuario, bloqueado, estado) {
    const accion = bloqueado ? "bloquear" : "actualizar";
    if (!confirm(`¿Quieres ${accion} este usuario?`)) return;

    try {
        const respuesta = await authFetch(`${API_USUARIOS}/${idUsuario}/acceso`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ bloqueado, estado })
        });

        const resultado = await respuesta.json();

        if (!respuesta.ok) {
            mostrarNotificacionFlotante(resultado.mensaje || "No se pudo actualizar el usuario.", "#c62828");
            return;
        }

        usuariosAdminCache = [];
        await cargarUsuariosAdmin();
        mostrarNotificacionFlotante(resultado.mensaje || "Usuario actualizado correctamente.", "#1B263B");
    } catch (error) {
        console.error("Error al actualizar acceso del usuario:", error);
        mostrarNotificacionFlotante("No se pudo conectar con el servidor para actualizar el usuario.", "#c62828");
    }
};

function configurarFiltrosAdmin() {
    [adminBuscarReserva, adminFiltroEstado, adminFiltroTipo, adminFiltroFecha].forEach(campo => {
        if (!campo) return;
        campo.addEventListener("input", () => renderizarTablaReservasAdmin(obtenerReservasFiltradas()));
        campo.addEventListener("change", () => renderizarTablaReservasAdmin(obtenerReservasFiltradas()));
    });

    if (limpiarFiltrosReservasBtn) {
        limpiarFiltrosReservasBtn.addEventListener("click", () => {
            if (adminBuscarReserva) adminBuscarReserva.value = "";
            if (adminFiltroEstado) adminFiltroEstado.value = "todos";
            if (adminFiltroTipo) adminFiltroTipo.value = "todos";
            if (adminFiltroFecha) adminFiltroFecha.value = "";
            renderizarTablaReservasAdmin(obtenerReservasFiltradas());
        });
    }

    [adminBuscarHabitacion, adminFiltroEstadoHabitacion, adminFiltroTipoHabitacion, adminFiltroPisoHabitacion].forEach(campo => {
        if (!campo) return;
        campo.addEventListener("input", () => renderizarHabitacionesAdmin(obtenerHabitacionesFiltradas()));
        campo.addEventListener("change", () => renderizarHabitacionesAdmin(obtenerHabitacionesFiltradas()));
    });

    [adminBuscarUsuario, adminFiltroRolUsuario, adminFiltroEstadoUsuario, adminFiltroBloqueoUsuario].forEach(campo => {
        if (!campo) return;
        campo.addEventListener("input", () => renderizarUsuariosAdmin(obtenerUsuariosFiltrados()));
        campo.addEventListener("change", () => renderizarUsuariosAdmin(obtenerUsuariosFiltrados()));
    });
}

window.switchTab = function(tabName, event) {
    ["reportes", "calendario", "lista-reservas", "habitaciones", "usuarios"].forEach(tab => {
        const seccion = document.getElementById(`tab-${tab}`);
        if (seccion) seccion.style.display = "none";
    });

    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.remove("active");
        btn.style.background = "";
        btn.style.color = "";
    });

    const tabActiva = document.getElementById(`tab-${tabName}`);
    if (tabActiva) {
        tabActiva.style.display = "block";
    }

    const targetElement = event ? event.currentTarget : document.getElementById(`btn-tab-${tabName}`);
    if (targetElement) {
        targetElement.classList.add("active");
    }

    if (tabName === "calendario") {
        if (calendar) {
            calendar.render();
        } else {
            initCalendario();
        }
    } else if (tabName === "reportes") {
        cargarReportesAdmin();
    } else if (tabName === "lista-reservas") {
        cargarTablaReservasRecepcion();
    } else if (tabName === "habitaciones") {
        cargarHabitacionesAdmin();
    } else if (tabName === "usuarios") {
        cargarUsuariosAdmin();
    }
};

configurarFiltrosAdmin();

// =========================================================
// SECCIÓN 3: PDF Y NOTIFICACIONES
// =========================================================

window.mostrarNotificacionFlotante = function(mensaje, colorFondo) {
    const notificacion = document.getElementById('notificacionFlotante');
    const texto = document.getElementById('textoNotificacion');
    
    if(!notificacion) return;

    notificacion.style.background = colorFondo || '#2e7d32'; 
    texto.innerHTML = mensaje;

    notificacion.style.bottom = '20px';
    setTimeout(() => { notificacion.style.bottom = '-100px'; }, 4000);
};

// Hacer que generarFactura sea accesible globalmente para los botones de la tabla
window.generarFactura = function(nombre, total) {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text("HOTEL BOUTIQUE", 20, 25);
        
        doc.setFontSize(14);
        doc.text("COMPROBANTE DE ESTADÍA", 20, 35);
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(`Cliente: ${nombre}`, 20, 55);
        doc.text(`Fecha de emisión: ${new Date().toLocaleDateString()}`, 20, 65);
        
        doc.setFont("helvetica", "bold");
        doc.text(`Monto Total: $ ${formatearPrecio(total)} COP`, 20, 85);
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.text("-------------------------------------------------------------------------", 20, 100);
        doc.text("Gracias por elegir nuestro Hotel Boutique. Esperamos verle pronto.", 20, 110);
        
        // Descargar PDF
        doc.save(`Factura_${nombre.replace(/\s+/g, '_')}.pdf`);

        // Llamamos a la notificación flotante si existe
        if (typeof mostrarNotificacionFlotante === "function") {
            mostrarNotificacionFlotante(`Factura de <b>${nombre}</b> generada exitosamente.`, '#1B263B');
        }
        
    } catch(error) {
        console.error("Error generando PDF:", error);
        mostrarNotificacionFlotante("Error al generar el PDF. Verifica tu conexión a internet para cargar la librería jsPDF.", "#c62828");
    }
};

// Arrancar validaciones iniciales de usuario logueado
actualizarZonaUsuario();

// Inicializar animaciones de servicios (Intersection Observer)
const observerServicios = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.servicio').forEach(s => observerServicios.observe(s));

window.cambiarEstadoReserva = async function(id, nuevoEstado) {
    if (!confirm(`¿Estás seguro de marcar esta reserva como ${nuevoEstado}?`)) return;
    try {
        const respuesta = await authFetch(`${API_RESERVAS}/${id}/estado`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nuevoEstado })
        });
        if (respuesta.ok) {
            reservasAdminCache = [];
            habitacionesAdminCache = [];
            mostrarNotificacionFlotante(`Reserva actualizada a ${obtenerMetaEstadoReserva(nuevoEstado).texto}`, '#2e7d32');
            cargarTablaReservasRecepcion();
            cargarReportesAdmin();
            cargarHabitacionesAdmin();
        }
    } catch (error) {
        console.error("Error al actualizar estado", error);
    }
};

window.actualizarEstadoHabitacionAdmin = async function(idHabitacion, nuevoEstado) {
    const mensaje = nuevoEstado === "mantenimiento"
        ? "Quieres marcar esta habitación como mantenimiento?"
        : "Quieres volver a marcar esta habitación como disponible?";

    const confirmo = await confirmarEnPagina({
        titulo: "Actualizar habitación",
        mensaje,
        textoAceptar: "Sí, continuar",
        textoCancelar: "Volver"
    });

    if (!confirmo) return;

    try {
        const respuesta = await authFetch(`${API_HABITACIONES}/${idHabitacion}/estado`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nuevoEstado })
        });

        const resultado = await respuesta.json();

        if (!respuesta.ok) {
            mostrarNotificacionFlotante(resultado.mensaje || "No se pudo actualizar la habitación.", "#c62828");
            return;
        }

        habitacionesAdminCache = [];
        await Promise.all([
            cargarHabitacionesAdmin(),
            cargarReportesAdmin()
        ]);

        mostrarNotificacionFlotante(resultado.mensaje || "Estado de habitación actualizado.", "#1B263B");
    } catch (error) {
        console.error("Error al actualizar estado de habitación:", error);
        mostrarNotificacionFlotante("No se pudo conectar con el servidor para actualizar la habitación.", "#c62828");
    }
};

window.actualizarAccesoUsuarioAdmin = async function(idUsuario, bloqueado, estado) {
    const accion = bloqueado ? "bloquear" : "actualizar";
    const confirmo = await confirmarEnPagina({
        titulo: "Actualizar usuario",
        mensaje: `Quieres ${accion} este usuario?`,
        textoAceptar: "Sí, continuar",
        textoCancelar: "Volver"
    });

    if (!confirmo) return;

    try {
        const respuesta = await authFetch(`${API_USUARIOS}/${idUsuario}/acceso`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ bloqueado, estado })
        });

        const resultado = await respuesta.json();

        if (!respuesta.ok) {
            mostrarNotificacionFlotante(resultado.mensaje || "No se pudo actualizar el usuario.", "#c62828");
            return;
        }

        usuariosAdminCache = [];
        await cargarUsuariosAdmin();
        mostrarNotificacionFlotante(resultado.mensaje || "Usuario actualizado correctamente.", "#1B263B");
    } catch (error) {
        console.error("Error al actualizar acceso del usuario:", error);
        mostrarNotificacionFlotante("No se pudo conectar con el servidor para actualizar el usuario.", "#c62828");
    }
};

window.cambiarEstadoReserva = async function(id, nuevoEstado) {
    const confirmo = await confirmarEnPagina({
        titulo: "Actualizar reserva",
        mensaje: `¿Estás seguro de marcar esta reserva como ${nuevoEstado}?`,
        textoAceptar: "Sí, actualizar",
        textoCancelar: "Volver"
    });

    if (!confirmo) return;

    try {
        const respuesta = await authFetch(`${API_RESERVAS}/${id}/estado`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nuevoEstado })
        });

        if (respuesta.ok) {
            reservasAdminCache = [];
            habitacionesAdminCache = [];
            mostrarNotificacionFlotante(`Reserva actualizada a ${obtenerMetaEstadoReserva(nuevoEstado).texto}`, "#2e7d32");
            cargarTablaReservasRecepcion();
            cargarReportesAdmin();
            cargarHabitacionesAdmin();
        }
    } catch (error) {
        console.error("Error al actualizar estado", error);
    }
};
