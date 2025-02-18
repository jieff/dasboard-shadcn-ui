import ChartOverview from "@/components/chart";
import { Sales } from "@/components/sales";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeDollarSign, DollarSign, Percent, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {/** Card Vendas */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Total Vendas
                </CardTitle>
                <DollarSign className="ml-auto w-4 h-4"/>
              </div>

              <CardDescription>
                Total vendas em 90 dias
              </CardDescription>
              <CardContent>
                <p className="text-base sm:text-lg font-bold">R$ 40.000</p>
              </CardContent>
            </CardHeader>
          </Card>
          {/** Card Clientes */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Novos Clientes
                </CardTitle>
                <Users className="ml-auto w-4 h-4"/>
              </div>

              <CardDescription>
                Novos clientes em 90 dias
              </CardDescription>
              <CardContent>
                <p className="text-base sm:text-lg font-bold">254</p>
              </CardContent>
            </CardHeader>
          </Card>
         {/** Card Pedidos */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Pedidos Hoje
                </CardTitle>
                <Percent className="ml-auto w-4 h-4"/>
              </div>

              <CardDescription>
                Total Pedidos 7 dias
              </CardDescription>
              <CardContent>
                <p className="text-base sm:text-lg font-bold">68</p>
              </CardContent>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Total de Pedidos
                </CardTitle>
                <BadgeDollarSign className="ml-auto w-4 h-4"/>
              </div>

              <CardDescription>
                Total Pedidos 30 dias
              </CardDescription>
              <CardContent>
                <p className="text-base sm:text-lg font-bold">568</p>
              </CardContent>
            </CardHeader>
          </Card>

      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
          <ChartOverview/>
          <Sales/>
      </section>
    </main>
  );
}
