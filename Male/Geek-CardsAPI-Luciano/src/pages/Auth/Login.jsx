import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = ({ onLogin, onSwitchToRegister }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
    });
    const [alert, setAlert] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Limpiar alerta cuando el usuario empiece a escribir
        if (alert) setAlert('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setAlert('');

        if (!formData.email || !formData.password) {
            setAlert('Completá email y contraseña.');
            setIsLoading(false);
            return;
        }

        // Simular delay de red
        setTimeout(() => {
            try {
                // Obtener usuarios del localStorage
                const savedUsers = localStorage.getItem('geekCardsUsers');
                const users = savedUsers ? JSON.parse(savedUsers) : [];

                // Buscar usuario
                const user = users.find(u => u.email === formData.email && u.password === formData.password);

                if (user) {
                    console.log('[LOGIN SUCCESS]', user);
                    setAlert('¡Login exitoso! Redirigiendo...');
                    
                    // Guardar sesión si "recordarme" está marcado
                    if (formData.remember) {
                        localStorage.setItem('geekCardsCurrentUser', JSON.stringify(user));
                    } else {
                        sessionStorage.setItem('geekCardsCurrentUser', JSON.stringify(user));
                    }

                    // Llamar callback si existe
                    if (onLogin) {
                        onLogin(user);
                    }

                    // Redirigir después de 1.5 segundos
                    setTimeout(() => {
                        navigate('/');
                    }, 1500);

                } else {
                    setAlert('Email o contraseña incorrectos.');
                }

            } catch (error) {
                console.error('[LOGIN ERROR]', error);
                setAlert('Error al iniciar sesión. Intentá nuevamente.');
            } finally {
                setIsLoading(false);
            }
        }, 1000);
    };

    const handleForgotPassword = () => {
        alert('Linkear a /recuperar-contraseña');
    };

    return (
        <div className="auth-container">
            <div className="auth-content">
                <div className="hero-section">
                    <img src="/images/logo-hero.png" alt="Geek Card" className="hero-logo" />
                </div>

                <main className="auth-main">
                    <div id="alert" className={`alert ${alert ? 'show' : ''}`} role="alert">
                        {alert}
                    </div>

                    <form id="form-login" className="auth-form active" onSubmit={handleSubmit}>
                        <h1 className="auth-title">Bienvenido</h1>
                        
                        <div className="field">
                            <label htmlFor="login-email">Email</label>
                            <input
                                id="login-email"
                                name="email"
                                type="email"
                                placeholder="tu@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="field">
                            <label htmlFor="login-pass">Contraseña</label>
                            <input
                                id="login-pass"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                minLength="8"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="row">
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={handleChange}
                                />
                                Recordarme
                            </label>
                            <button
                                type="button"
                                className="link"
                                onClick={handleForgotPassword}
                            >
                                ¿Olvidaste tu contraseña?
                            </button>
                        </div>
                        
                        <div className="button-row">
                            <button 
                                className="btn primary" 
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Iniciando sesión...' : 'Entrar'}
                            </button>
                            <div className="button-group">
                                <button
                                    className="btn secondary"
                                    type="button"
                                    onClick={() => navigate('/auth/register')}
                                    disabled={isLoading}
                                >
                                    Registrarse
                                </button>
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default Login;
