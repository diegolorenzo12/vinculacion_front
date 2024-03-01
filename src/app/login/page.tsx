'use client'
import { Input, Button, Card, CardBody} from "@nextui-org/react";
import { useState } from "react";
import axios from "axios";
import { useUserContext } from "../providers";
import { useRouter } from 'next/navigation'


interface studentLogin{
    username: string;
    password: string;
}

interface studentResponse{
    FirstName: string;
    LastNameP: string;
    LastNameM: string;
    Email: string;
    Cel: number;
    Mayor: string;
  }

  interface studentState{
    FirstName: string;
    LastNameP: string;
    LastNameM: string;
    Email: string;
    Cel: number;
    Mayor: string;
    Matricula: string;
  }

export default function Login() {
    const [user, setUser] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const { setUserData } = useUserContext();

    const route = useRouter();

    
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
        axios.post("https://redesigned-happiness-465pwgx49pxfjgj5-3000.app.github.dev/getStudent", student).then((response)=>{
            const data: studentResponse = response.data;    
            //console.log(data);
            
            const studentState = {
                FirstName: data.FirstName,
                LastNameP: data.LastNameP,
                LastNameM: data.LastNameM,
                Email: data.Email,
                Cel: data.Cel,
                Mayor: data.Mayor,
                Matricula: student.username
            }
            setUserData(studentState);

            //router.push('/form');
            route.replace('/form');
        }).catch((err)=>{
            console.log(err)
        }).finally(()=>{
            setLoading(false);
        })
    }

  return (
    <main className="flex min-h-screen flex-col items-center w-full justify-center bg-yellow">
        <Card className="lg:w-1/3 md:w-1/2 w-[90%]">
            <CardBody className="flex-col justify-center items-center w-full py-6"  style={{ overflowX: 'hidden' }}>
                <h1 className="text-xl font-bold">Inicio de sesión</h1>
                <form onSubmit={handleSubmit} className="px-2 m-2 flex flex-col justify-center items-center w-full">
                    <Input 
                        type="text" 
                        placeholder="m012345" 
                        label="Matrícula" 
                        isRequired 
                        className="py-3" 
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <Input 
                        type="password" 
                        label="Contraseña" 
                        isRequired 
                        className="py-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" color="primary" className="bg-black w-full py-3" isLoading={loading}>Entrar</Button>
                </form>
            </CardBody>
        </Card>
    </main>
  );
}
