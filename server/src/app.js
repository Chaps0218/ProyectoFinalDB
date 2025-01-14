import express from 'express';
import morgan from 'morgan';
import authRoutes from "./routes/auth.routes.js"
import procesoPostulacion from "./routes/procesopostulacion.routes.js"
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", procesoPostulacion);


export default app;