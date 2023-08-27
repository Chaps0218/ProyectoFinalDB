--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

-- Started on 2023-08-23 10:57:35

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 214 (class 1259 OID 16528)
-- Name: actividad; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.actividad (
    act_id integer NOT NULL,
    act_nombre character varying(50) NOT NULL,
    act_descripcion character varying(250) NOT NULL
);


ALTER TABLE public.actividad OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16531)
-- Name: actividad_act_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.actividad ALTER COLUMN act_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.actividad_act_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 216 (class 1259 OID 16532)
-- Name: campo_amplio; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.campo_amplio (
    ca_id integer NOT NULL,
    ca_nombre character varying(50) NOT NULL,
    ca_descripcion character varying(250) NOT NULL
);


ALTER TABLE public.campo_amplio OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16535)
-- Name: campo_amplio_ca_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.campo_amplio ALTER COLUMN ca_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.campo_amplio_ca_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 218 (class 1259 OID 16536)
-- Name: campo_especifico; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.campo_especifico (
    ce_id integer NOT NULL,
    ce_nombre character varying(50) NOT NULL,
    ce_descripcion character varying(250) NOT NULL,
    ca_id integer
);


ALTER TABLE public.campo_especifico OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16539)
-- Name: campo_especifico_ce_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.campo_especifico ALTER COLUMN ce_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.campo_especifico_ce_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 220 (class 1259 OID 16540)
-- Name: candidato; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.candidato (
    cand_tipo_identificacion character varying(20) NOT NULL,
    cand_num_identificacion character varying(20) NOT NULL,
    cand_sexo character(1) NOT NULL,
    cand_titulo character varying(20) NOT NULL,
    cand_fecha_nacimiento date NOT NULL,
    cand_id integer NOT NULL,
    cand_correo character varying(50) NOT NULL,
    cand_password character varying(100) NOT NULL,
    cand_nombre1 character varying(30) NOT NULL,
    cand_nombre2 character varying(30) NOT NULL,
    cand_apellido1 character varying(30) NOT NULL,
    cand_apellido2 character varying(30) NOT NULL
);


ALTER TABLE public.candidato OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16543)
-- Name: candidato_cand_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.candidato ALTER COLUMN cand_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.candidato_cand_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 222 (class 1259 OID 16544)
-- Name: contratacion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contratacion (
    con_id integer NOT NULL,
    con_nombre character varying(150) NOT NULL
);


ALTER TABLE public.contratacion OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16547)
-- Name: contratacion_con_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.contratacion ALTER COLUMN con_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.contratacion_con_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 224 (class 1259 OID 16548)
-- Name: departamento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.departamento (
    dept_id integer NOT NULL,
    dept_nombre character varying(50) NOT NULL,
    dept_descripcion character varying(250) NOT NULL
);


ALTER TABLE public.departamento OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16551)
-- Name: departamento_dept_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.departamento ALTER COLUMN dept_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.departamento_dept_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 226 (class 1259 OID 16552)
-- Name: item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item (
    it_id integer NOT NULL,
    pa_id integer,
    it_nombre character varying(50) NOT NULL
);


ALTER TABLE public.item OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16555)
-- Name: item_it_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.item ALTER COLUMN it_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.item_it_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 228 (class 1259 OID 16556)
-- Name: oferta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.oferta (
    ofe_id integer NOT NULL,
    post_id integer,
    con_id integer,
    ce_id integer,
    ca_id integer,
    sede_id integer,
    dept_id integer,
    pa_id integer,
    act_id integer,
    ofe_vacantes integer,
    ofe_horas integer
);


ALTER TABLE public.oferta OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16559)
-- Name: oferta_ofe_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.oferta ALTER COLUMN ofe_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.oferta_ofe_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 230 (class 1259 OID 16560)
-- Name: personal_academico; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.personal_academico (
    pa_id integer NOT NULL,
    pa_nombre character varying(50) NOT NULL,
    pa_descripcion character varying(250) NOT NULL
);


ALTER TABLE public.personal_academico OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 16563)
-- Name: personal_academico_pa_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.personal_academico ALTER COLUMN pa_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.personal_academico_pa_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 232 (class 1259 OID 16564)
-- Name: postulacion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.postulacion (
    post_id integer NOT NULL,
    post_periodo character varying(10) NOT NULL
);


ALTER TABLE public.postulacion OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 16567)
-- Name: postulacion_post_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.postulacion ALTER COLUMN post_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.postulacion_post_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 234 (class 1259 OID 16568)
-- Name: rechum; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rechum (
    rh_cargo character varying(20) NOT NULL,
    rh_id integer NOT NULL,
    rh_correo character varying(50) NOT NULL,
    rh_password character varying(100) NOT NULL,
    rh_nombre1 character varying(30) NOT NULL,
    rh_nombre2 character varying(30) NOT NULL,
    rh_apellido1 character varying(30) NOT NULL,
    rh_apellido2 character varying(30) NOT NULL
);


ALTER TABLE public.rechum OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 16571)
-- Name: rechum_rh_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.rechum ALTER COLUMN rh_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.rechum_rh_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 236 (class 1259 OID 16572)
-- Name: requisito; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.requisito (
    rq_id integer NOT NULL,
    it_id integer,
    rq_descripcion character varying(750) NOT NULL
);


ALTER TABLE public.requisito OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 16577)
-- Name: requisito_rq_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.requisito ALTER COLUMN rq_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.requisito_rq_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 238 (class 1259 OID 16578)
-- Name: sede; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sede (
    sede_id integer NOT NULL,
    sede_nombre character varying(50) NOT NULL,
    sede_descripcion character varying(250) NOT NULL
);


ALTER TABLE public.sede OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 16581)
-- Name: sede_sede_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.sede ALTER COLUMN sede_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.sede_sede_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 240 (class 1259 OID 16582)
-- Name: solicitud; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.solicitud (
    cand_id integer NOT NULL,
    sol_id integer NOT NULL,
    rh_id integer NOT NULL,
    sol_aprobacion boolean NOT NULL,
    ofe_id integer
);


ALTER TABLE public.solicitud OWNER TO postgres;

--
-- TOC entry 241 (class 1259 OID 16586)
-- Name: solicitud_rh_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.solicitud ALTER COLUMN rh_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.solicitud_rh_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 242 (class 1259 OID 16587)
-- Name: solicitud_sol_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.solicitud ALTER COLUMN sol_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.solicitud_sol_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 243 (class 1259 OID 16588)
-- Name: titulo_exp; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.titulo_exp (
    tx_id integer NOT NULL,
    rq_id integer,
    tx_descripcion character varying(250) NOT NULL,
    tx_detalle character varying(500) NOT NULL,
    tx_puntaje_min numeric(4,2) NOT NULL,
    tx_puntaje_max numeric(4,2) NOT NULL,
    tx_puntaje_asignado numeric(4,2) NOT NULL,
    tx_observacion character varying(500) NOT NULL
);


ALTER TABLE public.titulo_exp OWNER TO postgres;

--
-- TOC entry 244 (class 1259 OID 16593)
-- Name: titulo_exp_tx_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.titulo_exp ALTER COLUMN tx_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.titulo_exp_tx_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3430 (class 0 OID 16528)
-- Dependencies: 214
-- Data for Name: actividad; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.actividad (act_id, act_nombre, act_descripcion) FROM stdin;
2	Investigación	Investigación 2
3	Vinculación	Vinculación 3
4	Docencia e Investigación	Docencia e Investigación 4
5	Docencia y Vinculación	Docencia y Vinculación 5
6	Investigación y Vinculación	Investigación y Vinculación 6
7	Docencia, Investigación y Vinculación	Docencia, Investigación y Vinculación 7
8	Prueba 1	Prueba 1 Desc 2
1	Docencia	Docencia 1
9	Prueba 2	Prueba 2 Desc 3
11	Prueba 3 V2	Prueba 3 V2 Desc1
\.


--
-- TOC entry 3432 (class 0 OID 16532)
-- Dependencies: 216
-- Data for Name: campo_amplio; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.campo_amplio (ca_id, ca_nombre, ca_descripcion) FROM stdin;
2	Tecnología	Tecnologia
3	Campo Amplio 2	Campo Amplio 2 Desc 12
\.


--
-- TOC entry 3434 (class 0 OID 16536)
-- Dependencies: 218
-- Data for Name: campo_especifico; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.campo_especifico (ce_id, ce_nombre, ce_descripcion, ca_id) FROM stdin;
1	Base de Datos	BDD	2
2	CE 2	CE DESC 26	3
\.


--
-- TOC entry 3436 (class 0 OID 16540)
-- Dependencies: 220
-- Data for Name: candidato; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.candidato (cand_tipo_identificacion, cand_num_identificacion, cand_sexo, cand_titulo, cand_fecha_nacimiento, cand_id, cand_correo, cand_password, cand_nombre1, cand_nombre2, cand_apellido1, cand_apellido2) FROM stdin;
cédula	0803554328	M	Ingeniero	2003-02-18	25	mathiguevara@gmail.com	$2a$10$nQPzPQbMiNQvKLgCXeWXw.H2FnI83D/kDo7L58S4DT3Df2brxQVcu	Mathias	Alejandro	Guevara	Cruz
cédula	1712420742	M	Magister	1973-08-18	28	mathiguevara@outlook.es	$2a$10$0iF8jWYkQyl6EIdlH0srouGC1yvNBjbCWyt4pe1GKtPOWoQ.rU3QC	Alejandro	Francisco	Guevara	Esparza
cédula	1752950863	F	Ingeniera	2002-08-08	29	sharedtinoco81@gmail.com	$2a$10$Tz.uify3mKjr9FWfsgbW8.iWJ5ve7C7IW3DAPWTUp5LQejsj/9Wf.	Melanny	Shared	Tinoco	Domínguez
cédula	1729213221	M	Bachiller	2001-05-29	30	portillavas@gmail.com	$2a$10$hF0kThzWyOB5rG46AAdbDeHpNusN3Sqmt3.jn70OJ4qwtph5QC2F2	Diego	Alejandro	Portilla	Andrade
Cédula	1720498375	M	Doctor	0199-04-03	31	danieliza99@gmail.com	$2a$10$RQgBIRCELv0DyjwQIKwDtei7nK5qXTZJmde5GaYJpEGjEcRWJyGoK	Christopher	Daniel	Iza	Miniguano
cédula	1724918774	O	Doctora	2002-10-22	32	kalexandervargas@gmail.com	$2a$10$IfBbmZem0Zy43gq2rAvgLuQt8RfyOOUkMbENs3OugnNkfHumAYL.S	Kevin	Alexander	Vargas	Paladines
cédula	1723261168	M	Magister	2002-09-10	33	juanfreyes17@gmail.com	$2a$10$N2iRxDnnsR93iwhWWnMYduvmyyQqez75F3pMqwiBCFUuElxgqslrS	Juan	Francisco	Reyes	Salazar
\.


--
-- TOC entry 3438 (class 0 OID 16544)
-- Dependencies: 222
-- Data for Name: contratacion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contratacion (con_id, con_nombre) FROM stdin;
1	Personal académico que desarrolla actividades de tercer nivel de grado y cuarto nivel
2	Personal de apoyo académico (técnicos docentes, técnicos de laboratorio y técnico de investigación)
3	Personal académico para la formación técnica y tecnológica
\.


--
-- TOC entry 3440 (class 0 OID 16548)
-- Dependencies: 224
-- Data for Name: departamento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.departamento (dept_id, dept_nombre, dept_descripcion) FROM stdin;
1	DECE	Departamento de Ciencias Exactas
2	DCCO	Departamento de la Computacion
6	DECEM	Departamento de Energía y Mecánica
7	DECTC	Departamento de la Tierra y la Construcción
8	DECV	Departamento de la Vida y la Agricultura
9	DECEAC	Departamento Económicas, Administrativas, y del Comercio
10	DECHS	Departamento Humanas y Sociales
11	DESD	Departamento de Seguridad y Defensa
12	DEEE	Departamento de Eléctrica, Electrónica y Telecomunicaciones
13	CEC	Departamento de Ciencias Médicas
15	Dep 11	Dept 11 desc 12
\.


--
-- TOC entry 3442 (class 0 OID 16552)
-- Dependencies: 226
-- Data for Name: item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item (it_id, pa_id, it_nombre) FROM stdin;
1	\N	Formación
2	\N	Docencia
3	\N	Producción Académica
4	\N	Experiencia Profesional
\.


--
-- TOC entry 3444 (class 0 OID 16556)
-- Dependencies: 228
-- Data for Name: oferta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.oferta (ofe_id, post_id, con_id, ce_id, ca_id, sede_id, dept_id, pa_id, act_id, ofe_vacantes, ofe_horas) FROM stdin;
1	1	1	1	2	1	1	1	1	3	8
2	1	2	1	2	1	1	2	7	1	10
3	1	3	1	2	1	1	1	2	5	8
4	1	1	1	2	1	1	3	3	3	8
5	1	3	1	2	1	1	3	4	2	8
6	1	2	1	2	1	1	3	2	5	10
7	1	1	1	2	1	1	2	1	5	12
8	1	2	1	2	1	1	1	5	7	16
9	1	1	1	2	1	1	1	6	1	4
10	1	3	1	2	1	1	2	4	3	10
\.


--
-- TOC entry 3446 (class 0 OID 16560)
-- Dependencies: 230
-- Data for Name: personal_academico; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.personal_academico (pa_id, pa_nombre, pa_descripcion) FROM stdin;
1	Auxiliar Nivel 1	Auxiliar Nivel 1
2	Agregado Nivel 1	Agregado Nivel 1
3	Principal Nivel 1	Principal Nivel 1
4	Técnico Docente Nivel 1	Técnico Docente Nivel 1
5	Técnico de Laboratorio Nivel 1	Técnico de Laboratorio Nivel 1
6	Técnico de Investigación	Técnico de Investigación Nivel 1
7	string	string1
\.


--
-- TOC entry 3448 (class 0 OID 16564)
-- Dependencies: 232
-- Data for Name: postulacion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.postulacion (post_id, post_periodo) FROM stdin;
1	202351
\.


--
-- TOC entry 3450 (class 0 OID 16568)
-- Dependencies: 234
-- Data for Name: rechum; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rechum (rh_cargo, rh_id, rh_correo, rh_password, rh_nombre1, rh_nombre2, rh_apellido1, rh_apellido2) FROM stdin;
Licenciado	6	usuariorrhh1@espe.edu.ec	$2a$10$IXcCmJZiqTetzfluqRv.veQEx49LgVjKZcA5R8HHgKPnFPmHZRwqu	Jhon	Jhonathan	Doe	Doerse
Magister	7	usuariorrh2@espe.edu.ec	$2a$10$zyA4vPC2AfvCzBmd/A2u.Om7uc031McjSwL1YF35LATQrm.oHcdLO	Mary	Lady	Sue	Sues
\.


--
-- TOC entry 3452 (class 0 OID 16572)
-- Dependencies: 236
-- Data for Name: requisito; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.requisito (rq_id, it_id, rq_descripcion) FROM stdin;
1	1	Tener al menos grado académico de maestría reconocido por el Órgano Rector de la Política Pública de Educación Superior, en el camplio aplio de conocimiento vinculado a sus actividades de docencia o investigación, o vinculación con la sociedad. La Universidad dará preferencia a los perfiles que tengan adicionalmente el título de grado con afinidad al campo amplio del conocimiento de su formación de cuarto nivel.
2	1	Acreditar competencia con nivel B1 o equivalente en una lengua diferente al castellano; o haber obtenido su título académico de tercer o cuarto nivel en un país con una lengua diferente al castellano. Los idiomas ancestrales serán considerados como lengua diferente al castellano. Cuando el idioma materno del postulante sea diferente al castellano, deberá acreditar competencia con nivel B2 en castellano
3	1	Acreditar un mínimo de ciento veintiocho (128) horas de capacitación en los últimos 4 años en el campo de conocimiento vinculadoa sus actividade s de docencia, invesstigación y/o vinculación con la sociedad, de las cuales al menos 25% (32 horas) deberán versar  sobre temas pedagógicos.
4	2	Tener promedio mínimo de ochenta por ciento (80%) como resultado de su evaluación de desempeño en los procesos de evauluación de desempeño correspondientes al último año en el que ejerció la docencia.
5	2	Acreditar al menos veinte y cuatro (24) meses de experiencia profesional docente en educación superior. Se reconocerá como experiencia profesional docente a la labor como personal de apoyo académico.
6	3	Haber publicado al menos dos artículos en revistas indexadas o haber producido la cantidad equivalente de obras de relevancia, según la tabla de equivalencias de obras de relevancia del Reglamento de Carrera y Escalafón del Personal Académico de la Universidad de las Fuerzas Armadas - ESPE. La participación en la mencionada tabla de equivalencias. Serán válidos los artículos u otras obras de relevancia que tengan afinidad con la formación académica del docente investigador y, con las actividades de docencia, investigación y vinculación que realizará en la Universidad de las Fuerzas Armadas - ESPE. Serán validas las publicaciones u obras de relevancia producidas en los últimos (4) cuatro años.
7	4	Acreditar al menos doce (12) meses de experiencia en el ejercicio de su profesión. Esta experiencia se podrá acreditar con experiencia en instituciones de educación superior siempre que haya ejercicio real de la profesión.
\.


--
-- TOC entry 3454 (class 0 OID 16578)
-- Dependencies: 238
-- Data for Name: sede; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sede (sede_id, sede_nombre, sede_descripcion) FROM stdin;
1	Matriz	Sangolqui
2	Latacunga	Latacunga
3	Santo Domingo	Santo Domingo
4	Sede 4	Sede 4 Desc 13
\.


--
-- TOC entry 3456 (class 0 OID 16582)
-- Dependencies: 240
-- Data for Name: solicitud; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.solicitud (cand_id, sol_id, rh_id, sol_aprobacion, ofe_id) FROM stdin;
\.


--
-- TOC entry 3459 (class 0 OID 16588)
-- Dependencies: 243
-- Data for Name: titulo_exp; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.titulo_exp (tx_id, rq_id, tx_descripcion, tx_detalle, tx_puntaje_min, tx_puntaje_max, tx_puntaje_asignado, tx_observacion) FROM stdin;
1	1	Maestría	Registrado SENESCYT	18.00	20.00	0.00	Se atribuyen únicamente 2 puntos cuando el/los título/s de maestría tiene afinidad con el/los título/s de grado a nivel de campo específico
2	1	Doctorado, PhD o su equivalente	Registrado SENESCYT	0.00	3.00	0.00	Se atribuyen 3 puntos cuando el t[itulo de doctorado tiene afinidad con el de maestría y el de grado, según se especifique en la convocatoria.
3	1	Adicional título de grado Maestría y/o Doctorado, PhD o su equivalente	Registrado SENESCYT	0.00	1.50	0.00	Se atribuyen 3 puntos cuando el título de doctorado tiene afinidad con el de maestría y el de grado, según se especifique en la convocatoria.
9	3	Capacitación en los últimos 4 años, 128 horas	32 horas sobre temas pedagógicos	1.75	2.00	0.00	Para asignar un puntaje adicional, se deberá realizar proporcionalmente al número de horas de capacitación, hasta 32 horas adicionales a las mínimas requeridas, si suma más se pondrá el máximo puntaje indicado.
10	4	Evaluación integral de desempeño docente de los últimos 24 meses	Mínimo 80% en el último año	2.75	3.00	0.00	El postulante que tenga el puntaje mínimo de 80100 en su evaluación obtendrá el puntaje mínimo. El puntaje adicional se asigna´ra de manera proporcional a partir de los 80 puntos, hasta el puntaje máximo indicado
11	5	Experiencia profesional en docencia universitaria	24 meses	4.00	4.50	0.00	El puntaje adicional se asignará proporcionalmente de acuerdo al número de meses de experiencia, hasta 48 meses, si suma más se pondrá el máximo puntaje indicado.
7	2	Nivel B2 en castellano	Documento o certificado emitido por una IES o una institución que brinda programas o cursos de lenguas, cuyo certificado de suficiencia sea mediante la rendición de exámenes de reconocimiento internacional.	4.00	3.50	0.00	Se atribuyen 0,25 punto adicional por registrar un certificado superior a nivel B1. Se atribuye 0,25 punto adicional por la acreditación de otro idioma adicional al primero que ha sido presentado, siempre que se presente el certificado equivalente a C2.
4	2	Certificado nivel B1 o su equivalente, y/o	Documento o certtificado emitido por una IES o una institución que brinda programas o cursos de lenguas, cuyo certificado de suficiencia sea mediante la rendición de exámenes de reconocimiento internacional.	3.00	3.50	0.00	Se atribuyen 0,25 punto adicional por registrar un certificado superior a nivel B1. Se atribuye 0,25 punto adicional por la acreditación de otro idioma adicional al primero que ha sido presentado, siempre que se presente el certificado equivalente a C2.
5	2	Título de tercer o cuarto nivel obtenido en otro idioma	Documento o certificado emitido por una IES o una institución que brinda programas o cursos de lenguas, cuyo certificado de suficiencia sea mediante la rendición de exámenes de reconocimiento internacional.	3.00	3.50	0.00	Se atribuyen 0,25 punto adicional por registrar un certificado superior a nivel B1. Se atribuye 0,25 punto adicional por la acreditación de otro idioma adicional al primero que ha sido presentado, siempre que se presente el certificado equivalente a C2.
6	2	Certificado de idiomas ancestrales	Documento o certificado emitido por una IES o una institución que brinda programas o cursos de lenguas, cuyo certificado de suficiencia sea mediante la rendición de exámenes de reconocimiento internacional.	3.00	3.50	0.00	Se atribuyen 0,25 punto adicional por registrar un certificado superior a nivel B1. Se atribuye 0,25 punto adicional por la acreditación de otro idioma adicional al primero que ha sido presentado, siempre que se presente el certificado equivalente a C2.
8	3	Capacitación en los últimos 4 años, 128 horas	96 horas de capacitación en el campo de conocimiento vinculado a sus actividades de docencia, investigación y/o vinculación con la sociedad	2.00	2.50	0.00	Para asignar el puntaje adicional, se realizará proporcionalmente al número de horas de capacitación, hasta 64 horas adicionales a las mínimas requeridas, si suma más se pondrá el puntaje máximo indicado.
12	6	Artículo completo o DOI. Obras de relevancia. Solicitud al Servicio Nacional de Derechos Intelectuales.	2 artículos, obras de relevancia dentro de los últimos cuatro años	5.50	6.50	0.00	Por cada artículo adicional al requisito mínimo exigido se sumará 0,25 puntos, hasta el máximo puntaje indicado.
13	7	Experiencia del ejercicio de la profesión	12 meses	3.00	3.50	0.00	El puntaje adicional, se asignará proporcionalmente de acuerdo al número de meses de experiencia, hasta 36 meses, si suma más se pondrá el máximo puntaje indicado
\.


--
-- TOC entry 3466 (class 0 OID 0)
-- Dependencies: 215
-- Name: actividad_act_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.actividad_act_id_seq', 11, true);


--
-- TOC entry 3467 (class 0 OID 0)
-- Dependencies: 217
-- Name: campo_amplio_ca_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.campo_amplio_ca_id_seq', 4, true);


--
-- TOC entry 3468 (class 0 OID 0)
-- Dependencies: 219
-- Name: campo_especifico_ce_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.campo_especifico_ce_id_seq', 2, true);


--
-- TOC entry 3469 (class 0 OID 0)
-- Dependencies: 221
-- Name: candidato_cand_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.candidato_cand_id_seq', 33, true);


--
-- TOC entry 3470 (class 0 OID 0)
-- Dependencies: 223
-- Name: contratacion_con_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contratacion_con_id_seq', 4, true);


--
-- TOC entry 3471 (class 0 OID 0)
-- Dependencies: 225
-- Name: departamento_dept_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.departamento_dept_id_seq', 15, true);


--
-- TOC entry 3472 (class 0 OID 0)
-- Dependencies: 227
-- Name: item_it_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.item_it_id_seq', 4, true);


--
-- TOC entry 3473 (class 0 OID 0)
-- Dependencies: 229
-- Name: oferta_ofe_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.oferta_ofe_id_seq', 10, true);


--
-- TOC entry 3474 (class 0 OID 0)
-- Dependencies: 231
-- Name: personal_academico_pa_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.personal_academico_pa_id_seq', 8, true);


--
-- TOC entry 3475 (class 0 OID 0)
-- Dependencies: 233
-- Name: postulacion_post_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.postulacion_post_id_seq', 2, true);


--
-- TOC entry 3476 (class 0 OID 0)
-- Dependencies: 235
-- Name: rechum_rh_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rechum_rh_id_seq', 7, true);


--
-- TOC entry 3477 (class 0 OID 0)
-- Dependencies: 237
-- Name: requisito_rq_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.requisito_rq_id_seq', 7, true);


--
-- TOC entry 3478 (class 0 OID 0)
-- Dependencies: 239
-- Name: sede_sede_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sede_sede_id_seq', 4, true);


--
-- TOC entry 3479 (class 0 OID 0)
-- Dependencies: 241
-- Name: solicitud_rh_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.solicitud_rh_id_seq', 1, false);


--
-- TOC entry 3480 (class 0 OID 0)
-- Dependencies: 242
-- Name: solicitud_sol_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.solicitud_sol_id_seq', 1, false);


--
-- TOC entry 3481 (class 0 OID 0)
-- Dependencies: 244
-- Name: titulo_exp_tx_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.titulo_exp_tx_id_seq', 13, true);


--
-- TOC entry 3245 (class 2606 OID 16595)
-- Name: actividad actividad_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actividad
    ADD CONSTRAINT actividad_pkey PRIMARY KEY (act_id);


--
-- TOC entry 3247 (class 2606 OID 16597)
-- Name: campo_amplio campo_amplio_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.campo_amplio
    ADD CONSTRAINT campo_amplio_pkey PRIMARY KEY (ca_id);


--
-- TOC entry 3249 (class 2606 OID 16599)
-- Name: campo_especifico campo_especifico_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.campo_especifico
    ADD CONSTRAINT campo_especifico_pkey PRIMARY KEY (ce_id);


--
-- TOC entry 3251 (class 2606 OID 16601)
-- Name: candidato candidato_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidato
    ADD CONSTRAINT candidato_pkey PRIMARY KEY (cand_id);


--
-- TOC entry 3253 (class 2606 OID 16603)
-- Name: contratacion contratacion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contratacion
    ADD CONSTRAINT contratacion_pkey PRIMARY KEY (con_id);


--
-- TOC entry 3255 (class 2606 OID 16605)
-- Name: departamento departamento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departamento
    ADD CONSTRAINT departamento_pkey PRIMARY KEY (dept_id);


--
-- TOC entry 3257 (class 2606 OID 16607)
-- Name: item item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (it_id);


--
-- TOC entry 3259 (class 2606 OID 16609)
-- Name: oferta oferta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT oferta_pkey PRIMARY KEY (ofe_id);


--
-- TOC entry 3261 (class 2606 OID 16611)
-- Name: personal_academico personal_academico_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personal_academico
    ADD CONSTRAINT personal_academico_pkey PRIMARY KEY (pa_id);


--
-- TOC entry 3263 (class 2606 OID 16613)
-- Name: postulacion postulacion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.postulacion
    ADD CONSTRAINT postulacion_pkey PRIMARY KEY (post_id);


--
-- TOC entry 3265 (class 2606 OID 16615)
-- Name: rechum rechum_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rechum
    ADD CONSTRAINT rechum_pkey PRIMARY KEY (rh_id);


--
-- TOC entry 3267 (class 2606 OID 16617)
-- Name: requisito requisito_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.requisito
    ADD CONSTRAINT requisito_pkey PRIMARY KEY (rq_id);


--
-- TOC entry 3269 (class 2606 OID 16619)
-- Name: sede sede_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sede
    ADD CONSTRAINT sede_pkey PRIMARY KEY (sede_id);


--
-- TOC entry 3271 (class 2606 OID 16621)
-- Name: solicitud solicitud_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud
    ADD CONSTRAINT solicitud_pkey PRIMARY KEY (cand_id, sol_id);


--
-- TOC entry 3273 (class 2606 OID 16623)
-- Name: titulo_exp titulo_exp_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.titulo_exp
    ADD CONSTRAINT titulo_exp_pkey PRIMARY KEY (tx_id);


--
-- TOC entry 3285 (class 2606 OID 16624)
-- Name: solicitud fk_relationship_13; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud
    ADD CONSTRAINT fk_relationship_13 FOREIGN KEY (rh_id) REFERENCES public.rechum(rh_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3276 (class 2606 OID 16629)
-- Name: oferta fk_relationship_15; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT fk_relationship_15 FOREIGN KEY (post_id) REFERENCES public.postulacion(post_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3277 (class 2606 OID 16634)
-- Name: oferta fk_relationship_16; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT fk_relationship_16 FOREIGN KEY (con_id) REFERENCES public.contratacion(con_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3278 (class 2606 OID 16639)
-- Name: oferta fk_relationship_17; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT fk_relationship_17 FOREIGN KEY (ce_id) REFERENCES public.campo_especifico(ce_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3279 (class 2606 OID 16644)
-- Name: oferta fk_relationship_18; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT fk_relationship_18 FOREIGN KEY (ca_id) REFERENCES public.campo_amplio(ca_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3280 (class 2606 OID 16649)
-- Name: oferta fk_relationship_19; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT fk_relationship_19 FOREIGN KEY (sede_id) REFERENCES public.sede(sede_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3286 (class 2606 OID 16654)
-- Name: solicitud fk_relationship_2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud
    ADD CONSTRAINT fk_relationship_2 FOREIGN KEY (cand_id) REFERENCES public.candidato(cand_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3281 (class 2606 OID 16659)
-- Name: oferta fk_relationship_20; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT fk_relationship_20 FOREIGN KEY (dept_id) REFERENCES public.departamento(dept_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3282 (class 2606 OID 16664)
-- Name: oferta fk_relationship_21; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT fk_relationship_21 FOREIGN KEY (pa_id) REFERENCES public.personal_academico(pa_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3283 (class 2606 OID 16669)
-- Name: oferta fk_relationship_22; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.oferta
    ADD CONSTRAINT fk_relationship_22 FOREIGN KEY (act_id) REFERENCES public.actividad(act_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3274 (class 2606 OID 16674)
-- Name: campo_especifico fk_relationship_23; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.campo_especifico
    ADD CONSTRAINT fk_relationship_23 FOREIGN KEY (ca_id) REFERENCES public.campo_amplio(ca_id) NOT VALID;


--
-- TOC entry 3275 (class 2606 OID 16679)
-- Name: item fk_relationship_5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT fk_relationship_5 FOREIGN KEY (pa_id) REFERENCES public.personal_academico(pa_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3284 (class 2606 OID 16684)
-- Name: requisito fk_relationship_6; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.requisito
    ADD CONSTRAINT fk_relationship_6 FOREIGN KEY (it_id) REFERENCES public.item(it_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- TOC entry 3287 (class 2606 OID 16689)
-- Name: titulo_exp fk_relationship_7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.titulo_exp
    ADD CONSTRAINT fk_relationship_7 FOREIGN KEY (rq_id) REFERENCES public.requisito(rq_id) ON UPDATE RESTRICT ON DELETE RESTRICT;


-- Completed on 2023-08-23 10:57:35

--
-- PostgreSQL database dump complete
--

