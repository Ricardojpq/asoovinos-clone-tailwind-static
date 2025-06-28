
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultModal: React.FC<ConsultModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    tattoo: '',
    breed: '',
    sex: '',
    registrationNumber: ''
  });

  const breeds = [
    'Nubia',
    'Alpino Francés',
    'Saanen',
    'Toggenburg',
    'Criolla Venezolana',
    'Boer',
    'Canaria',
    'Murciano-Granadina'
  ];

  const sexOptions = [
    'Macho',
    'Hembra'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Aquí se integraría con la API para enviar la consulta
    console.log('Datos de consulta:', formData);
    
    // Simular envío exitoso
    alert('Consulta enviada exitosamente. Te contactaremos pronto.');
    onClose();
    
    // Limpiar formulario
    setFormData({
      tattoo: '',
      breed: '',
      sex: '',
      registrationNumber: ''
    });
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] bg-background border-golden-200/20 dark:border-golden-700/20">
        <DialogHeader className="pb-6">
          <DialogTitle className="text-2xl font-bold text-foreground text-center">
            Consulta
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo Tatuaje */}
          <div className="space-y-2">
            <Label htmlFor="tattoo" className="text-sm font-medium text-foreground">
              Tatuaje
            </Label>
            <Input
              id="tattoo"
              type="text"
              placeholder="Ingrese el tatuaje"
              value={formData.tattoo}
              onChange={(e) => handleInputChange('tattoo', e.target.value)}
              className="w-full border-golden-200/50 focus:border-golden-500 focus:ring-golden-500 dark:border-golden-700/50 dark:focus:border-golden-400"
              required
            />
          </div>

          {/* Campo Seleccionar Raza */}
          <div className="space-y-2">
            <Label htmlFor="breed" className="text-sm font-medium text-foreground">
              Seleccione una raza
            </Label>
            <Select value={formData.breed} onValueChange={(value) => handleInputChange('breed', value)}>
              <SelectTrigger className="w-full border-golden-200/50 focus:border-golden-500 focus:ring-golden-500 dark:border-golden-700/50 dark:focus:border-golden-400">
                <SelectValue placeholder="Seleccione una raza" />
              </SelectTrigger>
              <SelectContent className="bg-background border-golden-200/20 dark:border-golden-700/20">
                {breeds.map((breed) => (
                  <SelectItem key={breed} value={breed} className="hover:bg-golden-50 dark:hover:bg-golden-900/20">
                    {breed}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Campo Seleccionar Sexo */}
          <div className="space-y-2">
            <Label htmlFor="sex" className="text-sm font-medium text-foreground">
              Seleccione el sexo
            </Label>
            <Select value={formData.sex} onValueChange={(value) => handleInputChange('sex', value)}>
              <SelectTrigger className="w-full border-golden-200/50 focus:border-golden-500 focus:ring-golden-500 dark:border-golden-700/50 dark:focus:border-golden-400">
                <SelectValue placeholder="Seleccione el sexo" />
              </SelectTrigger>
              <SelectContent className="bg-background border-golden-200/20 dark:border-golden-700/20">
                {sexOptions.map((sex) => (
                  <SelectItem key={sex} value={sex} className="hover:bg-golden-50 dark:hover:bg-golden-900/20">
                    {sex}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Campo Número de Registro */}
          <div className="space-y-2">
            <Label htmlFor="registrationNumber" className="text-sm font-medium text-foreground">
              Número de Registro
            </Label>
            <Input
              id="registrationNumber"
              type="text"
              placeholder="Ingrese el número de registro"
              value={formData.registrationNumber}
              onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
              className="w-full border-golden-200/50 focus:border-golden-500 focus:ring-golden-500 dark:border-golden-700/50 dark:focus:border-golden-400"
              required
            />
          </div>

          {/* Botones */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1 border-golden-300 text-golden-700 hover:bg-golden-50 dark:border-golden-600 dark:text-golden-400 dark:hover:bg-golden-900/20"
            >
              Cerrar
            </Button>
            <Button
              type="submit"
              className="flex-1 btn-primary"
            >
              Consultar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultModal;
