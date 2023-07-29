import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = (req, res) => {
  const { tipoIden, identificacion, email, sexo, titulo, fecha_nacimiento, nombre1, nombre2, apellido1, apellido2 } = req.body;

  // verificación de usuario existente
  const q = "SELECT * FROM candidato WHERE cand_correo = $1";

  db.query(q, [email], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);}

    const existingUsers = result.rows;
    if (existingUsers.length > 0) {
      return res.status(409).json(["Usuario ya existe!"]);
    }

    const [year, month, day] = fecha_nacimiento.split('-');
    const formattedDate = `${day}${month}${year.slice(-2)}`;
    // Encriptado de contraseña
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(formattedDate, salt);

    // Insersion de datos
    const insertQuery =
      "INSERT INTO candidato (cand_tipo_identificacion, cand_num_identificacion, cand_sexo, cand_titulo, cand_fecha_nacimiento, cand_correo, cand_password, cand_nombre1, cand_nombre2, cand_apellido1, cand_apellido2) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING cand_Id";
    const values = [tipoIden, identificacion, sexo, titulo, fecha_nacimiento, email, hash, nombre1, nombre2, apellido1, apellido2];

    db.query(insertQuery, values, (err, result) => {
      if (err) {
      console.log(err);
      return res.status(500).json(err);}

      const insertedId = result.rows[0].cand_Id;

      return res.status(200).json({ message: "Se creo el usuario", insertedId });
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM usu_usuario WHERE usu_username = $1";

  db.query(q, [req.body.username], (err, result) => {
    if (err) return res.status(500).json(err);
    const data = result.rows;
    if (data.length === 0) {
      return res.status(404).json(["Usuario no registrado!"]);
    }

    // Comparación de contraseña
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].usu_password
    );

    // Comprobación de contraseña
    if (!isPasswordCorrect) {
      return res.status(400).json(["Usuario o Contraseña incorrecta!"]);
    }

    // Generación de Token
    const token = jwt.sign({ id: data[0].usu_codigo }, TOKEN_SECRET);

    // Copia toda la información menos el atributo "usu_password"
    const { usu_password, ...other } = data[0];

    // Token guardado en una cookie
    res
      .cookie("token", token)
      .status(200)
      .json(other);
  });
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

export const verifyToken = (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.send(false);

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(401).json("Acceso denegado");
    const q = "SELECT * FROM usu_usuario WHERE usu_codigo = $1";

    db.query(q, [user.id], (err, result) => {
      if (err) return res.status(500).json(err);

      const data = result.rows[0];
      if (!data) {
        return res.status(404).json({ error: "Usuario no encontrado!" });
      }

      return res.json({
        // información que se recopila
        id: data.usu_codigo,
        username: data.usu_username,
        email: data.usu_email,
      });
    });
  });
};

export const profile = (req, res) => {
  // Acceder al la página de perfil con Id
  const id = req.user.id;
  const q = "SELECT * FROM usu_usuario WHERE usu_codigo = $1";
  
  // Llamado a la base de datos
  db.query(q, [id], (err, result) => {
    if (err) return res.status(500).json(err);

    const data = result.rows[0];
    if (!data) {
      return res.status(404).json({ error: "Usuario no encontrado!" });
    }

    return res.json({
      // información que se recopila
      id: data.usu_codigo,
      username: data.usu_username,
      email: data.usu_email,
    });
  });
};