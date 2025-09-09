// ===== SISTEMA DE PESTAÑAS =====
// Selección de elementos: Botones de pestañas y paneles de formularios
const tabs = document.querySelectorAll('.tab, .link[data-tab]');
const panels = {
  login: document.getElementById('form-login'),
  register: document.getElementById('form-register')
};

// Función para cambiar entre pestañas (login/registro)
function openTab(name){
  // Actualizar estado visual de los botones de pestaña
  document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('is-active', b.dataset.tab===name));
  // Mostrar/ocultar el panel correspondiente
  Object.entries(panels).forEach(([k,el])=>el.classList.toggle('is-active', k===name));
  // Ocultar alertas al cambiar de pestaña
  hideAlert();
}

// Event listeners: Hacer clic en cualquier botón de pestaña
tabs.forEach(b=>b.addEventListener('click', ()=>openTab(b.dataset.tab)));

// ===== SISTEMA DE ALERTAS =====
// Referencia al contenedor de alertas
const alertBox = document.getElementById('alert');
// Mostrar mensaje de alerta
function showAlert(msg){ alertBox.textContent = msg; alertBox.hidden = false; }
// Ocultar alerta
function hideAlert(){ alertBox.hidden = true; }

// ===== UTILIDADES =====
// Convertir datos del formulario a objeto JavaScript
const serialize = (form) => Object.fromEntries(new FormData(form).entries());

// ===== FORMULARIO DE LOGIN =====
document.getElementById('form-login').addEventListener('submit', async (e)=>{
  e.preventDefault();
  const data = serialize(e.target);
  // Validación: Verificar que se completen los campos obligatorios
  if(!data.email || !data.password) return showAlert('Completá email y contraseña.');
  // Log de datos para desarrollo (en producción se enviaría al servidor)
  console.log('[LOGIN]', data);
  alert('Login OK (demo)');
});

// ===== FORMULARIO DE REGISTRO =====
document.getElementById('form-register').addEventListener('submit', async (e)=>{
  e.preventDefault();
  const data = serialize(e.target);
  // Validación: Verificar que se completen todos los campos
  if(!data.name || !data.email || !data.password || !data.password_confirm) return showAlert('Completá todos los campos.');
  // Validación: Longitud mínima de contraseña
  if(data.password.length < 8) return showAlert('La contraseña debe tener al menos 8 caracteres.');
  // Validación: Coincidencia de contraseñas
  if(data.password !== data.password_confirm) return showAlert('Las contraseñas no coinciden.');
  // Log de datos para desarrollo (en producción se enviaría al servidor)
  console.log('[REGISTER]', data);
  alert('Registro OK (demo)');
  // Cambiar automáticamente a la pestaña de login después del registro
  openTab('login');
});

// ===== FUNCIONALIDAD ADICIONAL =====
// Botón "¿Olvidaste tu contraseña?": Redirigir a página de recuperación
document.getElementById('forgot').addEventListener('click', ()=>alert('Linkear a /recuperar-contraseña'));
