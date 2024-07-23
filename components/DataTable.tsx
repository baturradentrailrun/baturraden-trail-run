"use client";

import * as React from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PesertaProps } from "@/types";
import { Badge } from "./ui/badge";
import {
  Map,
  Mountain,
  MountainSnow,
  Settings2,
  UsersRound,
  Waypoints,
} from "lucide-react";

import CardPeserta from "./CardPeserta";
import { Card, CardHeader } from "./ui/card";
import NumberTicker from "./ui/number-ticker";

export const columns: ColumnDef<PesertaProps>[] = [
  {
    id: "rowNumber",
    enableHiding: false,
    header: "#",
    cell: ({ row }) => {
      return <div>{row.index + 1}</div>;
    },
  },
  {
    accessorKey: "bib",
    header: "BIB",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("bib") ?? "-"}</div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "event",
    header: "Event",
    cell: ({ row }) => (
      <div className="capitalize">
        <Badge variant={"outline"} className="text-center">
          {row.getValue("event")}
        </Badge>
      </div>
    ),
  },
  {
    accessorKey: "domisili",
    header: "Kota",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("domisili") ?? "-"}</div>
    ),
  },
  {
    accessorKey: "komunitas",
    header: "Komunitas",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("komunitas") ?? "-"}</div>
    ),
  },
];

interface DataTableProps {
  data: PesertaProps[];
}

function getResidenceCounts(data: PesertaProps[]) {
  const counts: Record<string, number> = {};
  data.forEach((item) => {
    if (item.domisili) {
      const cleanedDomisili = item.domisili.trim().toLowerCase();
      if (counts[cleanedDomisili]) {
        counts[cleanedDomisili]++;
      } else {
        counts[cleanedDomisili] = 1;
      }
    }
  });
  return counts;
}

export function DataTable({ data }: DataTableProps) {
  const sortedData = React.useMemo(() => {
    return [...data].sort((a, b) => a.name.localeCompare(b.name));
  }, [data]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: sortedData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const residenceCounts = getResidenceCounts(data);

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <CardPeserta
          color="bg-gradient-to-t from-red-700 to-red-500 text-white"
          value={data?.length}
          title="Total Peserta"
          description="Semua Peserta"
          icon={<UsersRound size={20} />}
        />
        {/* total virtual run */}
        <CardPeserta
          color="bg-gradient-to-t from-green-700 to-green-500 text-white"
          value={
            data.filter(
              (peserta) => peserta.event.toLocaleLowerCase() === "virtual run"
            ).length
          }
          title="Virtual Run"
          description="Peserta Virtual Run"
          icon={<Waypoints size={20} />}
        />
        {/* total running 21km */}
        <CardPeserta
          color="bg-gradient-to-t from-blue-700 to-blue-500 text-white"
          value={
            data.filter(
              (peserta) => peserta.event.toLocaleLowerCase() === "21k"
            ).length
          }
          title="Running 21KM"
          description="Peserta Running 21KM"
          icon={<Mountain size={20} />}
        />
        {/* total running 7km */}
        <CardPeserta
          color="bg-gradient-to-t from-orange-700 to-orange-500 text-white"
          value={
            data.filter((peserta) => peserta.event.toLocaleLowerCase() === "7k")
              .length
          }
          title="Running 7KM"
          description="Peserta Running 7KM"
          icon={<MountainSnow size={20} />}
        />
      </div>

      <div className="my-5 border-t py-5">
        <div className="font-semibold  mb-5 uppercase text-xs flex items-center gap-2">
          <Map /> Daftar kota yang mengikuti :
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {Object.entries(residenceCounts)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([domisili, count]) => (
              <Card
                key={domisili}
                className="p-2 bg-gradient-to-t from-slate-900 to-slate-800 rounded-xl border-0 shadow-lg text-white"
              >
                <div className="flex items-center justify-between capitalize text-xs font-semibold">
                  {domisili}
                  <div
                    className={buttonVariants({
                      variant: "ghost",
                      size: "icon",
                      className: "bg-slate-950 text-white rounded-xl",
                    })}
                  >
                    {count ? <NumberTicker value={count} /> : 0}
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
      <div className="flex justify-between gap-2 items-center py-4">
        <Input
          placeholder="Cari nama kamu..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Settings2 size={20} /> Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Nama
                  <span className="font-bold mx-2 capitalize">
                    {String(table.getColumn("name")?.getFilterValue())}
                  </span>
                  tidak ada dalam list kami.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Showing {table.getFilteredRowModel().rows.length} row(s) data.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
