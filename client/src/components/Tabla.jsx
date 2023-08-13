import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, Pagination} from "@nextui-org/react";
import {EditIcon} from "../assets/EditIcon";
import {DeleteIcon} from "../assets/DeleteIcon";

const columns = [
  {name: "NOMBRE", uid: "nombre"},
  {name: "NÚMERO DE IDENTIFICACIÓN", uid: "noIdentificacion"},
  {name: "EDAD", uid: "fechaNacimiento"},
  {name: "SEXO", uid: "sexo"},
  {name: "TITULO", uid: "titulo"},
  {name: "ACCIONES", uid: "actions"},
];

const INITIAL_VISIBLE_COLUMNS = ["nombre", "noIdentificacion", "fechaNacimiento", "sexo", "titulo", "actions"];

const users = [
  {
    id: 1,
    nombre: "Antonio Juan Croquevielle González",
    noIdentificacion: "1738462714",
    tipoIdentificacion: "Cedula",
    fechaNacimiento: "1998-10-10",
    edad: "34",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
    sexo: "Masculino",
    titulo: "Ingeniería de Sistemas",
  },
  {
    id: 2,
    nombre: "Antonia Zircha Armenia Perez",
    noIdentificacion: "0923762561",
    tipoIdentificacion: "Pasaporte",
    fechaNacimiento: "1997-10-10",
    edad: "35",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
    sexo: "Femenino",
    titulo: "Ingeniería en Telecomunicaciones",
  },
];

const statusColorMap = {
  Masculino: "success",
  Femenino: "danger",
  Otro: "warning",
};



export default function App() {

  //!Funciones para el paginado
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 1;
  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page]); 
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!

  //!Funcion de renderizado de la tabla
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "nombre":
        return (
          <User
            avatarProps={{radius: "lg", src: user.avatar}}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "noIdentificacion":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.tipoIdentificacion}</p>
          </div>
        );
      case "sexo":
        return (
          <Chip className="capitalize" color={statusColorMap[user.sexo]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      case "fechaNacimiento":
        return (
          <div className="flex flex-col">
          <p className="text-bold text-sm capitalize">{cellValue}</p>
          <p className="text-bold text-sm capitalize text-default-400">{user.edad} años</p>
        </div>
        );
      case "titulo":
        return (
          <div className="flex flex-col">
          <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  //!Funciones de filtro
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "age",
    direction: "ascending",
  });

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusColorMap.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status),
      );
    }

    return filteredUsers;
  }, [users, filterValue, statusFilter]);

  return (
  <Table aria-label="Example table with custom cells"
  bottomContent={
    <div className="flex w-full justify-center">
      <Pagination
        isCompact
        showControls
        showShadow
        color="success"
        page={page}
        total={pages}
        onChange={(page) => setPage(page)}
      />
    </div>
  }
  
  >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
