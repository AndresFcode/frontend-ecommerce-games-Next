import Link from "next/link";
import { JoinLayout } from "@/layouts";
import { LoginForm } from "@/components/Auth";
import { Seo } from "@/components/Shared";
import styles from "./sign-in.module.scss";

export default function SignInPage() {
  return (
    <>
       <Seo title="Iniciar sesión en la pagina de Andres" />

       <JoinLayout>
        <div className={styles.signIn}>
          <h3>Iniciar sesión</h3>
          <LoginForm />

           <div className={styles.actions}>
            <Link href="/join/sign-up">¿No tienes una cuenta?</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}