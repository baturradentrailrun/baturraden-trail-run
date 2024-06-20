import * as React from "react";
// import { MinusIcon, PlusIcon } from ""
// import { Bar, BarChart, ResponsiveContainer } from "recharts"

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

export function AboutDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Lebih banyak</Button>
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
            <div className="mt-3 mb-10">
              Baturraden Trail Run merupakan salah satu bagian dari event
              Baturraden Festival 2024 diselenggarakan oleh DINPORABUDPAR
              Kabupaten Banyumas yang bekerja sama dengan Amikom Creative Hub.
              dan Yoayo.asia. Bertujuan untuk mempromosikan keindahan alam,
              warisan budaya, kuliner, dan destinasi wisata yang ada di
              Banyumas. Baturaden Trail Run terdapat dua event tersendiri yaitu
              Virtual Run di mana Peserta dapat berlari dari mana saja
              menggunakan GPS tracker yang telah tersinkronisasi dengan aplikasi
              Yoayo. Virtual Run merupakan acara sebelum Baturraden Trail Run
              (Road to Baturraden Trail Run) dan dapat diikuti oleh Sobat
              Runners di seluruh Indonesia. Sobat Runners yang mengikuti Virtual
              Run akan mendapatkan Finisher Award dan kesempatan mendapatkan
              Lucky Draw free slot 7 KM dan 21 KM Baturraden Trail Run. Acara
              puncak Baturraden Trail Run Offline Race di mana Peserta berlari
              secara bersamaan di Kawasan Baturraden, Kab. Banyumas. Baturraden
              Trail Run menjadi kesempatan yang sempurna bagi pelari dari semua
              tingkatan untuk merasakan tantangan. Mari berlari menyusuri
              keindahan alam Baturraden.
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button>Tutup</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
