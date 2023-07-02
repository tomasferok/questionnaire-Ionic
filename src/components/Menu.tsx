import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookOutline, bookSharp, bookmarkOutline, heartOutline, heartSharp, helpOutline, helpSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, personOutline, personSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Questionnaire',
    url: '/page/Inbox',
    iosIcon: bookOutline,
    mdIcon: bookSharp
  },
  {
    title: 'User',
    url: '/page/Outbox',
    iosIcon: personOutline,
    mdIcon: personSharp
  },
  {
    title: 'Cuestion',
    url: '/page/Favorites',
    iosIcon: helpOutline,
    mdIcon: helpSharp
  }
];



const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main">
      <IonContent>
        <IonList id="inbox-list">
          <IonHeader>
          <IonToolbar>
          <IonTitle color={'light'}>QuestionaireMenu</IonTitle>
          </IonToolbar>
            </IonHeader>
          <IonNote color={'primary'}><h4>Create</h4></IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel color="light">{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
