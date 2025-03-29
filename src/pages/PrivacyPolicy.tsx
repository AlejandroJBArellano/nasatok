import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Política de Privacidad</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{ height: "100vh" }}>
        <h1>Política de Privacidad</h1>

        <p>Última actualización: {new Date().toLocaleDateString()}</p>

        <h2>Introducción</h2>
        <p>
          Gracias por utilizar nuestra aplicación. Nos tomamos muy en serio la
          privacidad de nuestros usuarios y estamos comprometidos a proteger la
          información personal que compartís con nosotros. Esta Política de
          Privacidad explica cómo recopilamos, utilizamos, compartimos y
          protegemos vuestra información cuando utilizáis nuestra aplicación.
        </p>

        <h2>Información que Recopilamos</h2>
        <p>Podemos recopilar los siguientes tipos de información:</p>
        <ul>
          <li>
            <strong>Información Personal:</strong> Cuando os registráis o
            utilizáis nuestra aplicación, podemos recopilar información como
            nombre, dirección de correo electrónico y número de teléfono.
          </li>
          <li>
            <strong>Información del Dispositivo:</strong> Podemos recopilar
            información sobre el dispositivo que utilizáis para acceder a
            nuestra aplicación, como el modelo del dispositivo, sistema
            operativo, identificadores únicos y datos de red móvil.
          </li>
          <li>
            <strong>Información de Uso:</strong> Recopilamos información sobre
            cómo utilizáis nuestra aplicación, como las funciones que utilizáis
            y el tiempo que pasáis en la aplicación.
          </li>
        </ul>

        <h2>Cómo Utilizamos la Información</h2>
        <p>Utilizamos la información recopilada para:</p>
        <ul>
          <li>Proporcionar, mantener y mejorar nuestra aplicación</li>
          <li>Desarrollar nuevas funciones y servicios</li>
          <li>Personalizar vuestra experiencia</li>
          <li>Enviar actualizaciones, notificaciones y soporte</li>
          <li>Entender cómo se utiliza nuestra aplicación</li>
          <li>Prevenir actividades fraudulentas y mejorar la seguridad</li>
        </ul>

        <h2>Compartir Información</h2>
        <p>
          No vendemos ni compartimos vuestra información personal con terceros
          excepto en las siguientes circunstancias:
        </p>
        <ul>
          <li>Con vuestro consentimiento</li>
          <li>Para cumplir con requisitos legales</li>
          <li>Para proteger nuestros derechos y seguridad</li>
          <li>
            Con proveedores de servicios que nos ayudan a operar nuestra
            aplicación (los cuales están obligados a proteger vuestra
            información)
          </li>
        </ul>

        <h2>Seguridad de los Datos</h2>
        <p>
          Implementamos medidas de seguridad diseñadas para proteger vuestra
          información. Sin embargo, ningún sistema es completamente seguro y no
          podemos garantizar la seguridad absoluta de vuestra información.
        </p>

        <h2>Derechos de los Usuarios</h2>
        <p>
          Dependiendo de vuestra ubicación, podéis tener los siguientes
          derechos:
        </p>
        <ul>
          <li>Acceder a vuestra información personal</li>
          <li>Corregir información inexacta</li>
          <li>Eliminar vuestra información</li>
          <li>Objetar o restringir ciertos procesamientos</li>
          <li>Solicitar la portabilidad de vuestros datos</li>
        </ul>

        <h2>Retención de Datos</h2>
        <p>
          Conservamos vuestra información mientras mantengáis una cuenta activa
          o según sea necesario para proporcionar servicios. También podemos
          retener información para cumplir con obligaciones legales, resolver
          disputas y hacer cumplir nuestros acuerdos.
        </p>

        <h2>Menores</h2>
        <p>
          Nuestra aplicación no está destinada a menores de 13 años. No
          recopilamos a sabiendas información personal de niños menores de 13
          años. Si descubrimos que hemos recopilado información personal de un
          niño menor de 13 años, tomaremos medidas para eliminar esa
          información.
        </p>

        <h2>Cambios en esta Política</h2>
        <p>
          Podemos actualizar esta Política de Privacidad de vez en cuando. Os
          notificaremos cualquier cambio publicando la nueva Política de
          Privacidad en esta página y actualizando la fecha de "última
          actualización".
        </p>

        <h2>Contacto</h2>
        <p>
          Si tenéis preguntas sobre esta Política de Privacidad, podéis
          contactarnos en:
          <br />
          <IonText color="primary">contacto@ejemplo.com</IonText>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default PrivacyPolicy;
