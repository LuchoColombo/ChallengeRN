Parte 1: Teoría (Firebase)

Preguntas de Firebase Analytics

1. ¿Qué es Firebase Analytics y cómo se integra con una aplicación de React Native?

. Firebase Analytics es un servicio de análisis proporcionado por Google como parte de la plataforma Firebase. Permite a los desarrolladores rastrear eventos y métricas clave de sus aplicaciones móviles y web para entender el comportamiento de los usuarios y tomar decisiones basadas en datos.

Se integra de la siguiente manera:

Crea un proyecto en Firebase.
Instalar Firebase SDK
Esto generalmente implica agregar el archivo de configuración google-services.json en la ruta android/app/. (ANDROID)
GoogleService-Info.plist(IOS)
Importa el módulo de analytics en tu código de React Native
Empezar a registrar eventos utilizando logEvent para rastrear acciones significativas dentro de tu aplicación.

2. Describe el proceso de configurar eventos personalizados en Firebase Analytics.(Breve)

-Definir el evento: Decide qué acción o evento dentro de tu aplicación deseas rastrear, por ejemplo, clic en un botón o inicio de sesión.
Implementar el evento: Utiliza el SDK de Firebase Analytics para registrar el evento desde el código de tu aplicación móvil o web.
Parámetros opcionales: Incluye parámetros adicionales para enriquecer el evento con información contextual, como el ID del usuario o detalles específicos del evento.
Verificar en la consola: Una vez implementado, verifica que el evento personalizado se esté registrando correctamente en la consola de Firebase Analytics para asegurar que los datos estén siendo capturados adecuadamente.

3. ¿Cuáles son los principales beneficios de usar Firebase Analytics en una aplicación móvil?

Seguimiento detallado de eventos
Análisis en tiempo real
Segmentación de audiencias
Integración con otras herramientas de Firebase
Optimización del rendimiento

Preguntas de Firebase Crashlytics 

4. Explica qué es Firebase Crashlytics y cómo ayuda en el desarrollo de aplicaciones móviles.

Firebase Crashlytics es un servicio de informes de errores proporcionado por Google como parte de la plataforma Firebase. Su función principal es monitorear los fallos y errores que ocurren en aplicaciones móviles y proporcionar informes detallados en tiempo real sobre cada incidente.

Ayuda de la siguientes maneras:

Diagnóstico rápido de problemas
Mejora de la calidad
Ahorro de tiempo
Análisis de impacto

5. Describe los pasos para integrar Firebase Crashlytics en una aplicación de React Native.(Breve)

Instalar Firebase SDK
Inicializar Crashlytics (crashlytics().setCrashlyticsCollectionEnabled(true))
Manejar errores manualmente, ej : crashlytics().recordError(error) para registrar un error
Verificar que los errores llegan a la consola de Firebase crashlytics

6. ¿Cómo puedes monitorear y resolver problemas usando Firebase Crashlytics?

Se puede monitorear los problemas mediante las siguientes formas:

Recolección Automática de Errores
Registro de Errores Personalizados
Accediendo a la consola de Firebase
Creando Alertas para recibir notificaciones sobre errores críticos.
Comparando la estabilidad de diferentes versiones de la aplicación

Se pueden resolver los problemas mediante los siguientes pasos

Informe de Crashlytics, para ver cuales son los errores más frecuentes.
Revisión de informe, examinar para saber de donde proviene los errores.
Una vez identificado el problema realizar los cambios para corregirlo.
Luego monitorear Crashlytics para asegurarse que el problema se haya resuelto

Preguntas de Firebase Performance Monitoring

7. ¿Qué es Firebase Performance Monitoring y cómo se utiliza en aplicaciones móviles?

   Firebase Performance Monitoring es una herramienta de Firebase que permite monitorear y analizar el rendimiento de tus aplicaciones móviles en tiempo real. Esta herramienta te ayuda a entender cómo se comporta tu aplicación desde la perspectiva del usuario, identificar cuellos de botella y optimizar su rendimiento para ofrecer una experiencia más fluida y rápida.

8. Describe cómo configurar y utilizar los trazos personalizados en Firebase Performance Monitoring.(Breve)

   Agregar la dependencia en el archivo build.gradle o Podfile
   Inicialización en el código de la aplicación: por ejemplo, onCreate de la clase Application para Android o AppDelegate para iOS
   Crear un Trazo: FirebasePerformance.getInstance().newTrace("nombre_del_trazo").
   Inicio y Fin del Trazo: trace.start () para inicializar y trace.stop() para finalizarlo

9. ¿Qué tipo de métricas se pueden monitorear con Firebase Performance Monitoring?

Tiempo de Inicio de la Aplicación
Tiempo de Renderizado de Pantallas
Tiempo de Respuesta de Red
Uso de la CPU
Uso de la Memoria
Duración de Operaciones Personalizadas
Contadores y Métricas Personalizados

10. ¿Cómo puedes estar al tanto si de repente algo empieza a fallar en tu aplicación?

Monitoreo de Rendimiento Automático
Configurar alertas para recibir notificaciones cuando la app tiene problemas de rendimiento
Dashboard de Rendimiento en Tiempo Real

Preguntas de Notificaciones Push con Firebase

11. ¿Qué es Firebase Cloud Messaging (FCM) y cómo se utiliza para enviar notificaciones push?

    Firebase Cloud Messaging (FCM) es un servicio de mensajería que te permite enviar notificaciones push a dispositivos móviles y a través de la web. Es una solución que facilita la entrega de mensajes a usuarios de Android y iOS de manera confiable y escalable.
    Se utiliza mediante las funciones que te otorga FCM como por ejemplo:
    Para primer plano
    messaging().setBackgroundMessageHandler(...)
    Para segundo plano
    messaging().onMessage(...)

12. Describe el proceso de configuración de FCM en una aplicación de React Native.(Breve)

Instalar las dependencias
Configurar los archivos para android y IOS
Inicializar FireBase y FCM en la app
Crear notificaciones push personalizadas

13. ¿Cómo se pueden manejar las notificaciones en segundo plano y en primer plano con FCM?

FCM maneja automáticamente las notificaciones entrantes y las entrega al sistema operativo del dispositivo. El comportamiento depende de la plataforma (Android o iOS)

En segundo plano, un ejemplo es utilizando messaging().setBackgroundMessageHandler(...)

Recepción Automática: FCM maneja la recepción de notificaciones y las muestra en la bandeja de notificaciones del dispositivo.
Manejo de Datos Adicionales: Puedes recibir datos adicionales junto con la notificación y manejarlos en un servicio de fondo o un servicio específico para FCM.
Manejo en Segundo Plano: FCM permite el manejo de notificaciones en segundo plano a través de un "manejador de mensajes en segundo plano
Recepción Silenciosa: Puedes manejar notificaciones silenciosas que no muestran alertas al usuario pero te permiten ejecutar código para manejar datos o sincronizar contenido.
En primer plano, un ejemplo es utilizando messaging().onMessage(...)

Manejo de Notificación: Puedes interceptar la recepción de notificaciones y manejarlas según sea necesario.
Mostrar una Alerta: Puedes mostrar una alerta o notificación personalizada utilizando los datos recibidos.

Integración con Librerías de Notificación de React Native:
Para mostrar notificaciones al usuario, puedes utilizar librerías populares como react-native-notifications o react-native-push-notification.

Parte 2: Teoría (Hooks)

1. ¿Qué son los Hooks en React y por qué fueron introducidos?

Son funciones especiales que permiten a los componentes de función en React acceder al estado y a otras características de React sin necesidad de escribir una clase.

Los Hooks fueron introducidos en React para mejorar la experiencia de desarrollo al permitir que los componentes funcionales gestionen el estado y otras características de React de manera más efectiva, sin necesidad de clases.

2. Describe el uso de useState y proporciona un ejemplo de cómo se utiliza en un componente funcional.

Es un Hook en React que permite a los componentes funcionales manejar el estado local. Este Hook devuelve un par de valores: el estado actual y una función para actualizar ese estado. Al llamar a esta función, React re-renderizará el componente y mostrará el nuevo estado.

3. Explica useEffect y cómo se diferencia de los métodos de ciclo de vida en los componentes de clase.

Es un Hook fundamental en React que permite realizar efectos secundarios en componentes funcionales. Estos efectos secundarios pueden ser acciones como la suscripción a servicios externos, manipulación del DOM, o limpieza de recursos cuando un componente se desmonta.

El useEffect se ejecuta después de que el componente haya renderizado (montado) y se actualizada cuando alguna de sus dependencias se actualiza/modifica

Sintaxis y ubicación:
Es una función que se llama dentro del cuerpo del componente funcional.
Uso de múltiples efectos:
Puedes usar múltiples efectos useEffect dentro de un componente funcional. Cada uno maneja un efecto particular independiente.
Dependencias explícitas:
puedes especificar las dependencias que determinan cuándo debe ejecutarse el efecto.
Orden de ejecución:
Se ejecuta después de cada renderizado y re-renderizado del componente.
Limpieza de efectos:
Puedes devolver una función de limpieza que se ejecutará cuando el componente se desmonte o antes de que se vuelva a aplicar el efecto.

4. ¿Qué es useContext y cómo puede ser utilizado para manejar el estado global?

El useContext es un hook de React que permite acceder al contexto de React en componentes funcionales.

Se crea el context, luego ponerlo como padre de todos los componentes con los que quiero acceder al context, y por último utilizo el llamado del context en el componente hijo.

5. Describe un escenario en el cual useReducer sería más apropiado que useState.

El useReducer en React es más apropiado que useState en escenarios donde el estado del componente es más complejo y puede tener múltiples transiciones de estado basadas en acciones definidas

6. ¿Qué son los Hooks personalizados y cómo se crean?

Los Hooks personalizados en React son funciones JavaScript que siguen una convención específica: deben comenzar con la palabra use. Estos Hooks permiten encapsular lógica reutilizable y estado dentro de componentes funcionales de React, permitiendo una mejor separación de preocupaciones y reutilización de código.

Define la función del Hook: Crea una función que implemente la lógica que deseas encapsular. La función debe comenzar con la palabra use.
Implementa la lógica dentro del Hook: Dentro de esta función, puedes utilizar cualquier otro Hook de React si es necesario (como useState, useEffect, useContext, etc.), y devolver valores o funciones que el componente que utilice el Hook pueda necesitar.

7. ¿Qué es useRef y cómo se utiliza en un componente funcional?

El useRef es un Hook de React que proporciona una forma de mantener mutable un valor que persiste a lo largo del ciclo de vida del componente. A diferencia de useState, el valor de useRef no causa una re-renderización cuando cambia. Esto lo hace ideal para mantener referencias a elementos del DOM, valores que no afectan directamente el renderizado y para persistir valores entre re-renderizaciones.

8. ¿Cuál es la diferencia entre usar FlatList y un map con ScrollView para renderizar listas en React Native?

Las mayores diferencias son las siguientes:

Renderizado eficiente: FlatList implementa lazy loading, lo que significa que solo renderiza los elementos visibles en la pantalla y algunos cercanos a ella. Esto mejora el rendimiento al reducir la carga de renderizado y memoria.
Manejo automático del scroll: FlatList maneja automáticamente el scroll y la vista de los elementos dentro de una lista, proporcionando una experiencia de usuario fluida y optimizada.
Componente específico para listas: Está diseñado específicamente para renderizar grandes cantidades de datos de manera eficiente, por lo que es ideal para listas largas o dinámicas.
Implementación de key extractor: FlatList facilita la implementación del atributo keyExtractor, que ayuda a React Native a identificar de manera única cada elemento en la lista, mejorando el rendimiento al actualizar y reordenar elementos.

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
