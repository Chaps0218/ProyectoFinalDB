import { api } from "../apiroute.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import axios from "axios";

async function fetchCandidatosAndFilterById(id) {
  try {
    const response = await axios.get(`${api}/candidato`);
    const candidatos = response.data;
    const existingUsers = candidatos.filter((candidato) => candidato[5] === id);

    return existingUsers;
  } catch (error) {
    console.error('Error al obtener candidatos:', error);
    return [];
  }
}
async function fetchCandidatosAndFilterByEmail(email) {
  try {
    const response = await axios.get(`${api}/candidato`);
    const candidatos = response.data;
    const existingUsers = candidatos.filter((candidato) => candidato[6] === email);

    return existingUsers;
  } catch (error) {
    console.error('Error al obtener candidatos:', error);
    return [];
  }
}
async function getUltimoId() {
  try {
    const response = await axios.get(`${api}/candidato`);
    const candidatos = response.data;
    const candIds = candidatos.map((candidato) => candidato[5]);
    candIds.sort((a, b) => b - a);
    return candIds[0];
  } catch (error) {
    console.error('Error al obtener candidatos:', error);
    return null;
  }
}

export const register = async (req, res) => {
  const { tipoIden, identificacion, email, sexo, titulo, fecha_nacimiento, nombre1, nombre2, apellido1, apellido2 } = req.body;

  // Verificación de usuario existente
  try {
    const existingUsers = await fetchCandidatosAndFilterByEmail(email);
    if (existingUsers.length > 0) {
      return res.status(409).json(["Usuario ya existe!"]);
    }
  } catch (error) {
    console.error('Error al verificar usuarios:', error);
    return res.status(500).json(["Error en el servidor"]);
  }
  const id = await getUltimoId() + 1;
  const [year, month, day] = fecha_nacimiento.split('-');
  const formattedDate = `${day}${month}${year.slice(-2)}`;
  // Encriptado de contraseña
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(formattedDate, salt);

  // Inserción de datos
  try {
    await axios.post(`${api}/candidato`, { "cand_tipo_identificaccion": tipoIden, "cand_num_identificacion": identificacion, "cand_sexo": sexo, "cand_titulo": titulo, "cand_fecha_nacimiento": fecha_nacimiento, "cand_correo": email, "cand_password": hash, "cand_nombre1": nombre1, "cand_nombre2": nombre2, "cand_apellido1": apellido1, "cand_apellido2": apellido2 });
    return res.status(200).json("Se creó el candidato");
  } catch (error) {
    console.log('Error al insertar candidato:', error);
    return res.status(500).json(["Error en el servidor"])
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;

  // Verificación de usuario existente
  try {
    const existingUsers = await fetchCandidatosAndFilterByEmail(email);
    if (existingUsers.length < 0) {
      return res.status(409).json(["Usuario no existe!"]);
    } else {
      const isPasswordCorrect = bcrypt.compareSync(
        password,
        existingUsers[0][7]
      );
      if (!isPasswordCorrect) {
        return res.status(400).json(["Usuario o Contraseña incorrecta!"]);
      }
      // Generación de Token
      const token = jwt.sign({ id: existingUsers[0][5] }, TOKEN_SECRET);
      // Token guardado en una cookie
      res
        .cookie("token", token)
        .status(200)
        .json(existingUsers[0]);
    }
  } catch (error) {
    console.error('Error al verificar usuarios:', error);
    return res.status(500).json(["Error en el servidor"]);
  }
};

export const logout = (req, res) => {
  //Limpieza de las cookies
  res
    .clearCookie("token", {
      sameSite: "none",
      secure: true,
      expires: new Date(0),
    })
    .status(200)
    .json("User has been logged out.");
};

export const verifyToken = async (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) return res.send(false);
    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
      if (err) return res.status(401).json("Acceso denegado");
      const existingUsers = await fetchCandidatosAndFilterById(user.id);
      if (existingUsers.length < 0) {
        return res.status(404).json({ error: "Usuario no encontrado!" })
      }
      return res.json({
        // información que se recopila
        id: existingUsers[0][5],
        email: existingUsers[0][6],
        name: existingUsers[0][8],
        lastname: existingUsers[0][10],
      });
    });
  } catch (error) {
    console.error('Error al verificar usuarios:', error);
    return res.status(500).json(["Error en el servidor"]);
  }
};

export const profile = (req, res) => {
  // Acceder al la página de perfil con Id
  const id = req.user.id;
  const q = "SELECT * FROM usu_usuario WHERE usu_codigo = $1";

  // Llamado a la base de datos
  // db.query(q, [id], (err, result) => {
  //   if (err) return res.status(500).json(err);

  //   const data = result.rows[0];
  //   if (!data) {
  //     return res.status(404).json({ error: "Usuario no encontrado!" });
  //   }

  //   return res.json({
  //     // información que se recopila
  //     id: data.usu_codigo,
  //     username: data.usu_username,
  //     email: data.usu_email,
  //   });
  // });
};