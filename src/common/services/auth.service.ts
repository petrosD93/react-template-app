import {
    Auth,
    createUserWithEmailAndPassword,
    getAuth,
    IdTokenResult,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'
import { firestore } from './firebase.class.ts'
import { User, UserCredential } from '@firebase/auth'
import { AuthState } from '../../store/interfaces/auth-state'
import { FirebasePermissions } from '../../providers/permission-provider/permission-provider.tsx'

class AuthService {
    private static instance: AuthService
    private readonly auth: Auth

    constructor() {
        firestore()
        this.auth = getAuth()
    }

    public static getInstance(): AuthService {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService()
        }
        return AuthService.instance
    }

    public async signIn(email: string, password: string): Promise<AuthState> {
        return signInWithEmailAndPassword(this.auth, email, password).then((res: UserCredential) => {
            return res.user.toJSON() as AuthState
        })
    }

    public getCurrentUser(): User | null {
        return this.auth.currentUser
    }

    public async authStateReady(): Promise<void> {
        return this.auth.authStateReady()
    }

    public async getPermissions(): Promise<FirebasePermissions | undefined> {
        await this.getCurrentUser()?.getIdToken(true)
        const decodedToken: IdTokenResult | undefined = await this.getCurrentUser()?.getIdTokenResult()
        return decodedToken
            ? (decodedToken.claims.permissions as FirebasePermissions)
            : new Promise((resolve) => resolve(undefined))
    }

    public async signUp(email: string, password: string): Promise<any> {
        return createUserWithEmailAndPassword(this.auth, email, password)
    }

    public async signOut(): Promise<void> {
        return signOut(this.auth)
    }
}

export default AuthService
