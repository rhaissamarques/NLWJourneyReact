import { Plus } from "lucide-react";
import { Button } from "../../components/button";
import { DestinationAndDateHeader } from "./destination-and-date-header";

export function TripDetailsPage() {
  return (
    <div>
      <DestinationAndDateHeader />

      <main>
        <div>
          <div>
            <h2>Atividades</h2>
            <Button>
              <Plus />
              Cadastrar atividade
            </Button>
          </div>
          atividades
        </div>
        <div>
          important links

          <div className="w-full h-px bg-zinc-800"/>

          guests
        </div>
      </main>

        create activity modal

    </div>
  )
}