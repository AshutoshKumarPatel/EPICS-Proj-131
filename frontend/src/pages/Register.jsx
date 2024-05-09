import { SignUp } from "@clerk/clerk-react";
import CenterLayout from "../layouts/CenterLayout";

const Register = () => {
    return (
        <CenterLayout>
            <SignUp path="/register" routing="app" signInUrl="/login" redirectUrl={'/dashboard'} />
        </CenterLayout>
    );
}

export default Register;