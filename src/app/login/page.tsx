'use client'
import { Input, Button, Card, CardBody} from "@nextui-org/react";
import { useState } from "react";
import axios from "axios";

interface studentLogin{
    username: string;
    password: string;
}

export default function Login() {
    const [user, setUser] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        setLoading(true)
        
        if(user === "" || password === ""){
            console.log("user and password are required")
            return;
        }
        const student: studentLogin = {
            username:user,
            password:password
        }
        axios.post("https://vinculacion.redisland-fd8089b7.australiaeast.azurecontainerapps.io/api/getStudent", student).then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err)
        })

        setLoading(false)


    }

  return (
    <main className="flex min-h-screen flex-col items-center w-full justify-center">
        <Card className="w-1/3">
            <CardBody className="flex-col justify-center items-center">
                <h1 className="text-xl font-bold">Login</h1>
                <form onSubmit={handleSubmit} className="m-2 flex flex-col justify-center items-center">
                    <Input 
                        type="text" 
                        placeholder="m012345" 
                        label="Matricula" 
                        isRequired 
                        className="py-3" 
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <Input 
                        type="password" 
                        placeholder="" 
                        label="contraseña" 
                        isRequired 
                        className="py-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" className="py-3" isLoading={loading}>Entrar</Button>
                </form>
            </CardBody>
        </Card>
    </main>
  );
}
