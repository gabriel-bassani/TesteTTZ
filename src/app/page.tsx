import { CardObjetivo } from "@/components/card-objetivo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-neutral-200 w-full h-screen flex justify-center items-center">
      <div className="flex gap-4 w-3/4">
        <div className="flex-1">
          <CardObjetivo />
        </div>
        <div className="flex-1">
          <CardObjetivo />
        </div>
      </div>
    </div>
  );
}
