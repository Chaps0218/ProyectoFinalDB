import React, { useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  useDisclosure,
  Chip
} from "@nextui-org/react";

import {EditIcon} from "../../assets/EditIcon";
import {DeleteIcon} from "../../assets/DeleteIcon";
import { SearchIcon } from "../../assets/SearchIcon";
import {ChevronDownIcon} from "../../assets/ChevronDownIcon";
import {capitalize} from "../utils";
import { PlusIcon } from "../../assets/PlusIcon";

const columns = [
  {name: "VACANTES", uid: "ofe_vacantes", sortable: true},
  {name: "HORAS", uid: "post_id", sortable: true},
  {name: "POSTULACION", uid: "post_id", sortable: true},
  {name: "CONTRATACION", uid: "con_id", sortable: true},
  {name: "CAMPO ESPECIFICO", uid: "ce_id", sortable: true},
  {name: "CAMPO AMPLIO", uid: "ca_id", sortable: true},
  {name: "SEDE", uid: "sede_id", sortable: true},
  {name: "DEPARTAMENTO", uid: "dept_id", sortable: true},
  {name: "PERSONAL ACADEMICO", uid: "pa_id", sortable: true},
  {name: "ACTIVIDAD", uid: "act_id", sortable: true},
  {name: "ACCIONES", uid: "actions"},
];

const INITIAL_VISIBLE_COLUMNS = ["ofe_vacantes", "post_id","actions", "post_id", "con_id", "ce_id", "ca_id", "sede_id", "dept_id", "pa_id", "act_id"];

const ofertas = [
  {
    ofe_id: 1,
    ofe_vacantes: 2,
    post_id: 1,
    post_id: 1,
    con_id: 1,
    ce_id: 1,
    ca_id: 1,
    sede_id: 1,
    dept_id: 1,
    pa_id: 1,
    act_id: 1,
 },
 {
    ofe_id: 2,
    ofe_vacantes: 1,
    post_id: 2,
    post_id: 2,
    con_id: 2,
    ce_id: 2,
    ca_id: 2,
    sede_id: 2,
    dept_id: 2,
    pa_id: 2,
    act_id: 2,
 }

];

const postulaciones = [
    {
        post_id: 1,
        nombreCA: "P1",
    },
    {
        post_id: 2,
        nombreCA: "P2",
    }
]

const contrataciones = [
    {
        con_id: 1,
        nombreCA: "Con1",
    },
    {
        con_id: 2,
        nombreCA: "Con2",
    }
]

const camposEspecificos = [
    {
        ce_id: 1,
        nombreCA: "CE1",
    },
    {
        ce_id: 2,
        nombreCA: "CE2",
    }
]

const camposAmplios = [
    {
        ca_id: 1,
        nombreCA: "CA1",
    },
    {
        ca_id: 2,
        nombreCA: "CA2",
    }
]

const sedes = [
    {
        sede_id: 1,
        nombreCA: "S1",
    },
    {
        sede_id: 2,
        nombreCA: "S2",
    }
]

const departamentos = [
    {
        dept_id: 1,
        nombreCA: "D1",
    },
    {
        dept_id: 2,
        nombreCA: "D2",
    }
]

const personalAcademico = [
    {
        pa_id: 1,
        nombreCA: "PA1",
    },
    {
        pa_id: 2,
        nombreCA: "PA2",
    }
]

const actividades = [
    {
        act_id: 1,
        nombreCA: "A1",
    },
    {
        act_id: 2,
        nombreCA: "A2",
    }
]


const statusOptions = [];
const statusOptionsR = [];
const statusOptionsA = [];
const statusOptionsB = [];
const statusOptionsC = [];
const statusOptionsD = [];
const statusOptionsE = [];
const statusOptionsF = [];

ofertas.forEach(campo => {
  const matchingNomCampA = postulaciones.find(item => item.post_id === campo.post_id);
  if (matchingNomCampA && !statusOptions.some(option => option.name === matchingNomCampA.nombreCA)) {
    statusOptions.push({ name: matchingNomCampA.nombreCA, uid: matchingNomCampA.nombreCA });
  }

  console.log(statusOptions);
});

ofertas.forEach(campo => {
    const matchingNomCampAR = contrataciones.find(item => item.con_id === campo.con_id);
    if (matchingNomCampAR && !statusOptionsR.some(option => option.name === matchingNomCampAR.nombreCA)) {
      statusOptionsR.push({ name: matchingNomCampAR.nombreCA, uid: matchingNomCampAR.nombreCA });
    }
  
    console.log(statusOptionsR);
  });

ofertas.forEach(campo => {
    const matchingNomCampAE = camposEspecificos.find(item => item.ce_id === campo.ce_id);
    if (matchingNomCampAE && !statusOptionsA.some(option => option.name === matchingNomCampAE.nombreCA)) {
        statusOptionsA.push({ name: matchingNomCampAE.nombreCA, uid: matchingNomCampAE.nombreCA });
    }

    console.log(statusOptionsA);
});

ofertas.forEach(campo => {
    const matchingNomCampAA = camposAmplios.find(item => item.ca_id === campo.ca_id);
    if (matchingNomCampAA && !statusOptionsB.some(option => option.name === matchingNomCampAA.nombreCA)) {
        statusOptionsB.push({ name: matchingNomCampAA.nombreCA, uid: matchingNomCampAA.nombreCA });
    }

    console.log(statusOptionsB);
});

ofertas.forEach(campo => {
    const matchingNomCampAS = sedes.find(item => item.sede_id === campo.sede_id);
    if (matchingNomCampAS && !statusOptionsC.some(option => option.name === matchingNomCampAS.nombreCA)) {
        statusOptionsC.push({ name: matchingNomCampAS.nombreCA, uid: matchingNomCampAS.nombreCA });
    }

    console.log(statusOptionsC);
});

ofertas.forEach(campo => {
    const matchingNomCampAD = departamentos.find(item => item.dept_id === campo.dept_id);
    if (matchingNomCampAD && !statusOptionsD.some(option => option.name === matchingNomCampAD.nombreCA)) {
        statusOptionsD.push({ name: matchingNomCampAD.nombreCA, uid: matchingNomCampAD.nombreCA });
    }

    console.log(statusOptionsD);
});

ofertas.forEach(campo => {
    const matchingNomCampAPA = personalAcademico.find(item => item.pa_id === campo.pa_id);
    if (matchingNomCampAPA && !statusOptionsE.some(option => option.name === matchingNomCampAPA.nombreCA)) {
        statusOptionsE.push({ name: matchingNomCampAPA.nombreCA, uid: matchingNomCampAPA.nombreCA });
    }

    console.log(statusOptionsE);
});

ofertas.forEach(campo => {
    const matchingNomCampAA = actividades.find(item => item.act_id === campo.act_id);
    if (matchingNomCampAA && !statusOptionsF.some(option => option.name === matchingNomCampAA.nombreCA)) {
        statusOptionsF.push({ name: matchingNomCampAA.nombreCA, uid: matchingNomCampAA.nombreCA });
    }

    console.log(statusOptionsF);
});

const getPostIdFromNombreCA = (nameCA) => {
    const foundItem = postulaciones.find((item) => item.nombreCA === nameCA);
    return foundItem ? foundItem.post_id : null;
  };

const getRHIdFromNombreRH = (nameCA) => {
    const foundItem = contrataciones.find((item) => item.nombreCA === nameCA);
    return foundItem ? foundItem.con_id : null;
};

const getCEIdFromNombreCE = (nameCA) => {
    const foundItem = camposEspecificos.find((item) => item.nombreCA === nameCA);
    return foundItem ? foundItem.ce_id : null;
};

const getCAIdFromNombreCA = (nameCA) => {
    const foundItem = camposAmplios.find((item) => item.nombreCA === nameCA);
    return foundItem ? foundItem.ca_id : null;
};

const getSedeIdFromNombreSede = (nameCA) => {
    const foundItem = sedes.find((item) => item.nombreCA === nameCA);
    return foundItem ? foundItem.sede_id : null;
};

const getDeptIdFromNombreDept = (nameCA) => {
    const foundItem = departamentos.find((item) => item.nombreCA === nameCA);
    return foundItem ? foundItem.dept_id : null;
};

const getPAIdFromNombrePA = (nameCA) => {
    const foundItem = personalAcademico.find((item) => item.nombreCA === nameCA);
    return foundItem ? foundItem.pa_id : null;
};

const getActIdFromNombreAct = (nameCA) => {
    const foundItem = actividades.find((item) => item.nombreCA === nameCA);
    return foundItem ? foundItem.act_id : null;
};



const findNombreById = (post_id) => {
  const candidato = postulaciones.find((c) => c.sede_id === post_id);

  if (candidato) {
    return candidato.nombreCA;
  } else {
    return "Sede not found";
  }
}

export default function App() {

  //!Variables para rellenar a todas las ofertas
  const [actividad, setActividad] = React.useState(ofertas);

  //!Variables de agregacion y actualizacion
  const [sol_id, setId] = React.useState(0); //Para actualizar
  const [ofe_vacantes, setSol_aprobacion] = React.useState(0);
  const [ofe_horas, setOfe_horas] = React.useState(0);

    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Selecciona"])); //postulacion
    const [selectedKeysR, setSelectedKeysR] = React.useState(new Set(["Selecciona"])); //contratacion
    const [selectedKeysB, setSelectedKeysB] = React.useState(new Set(["Selecciona"])); //campo especifico
    const [selectedKeysC, setSelectedKeysC] = React.useState(new Set(["Selecciona"])); //campo amplio
    const [selectedKeysD, setSelectedKeysD] = React.useState(new Set(["Selecciona"])); //sede
    const [selectedKeysE, setSelectedKeysE] = React.useState(new Set(["Selecciona"])); //departamento
    const [selectedKeysF, setSelectedKeysF] = React.useState(new Set(["Selecciona"])); //personal academico
    const [selectedKeysG, setSelectedKeysG] = React.useState(new Set(["Selecciona"])); //actividad

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const selectedValueR = React.useMemo(
    () => Array.from(selectedKeysR).join(", ").replaceAll("_", " "),
    [selectedKeysR]
  );

  const selectedValueB = React.useMemo(
    () => Array.from(selectedKeysB).join(", ").replaceAll("_", " "),
    [selectedKeysB]
  );

    const selectedValueC = React.useMemo(
        () => Array.from(selectedKeysC).join(", ").replaceAll("_", " "),
        [selectedKeysC]
    );

    const selectedValueD = React.useMemo(
        () => Array.from(selectedKeysD).join(", ").replaceAll("_", " "),
        [selectedKeysD]
    );

    const selectedValueE = React.useMemo(
        () => Array.from(selectedKeysE).join(", ").replaceAll("_", " "),
        [selectedKeysE]
    );

    const selectedValueF = React.useMemo(
        () => Array.from(selectedKeysF).join(", ").replaceAll("_", " "),
        [selectedKeysF]
    );

    const selectedValueG = React.useMemo(
        () => Array.from(selectedKeysG).join(", ").replaceAll("_", " "),
        [selectedKeysG]
    );


  //!Variables para abrir y cerrar los modales de agregar y actualizar
  const { isOpen: isOpenModal1, onOpen: onOpenModal1, onOpenChange: onOpenChangeModal1 } = useDisclosure();
  const { isOpen: isOpenModal2, onOpen: onOpenModal2, onOpenChange: onOpenChangeModal2 } = useDisclosure();

  //Limpio los valores
  const clearInputFields = () => {
    setSol_aprobacion("");
    setSelectedKeys(new Set(["Selecciona"]));
    setSelectedKeysR(new Set(["Selecciona"]));
    setSelectedKeysB(new Set(["Selecciona"]));
  };

  // const validacionN = React.useMemo(() => {
  //   if (ofe_vacantes === "") return undefined;

  //   return ofe_vacantes === "" ? "invalido" : "valido";
  // }, [ofe_vacantes]);

  //!Funcion para agregar una nueva actividad
  const handleAgregar = React.useCallback(() => {
    console.log(selectedKeysB.currentKey);
    const newUser = {
        sol_id: ofertas.length + 1,  
        ofe_vacantes: selectedKeysB.currentKey === "si" ? true : false,
        con_id: getRHIdFromNombreRH(selectedValueR),
        post_id: getPostIdFromNombreCA(selectedValue),
    };
    setActividad((prevUsers) => [...prevUsers, newUser]);
    clearInputFields(); // Call the function to clear input fields
  }, [selectedValue, selectedValueR, selectedKeysB]);

  //!Funcion de eliminado
  const handleDelete = React.useCallback((sol_id) => {
    console.log("Deleting user with sol_id: ", sol_id);
    console.log(actividad);
    setActividad((prevUsers) => prevUsers.filter((user) => user.sol_id !== sol_id));
    console.log(actividad);
  }, [actividad]);

  //!Funcion de actualizar
  const handleActualizar = React.useCallback(() => {
    const editedUser = {
        sol_id: sol_id,
        ofe_vacantes: ofe_vacantes === "true" ? true : false,
        con_id: getRHIdFromNombreRH(selectedValueR),
        post_id: getPostIdFromNombreCA(selectedValue),
    };
    setActividad((prevUsers) => prevUsers.map((user) => (user.sol_id === sol_id ? editedUser : user)));
    clearInputFields(); // Call the function to clear input fields
  }, [sol_id, ofe_vacantes, selectedValue, selectedValueR]);


  const renderCell = React.useCallback((user, columnKey) => {

    const cellValue = user[columnKey];

    const handleButtonPress = (sol_id, ofe_vacantes) => {
        onOpenModal1(); // Open the modal
        setId(sol_id); // Clear the sol_id
        setSol_aprobacion(ofe_vacantes);
    }

    switch (columnKey) {
      case "ofe_vacantes":
        return (
          <Chip className="capitalize" color={cellValue === true ? "success" : "danger"} size="sm" variant="flat">
            {cellValue === true ? "Si" : "No"}
          </Chip>
        );
      case "post_id":
        const foundCampoA = ofertas.find(item => item.post_id === user.post_id);
        const matchingNomCampA = foundCampoA ? postulaciones.find(item => item.post_id === foundCampoA.post_id) : null;

        return (
            <Chip className="capitalize" color="warning" size="sm" variant="flat">
            {matchingNomCampA ? matchingNomCampA.nombreCA : 'No matching value'}
            </Chip>
        );
        case "con_id":
          const foundCampoAR = ofertas.find(item => item.con_id === user.con_id);
          const matchingNomCampAR = foundCampoAR ? contrataciones.find(item => item.con_id === foundCampoAR.con_id) : null;
  
          return (
              <Chip className="capitalize" color="primary" size="sm" variant="flat">
              {matchingNomCampAR ? matchingNomCampAR.nombreCA : 'No matching value'}
              </Chip>
          );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">

          <Button color="success" 
            isIconOnly 
            variant="faded" 
            onPress={ () => handleButtonPress(user.sol_id, user.ofe_vacantes, user.con_id)}
            >
              <EditIcon />
            </Button>

            <Button isIconOnly color="danger" variant="faded" aria-label="Like" onClick={() => handleDelete(user.sol_id)}>
              <DeleteIcon />
            </Button>  
          </div>
        );
      default:
        return cellValue;
    }
  }, [handleDelete, onOpenModal1]);
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  //!Funciones de filtro
  const [filterValue, setFilterValue] = React.useState("");
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [rowsPerPage, setRowsPerPage] = React.useState(1);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "age",
    direction: "ascending",
  });   
  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...actividad];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        findNombreById(user.post_id).toLowerCase().includes(filterValue.toLowerCase()),
      );
    }

    return filteredUsers;
  }, [filterValue, hasSearchFilter, actividad]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  //!Funciones de paginacion
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;
      console.log(first);
      console.log(second);
      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(()=>{
    setFilterValue("")
    setPage(1)
  },[])

  //!Contenido de arriba 
  const topContent = React.useMemo(() => {
  
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Buscar por candidato..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                  Columnas
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            <Button color="success" 
            endContent={<PlusIcon />}
            onPress={onOpenModal2}
            >
              Agregar nuevo
            </Button>
            
            <Modal 
              isOpen={isOpenModal2} 
              onOpenChange={onOpenChangeModal2}
              placement="top-center"
              size="lg" 
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">Agregar solicitud</ModalHeader>
                    <ModalBody>
                      <div className="flex justify-between items-center">
                        <div className="m-2">
                
                            <Chip color="success" variant="bordered">Aprobación: </Chip> 
                                    
                        </div>
                              <Dropdown>
                                <DropdownTrigger>
                                    <Button 
                                      variant="flat"
                                      className="capitalize"
                                    >
                                      {selectedValueB}
                                    </Button>
                                  </DropdownTrigger>
                                  <DropdownMenu 
                                    aria-label="Single selection actions"
                                    variant="flat"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    selectedKeys={selectedKeysB}
                                    onSelectionChange={setSelectedKeysB}
                                  >

                                  <DropdownItem key="si">Si</DropdownItem>
                                  <DropdownItem key="no">No</DropdownItem>
                                      
                                  </DropdownMenu>
                              </Dropdown>   
                 
                        <div className=" m-2">
                            <Chip color="warning" variant="bordered">Candidato: </Chip> 
                                
                            </div>
                              <Dropdown>
                                <DropdownTrigger>
                                    <Button 
                                      variant="flat"
                                      className="capitalize"
                                    >
                                      {selectedValue}
                                    </Button>
                                  </DropdownTrigger>
                                  <DropdownMenu 
                                    aria-label="Single selection actions"
                                    variant="flat"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    selectedKeys={selectedKeys}
                                    onSelectionChange={setSelectedKeys}
                                  >

                                  {statusOptions.map((column) => (
                                    <DropdownItem key={column.name} className="capitalize">
                                        {capitalize(column.name)}
                                    </DropdownItem>
                                    ))}
                                      
                                  </DropdownMenu>
                              </Dropdown>   
                      
                      </div>

                      <div className="flex justify-center items-center">
                            
                            <div className="flex-grow-0">
                            <Chip color="primary" variant="bordered">Recursos humanos: </Chip> 
                            </div>

                            <div className="m-2 flex-grow-2">
                              <Dropdown>
                                <DropdownTrigger>
                                    <Button 
                                      variant="flat"
                                      className="capitalize"
                                    >
                                      {selectedValueR}
                                    </Button>
                                  </DropdownTrigger>
                                  <DropdownMenu 
                                    aria-label="Single selection actions"
                                    variant="flat"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    selectedKeys={selectedKeysR}
                                    onSelectionChange={setSelectedKeysR}
                                  >

                                  {statusOptionsR.map((column) => (
                                    <DropdownItem key={column.name} className="capitalize">
                                        {capitalize(column.name)}
                                    </DropdownItem>
                                    ))}
                                      
                                  </DropdownMenu>
                              </Dropdown>  
                            </div>

                        </div>

                    </ModalBody>
                    <ModalFooter>
                      <Button variant="outline" onClick={onClose}>
                        Cancelar
                      </Button>
                      <Button color="success" onClick={handleAgregar}>Agregar</Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>

          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {actividad.length} titulos</span>
          <label className="flex items-center text-default-400 text-small">
            Titulo por pagina:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    visibleColumns,
    onRowsPerPageChange,
    onSearchChange,
    onClear,
   actividad.length,
    onOpenModal2,   
    handleAgregar,
    isOpenModal2,
    onOpenChangeModal2,
    selectedKeys,
    selectedValue,
    selectedKeysB,
    selectedKeysR,
    selectedValueB, 
    selectedValueR
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="success"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previo
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Siguiente
          </Button>
        </div>
      </div>
    );
  }, [page, pages, onNextPage, onPreviousPage]);

  return (
    <div>
    <Table
    aria-label="Example table with custom cells, pagination and sorting"
    isHeaderSticky
    bottomContent={bottomContent}
    bottomContentPlacement="outside"
    classNames={{
      wrapper: "max-h-[382px]",
    }}
    sortDescriptor={sortDescriptor}
    topContent={topContent}
    topContentPlacement="outside"
    onSortChange={setSortDescriptor}
  >
    <TableHeader columns={headerColumns}>
      {(column) => (
        <TableColumn
          key={column.uid}
          align={column.uid === "actions" ? "center" : "start"}
          allowsSorting={column.sortable}
        >
          {column.name}
        </TableColumn>
      )}
    </TableHeader>
    <TableBody emptyContent={"No se encontraron titulos"} items={sortedItems}>
      {(item) => (
        <TableRow key={item.sol_id}>
          {(columnKey) => <TableCell>{renderCell(item, columnKey, onOpenModal1)}</TableCell>}
        </TableRow>
      )}
    </TableBody>
    </Table>

    <Modal isOpen={isOpenModal1} onOpenChange={onOpenChangeModal1}>
    <ModalContent>
      {(onClose) => ( 
        <>
          <ModalHeader className="flex flex-col gap-1">Actualizar Titulo</ModalHeader>
          <ModalBody>
              <div className="flex justify-between items-center">
                <div className="m-2">
        
                    <Chip color="success" variant="bordered">Aprobación: </Chip> 
                            
                </div>
                      <Dropdown>
                        <DropdownTrigger>
                            <Button 
                              variant="flat"
                              className="capitalize"
                            >
                              {selectedValueB}
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu 
                            aria-label="Single selection actions"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeysB}
                            onSelectionChange={setSelectedKeysB}
                          >

                          <DropdownItem key="si">Si</DropdownItem>
                          <DropdownItem key="no">No</DropdownItem>
                              
                          </DropdownMenu>
                      </Dropdown>   
          
                <div className=" m-2">
                    <Chip color="warning" variant="bordered">Candidato: </Chip> 
                        
                    </div>
                      <Dropdown>
                        <DropdownTrigger>
                            <Button 
                              variant="flat"
                              className="capitalize"
                            >
                              {selectedValue}
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu 
                            aria-label="Single selection actions"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeys}
                            onSelectionChange={setSelectedKeys}
                          >

                          {statusOptions.map((column) => (
                            <DropdownItem key={column.name} className="capitalize">
                                {capitalize(column.name)}
                            </DropdownItem>
                            ))}
                              
                          </DropdownMenu>
                      </Dropdown>   
              
              </div>

              <div className="flex justify-center items-center">
                    
                    <div className="flex-grow-0">
                    <Chip color="primary" variant="bordered">Recursos humanos: </Chip> 
                    </div>

                    <div className="m-2 flex-grow-2">
                      <Dropdown>
                        <DropdownTrigger>
                            <Button 
                              variant="flat"
                              className="capitalize"
                            >
                              {selectedValueR}
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu 
                            aria-label="Single selection actions"
                            variant="flat"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeysR}
                            onSelectionChange={setSelectedKeysR}
                          >

                          {statusOptionsR.map((column) => (
                            <DropdownItem key={column.name} className="capitalize">
                                {capitalize(column.name)}
                            </DropdownItem>
                            ))}
                              
                          </DropdownMenu>
                      </Dropdown>  
                    </div>

                </div>

            </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button color="success" onClick={handleActualizar}>Actualizar</Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
    </Modal>
    
    </div>

  );
}