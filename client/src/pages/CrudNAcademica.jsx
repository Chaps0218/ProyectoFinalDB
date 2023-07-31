import React, { useState } from 'react';
import {
    Container,
    Typography,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Button,
    Tabs,
    Tab,
    Box,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
  } from '@mui/material';
import {Add, Edit, Delete} from '@mui/icons-material';
import "../styles/CrudNAcademica.css";

const initialDepartamento = {
  nombre: '',
  descripcion: '',
};

const initialSede = {
  nombre: '',
  descripcion: '',
};

const initialCampoAmplio = {
  nombre: '',
  descripcion: '',
};

const initialCampoEspecifico = {
  nombre: '',
  descripcion: '',
  campoAmplio: '',
};


const CrudNAcademica = () => {

  // Campos locales
  const [departamentos, setDepartamentos] = useState([initialDepartamento]);
  const [sedes, setSedes] = useState([initialSede]);
  const [camposAmplios, setCamposAmplios] = useState([initialCampoAmplio]);
  const [camposEspecificos, setCamposEspecificos] = useState([initialCampoEspecifico]);
  const [defaultL, setDefaultL] = useState(null);

  const [currentTab, setCurrentTab] = useState(0);
  const [currentItem, setCurrentItem] = useState(null);
  const [editMode, setEditMode] = useState({});

 // Form-related state
 const [newItemFormOpen, setNewItemFormOpen] = useState(false);
 const [formValues, setFormValues] = useState({});

 const handleInputChange = (e) => {
   const { name, value } = e.target;
   setFormValues({ ...formValues, [name]: value });
 };

 const handleNewItemFormClose = () => {
   setNewItemFormOpen(false);
 };

 const handleNewItemSubmit = () => {
   switch (currentTab) {
     case 0: // Departamento
       setDepartamentos([...departamentos, formValues]);
       break;
     case 1: // Sede
       setSedes([...sedes, formValues]);
       break;
     case 2: // Campo Amplio
       setCamposAmplios([...camposAmplios, formValues]);
       break;
     case 3: // Campo Específico
       setCamposEspecificos([...camposEspecificos, formValues]);
       break;
     default:
       break;
   }

   setFormValues({});
   setNewItemFormOpen(false);
 };

  const handleNewItemForm = (currentTab) => {
    let newItem = {};

    switch (currentTab) {
      case 0: // Departamento
        newItem = { ...initialDepartamento };
        break;
      case 1: // Sede
        newItem = { ...initialSede };
        break;
      case 2: // Campo Amplio
        newItem = { ...initialCampoAmplio };
        break;
      case 3: // Campo Específico
        newItem = { ...initialCampoEspecifico };
        break;
      default:
        break;
    }

    setFormValues(newItem);
    setNewItemFormOpen(true);
  };
 


  const handleUpdate = (field) => {
    console.log('handleUpdate', field, currentItem);
    const updatedList = field === 'departamentos' ? [...departamentos] :
                      field === 'sedes' ? [...sedes] :
                      field === 'camposAmplios' ? [...camposAmplios] :
                      field === 'camposEspecificos' ? [...camposEspecificos]:
                      [...defaultL];

    const updatedItem = field === 'departamentos' ? { ...departamentos[currentItem] } :
                        field === 'sedes' ? { ...sedes[currentItem] } :
                        field === 'camposAmplios' ? { ...camposAmplios[currentItem] } :
                        field === 'camposEspecificos' ? { ...camposEspecificos[currentItem] }: 
                        {...defaultL[currentItem]};

    // Implement logic to update the corresponding item fields
    // For demonstration, I assume you have 'nombre' and 'descripcion' fields in all records
    updatedItem.nombre = document.getElementById(`edit-nombre-${field}-${currentItem}`).value;
    updatedItem.descripcion = document.getElementById(`edit-descripcion-${field}-${currentItem}`).value;

    updatedList[currentItem] = updatedItem;

    switch (field) {
      case 'departamentos':
        setDepartamentos(updatedList);
        break;
      case 'sedes':
        setSedes(updatedList);
        break;
      case 'camposAmplios':
        setCamposAmplios(updatedList);
        break;
      case 'camposEspecificos':
        setCamposEspecificos(updatedList);
        break;
      default:
        break;
    }

    // Exit edit mode after updating
    setEditMode({ ...editMode, [field]: { ...editMode[field], [currentItem]: false } });
    setCurrentItem(null);
  };

  const handleDelete = (field) => {
    const updatedList = field === 'departamentos' ? [...departamentos] :
                      field === 'sedes' ? [...sedes] :
                      field === 'camposAmplios' ? [...camposAmplios] :
                      [...camposEspecificos];

    updatedList.splice(currentItem, 1);

    switch (field) {
      case 'departamentos':
        setDepartamentos(updatedList);
        break;
      case 'sedes':
        setSedes(updatedList);
        break;
      case 'camposAmplios':
        setCamposAmplios(updatedList);
        break;
      case 'camposEspecificos':
        setCamposEspecificos(updatedList);
        break;
      default:
        break;
    }

    setCurrentItem(null);
  };

  return (
    <Container sx={{ padding: '1rem', margin: '1rem', width: 'auto' }}>

      <Tabs value={currentTab} onChange={(event, newValue) => setCurrentTab(newValue)}>
        <Tab label="Departamento" />
        <Tab label="Sede" />
        <Tab label="Campo Amplio" />
        <Tab label="Campo Específico" />
      </Tabs>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => handleNewItemForm(currentTab)}
        >
          Agregar{' '}
          {currentTab === 0
            ? 'Departamento'
            : currentTab === 1
            ? 'Sede'
            : currentTab === 2
            ? 'Campo Amplio'
            : currentTab === 3
            ? 'Campo Específico'
            : 'desconocido'}
        </Button>
      </Box>
     
    {/* Departamento */}
      {currentTab === 0 && (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Nombre</TableCell>
                      <TableCell>Descripción</TableCell>
                      <TableCell>Acciones</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {departamentos.map((record, index) => (
                      <TableRow key={index}>
                        <TableCell>{index}</TableCell>
  
                        {editMode.departamentos && editMode.departamentos[index] ? (
                          <>
                            <TableCell>
                              <TextField
                                defaultValue={record.nombre}
                                id={`edit-nombre-departamentos-${index}`}
                              />
                            </TableCell>
                            <TableCell>
                              <TextField
                                defaultValue={record.descripcion}
                                id={`edit-descripcion-departamentos-${index}`}
                              />
                            </TableCell>
                          </>
                        ) : (
                          <>
                            <TableCell>{record.nombre}</TableCell>
                            <TableCell>{record.descripcion}</TableCell>
                          </>
                        )}
                        <TableCell>
                          {/* Toggle edit mode when "Editar" button is clicked */}
                          {editMode.departamentos && editMode.departamentos[index] ? (
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={() => handleUpdate('departamentos')}
                              sx={{ marginRight: '1rem' }}
                            >
                              Actualizar
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              color="primary"
                              startIcon={<Edit />}
                              onClick={() => {
                                setCurrentItem(index);
                                setEditMode({ ...editMode, departamentos: { ...editMode.departamentos, [index]: true } });
                              }}
                              sx={{ marginRight: '1rem' }}
                            >
                              Editar
                            </Button>
                          )}
                          <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<Delete />}
                            onClick={() => handleDelete('departamentos')}
                          >
                            Borrar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
      )}

    {/* Sede */}
      {currentTab === 1 && (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Descripción</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sedes.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell>{index}</TableCell>

                      {editMode.sedes && editMode.sedes[index] ? (
                        <>
                          <TableCell>
                            <TextField
                              defaultValue={record.nombre}
                              id={`edit-nombre-sedes-${index}`}
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              defaultValue={record.descripcion}
                              id={`edit-descripcion-sedes-${index}`}
                            />
                          </TableCell>
                        </>
                      ) : (
                        <>
                          <TableCell>{record.nombre}</TableCell>
                          <TableCell>{record.descripcion}</TableCell>
                        </>
                      )}
                      <TableCell>
                        {/* Toggle edit mode when "Editar" button is clicked */}
                        {editMode.sedes && editMode.sedes[index] ? (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleUpdate('sedes')}
                            sx={{ marginRight: '1rem' }}
                          >
                            Actualizar
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            startIcon={<Edit />}
                            onClick={() => {
                              setCurrentItem(index);
                              setEditMode({ ...editMode, sedes: { ...editMode.sedes, [index]: true } });
                            }}
                            sx={{ marginRight: '1rem' }}
                          >
                            Editar
                          </Button>
                        )}
                        <Button
                          variant="contained"
                          color="secondary"
                          startIcon={<Delete />}
                          onClick={() => handleDelete('sedes')}
                        >
                          Borrar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
      )}

    {/* camposAmplios */}
      {currentTab === 2 && (
            <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Descripción</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {camposAmplios.map((record, index) => (
                  <TableRow key={index}>
                    <TableCell>{index}</TableCell>

                    {editMode.camposAmplios && editMode.camposAmplios[index] ? (
                      <>
                        <TableCell>
                          <TextField
                            defaultValue={record.nombre}
                            id={`edit-nombre-camposAmplios-${index}`}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            defaultValue={record.descripcion}
                            id={`edit-descripcion-camposAmplios-${index}`}
                          />
                        </TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell>{record.nombre}</TableCell>
                        <TableCell>{record.descripcion}</TableCell>
                      </>
                    )}
                    <TableCell>
                      {/* Toggle edit mode when "Editar" button is clicked */}
                      {editMode.camposAmplios && editMode.camposAmplios[index] ? (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleUpdate('camposAmplios')}
                          sx={{ marginRight: '1rem' }}
                        >
                          Actualizar
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={<Edit />}
                          onClick={() => {
                            setCurrentItem(index);
                            setEditMode({ ...editMode, camposAmplios: { ...editMode.camposAmplios, [index]: true } });
                          }}
                          sx={{ marginRight: '1rem' }}
                        >
                          Editar
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<Delete />}
                        onClick={() => handleDelete('camposAmplios')}
                      >
                        Borrar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      )}
    
    {/* camposEspecificos */}
      {currentTab === 3 && (
             <TableContainer component={Paper}>
             <Table>
               <TableHead>
                 <TableRow>
                   <TableCell>ID</TableCell>
                   <TableCell>Nombre</TableCell>
                   <TableCell>Descripción</TableCell>
                   <TableCell>Acciones</TableCell>
                 </TableRow>
               </TableHead>
               <TableBody>
                 {camposEspecificos.map((record, index) => (
                   <TableRow key={index}>
                     <TableCell>{index}</TableCell>
 
                     {editMode.camposEspecificos && editMode.camposEspecificos[index] ? (
                       <>
                         <TableCell>
                           <TextField
                             defaultValue={record.nombre}
                             id={`edit-nombre-camposEspecificos-${index}`}
                           />
                         </TableCell>
                         <TableCell>
                           <TextField
                             defaultValue={record.descripcion}
                             id={`edit-descripcion-camposEspecificos-${index}`}
                           />
                         </TableCell>

                       </>
                     ) : (
                       <>
                         <TableCell>{record.nombre}</TableCell>
                         <TableCell>{record.descripcion}</TableCell>
   
                       </>
                     )}
                     <TableCell>
                       {/* Toggle edit mode when "Editar" button is clicked */}
                       {editMode.camposEspecificos && editMode.camposEspecificos[index] ? (
                         <Button
                           variant="contained"
                           color="primary"
                           onClick={() => handleUpdate('camposEspecificos')}
                           sx={{ marginRight: '1rem' }}
                         >
                           Actualizar
                         </Button>
                       ) : (
                         <Button
                           variant="contained"
                           color="primary"
                           startIcon={<Edit />}
                           onClick={() => {
                             setCurrentItem(index);
                             setEditMode({ ...editMode, camposEspecificos: { ...editMode.camposEspecificos, [index]: true } });
                           }}
                           sx={{ marginRight: '1rem' }}
                         >
                           Editar
                         </Button>
                       )}
                       <Button
                         variant="contained"
                         color="secondary"
                         startIcon={<Delete />}
                         onClick={() => handleDelete('camposEspecificos')}
                       >
                         Borrar
                       </Button>
                     </TableCell>
                   </TableRow>
                 ))}
               </TableBody>
             </Table>
           </TableContainer>
      )}

<Dialog open={newItemFormOpen} onClose={handleNewItemFormClose}>
        <DialogTitle>Agregar nuevos detalles</DialogTitle>
        <DialogContent sx={{display: 'flex', gap: '0.5rem'}}>
          <TextField
            label="Nombre"
            name="nombre"
            value={formValues.nombre || ''}
            onChange={handleInputChange}
            fullWidth
            sx = {{margin: '1rem'}}
          />
          <TextField
            label="Descripción"
            name="descripcion"
            value={formValues.descripcion || ''}
            onChange={handleInputChange}
            fullWidth
            sx = {{margin: '1rem'}}
          />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleNewItemSubmit} sx = {{margin: '1rem'}}>
            Confirm
        </Button>
        <Button onClick={handleNewItemFormClose} sx = {{margin: '1rem'}}>
            Cancel
        </Button>
        </DialogActions>
      </Dialog>

    </Container>
  );
};

export default CrudNAcademica;
