import { CircleDollarSign} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar } from "../ui/avatar"
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export function Sales() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Últimos Clientes
                    </CardTitle>
                    <CircleDollarSign className="ml-auto h-4 w-4"/>
                </div>
                <CardDescription>
                    Novos Clientes nas ultimas 24 horas
                </CardDescription>
            </CardHeader>
            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src='https://github.com/jieff.png'/>
                        <AvatarFallback>JC</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Analista de Sistemas</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">jieff.cavalcanti@gmail.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src='https://github.com/jieff.png'/>
                        <AvatarFallback>JC</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Analista de Sistemas</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">jieff.cavalcanti@gmail.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src='https://github.com/jieff.png'/>
                        <AvatarFallback>JC</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Analista de Sistemas</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">jieff.cavalcanti@gmail.com</span>
                    </div>
                </article>
            </CardContent>
        </Card>
    )
}