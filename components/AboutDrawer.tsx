import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "./ui/scroll-area";

export function AboutDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="rounded-full">Lebih banyak</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full ">
          <DrawerHeader>
            <DrawerTitle>Tentang Event</DrawerTitle>
            <DrawerDescription>
              Detail informasi seputar baturraden trail run
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="mt-3 mb-10  border-t pt-10">
              <ScrollArea className="w-[100%] h-[400px] lg:h-[300px] px-2">
                <h1 className="text-2xl font-bold">Baturraden Trail Run</h1>
                <p className="mt-3">
                  Baturraden Trail Run merupakan salah satu bagian dari event
                  Baturraden Festival 2024 diselenggarakan oleh DINPORABUDPAR
                  Kabupaten Banyumas yang bekerja sama dengan Amikom Creative
                  Hub, dan Yoayo asia. Baturraden trail run bertujuan untuk
                  mempromosikan keindahan alam, warisan budaya, kuliner, dan
                  destinasi wisata yang ada di Banyumas. Baturraden Trail Run
                  terdapat dua event tersendiri yaitu
                </p>
                <h2 className="text-xl font-bold my-5 border-t pt-3">
                  1. Virtual Run
                </h2>
                <p>
                  Virtual Run di mana Peserta dapat berlari dari mana saja
                  menggunakan GPS tracker yang telah tersinkronisasi dengan
                  aplikasi Yoayo. Virtual Run merupakan acara sebelum Baturraden
                  Trail Run (Road to Baturraden Trail Run) dan dapat diikuti
                  oleh Sobat Runners di seluruh Indonesia. Sobat Runners yang
                  mengikuti Virtual Run akan mendapatkan Finisher Award dan
                  kesempatan mendapatkan Lucky Draw free slot 7 KM dan 21 KM
                  Baturraden Trail Run.
                </p>
                <h2 className="text-xl font-bold my-5 border-t pt-3">
                  2. Trail Run Offline Race
                </h2>
                <p>
                  Trail Run Offline Race di mana Peserta berlari secara
                  bersamaan di Kawasan Baturraden, Kab. Banyumas. Baturraden
                  Trail Run menjadi kesempatan yang sempurna bagi pelari dari
                  semua tingkatan untuk merasakan tantangan. Mari berlari
                  menyusuri keindahan alam Baturraden.
                </p>
              </ScrollArea>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button className="mb-5">Tutup</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
