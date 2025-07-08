# Besta Test

Aplicación desarrollada con **React Native** y **Expo**, que incluye:

- Navegación por pestañas con tres pantallas: **Inicio**, **Escáner** y **Cuenta**
-  Acceso a la cámara del dispositivo para tomar fotos
-  Pantalla de inicio de sesión con validaciones de formulario
-  Flujo de cierre de sesión que regresa a la pantalla de login
-  Componentes personalizados como `AppButton` y `AppTextInput`

---

##  Cómo empezar

### 1. Clona el repositorio

```bash
git clone https://github.com/EliJardinez/BestaTest.git
cd BestaTest
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Inicia la app

```bash
npx expo start
```

---

## Tecnologías utilizadas

- [React Native](https://reactnative.dev)
- [Expo](https://expo.dev)
- [React Navigation](https://reactnavigation.org)
- [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/)
- Componentes UI personalizados

---

## Pantallas

| Pantalla | Descripción                          |
|----------|--------------------------------------|
| Login    | Formulario con validación de acceso  |
| Inicio   | Pantalla de bienvenida               |
| Escáner  | Abre la cámara y toma una foto       |
| Cuenta   | Permite cerrar sesión                |

---

## Usuario de prueba

Usuario para probar el inicio de sesión:

- **Correo:** `usuario@besta.com`
- **Contraseña:** `Besta123`
