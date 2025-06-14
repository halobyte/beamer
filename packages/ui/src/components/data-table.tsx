"use client";

import type { ColumnDef, Table as TTable } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { CircleAlert, Loader } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@beamer/ui/components/table";

interface DataTableProps<TData> {
  table: TTable<TData>;
  emptyMsg?: React.ReactNode;
}

export function DataTable<TData>({ table, emptyMsg }: DataTableProps<TData>) {
  return (
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
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="odd:bg-zinc-100 odd:hover:bg-zinc-200/50"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={table.getAllColumns().length}
                className="flex h-24 items-center justify-center text-center"
              >
                <CircleAlert />
                {emptyMsg !== undefined ? emptyMsg : "No results."}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export function DataTableLoading<T>({
  columns,
}: {
  columns: ColumnDef<T, unknown>[];
}) {
  const table = useReactTable({
    data: [] as T[],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <DataTable
      table={table}
      emptyMsg={
        <span className="flex justify-center gap-2 text-gray-500">
          Loading <Loader className="animate-spin" />
        </span>
      }
    />
  );
}
