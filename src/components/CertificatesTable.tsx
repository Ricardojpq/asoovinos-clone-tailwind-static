
import React, { useState, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  createColumnHelper,
  flexRender,
  SortingState,
  ColumnFiltersState,
} from '@tanstack/react-table';
import { 
  Award, 
  Download, 
  Eye, 
  Edit, 
  Trash2, 
  Plus,
  Search,
  Filter,
  FileDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import * as XLSX from 'xlsx';
import { useToast } from '@/hooks/use-toast';

interface Certificate {
  id: string;
  type: string;
  animal: string;
  status: 'Activo' | 'Por Vencer' | 'Vencido';
  issueDate: string;
  expiryDate: string;
  statusColor: string;
}

interface CertificatesTableProps {
  certificates: Certificate[];
  onAdd: () => void;
  onEdit: (certificate: Certificate) => void;
  onDelete: (id: string) => void;
  onView: (certificate: Certificate) => void;
  onDownload: (certificate: Certificate) => void;
}

const columnHelper = createColumnHelper<Certificate>();

export const CertificatesTable: React.FC<CertificatesTableProps> = ({
  certificates,
  onAdd,
  onEdit,
  onDelete,
  onView,
  onDownload,
}) => {
  const { toast } = useToast();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const columns = useMemo(
    () => [
      columnHelper.accessor('id', {
        header: 'ID',
        cell: (info) => (
          <span className="font-mono text-sm">{info.getValue()}</span>
        ),
      }),
      columnHelper.accessor('type', {
        header: 'Tipo',
        cell: (info) => (
          <span className="font-medium">{info.getValue()}</span>
        ),
      }),
      columnHelper.accessor('animal', {
        header: 'Animal',
        cell: (info) => (
          <span className="text-gray-600 dark:text-gray-400">{info.getValue()}</span>
        ),
      }),
      columnHelper.accessor('status', {
        header: 'Estado',
        cell: (info) => {
          const row = info.row.original;
          return (
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${row.statusColor}`}>
              {info.getValue()}
            </span>
          );
        },
      }),
      columnHelper.accessor('issueDate', {
        header: 'Fecha Emisión',
        cell: (info) => (
          <span>{new Date(info.getValue()).toLocaleDateString('es-ES')}</span>
        ),
      }),
      columnHelper.accessor('expiryDate', {
        header: 'Fecha Vencimiento',
        cell: (info) => (
          <span>{new Date(info.getValue()).toLocaleDateString('es-ES')}</span>
        ),
      }),
      columnHelper.display({
        id: 'actions',
        header: 'Acciones',
        cell: (info) => {
          const certificate = info.row.original;
          return (
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onView(certificate)}
                className="h-8 w-8 p-0"
              >
                <Eye size={16} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onEdit(certificate)}
                className="h-8 w-8 p-0"
              >
                <Edit size={16} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDownload(certificate)}
                className="h-8 w-8 p-0"
              >
                <Download size={16} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDelete(certificate.id)}
                className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          );
        },
      }),
    ],
    [onView, onEdit, onDownload, onDelete]
  );

  const table = useReactTable({
    data: certificates,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const exportToExcel = () => {
    try {
      const ws = XLSX.utils.json_to_sheet(certificates.map(cert => ({
        ID: cert.id,
        Tipo: cert.type,
        Animal: cert.animal,
        Estado: cert.status,
        'Fecha Emisión': new Date(cert.issueDate).toLocaleDateString('es-ES'),
        'Fecha Vencimiento': new Date(cert.expiryDate).toLocaleDateString('es-ES'),
      })));
      
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Certificados');
      XLSX.writeFile(wb, `certificados_${new Date().toISOString().split('T')[0]}.xlsx`);
      
      toast({
        title: 'Exportación exitosa',
        description: 'Los certificados han sido exportados a Excel.',
      });
    } catch (error) {
      toast({
        title: 'Error al exportar',
        description: 'No se pudo exportar los certificados.',
        variant: 'destructive',
      });
    }
  };

  const exportToCSV = () => {
    try {
      const headers = ['ID', 'Tipo', 'Animal', 'Estado', 'Fecha Emisión', 'Fecha Vencimiento'];
      const csvContent = [
        headers.join(','),
        ...certificates.map(cert => [
          cert.id,
          `"${cert.type}"`,
          `"${cert.animal}"`,
          `"${cert.status}"`,
          new Date(cert.issueDate).toLocaleDateString('es-ES'),
          new Date(cert.expiryDate).toLocaleDateString('es-ES'),
        ].join(','))
      ].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `certificados_${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: 'Exportación exitosa',
        description: 'Los certificados han sido exportados a CSV.',
      });
    } catch (error) {
      toast({
        title: 'Error al exportar',
        description: 'No se pudo exportar los certificados.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Buscar certificados..."
              value={globalFilter ?? ''}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={(table.getColumn('status')?.getFilterValue() as string) ?? ''}
            onChange={(e) =>
              table.getColumn('status')?.setFilterValue(e.target.value || undefined)
            }
            className="form-input sm:w-48"
          >
            <option value="">Todos los estados</option>
            <option value="Activo">Activo</option>
            <option value="Por Vencer">Por Vencer</option>
            <option value="Vencido">Vencido</option>
          </select>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={exportToCSV}>
            <FileDown size={16} className="mr-2" />
            CSV
          </Button>
          <Button variant="outline" size="sm" onClick={exportToExcel}>
            <Download size={16} className="mr-2" />
            Excel
          </Button>
          <Button onClick={onAdd} className="bg-golden-600 hover:bg-golden-700">
            <Plus size={16} className="mr-2" />
            Nuevo Certificado
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-md border bg-white dark:bg-gray-800">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="font-semibold">
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none flex items-center gap-2 hover:text-golden-600'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
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
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
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
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  <div className="flex flex-col items-center justify-center py-8">
                    <Award className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      No hay certificados
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Comienza creando tu primer certificado.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          Mostrando {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} a{' '}
          {Math.min(
            (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
            table.getFilteredRowModel().rows.length
          )}{' '}
          de {table.getFilteredRowModel().rows.length} certificados
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft size={16} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft size={16} />
          </Button>
          
          <div className="flex items-center gap-1">
            <span className="text-sm">Página</span>
            <strong>
              {table.getState().pagination.pageIndex + 1} de{' '}
              {table.getPageCount()}
            </strong>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight size={16} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <ChevronsRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CertificatesTable;
