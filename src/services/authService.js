export const LoginService = {
  validateLogin: (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);

    if (!email || !password) {
      return { success: false, message: "Todos los campos son obligatorios." };
    }

    if (!emailRegex.test(email)) {
      return { success: false, message: "El correo electrónico no es válido." };
    }

    if (password.length < 6) {
      return { success: false, message: "La contraseña debe tener al menos 6 caracteres." };
    }

    if (!hasUppercase || !hasNumber) {
      return {
        success: false,
        message: "La contraseña debe incluir al menos una mayúscula y un número.",
      };
    }

    // Usuario de Prueba
    const mockUser = {
      email: "usuario@besta.com",
      password: "Besta123",
    };

    if (email !== mockUser.email || password !== mockUser.password) {
      return { success: false, message: "¿Seguro que esos datos son correctos?" };
    }

    return { success: true };
  },
};
