import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { Firestore } from '@firebase/firestore'
import { Analytics } from '@firebase/analytics'
import { FirebaseApp } from '@firebase/app'

class FirebaseService {
    private static instance: FirebaseService
    private app: FirebaseApp
    private analytics: Analytics
    private firestore: Firestore

    private constructor() {
        const firebaseConfig = {
            apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
            authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
            projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
            storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
            appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
            measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID,
        }

        this.app = initializeApp(firebaseConfig)
        this.analytics = getAnalytics(this.app)
        this.firestore = getFirestore(this.app)
    }

    public static getInstance(): FirebaseService {
        if (!FirebaseService.instance) {
            FirebaseService.instance = new FirebaseService()
        }
        return FirebaseService.instance
    }

    public getApp(): FirebaseApp {
        return this.app
    }

    public getAnalytics(): Analytics {
        return this.analytics
    }

    public getFirestore(): Firestore {
        return this.firestore
    }
}

export const firebaseService: FirebaseService = FirebaseService.getInstance()
export const firebaseApp: FirebaseApp = firebaseService.getApp()
export const firebaseAnalytics: Analytics = firebaseService.getAnalytics()
export const firestore = (): Firestore => firebaseService.getFirestore()
