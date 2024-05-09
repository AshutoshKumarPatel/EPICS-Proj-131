import { SignIn } from "@clerk/clerk-react";
import CenterLayout from "../layouts/CenterLayout";

const Login = () => {
    return (
        <CenterLayout>
            <SignIn path="/login" routing="path" signUpUrl="/register" redirectUrl={'/dashboard'} />
        </CenterLayout>
    );
}

export default Login;