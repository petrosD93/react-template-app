import { useRef, useState, useTransition } from 'react'
import AuthService from '../../services/auth.service.ts'
import { InputText } from '../primitive/input-text/input-text'
import { Button } from 'primereact/button'
import './login.scss'
import { useTheme } from '../../hooks/theme-hook.ts'
import { Password } from '../primitive/password/password.tsx'
import { useAppDispatch } from '../../../store/storeHooks.ts'
import { setLoggedInUser } from '../../../store/slices/auth-slice.ts'
import { AuthState } from '../../../store/interfaces/auth-state'
import { Messages } from 'primereact/messages'

export interface LoginProps {}

export const Login = () => {
    const [isPending, startTransition] = useTransition()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const msgs = useRef<any>(null)

    const authService = AuthService.getInstance()
    const theme = useTheme()
    const dispatch = useAppDispatch()

    const onLogin = () => {
        startTransition(async () => {
            try {
                const user: AuthState = await authService.signIn(email, password)
                dispatch(setLoggedInUser(user))
                console.log(user)
            } catch (e: any) {
                msgs.current?.clear()
                msgs.current?.show({
                    id: '1',
                    sticky: true,
                    severity: 'error',
                    detail: 'Wrong Credentials. Please try again!',
                    closable: true,
                })
            }
        })
    }

    return (
        <div className="login-wrapper d-flex h-100 align-items-center flex-column justify-content-center position-relative">
            <div className="theme-button-wrapper position-absolute">
                <Button
                    className="theme-button"
                    outlined
                    icon={`pi ${theme.getTheme() === 'dark' ? 'pi-sun' : 'pi-moon'}`}
                    onClick={() => theme.changeTheme()}
                ></Button>
            </div>

            <div className="form-wrapper position-relative">
                <form onSubmit={onLogin}>
                    <div className="d-flex flex-column gap-4 login-contents">
                        <InputText
                            id="inpEmail"
                            value={email}
                            label="Email"
                            onChange={(e) => setEmail(e)}
                            tabIndex={0}
                            autoFocus
                        ></InputText>

                        <Password
                            id="inpPassword"
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e)}
                            feedback={false}
                            tabIndex={0}
                            toggleMask
                        />

                        <Button
                            onClick={onLogin}
                            disabled={!(email && password)}
                            label="Login"
                            loading={isPending}
                        ></Button>
                    </div>
                </form>
                <Messages className="login-messages" ref={msgs} />
            </div>
        </div>
    )
}
