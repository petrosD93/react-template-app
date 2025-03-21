export interface AuthState {
    loggedInUser: User | undefined
    tokenData: TokenData | undefined
}

interface ProviderData {
    providerId: string
    uid: string
    displayName: string | null
    email: string
    phoneNumber: string | null
    photoURL: string | null
}

interface StsTokenManager {
    refreshToken: string
    accessToken: string
    expirationTime: number
}

interface User {
    uid: string
    email: string
    emailVerified: boolean
    isAnonymous: boolean
    providerData: ProviderData[]
    stsTokenManager: StsTokenManager
    createdAt: string
    lastLoginAt: string
    apiKey: string
    appName: string
}
