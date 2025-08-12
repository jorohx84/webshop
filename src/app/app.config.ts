import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "webshop-c5a65", appId: "1:1048569435248:web:fe1410bc2370ff4267d0b5", storageBucket: "webshop-c5a65.firebasestorage.app", apiKey: "AIzaSyBu9LA-IrWms9y7y7YpV6a9V4_e1TKR9rY", authDomain: "webshop-c5a65.firebaseapp.com", messagingSenderId: "1048569435248" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
