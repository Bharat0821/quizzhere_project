import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLoginUserMutation, useRegisterUserMutation, useLoadUserQuery } from "../features/api/authApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [signUpInput, setSignUpInput] = useState({ name: "", email: "", username: "", password: "" });

  const { refetch } = useLoadUserQuery();

  const [registerUser, { data: registerData, error: registerError, isLoading: registerIsLoading, isSuccess: registerIsSuccess }] = useRegisterUserMutation();
  const [loginUser, { data: loginData, error: loginError, isLoading: loginIsLoading, isSuccess: loginIsSuccess }] = useLoginUserMutation();
  const navigate = useNavigate();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "login") {
      setLoginInput({ ...loginInput, [name]: value });
    } else {
      setSignUpInput({ ...signUpInput, [name]: value });
    }
  };

  const handleRegistration = async (type) => {
    const inputData = type === "login" ? loginInput : signUpInput;
    const action = type === "login" ? loginUser : registerUser;
    await action(inputData);
  };

  useEffect(() => {
    if (registerIsSuccess && registerData) {
      toast.success(registerData.message || "Registration successful");
    }
    if (registerError) {
      toast.error(registerError?.data?.message || "A registration error occurred");
    }
    if (loginIsSuccess && loginData) {
      toast.success(loginData.message || "Login successful");
      refetch();
      navigate("/");
    }
    if (loginError) {
      toast.error(loginError?.data?.message || "A login error occurred");
    }
  }, [registerIsSuccess, registerData, registerError, loginIsSuccess, loginData, refetch, loginError, navigate]);

  return (
    <div className="flex items-center w-full justify-center mt-20 px-4">
      <Tabs defaultValue="signUp" className="w-full max-w-md">
        {/* Tabs */}
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signUp">Sign Up</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>

        {/* Sign Up */}
        <TabsContent value="signUp">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>Create a new account below.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label>Name</Label>
                <Input name="name" value={signUpInput.name} onChange={(e) => changeInputHandler(e, "signUp")} placeholder="India" required />
              </div>
              <div className="grid gap-2">
                <Label>Username</Label>
                <Input name="username" value={signUpInput.username} onChange={(e) => changeInputHandler(e, "signUp")} placeholder="India1947" required />
              </div>
              <div className="grid gap-2">
                <Label>Email</Label>
                <Input type="email" name="email" value={signUpInput.email} onChange={(e) => changeInputHandler(e, "signUp")} placeholder="Hindustan@India.com" required />
              </div>
              <div className="grid gap-2">
                <Label>Password</Label>
                <Input type="password" name="password" value={signUpInput.password} onChange={(e) => changeInputHandler(e, "signUp")} placeholder="••••••" required />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" disabled={registerIsLoading} onClick={() => handleRegistration("signUp")}>
                {registerIsLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</> : "Sign Up"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Login */}
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Enter your credentials to log in.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label>Email</Label>
                <Input type="email" name="email" value={loginInput.email} onChange={(e) => changeInputHandler(e, "login")} placeholder="Hindustan@India.com" required />
              </div>
              <div className="grid gap-2">
                <Label>Password</Label>
                <Input type="password" name="password" value={loginInput.password} onChange={(e) => changeInputHandler(e, "login")} placeholder="••••••" required />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" disabled={loginIsLoading} onClick={() => handleRegistration("login")}>
                {loginIsLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</> : "Login"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
