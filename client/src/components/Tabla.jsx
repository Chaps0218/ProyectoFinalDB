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
  Chip,
  User,
  Pagination,
} from "@nextui-org/react";

import { SearchIcon } from "../assets/SearchIcon";
import {ChevronDownIcon} from "../assets/ChevronDownIcon";
import {capitalize} from "./utils";

const columns = [
  {name: "NOMBRE", uid: "nombre", sortable: true},
  {name: "NÚMERO DE IDENTIFICACIÓN", uid: "noIdentificacion", sortable: true},
  {name: "EDAD", uid: "fechaNacimiento", sortable: true},
  {name: "SEXO", uid: "sexo", sortable: true},
  {name: "TITULO", uid: "titulo", sortable: true},
];

const INITIAL_VISIBLE_COLUMNS = ["nombre", "noIdentificacion", "fechaNacimiento", "sexo", "titulo"];

const statusOptions = [
  {name: "Masculino", uid: "Masculino"},
  {name: "Femenino", uid: "Otro"},
  {name: "Otro", uid: "Otro"},
];

const usersI = [
  {
    id: 1,
    nombre: "Antonio Juan Croquevielle González",
    noIdentificacion: "1738462714",
    tipoIdentificacion: "Cedula",
    fechaNacimiento: "1998-10-10",
    edad: "34",
    avatar: "https://64.media.tumblr.com/65c61b1d056af370a5eae6c16856ba92/ad5662e4ceb28462-2a/s400x600/d0e41220e0c4f8aa8d667e7180f6282fc9a6779b.jpg",
    email: "tony.reichert@example.com",
    sexo: "Masculino",
    titulo: "Ingeniería en Sistemas",
  },
  {
    id: 2,
    nombre: "Antonia Zircha Armenia Perez",
    noIdentificacion: "0923762561",
    tipoIdentificacion: "Pasaporte",
    fechaNacimiento: "1997-10-10",
    edad: "35",
    avatar: "https://www.quever.news/u/fotografias/m/2021/2/21/f768x1-7016_7143_88.jpg",
    email: "zoey.lang@example.com",
    sexo: "Femenino",
    titulo: "Ingeniería en Telecomunicaciones",
  },
  {
    id: 3,
    nombre: "Jose Manuel Perez Mujica",
    noIdentificacion: "0923762561",
    tipoIdentificacion: "Pasaporte",
    fechaNacimiento: "1997-10-10",
    edad: "35",
    avatar: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFRYVGBgYGBgYGBoYGhoYGBgYGBgZHBoYGRkcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGjEhGh00MTExNDExNDQxMTE0NDQ/NDExNDQ0PzQ0NDQ0MT80ND8xMTExPz80MTE0MTQxMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgABB//EAEEQAAIBAwMCAwYCBwUHBQAAAAECEQADIQQSMQVBIlFhBhMycYGRQrEUUmJyocHRFTOSsuEjNFNzgtLidLPC8PH/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EAB4RAQEBAQEBAQEBAQEAAAAAAAABEQIhEjEDQVET/9oADAMBAAIRAxEAPwBpncMpQttAbcRG3HnNFWwrkkcmZxJwMfIU0NOmCTEEmBnJBAx3549KnZtAJCFSDHGMj15IrHWhTQ6RUJIk7pkfyjtxRBZj4WUHIIA4BHl596Itoh1IJB5OJ47QaM5JUjaFOTgR9TAgmKKC6Xg4UeKAoAJGBkjJ9SKg2qdISNwgMZECCwjPMRP2ommgiY/EwgeXmfvNQuaKYk4E54z/ADpAzfuhDOY4HJBB+falm1VySWWUXiDkzxiibGkAx4YGD+EDy86kR8hk/YnAotGDWDMEETGPme00PUWXaCCoEZkZjkgEc/XzqToFgieQSBxI4MV6r4mRmeJiT86UCASVU7iDAH0nkV77s7QQzSJJBM9zUgv1mP4TUxVYQeSOTzOO8efnQG0ssSyfhmYiSe49aMxqDsTVDSvuDBA5I2rPY+f2FHdGxMBkMqQQQR5kEZ+VSs8/Q/xrnUVWClL5PJIxMYxJ9K6zMiY+mK8uZMUcLTxI1vTo3zr19KV7/KhoCKYVyeaKND93iovjtRd1eahhgClDBsjnua9s7/xhR5R5edcsivF3bixYR2EZFMGgp7miunmJoCufKgi7dX8KMJ8yDFMGPdgLgfT50LaZ/lU1JPOKi5pCRLFe1H3leUaaKCBHw5J+tR3hVKyBmRzH8Km654gnt/OvLqEY3ROOASfTNY4pPTXt2T2xOR64nnFH1LmdybgDxHP1FVd7V7TDKwAiSOM+XrRGu7sOozxMj7igGUcFmPAZpkHuyjMfT86nKR4xGcDJJkYPpicUuLPhwIJg+KcEeYpxNMF8Rkk5M8SBEilSeKs/iXiMgSY9a60OdoEkZ4OfrSNq3kwWAHHBj6Vx1JJIRihIEjBBPkJ+/wBaIB0LA8Dng94+Ve7YETI7TB+lWfT+lC4hcMQw7epEVW6jSsjkOCv8/lVSFoa3KIGpa6scZFH0mnd/gUnIEgEgTjPlVzkPGqBFbDT9AtiN25jGZOJ88UZ+h2T+D7E0/ktYq0KldWtzpOlW7c7VGfPJqZ6dbPKKaMLXz0WBzUmSvoB6ba/UWl9X0e2ywqhW7H/SiExq2akqRWgPRWBMkAdozVPrbLIdpGe3rTVhK4fKvAnc89qglsiSamqE0GnFRdO80REqDKQaCQa0WjxFYzjv6UdlPFD4r0XM0tD0WvUfeoNgwa73ZNRdD58cVQduHrXV3u2/WH2rqAFprzGBIIH171DeEbdvx5sGaJ7KeEGamcnjPFBcuDs2sVOSCPD5fF2NYnpprakZJcABm3eKGU8gjtRH1c+EEFRxuEk/tehqqvWVjaDsk8sWbIHAHCrx9ag1sAkhN+zLM3h2gRmBzTPVtafc0YJ3fh9fhOfkacXUDaASCJIxyTOcGqYAOJ2kSTz4Tj1otgoCCo4AAye3b1NSFg4AZtixjAJk47zUX0QIDOiz5z9qQuuRJBgM2Y7ie2fOMURyTtlsEHzgEUA7ptYyGUMVr9Jq0voJCnGVMY+9fPUuEGm11LLlTFbcc+JrYanoFp+JT5cfY1OzctadNgb4efM5yay69bfiSZgVa9O6bJ97fO0yGUeQ9RV/JWr3SdQS4dqlpicqR+dO1W6jrFlBlp9FyarT7VW5+B/4UZU60ldVUnWrZQv4sCSIk1G17QWWEywHqKWUat6gSPOhafVI43KwIr1rCkyaWHolCv6dXEOAaU1W+3DKzFZzMQBTem1CuJUg+fpTw9U+s6ADm2YPkf61Vjo96Y2fxEfetbfvqgljiq+z1VXfYisfM1Nh6yl9WRirCCORUQ88091ZH3lnHxcfIdqRZDFKhJQKj7oVL3dee8FMPSuKGaKlwHFDZYph5JryvdxrygAJe3AmFEiZVpBjvNQdUkFmAxhs4Pk3aPWlNFYLq4BKMFQAADbEy59CIpu3pzulVJXbJAIIOR59jxWVAd3TMuGA275J/ZgnBX17UsmwEBsBpAIbwuxgTLDB7Rx3qT3BggkAA7h5Z7x6Yo+lIMEARMgECHPmB2NEEcFlHQ4zCyCfkA3ajICIWZE8kEkY4LcQaGzk7lELAgHIPPDE4nyoSW2AKhyTnDeHEnIJ79qVOo3kEDxEr8RAGctOM01awWU8nsY8O7kYwMdqT02pYAeBiZ4jtODnmiW0LO5JO6d3jwJiYPlnM0gMmljlpqs631QWiqCNxyfQD/6ad1evCIzt2BiM5jA+9fP9RqWcln5Jk+ldP8k9NzodarwykczHere/1B3yzGvnXRmus4KDA5Y8D+tbFdaqwHMTAntJMfSumcxlejV16Xa5R3SgMlP5R9D2eolVK9iIoDa0kRUGt1BkonEH0ten69uN8bRPkD6Voui9c3EI/c4NY2ysU5YeGBGKjriK569fR7iBhDAEHkVn72oGlumSSjLKgcj0NW+j1QdFYGcZrOe1EG4sfq1lOWloWu6i94hVBye1aXovTvdJn4jk0r7OdPVUDkeI+fYVfVPVELazSrcUqw+XzrD6pWRip7GK+gxWZ9qdKAPeAc4NRVRmW1FBN8V6bMyVDk/KBSYsOSSVIpaKcXVAZxTH6chGJY+Sgk0mmkQjMmnNOgWABAp6Eff/ALFz7Cupn3ldS0yFln8RA4OTjw4kADlic0vqkcs4RZkKwG6ABz4hH2ptJMhYcgkFV2yD8jBP1pVtYqGTA8PDYwOMeeazho6TVgRuADnEAY5AIqWt1nu1CpKmSSBEGf4g1XXjvcMZAxEZO7jAB8u586Pr9GjRtxwrsIJAHzwTTwoZt6sXEdhCPC7d0EMY7ecxH1FRRWdAQkgGGyFM8iJ5EzVbp7OnQ5LukAggblLDmQMjijv1FATCCDMMRgz6E4pYNPPpHZoSdxAjdz2kSvYVDTI9zUbHYcjKgEgyVz/houkvBihhvIOJBEnj5GtDuWzbval48CYMd8wB9TVc82mwHtg6pcNi025bfxt+s55+2BS3T7aOstZQkRnOf41T6i/JLEyXJJJ5JJrQezx/2Y+prs/nzJGfVWVm0qLCgKB2FJ9TtF7bKokkY+dPsK7TpmtMY2idML+5TeCG2iZ5n1oxNEY4qO2tJEVA15tqbV5TwngFT4EmvAKZtaQOjKTE1PRxZ+yfVg4KEMAZIxjBjmnetdLd3DIJlQPtP9ar+maVbEKk8R861mmuAxMzXP15+N+fRdAm1FBwYpuqTq73VZHRdyKw3gEAwZG4T5T9pq4tNIB86xqxKFetBgVYSDRK6kGG1ls23KEDBxHl2pO5cGavvabp7QbinykVlt5iDU2GJ75VUiP61Bbk96CKE6Zmj/Ac3V1KbzXUjF0wRiHUEPAByewxMcfWj6lEcAkejNCEBe4BBx86qm0ZUKC5G5nwsBSViQx5zIzRLWmuJ4GgWzjs5LMfT8NRINT1CKplWWIhSDwP28ZH7QNQ0xAkhVG7JCkkExEiYj50N7RlEdC6ecMH8OT2gRA5FO2Pdpt/2sqzbfEI2yCSWnBA8h51QhVr4LB9sAKc4UdsEjvXmt0qOvF0kEEFSxEjE4/D6RRNW5QkFE3TALYUjvt7EGQQahprriAiMDjDFtySN0u54B4A7UCxZdKSQAAW2eFi3f1AOe9D9v8AUlNIiAxvfI8won+lOaa8ck53E8wSpwNs+nnVF7evvSyk8Fz/AAGa3/lyTABprVdBjYI571m7qBac6JryjhSfC2K6vEdc3GvNeWLnirhmoW08VEYLMV0Vy16a1ibQ2ryuY0bQ6cuwXzoqUtPpWbgUzp7gRZPfFazRaRUUADgCaxfUXO917B2/OsfuXxUiw6bqQzziR2q9t6k7oxWV6fp2nev4eatNP1EK4LVn1G3MyLr2hu+707OW2kFfrLAER3wTTvSWY2l3cgQfXyNZP23utdS0lq2zuxJBUcDa0j7x9qv/AGauNsKMCGQJM8glFkH61jZ40lXddXV1SYOpQMrAiQRmvn2s0u1jHE19GIrJddtKj+hoNn/c1FtOfSiG8ome1QGrFLAj+jfKuo/v/QV1GAhrtKG8MlRLEqxAh2BUd+J7UK2jouCCqGcEncQM+kTTQ0IZW3bGmSfHJnJxiJnj50KzpwV2kD4RukzuUD4TwVg8EVnokeLqbTjbJG9Z+JhBnO1geZrxdAq5G45MSQ4BJwYzuxIqOmsSsIm0KxUE9h3HrzM0d9OVUgMVOMjOxg8gqoI5E5pqkBulx4SUKBYBEk8w3qpAqFvVIzJJEupdQZ3EjEHzHoeKNcLE7d5zIXco3yYBYx2BBj51U6vXJZCgQXUESfFIlp/dkkfanJtKrDW9XSyM5bIA9fM1j9VrXuuWdiT2nsPIUvqdQXYsxkkzntQAe9dvM8VOU9TxSoNTe5QN+af4nqtz0vVh0XOQAD86eWsX0nWFH9DWs0uoDiqjn6i3smQK8c1HTnwiuuGtIxoRer7oFpZ3N2+1Z801pXPacZ+1F9EfRtM6xXz3qt0G88frmrzpnUW2M3OxS1ZR70uWPJJP3rCc51WrQ9JvBFYHuP4CkQwZ4HBP86QbWQIGKD+lgDJqsES9rOoXUubLbsu0qEKnj6j58VtPYq+zh2bJJGTydo2z/CvmWov733kkhZY/yr6f7FWylhAykFhJOIzJ/nWXc8a8tQK6va6sFOrF+2qsblvyCmI55raVjvbHNxP3D+dAZTU2iRtzQHtlTNWUedJatxx+VII/pS+ddSc/P7CupBdFAyT4ySYmAJzkhZ+VBe0yFSpE+8BkmPAEbvnxSRjzrnugtncdw/GPCQ3IQjMSO3lXJdCsLT2mYFh4kchSoyC8ieP4islmXCuDCN4QrPtIDbj+I+vH2qusBnB3XWRAYLjBkZgFhBPymnw5Yt7tVALA+MbXZlaMzgrGAOM1WdZ1RtFQ6rtAYDZuDluNpVsR6gZq56f6H7SdQCWt0rvgKpGQ/r9Oaxlx2YbiZNe9Y1TXHLPHYADgAdgK9s/AK6eOflU5V7uakl2BFTuW5pcpWmpvPUGZZzUNtdbeMU0u0jFPVzn6hQGKtum64oR681Uv5V6HinGXXEfSOl6oOvyqn6n1G7bcwQUOR6elVHs91Mo4Bja0bp8vSrf2hAIUqZFPXP1zC6e0n6yfanNN7TQ0IhJbw/esqwzWk9ntCB4yBPaarU/LWpdNlGBEF0iPnBqhu3KsOtdQDkbewA+wqnOam05yICTVb1PVFfCPrRdZqWQArB8xVbfHvGkcnt5UqucnuiKLjoh4nc/yGY+9fZ+m6hSg2cDFfO/ZLpaAGRmASfL/AErd9IiAFj5jg1n2qL5XxRaAy0YGsFPaw3tdqAbwA/CsH5k1trhgH5V856rc3XWJ86AQaTnNLaq2QJ5PkKctXFUuJ5ABk4Hea9a6ARtIJIlYOSI7VNLFZ+ifsPXVZbbv/C/L+te0sGKz9JMsphiCNsT4XEArPHnin0ZiQHJDDIjIx+tHEULT3kUhVCDdJgysGfhy/j71F9e6E7lhcAImSSTEcc9iTili4b1WqCLvO4QDJgceh/CZrC9Q6ubzlzI4ABMxH0qx9our7kKEbX+GBGM+Y7R2rIq0Vtxz/q+TWpHehK5iJxTiAMtK3LcGtW15v7DNoeHzpO8JOK8DnijW286LSuWFmUipJNFusDUEo1nuVO4nel2WnQkig3LUUTo7ZQ7aHtWi0upVkCXd0jhgJx61Sae4Ac0+H3CRVSp/851NOrobUyHn/pIqztXQqwDgVnwxFO2dUoHjMU/pj1xh8PILGlb+uCjNLvqy8xgdvlSx029hM0RU58DfUFzNWWgs96XewqvtUYEeue9WmmSBRai2ND0tCV2jvjFavomldMNMVmOivtIPqK32lhkkc1l1Snp6fDXtt5ry1xBoioBWay/UrwS27HsK+dXrqtuLxsKmPOYrSe2OqJVUHwky3rFY7VOAp8hg89/zqaDb6VGZWRwARMN8OAole5HMk0K5okY/E08LKmPD2Dc+dKf2kEW2VQSCdykFZQdgRxkjHqKaXVO5O0KVCkwEIMnAzyp5FTdOQv8Aozea11Q/Rr3mv8P6V1L1WQ3e1U7WQhxKncyglAZAKE/A08nPNVfXLy2LRdWO94UdxPxbp7t60ze1ADkMFQBggAYbScE7QoMrmazftTqlfYiABUmQCfi44PfmarnnaIz112cy5zXhSos1N6a3u5rpzJjTHaa5GKcdRVfeIBxXr6oxRa6P59yTKHqhDYobXKhdck5oMVFrm7s24aQzRVWg2RTtpKWoStDFGS2DzXqpRkWjU3UTokbtRk0wAgVJDU0eZqpT+rC1xIoQQGm3SaGlqKqVN61GPIUeysZr1BRkTB9acTegQM7vOrPStIpcW6b0iU031f8ATEkCtJptSyQAcVm+m3YIB86a1OpJeAcVHUEbnRX91N3HCgk1R9Efwiu9p9f7u2Bnc5gRWdi4zXtBrt9yNpAEZ7HNV73AZBSSNxXGRIggE8cVB7RYgE4LKC10Qvxfh7zAxSNqzvd12NJDlCxZhtViBABj/wDai+LyJWrAU4Z2Uk8gMZB/Dt9QpyO1HHT3TftN1wZdnd4YKATuVRkqTAzXrtcdGJZLajbG0Ku0E8HHxHPBNCt3GtgF3d4BjO7aJJkBZnnNRbtHMKe81v8Awl+4/wC+uqw/TF/UT7NXUHhH+z0IWWA2uxJMwVOJGyf1RA5rLdXWXdW53Dnngc1pmvrbcgo+Dja4ULHDHsQaxusugXnzIDH79604/VfzuX0rdt7TRf0qBAFQ1d4MRFQ90Yrdp8uDSc1zv2qSWZod23tNFGVBzQ6nXkVDHoxZqxsmqxadsGkk+DU1oaGiqKA9BolgQKA3xRR1p6VEIoDtBox4pS4DE05U0ykUwtV2nuyYqxSq1ODCmbDQaTD0a0+aehdJfERFTsks1V9tqstEuZoobnoyQkVTe3NwqqFSsjcQCYJMQIq96X8FZL27VHgbpZAIX8Jk5z2OBWXX4qMvo0cu+9yDIYgxuBjaM8QCe9OJbLBVJLRDKQdsKW3TIz8Q9cGq+wGENOX2IZI+JTwwjIwufSndWAklSVKsAMMxZZ7JjzOeMVla0wX9DVUcAM2+XMyTKifkBmZGeahqLTIiNDtIPAadyxxj4cxNLX9QTKKxUOTJbcH2kjwpjBzETTmi6hsXe6hNiw28x4PhEDkmBPFI4hvH6o/wN/SvK7+3rP8Axb32f/trqR6rvafXoyBUVQ5aZO2QMg+e6Y78VinsEczVjqmcOxcPMkAsCMA8CaGt4HBrbnnHRx/KXlWkZojXvIUW8goSWZ5rVnZ1Lglu9AqL3Jody3toO+lRerPKMErwirnR9OGwM3JEj5Uve04moZUmi0zaxXC3UttAMpcFHV6rwuaMk0amnkImjCkEeKKlyaNA7vQQ81BnrkNGpFS2JmmPeRSm6icinowzbaaMhg0nabbijM9OUrFnYbIq70M/Ss5pnmK0vTCTAjmKdS2/TvgJ9P5VgeqdXT3p2EkDdM53T2Pyq39puvPpk90iSzoxLEwFwR2718u0t1iTkA8yciJycc89qw69/F8xpHR3W46qyhSsiR8A/Eo7Nk5o98Kkb2QF0kMwO8JGBOVMQSQDPNedP600KjLzhWGQCMQVA+EjOSaNr9ULiklLb7AC6ODwMSh42esYmpzGlVumZSwAQI4fs25yASNyYxnM+tS1TbFVwzMQ7wHhvECP4mfWabs6ZDt934ZBiIMbRMAjHc+VdctL7sIpkMWO4MEYEz4RuHPE+hpWgb9J1P6tz/Da/pXUt/Y979v/ABf+Ve0tCHX2S7bQoy+H8Myyg4zPyrF6lNuY5/nX0A6VHDIyIxDBBCMNoUyQT2yBJz86zvVOjO44B2r+GYPfmOa056/6057sZdno9t1qdzp7LmD9jQzpz5RW06lXOv8AXXWUjmj9O6YzlWUCARz3zSO2TA7mK2/SrQt21Y/CikntLHihn319IavT7REVTX0q8v6reIMbhyAZH3qsupPFJnKQCV7sqTIQa9Rs0jRCVKKJXjGhILJRFMVC48dpoTX/ACEUgZJFQZ6Ctw1y3KZDI01NHM0vbtkZo2nOSDQB1zXrKaNprdPJp5pgHRoa2HTrgtozv8KqTPrGOPWqjRaUcnA86c1nUU/RntxKltjTgHAaJ9aXVyJwlr+oG6rN8ahgJE7UgglwDzmKFesIFDvO0xlYUF5JYqrAlSZ+HivVVLazbbwEEldsoYEmY5HbPNGLkoynZEPswNmFkE+QzAzPFZatS6jV2kusqncpEADHjgFpPIEzirRVP94kIxBDF5aCc4XgCBSI09kKj3HdGBXYdoc+HPiY4ZQcGc4Oaftab3f49ymHJHBhuAScYJpWnpZep7VJ8TSJbYPEAeXI/V5gflRLVxQSXYQvhJmQ7OBslcwQOT2712rRS0212MHUKezK4+HOAfiE8dqT6hpkUEePeqjxLsYAHuOCT9T3FLBou1f1V/xD+tdWf23P13+y/wBK6ng1urDpsaV3bR+EmQwI8JIE5H5UTThVL8gZBJYsI52ie8k57VAOpdVFwQQzFWWfh7KOduRxQHdd5RJxw8AJngRjHrzUSWel1fUNWi7kZkco0btoEAA+JvMeeeaCnTrd1N0lFbeN7gbvCszA7U9ZsoXIfww2wuCeT5SMfWq3U3bVjcFdngmGOWPoZgfYd6050vqyK4ezKrtKOWPLEiPlFWOv1FvT2gC6uxIhJ8hk1Sa7r4ZCqSCYknB+QiqG/dnvJrXnm1P0a1HVGd92B2qx6a+/dPY1mt9aP2ZUFHY87o+w/wBauc4J0Yv2RSbWYq2vRQHUQaV5OdKlL+Ypq2m4gATNV3DmTFP6fVFWXYwmRFTihtbpwhCk5ImKXfTRVlr97lC6AFRAbuw9aEyyKWBWLbihPbg4qxa3XCzNCglEAUNfikUw9qRFF02mwKZWC6YGrfTDzpTT2gPpzVmF/wBm2xoeMcH+FK0sF1d8JbbxKCBmRuhYyYkZ+tUz3ECN724pV8oFARieAZMjPHNHvaF9oJdWNzZu8APiAG4mOAPWuOmglPE+ML4QkTEnAkd4E1n11R8hXtG7BH2ssqsATtBHCnscCiuWa2SW3hWlgsbyQCCregkGPSlkS5ZnbudkLYP4kEbdqA5TPNK3CzlntniAwAlvF2K8xmlT01rryeDEHaoIOVHhj5Azmu6mG92FIJcGVIHxKAT4Y57Urbeyoz422kHcSqB++7MwPKrnSlfBFsFWJMkyhnyJGAKPklYXuuqliCm3CEMo8QAlXHwn5ir86pWtm2CSAGQsV3MAImRHi/1qOm0Oxygk24LQ7CUJzEeUjn1FIi8bZFtEEkSJeZEyfFGCeJ7RSvh5QP0Q/wDDt/Z/6V1F/tS753P8H/nXUvoYtOkfBp/3Ln/wpbrXx2/3l/zrXV1VSp3V86j/AJtn/IKwvtJ/vFz/AKP8q11dV8IqlPeotXV1bxCFaT2Z/un/AHz+Qrq6mSwu80Fu9dXUq0jP3vjPzNNfjtfvV1dUVTWdY4T5VWtXV1KfhgVKurqFPO9MWq6upFTFz4H/AHDSnRPjH7r/AJGurqihd3f7xP8Aln/PXq/7yn/pX/IV5XVNOktL/d2/lc/9wU2P79v+j/KK6uoqFB13+9PzT8hVhq/92T925/maurqZw7oPgT/lL+Yp6z8Y+TfkK6uqelKuurq6oN//2Q==",
    email: "oscar.laoveja@example.com",
    sexo: "Otro",
    titulo: "Medicina Ortopedica",
  },
];

const statusColorMap = {
  Masculino: "success",
  Femenino: "danger",
  Otro: "warning",
};

export default function App() {

  //!Variables para rellenar a todos los usuarios
  const [users] = React.useState(usersI);


  const renderCell = React.useCallback((user, columnKey) => {

    const cellValue = user[columnKey];

    switch (columnKey) {
      case "nombre":
        return (

              <User
                avatarProps={{ radius: "lg", src: user.avatar }}
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
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter] = React.useState("all");
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
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.nombre.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }

    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.sexo),
      );
    }

    return filteredUsers;
  }, [filterValue, statusFilter, hasSearchFilter, users]);

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
            placeholder="Buscar por nombre..."
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

          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {users.length} users</span>
          <label className="flex items-center text-default-400 text-small">
            Usuarios por pagina:
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
    users.length,
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
            Previous
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Next
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
    <TableBody emptyContent={"No users found"} items={sortedItems}>
      {(item) => (
        <TableRow key={item.id}>
          {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
        </TableRow>
      )}
    </TableBody>
    </Table>
    
    </div>

  );
}
