
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import CertificatesTable from '@/components/CertificatesTable';
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

const Certificates = () => {
  const { toast } = useToast();
  const [certificates] = useState<Certificate[]>([
    {
      id: 'CERT-2024-001',
      type: 'Certificado Sanitario',
      animal: 'Cabra #CB-125',
      status: 'Activo',
      issueDate: '2024-01-10',
      expiryDate: '2024-12-10',
      statusColor: 'text-green-600 bg-green-100 dark:bg-green-900/30'
    },
    {
      id: 'CERT-2024-002',
      type: 'Certificado de Vacunación',
      animal: 'Lote #45',
      status: 'Activo',
      issueDate: '2024-01-08',
      expiryDate: '2024-07-08',
      statusColor: 'text-green-600 bg-green-100 dark:bg-green-900/30'
    },
    {
      id: 'CERT-2023-089',
      type: 'Certificado de Registro',
      animal: 'Cabra #CB-098',
      status: 'Por Vencer',
      issueDate: '2023-02-15',
      expiryDate: '2024-02-15',
      statusColor: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30'
    },
    {
      id: 'CERT-2023-076',
      type: 'Certificado Sanitario',
      animal: 'Cabra #CB-067',
      status: 'Vencido',
      issueDate: '2023-01-20',
      expiryDate: '2024-01-20',
      statusColor: 'text-red-600 bg-red-100 dark:bg-red-900/30'
    },
    {
      id: 'CERT-2024-003',
      type: 'Certificado de Vacunación',
      animal: 'Cabra #CB-156',
      status: 'Activo',
      issueDate: '2024-02-15',
      expiryDate: '2024-08-15',
      statusColor: 'text-green-600 bg-green-100 dark:bg-green-900/30'
    },
    {
      id: 'CERT-2023-088',
      type: 'Certificado de Registro',
      animal: 'Lote #32',
      status: 'Por Vencer',
      issueDate: '2023-03-10',
      expiryDate: '2024-03-10',
      statusColor: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30'
    }
  ]);

  const handleAdd = () => {
    toast({
      title: 'Nuevo Certificado',
      description: 'Funcionalidad de agregar certificado en desarrollo.',
    });
  };

  const handleEdit = (certificate: Certificate) => {
    toast({
      title: 'Editar Certificado',
      description: `Editando certificado ${certificate.id}`,
    });
  };

  const handleDelete = (id: string) => {
    toast({
      title: 'Eliminar Certificado',
      description: `Certificado ${id} eliminado correctamente.`,
    });
  };

  const handleView = (certificate: Certificate) => {
    toast({
      title: 'Ver Certificado',
      description: `Mostrando detalles del certificado ${certificate.id}`,
    });
  };

  const handleDownload = (certificate: Certificate) => {
    toast({
      title: 'Descargar Certificado',
      description: `Descargando certificado ${certificate.id}`,
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            Certificados
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gestiona todos los certificados de tus animales
          </p>
        </div>

        {/* Table */}
        <CertificatesTable
          certificates={certificates}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
          onDownload={handleDownload}
        />
      </div>
    </DashboardLayout>
  );
};

export default Certificates;
